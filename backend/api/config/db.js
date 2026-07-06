const mongoose = require('mongoose');

// Connect to Database FIRST
const connectDB = async (app) => {
    if (!app) {
        throw new Error('connectDB requires an Express app instance to register WhatsApp models');
    }

    try {
        if (mongoose.connection.readyState === 1) {
            console.log('MongoDB already connected');
            app.locals.mongoReady = true;
            return;
        }
        console.log('Attempting MongoDB connection...');
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
        });
        app.locals.mongoReady = true;
        console.log('✓ MongoDB Connected Successfully');

        // Connect to WhatsApp MongoDB
        if (process.env.WHATSAPP_MONGODB_URI) {
            console.log('Attempting WhatsApp MongoDB connection...');
            const whatsappDb = mongoose.createConnection(process.env.WHATSAPP_MONGODB_URI);

            whatsappDb.on('connected', () => {
                console.log('✓ WhatsApp MongoDB Connected Successfully');
                // Initialize WhatsApp models on this connection
                const WhatsAppLeadSchema = require('../../api/models/WhatsAppLead');
                const ChatHistorySchema = require('../../api/models/ChatHistory');

                const WhatsAppLead = whatsappDb.model('WhatsAppLead', WhatsAppLeadSchema, 'lead_from_whatsapp');
                const ChatHistory = whatsappDb.model('ChatHistory', ChatHistorySchema, 'chat_history');

                app.set('WhatsAppLead', WhatsAppLead);
                app.set('ChatHistory', ChatHistory);
            });

            whatsappDb.on('error', (err) => {
                console.error('✗ WhatsApp MongoDB Connection Error:', err.message);
            });
        }
    } catch (err) {
        app.locals.mongoReady = false;
        console.error('✗ MongoDB Connection Error:', err.message);
        throw err; // Throw to prevent server from starting with bad DB connection
    }
};

module.exports = connectDB;
