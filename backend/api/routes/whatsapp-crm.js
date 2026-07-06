const express = require('express');
const router = express.Router();
const { requireAuthenticated } = require('../middleware/auth');
const mongoose = require('mongoose');
const Lead = require('../models/Lead'); // Main Lead model for conversion

// Helper to get a regex for matching the last 10 digits of a phone number
const getPhoneMatchRegex = (phone) => {
    if (!phone) return null;
    const cleaned = phone.toString().replace(/[^0-9]/g, "");
    if (cleaned.length >= 10) {
        return new RegExp(`.*${cleaned.slice(-10)}.*`);
    }
    return new RegExp(`.*${cleaned}.*`);
};

// GET /api/crm/whatsapp/leads
router.get('/leads', requireAuthenticated, async (req, res) => {
    try {
        const WhatsAppLead = req.app.get('WhatsAppLead');
        if (!WhatsAppLead) {
            return res.status(500).json({ success: false, message: 'WhatsApp database not connected' });
        }

        const { status, search, page = 1, limit = 50 } = req.query;
        const query = {};

        if (status && status !== 'all') {
            query.status = status;
        }

        if (search) {
            query.userId = { $regex: search, $options: 'i' };
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);
        
        const leads = await WhatsAppLead.find(query)
            .sort({ timestamp: -1 })
            .limit(parseInt(limit))
            .skip(skip);

        const total = await WhatsAppLead.countDocuments(query);

        res.json({
            success: true,
            data: leads,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('Error fetching WhatsApp leads:', error);
        res.status(500).json({ success: false, message: 'Error fetching WhatsApp leads' });
    }
});

// GET /api/crm/whatsapp/chats/:userId
router.get('/chats/:userId', requireAuthenticated, async (req, res) => {
    try {
        const ChatHistory = req.app.get('ChatHistory');
        const WhatsAppLead = req.app.get('WhatsAppLead');
        if (!ChatHistory) {
            return res.status(500).json({ success: false, message: 'WhatsApp database not connected' });
        }

        const { userId } = req.params;
        const regex = getPhoneMatchRegex(userId);
        
        // Find chats
        const query = regex ? { userId: { $regex: regex } } : { userId };
        const chats = await ChatHistory.find(query).sort({ timestamp: 1 });

        // Clear unread status when chat is viewed
        if (WhatsAppLead && regex) {
            // Mark ALL leads for this user as viewed/read for total synchronization
            await WhatsAppLead.updateMany(
                { userId: { $regex: regex } },
                { $set: { unreadCount: 0, status: 'viewed' } }
            );
        }

        res.json({
            success: true,
            data: chats
        });
    } catch (error) {
        console.error('Error fetching chat history:', error);
        res.status(500).json({ success: false, message: 'Error fetching chat history' });
    }
});

// POST /api/crm/whatsapp/convert/:id
router.post('/convert/:id', requireAuthenticated, async (req, res) => {
    try {
        const WhatsAppLead = req.app.get('WhatsAppLead');
        if (!WhatsAppLead) {
            return res.status(500).json({ success: false, message: 'WhatsApp database not connected' });
        }

        const leadId = req.params.id;
        const wsLead = await WhatsAppLead.findById(leadId);

        if (!wsLead) {
            return res.status(404).json({ success: false, message: 'WhatsApp lead not found' });
        }

        // 1. Update WhatsApp lead status
        wsLead.status = 'converted';
        await wsLead.save();

        // 2. Create a new lead in the main system
        const newLeadData = {
            leadInformation: {
                name: `WhatsApp User (${wsLead.userId})`,
                source: 'whatsapp'
            },
            contactDetails: {
                whatsapp: wsLead.userId,
                mobile: wsLead.userId.replace('whatsapp:', '') // Required field, stripping prefix if any
            },
            currentStage: 'new lead',
            status: 'active',
            notes: [{
                text: `Converted from WhatsApp capturing lead. Last messages: ${wsLead.messages.slice(-3).join(' | ')}`,
                addedBy: req.user?.userId || 'system',
                addedByName: req.user?.name || 'System'
            }]
        };

        const newLead = new Lead(newLeadData);
        await newLead.save();

        // 3. Emit real-time notification
        const io = req.app.get("io");
        if (io) {
            io.emit("new_lead", {
                type: "WhatsApp Converted",
                recordType: "lead",
                id: newLead.leadId,
                name: newLead.leadInformation.name,
                service: "WhatsApp Conversion",
                timestamp: new Date()
            });
        }

        res.json({
            success: true,
            message: 'Lead converted successfully',
            data: newLead
        });
    } catch (error) {
        console.error('Error converting lead:', error);
        res.status(500).json({ success: false, message: 'Error converting lead' });
    }
});

// POST /api/crm/whatsapp/send-message
router.post('/send-message', requireAuthenticated, async (req, res) => {
    try {
        const { userId, message } = req.body;
        if (!userId || !message) {
            return res.status(400).json({ success: false, message: 'userId and message are required' });
        }

        const botUrl = process.env.WHATSAPP_BOT_URL;
        if (!botUrl) {
            return res.status(500).json({ success: false, message: 'WhatsApp bot URL not configured' });
        }

        // 1. Forward to WhatsApp bot
        const botResponse = await fetch(`${botUrl}/send-message`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, message })
        });

        const botData = await botResponse.json();

        if (!botData.success) {
            return res.status(500).json({ 
                success: false, 
                message: botData.message || 'Failed to send message via WhatsApp bot' 
            });
        }

        // 2. Log interaction in ChatHistory
        const ChatHistory = req.app.get('ChatHistory');
        const WhatsAppLead = req.app.get('WhatsAppLead');
        
        let savedInteraction;
        if (ChatHistory) {
            savedInteraction = new ChatHistory({
                userId,
                user_message: '[Manual Staff Message]',
                bot_response: message,
                intent: 'staff_reply',
                timestamp: new Date()
            });
            await savedInteraction.save();
        }

        // 3. Update last_agent_chat timestamp in WhatsAppLead to pause AI
        // Also clear unread status as the agent has replied
        if (WhatsAppLead) {
            const regex = getPhoneMatchRegex(userId);
            await WhatsAppLead.updateMany(
                { userId: { $regex: regex } },
                { $set: { last_agent_chat: new Date(), unreadCount: 0 } },
                { upsert: true }
            );
        }

        // 4. Emit real-time notification
        const io = req.app.get("io");
        if (io && savedInteraction) {
            io.emit("whatsapp_message", {
                userId,
                message: savedInteraction,
                source: 'crm'
            });
        }

        res.json({
            success: true,
            message: 'Message sent and logged successfully',
            data: botData
        });
    } catch (error) {
        console.error('Error in send-message route:', error);
        res.status(500).json({ success: false, message: 'Internal server error while sending message' });
    }
});

