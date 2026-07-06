const mongoose = require('mongoose');
require('dotenv').config();

const uri = "mongodb+srv://keshukumar:keshukumar@cluster0.zllz6.mongodb.net/WhatsappNamandarshan?retryWrites=true&w=majority&appName=Cluster0";

async function check() {
    try {
        console.log("Connecting to WhatsApp DB...");
        const conn = await mongoose.createConnection(uri).asPromise();
        console.log("Connected.");
        
        const leadSchema = new mongoose.Schema({}, { strict: false });
        const Lead = conn.model('WhatsAppLead', leadSchema, 'lead_from_whatsapp');
        const History = conn.model('ChatHistory', leadSchema, 'chat_history');
        
        const sampleLead = await Lead.findOne({ unreadCount: { $gt: 0 } });
        console.log("Sample Lead with unreadCount > 0:", sampleLead);
        
        const count = await Lead.countDocuments({ unreadCount: { $gt: 0 } });
        console.log("Total leads with unreadCount > 0:", count);

        const lastHistory = await History.findOne().sort({ timestamp: -1 });
        console.log("Last history entry:", lastHistory);
        
        await conn.close();
    } catch (err) {
        console.error("Error:", err);
    }
}

check();
