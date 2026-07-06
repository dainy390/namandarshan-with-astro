const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Import models
const UnsubscribedUser = require('../models/UnsubscribedUser');
const EmailLog = require('../models/EmailLog');

// Common CRM middleware (copied from whatsapp-crm.js pattern - adjust if shared middleware exists)
const requireAdminOrAbove = (req, res, next) => {
  const userRole = req.user?.role;
  if (!userRole || (userRole !== 'admin' && userRole !== 'manager')) {
    return res.status(403).json({ success: false, message: 'Admin or Manager access required' });
  }
  next();
};

// POST /api/crm/email/unsubscribe - Add user to unsubscribe list
router.post('/unsubscribe', requireAdminOrAbove, async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Valid email required' });
    }

    const unsubUser = new UnsubscribedUser({ email: email.toLowerCase().trim() });
    await unsubUser.save();

    res.json({ 
      success: true, 
      message: `User ${email} unsubscribed successfully`,
      data: unsubUser 
    });
  } catch (error) {
    if (error.code === 11000) { // Duplicate key
      return res.status(409).json({ success: false, message: 'Email already unsubscribed' });
    }
    console.error('Unsubscribe error:', error);
    res.status(500).json({ success: false, message: 'Server error unsubscribing user' });
  }
});

// GET /api/crm/email/unsubscribed-users - Paginated list
router.get('/unsubscribed-users', requireAdminOrAbove, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 50;
    const offset = page * limit;

    const [users, total] = await Promise.all([
      UnsubscribedUser.find({})
        .sort({ unsubscribedAt: -1 })
        .limit(limit)
        .skip(offset)
        .select('email unsubscribedAt createdAt'),
      UnsubscribedUser.countDocuments()
    ]);

    res.json({
      success: true,
      data: users,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    console.error('Fetch unsubscribed users error:', error);
    res.status(500).json({ success: false, message: 'Server error fetching unsubscribed users' });
  }
});

// GET /api/crm/email/weekly-stats - Emails sent per user last 7 days
router.get('/weekly-stats', requireAdminOrAbove, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const stats = await EmailLog.aggregate([
      {
        $match: {
          sentAt: { $gte: sevenDaysAgo }
        }
      },
      {
        $group: {
          _id: '$email',
          count: { $sum: 1 },
          latestSent: { $max: '$sentAt' }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: limit
      },
      {
        $project: {
          email: '$_id',
          count: 1,
          latestSent: 1,
          _id: 0
        }
      }
    ]);

    res.json({
      success: true,
      data: stats,
      period: 'Last 7 days',
      count: stats.length
    });
  } catch (error) {
    console.error('Weekly stats aggregation error:', error);
    res.status(500).json({ success: false, message: 'Server error fetching weekly stats' });
  }
});

// POST /api/crm/email/blast/status - Get recipient counts by filters
router.post('/blast/status', requireAdminOrAbove, async (req, res) => {

  try {
    const { recipientType, serviceType, stage } = req.body;

    // Assume Lead model exists in CRM (referenced in other routes)
    const Lead = mongoose.model('Lead', new mongoose.Schema({}, { strict: false }), 'leads');

    let matchQuery = {};

    if (recipientType === 'serviceType' && serviceType !== 'all') {
      matchQuery['serviceType'] = serviceType;
    }
    if (recipientType === 'stage' && stage !== 'all') {
      matchQuery['stage'] = stage;
    }

    const total = await Lead.countDocuments(matchQuery);
    const withEmail = await Lead.countDocuments({ ...matchQuery, 'contactDetails.email': { $exists: true, $ne: null, $regex: '@' } });

    res.json({
      success: true,
      total,
      withEmail
    });
  } catch (error) {
    console.error('Blast status error:', error);
    res.status(500).json({ success: false, message: 'Error fetching counts' });
  }
});

// POST /api/crm/email/blast - Send test or full campaign
router.post('/blast', requireAdminOrAbove, async (req, res) => {

  try {
    const { email: testEmail, subject, message, testOnly, recipientType, serviceType, stage } = req.body;
    const campaignId = `blast_${Date.now()}`;

    const UnsubscribedUserModel = require('../models/UnsubscribedUser');
    const EmailLogModel = require('../models/EmailLog');
    const Lead = mongoose.model('Lead', new mongoose.Schema({}, { strict: false }), 'leads');

    let sentCount = 0;
    let skippedCount = 0;

    if (testOnly && testEmail) {
      // Test send single email
      const unsub = await UnsubscribedUserModel.findOne({ email: testEmail.toLowerCase().trim() });
      if (unsub) {
        return res.json({ success: false, message: 'Email is unsubscribed, cannot send test' });
      }

      // Real SES send
      const { sendEmail } = require('../services/emailService');
      const sendResult = await sendEmail(testEmail.toLowerCase().trim(), subject, message || 'Test message from Naman Darshan CRM');
      
      // Log as sent
      const log = new EmailLogModel({
        email: testEmail.toLowerCase().trim(),
        campaignId,
        subject,
        status: sendResult.success ? 'sent' : 'failed'
      });
      await log.save();
      sentCount = 1;

      res.json({
        success: true,
        message: 'Test email sent successfully',
        stats: { sent: 1, skipped: 0 }
      });
    } else {
      // Full campaign
      let matchQuery = {};
      if (recipientType === 'serviceType' && serviceType !== 'all') matchQuery['serviceType'] = serviceType;
      if (recipientType === 'stage' && stage !== 'all') matchQuery['stage'] = stage;
      matchQuery['contactDetails.email'] = { $exists: true, $ne: null, $regex: '@' };

      const eligibleLeads = await Lead.find(matchQuery, 'contactDetails.email').limit(100); // Batch limit for safety

      for (const lead of eligibleLeads) {
        const userEmail = lead.contactDetails.email.toLowerCase().trim();
        const unsub = await UnsubscribedUserModel.findOne({ email: userEmail });

        if (unsub) {
          skippedCount++;
          continue;
        }

// Real SES send
        const { sendEmail } = require('../services/emailService');
        try {
          const sendResult = await sendEmail(userEmail, subject, message || 'Campaign message from Naman Darshan CRM');
          
          // Log as sent
          const log = new EmailLogModel({
            email: userEmail,
            campaignId,
            subject,
            status: sendResult.success ? 'sent' : 'failed'
          });
          await log.save();
          sentCount++;
        } catch (sendError) {
          console.error('Failed to send to', userEmail, sendError);
          // Still log as failed
          const log = new EmailLogModel({
            email: userEmail,
            campaignId,
            subject,
            status: 'failed'
          });
          await log.save();
        }
      }

      res.json({
        success: true,
        message: `Campaign completed`,
        stats: { sent: sentCount, skipped: skippedCount, totalProcessed: sentCount + skippedCount }
      });
    }
  } catch (error) {
    console.error('Blast campaign error:', error);
    res.status(500).json({ success: false, message: 'Error processing campaign' });
  }
});

module.exports = router;