// POST /api/crm/whatsapp/notify-message (Internal from Bot)
router.post('/notify-message', async (req, res) => {
    try {
        const { userId, messageId, type } = req.body;
        // Since we already saved the message in the bot, we just want to broadcast it to the CRM
        const ChatHistory = req.app.get('ChatHistory');
        if (!ChatHistory) return res.status(500).json({ success: false });

        // Retrieve the recently saved message
        const chat = await ChatHistory.findById(messageId);
        if (!chat) return res.status(404).json({ success: false });

        const io = req.app.get("io");
        if (io) {
            io.emit("whatsapp_message", {
                userId,
                message: chat,
                source: type === 'user' ? 'whatsapp' : 'bot'
            });
        }

        res.json({ success: true });
    } catch (error) {
        console.error('Error in notify-message:', error);
        res.status(500).json({ success: false });
    }
});

// PATCH /api/crm/whatsapp/mode/:userId
router.patch('/mode/:userId', requireAuthenticated, async (req, res) => {
    try {
        const WhatsAppLead = req.app.get('WhatsAppLead');
        if (!WhatsAppLead) {
            return res.status(500).json({ success: false, message: 'WhatsApp database not connected' });
        }

        const { userId } = req.params;
        const { mode } = req.body; // 'ai' or 'agent'

        if (!['ai', 'agent'].includes(mode)) {
            return res.status(400).json({ success: false, message: 'Invalid chat mode' });
        }

        const update = { chat_mode: mode };
        if (mode === 'ai') {
            // "Stop the timer" by resetting last_agent_chat when giving control back to AI
            update.last_agent_chat = null; 
        }

        const lead = await WhatsAppLead.findOneAndUpdate(
            { userId },
            { $set: update },
            { new: true, upsert: true }
        );

        res.json({
            success: true,
            message: `Chat mode switched to ${mode} successfully`,
            data: lead
        });
    } catch (error) {
        console.error('Error switching chat mode:', error);
        res.status(500).json({ success: false, message: 'Error switching chat mode' });
    }
});

// GET /api/crm/whatsapp/users - Aggregate unique users from chat history
router.get('/users', requireAuthenticated, async (req, res) => {
    try {
        const ChatHistory = req.app.get('ChatHistory');
        const WhatsAppLead = req.app.get('WhatsAppLead');
        if (!ChatHistory) {
            return res.status(500).json({ success: false, message: 'WhatsApp database not connected' });
        }

        const { search } = req.query;
        const matchStage = {};
        if (search) {
            const cleanedSearch = search.replace(/[^0-9]/g, "");
            matchStage.userId = { $regex: cleanedSearch, $options: 'i' };
        }

        const users = await ChatHistory.aggregate([
            { $match: matchStage },
            { $sort: { timestamp: -1 } },
            {
                $group: {
                    _id: {
                        $cond: [
                            { $gte: [{ $strLenCP: "$userId" }, 10] },
                            { $substrCP: ["$userId", { $subtract: [{ $strLenCP: "$userId" }, 10] }, 10] },
                            "$userId"
                        ]
                    },
                    originalUserId: { $first: "$userId" },
                    lastMessage: { $first: "$bot_response" },
                    lastUserMessage: { $first: "$user_message" },
                    lastTimestamp: { $first: "$timestamp" },
                    lastIntent: { $first: "$intent" },
                    messageCount: { $sum: 1 }
                }
            },
            { $sort: { lastTimestamp: -1 } }
        ]);

        const enriched = await Promise.all(users.map(async (user) => {
            const normalizedId = user._id; // This is the 10-digit ID thanks to grouping
            const regex = getPhoneMatchRegex(normalizedId);

            let leadData = null;
            if (WhatsAppLead && regex) {
                // Find most recent lead data among variants
                leadData = await WhatsAppLead.findOne({ userId: { $regex: regex } })
                    .sort({ timestamp: -1 })
                    .select('chat_mode last_agent_chat status unreadCount')
                    .lean();
                
                if (leadData) console.log(`Unread count for ${normalizedId}:`, leadData.unreadCount);
            }

            const isStaffMsg = user.lastIntent === 'staff_reply';
            let displayMessage = isStaffMsg ? user.lastMessage : user.lastUserMessage;
            if (displayMessage === '[Manual Staff Message]') displayMessage = user.lastMessage;

            return {
                userId: normalizedId, // Use 10-digit ID for consistent sidebar grouping
                lastMessage: displayMessage || 'No messages',
                lastTimestamp: user.lastTimestamp,
                messageCount: user.messageCount,
                chat_mode: leadData?.chat_mode || 'ai',
                last_agent_chat: leadData?.last_agent_chat || null,
                status: leadData?.status || 'new',
                isStaffMessage: isStaffMsg,
                intent: user.lastIntent,
                unreadCount: leadData?.unreadCount || 0
            };

        }));

        // Sort: Unread first, then by timestamp descending
        enriched.sort((a, b) => {
            if (a.unreadCount > 0 && b.unreadCount === 0) return -1;
            if (a.unreadCount === 0 && b.unreadCount > 0) return 1;
            return new Date(b.lastTimestamp) - new Date(a.lastTimestamp);
        });

        res.json({ success: true, data: enriched });
    } catch (error) {
        console.error('Error fetching WhatsApp users:', error);
        res.status(500).json({ success: false, message: 'Error fetching WhatsApp users' });
    }
});

module.exports = router;
