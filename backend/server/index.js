const express = require('express');
const cors = require('cors');
const path = require('path');
const envPath = path.resolve(__dirname, '../.env');
const dotenvResult = require('dotenv').config({ path: envPath });
if (dotenvResult.error) {
    console.warn(`⚠️ dotenv failed to load from ${envPath}:`, dotenvResult.error.message);
} else {
    console.log(`✓ dotenv loaded from ${envPath}`);
}

const http = require('http');
const { Server } = require("socket.io");
const Booking = require("../api/models/Booking");
const Lead = require("../api/models/Lead");
const connectDB = require("../api/config/db.js");

let whatsappDb;
let WhatsAppLead;
let ChatHistory;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    }
});

app.set("io", io);

io.on("connection", (socket) => {
    console.log(`[Socket.io] Client connected: ${socket.id}`);

    socket.on("chat:join", ({ roomId }) => {
        if (!roomId) return;
        socket.join(roomId);
    });

    socket.on("chat:leave", ({ roomId }) => {
        if (!roomId) return;
        socket.leave(roomId);
    });

    socket.on("chat:message", ({ roomId, text, sender }) => {
        if (!roomId || !String(text || "").trim()) return;
        socket.to(roomId).emit("chat:message", {
            id: `${Date.now()}-${socket.id}`,
            sender: sender === "astro" ? "astro" : "user",
            text: String(text).trim(),
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        });
    });

    socket.on("chat:feedback", (payload) => {
        if (payload?.roomId) {
            socket.to(payload.roomId).emit("chat:feedback", payload);
        }
    });

    socket.on("pandit:subscribe", ({ panditId }) => {
        const id = String(panditId || "").trim();
        if (!id) return;
        socket.join(`pandit:${id}`);
    });

    socket.on("pandit:unsubscribe", ({ panditId }) => {
        const id = String(panditId || "").trim();
        if (!id) return;
        socket.leave(`pandit:${id}`);
    });

    socket.on("call:join", ({ roomId, bookingId, role, name }) => {
        if (!roomId) return;
        socket.join(roomId);
        socket.to(roomId).emit("call:peer-joined", {
            from: socket.id,
            roomId,
            bookingId,
            role,
            name,
        });
    });

    socket.on("call:leave", ({ roomId, role, name }) => {
        if (!roomId) return;
        socket.to(roomId).emit("call:peer-left", {
            from: socket.id,
            roomId,
            role,
            name,
        });
        socket.leave(roomId);
    });

    socket.on("call:offer", ({ roomId, description }) => {
        if (!roomId || !description) return;
        socket.to(roomId).emit("call:offer", {
            from: socket.id,
            description,
        });
    });

    socket.on("call:answer", ({ roomId, description }) => {
        if (!roomId || !description) return;
        socket.to(roomId).emit("call:answer", {
            from: socket.id,
            description,
        });
    });

    socket.on("call:ice-candidate", ({ roomId, candidate }) => {
        if (!roomId || !candidate) return;
        socket.to(roomId).emit("call:ice-candidate", {
            from: socket.id,
            candidate,
        });
    });

    socket.on("call:end", ({ roomId }) => {
        if (!roomId) return;
        socket.to(roomId).emit("call:end", {
            from: socket.id,
            roomId,
        });
    });

    socket.on("astrologer:lock", (payload) => {
        socket.broadcast.emit("astrologer:lock", payload);
    });

    socket.on("astrologer:unlock", (payload) => {
        socket.broadcast.emit("astrologer:unlock", payload);
    });

    socket.on("accept_lead", async (data) => {
        try {
            const { leadId, agentName, agentId } = data;
            console.log(`[Socket.io] Agent ${agentId || agentName} is attempting to claim lead ${leadId}`);

            await Lead.findOneAndUpdate(
                { leadId },
                {
                    assignedTo: agentId || agentName,
                    takenStatus: "Taken"
                },
                { new: true }
            );

            io.emit("lead_accepted", {
                leadId,
                agentName: agentName || agentId,
                agentId: agentId || agentName,
            });
        } catch (err) {
            console.error("[Socket.io] Error assigning lead:", err);
        }
    });

    socket.on("disconnect", () => {
        console.log(`[Socket.io] Client disconnected: ${socket.id}`);
    });
});

// Start Sacred Heartbeat (Persistent Auto-Blessings)
try {
    const { initSacredHeartbeat } = require('../utils/sacredCron');
    initSacredHeartbeat(io);
} catch (err) {
    console.warn('⚠️ [Sacred Heartbeat] Caution: Background blessings service failed to start.', err.message);
}

app.use((req, res, next) => {
    console.log('Incoming Request:', req.method, req.url);
    next();
});
const PORT = process.env.PORT || 5001;
const DEFAULT_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:8080',
    'https://namandarshan.com',
    'https://www.namandarshan.com',
    'https://namandarshan-testing.vercel.app',
    'https://namandarshan-astrotalk-testing-backend.onrender.com',
];

const getAllowedOrigins = () => {
    const configuredOrigins = (process.env.CORS_ALLOWED_ORIGINS || '')
        .split(',')
        .map(origin => origin.trim())
        .filter(Boolean);

    return new Set([...DEFAULT_ALLOWED_ORIGINS, ...configuredOrigins]);
};

const isAllowedPreviewOrigin = (origin) => {
    try {
        const { hostname, protocol } = new URL(origin);
        return protocol === 'https:' && hostname.endsWith('.amplifyapp.com');
    } catch {
        return false;
    }
};

// Middleware
app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = getAllowedOrigins();

        if (!origin || allowedOrigins.has(origin) || isAllowedPreviewOrigin(origin)) {
            callback(null, true);
        } else {
            console.warn(`[CORS] Blocked request from unauthorized origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// Serve Static Images (for Emails, etc.)
app.use('/images', express.static(path.join(__dirname, '../public/images')));

const mongoose = require('mongoose');
console.log('Mongoose resolved to:', require.resolve('mongoose'));

// Initialize routes AFTER DB connection
const initializeRoutes = () => {
    // Routes - Register synchronously for Vercel
    const templeRoutes = require('../api/routes/temples');
    const darshanRoutes = require('../api/routes/darshan');

    // --- API Routes ---
    // Register and Login Routes
    const userAuthRoutes = require('../api/routes/user-auth');
    app.use('/api/auth', userAuthRoutes);

    const paymentRoutes = require('../api/routes/payments');
    app.use('/api/payments', paymentRoutes);

    // const packageRoutes = require('../api/routes/package');
    // app.use('/api/package', packageRoutes);

    const walletRoutes = require('../api/routes/wallet');
    app.use('/api/wallet', walletRoutes);
    app.use('/api/pandit-dashboard', require('../api/routes/pandit-dashboard'));

    // Api routes 
    // (AI route removed from this specific folder to prevent dependency crashes)


    app.use('/api/temples', templeRoutes);
    app.use('/api/darshan', darshanRoutes);
    app.use('/api/prasadams', require('../api/routes/prasadams'));
    app.use('/api/chadhava', require('../api/routes/chadhava'));
    app.use('/api/pujas', require('../api/routes/pujas'));
    app.use('/api/orders', require('../api/routes/orders'));
    app.use('/api/bookings', require('../api/routes/bookings'));
    app.use('/api/form-dumps', require('../api/routes/form-dumps'));
    app.use('/api/auth', require('../api/routes/user-auth'));
    app.use('/api/user-activity', require('../api/routes/user-activity'));
    app.use('/api/panchang', require('../api/routes/panchang'));
    app.use('/api/newsletter', require('../api/routes/newsletter'));
    // app.use('/api/posts', require('../api/routes/posts'));

    // CRM Routes
    // app.use('/api/crm/auth', require('../api/routes/crm-auth'));
    // app.use('/api/crm/leads', require('../api/routes/leads'));
    // app.use('/api/crm/bookings', require('../api/routes/bookings-crm')); // New route for existing bookings
    // app.use('/api/crm/users', require('../api/routes/crm-users'));
    // app.use('/api/crm/lead-transfers', require('../api/routes/lead-transfers'));
    // app.use('/api/crm/csv-import', require('../api/routes/csv-import'));
    // app.use('/api/crm/analytics', require('../api/routes/analytics'));
    // app.use('/api/crm/campaigns', require('../api/routes/campaigns'));
    // app.use('/api/crm/search', require('../api/routes/crm-search'));
    // app.use('/api/crm/consolidated', require('../api/routes/consolidated'));
    // app.use('/api/referrals', require('../api/routes/referrals'));

    // Explicit 404 handler for API routes
    app.use('/api', (req, res) => {
        res.status(404).json({
            success: false,
            message: `API Route not found: ${req.method} ${req.originalUrl}`
        });
    });
    app.use('/api/crm/whatsapp', require('../api/routes/whatsapp-crm'));
    app.use('/api/crm/email', require('../api/routes/blastmail'));

    // Health Check Endpoint
    app.get('/api/health', (req, res) => {
        res.json({
            success: true,
            status: 'healthy',
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development'
        });
    });

    // Explicit 404 handler for API routes to avoid falling through to the SPA catch-all
    app.use('/api', (req, res) => {
        res.status(404).json({
            success: false,
            message: `API Route not found: ${req.method} ${req.originalUrl}`
        });
    });

    // --- SEO Injection & Static Files ---
    const fs = require('fs');

    // Helper function to inject meta tags
    const injectMeta = (data, html) => {
        let title = 'Naman Darshan';
        let description = 'Book your divine experience.';
        let image = 'https://namandarshan.com/assets/logo.png';
        let keywords = 'temple, darshan, puja';
        let structuredData = '';

        if (data) {
            title = data.seoTitle || data.name || title;
            description = data.seoDescription || data.description || description;
            image = data.image || image;
            keywords = data.seoKeywords || keywords;

            if (data.structuredData) {
                const sd = typeof data.structuredData === 'string'
                    ? data.structuredData
                    : JSON.stringify(data.structuredData);
                structuredData = `<script type="application/ld+json">${sd}</script>`;
            }
        }

        const metaTags = `
            <title>${title}</title>
            <meta name="description" content="${description}" />
            <meta name="keywords" content="${keywords}" />
            <meta property="og:title" content="${title}" />
            <meta property="og:description" content="${description}" />
            <meta property="og:image" content="${image}" />
            <meta property="twitter:card" content="summary_large_image" />
            ${structuredData}
        `;

        return html.replace('</head>', `${metaTags}</head>`);
    };

    // SEO Route for Temple Details
    app.get('/temples/:slug', async (req, res, next) => {
        try {
            const Temple = require('../api/models/Temple');
            const param = req.params.slug;

            // Logic to find temple by slug (handling "*-temple" suffix variations if necessary)
            // Existing logic in temples.js suggests slug or id. Here we assume slug.
            // We replicate the logic from temples.js slightly for robustness
            const possibleSlugs = [param];
            if (param.endsWith('-temple')) possibleSlugs.push(param.replace(/-temple$/, ''));
            else possibleSlugs.push(param + '-temple');

            const temple = await Temple.findOne({ slug: { $in: possibleSlugs } });

            const BUILD_PATH = path.resolve(__dirname, '../../../../namandarshan/dist');
            const indexFile = path.resolve(BUILD_PATH, 'index.html');

            if (fs.existsSync(indexFile)) {
                fs.readFile(indexFile, 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error reading index.html:', err);
                        return next();
                    }
                    res.send(injectMeta(temple, data));
                });
            } else {
                next();
            }
        } catch (error) {
            console.error('SEO Injection Error (Temple):', error);
            next();
        }
    });

    // SEO Route for Darshan Details
    app.get('/darshan/:slug', async (req, res, next) => {
        try {
            const Darshan = require('../api/models/Darshan');
            const param = req.params.slug;
            // Similar slug logic might be needed, but assuming direct slug match for now or just checking
            const darshan = await Darshan.findOne({
                // Flexible slug matching if needed, or just regular slug
                $or: [{ slug: param }, { _id: (mongoose.Types.ObjectId.isValid(param) ? param : null) }]
            });

            const BUILD_PATH = path.resolve(__dirname, '../../../../namandarshan/dist');
            const indexFile = path.resolve(BUILD_PATH, 'index.html');

            if (fs.existsSync(indexFile)) {
                fs.readFile(indexFile, 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error reading index.html:', err);
                        return next();
                    }
                    res.send(injectMeta(darshan, data));
                });
            } else {
                next();
            }
        } catch (error) {
            console.error('SEO Injection Error (Darshan):', error);
            next();
        }
    });

    // Serve Static Frontend
    const findBuildPath = () => {
        const possiblePaths = [
            path.resolve(__dirname, '../../../../namandarshan/dist'), // Original relative path
            path.resolve(__dirname, '../../../namandarshan/dist'),    // Adjusted relative path
            path.join(process.cwd(), 'dist'),                         // Standard deployment path
            path.join(__dirname, '../dist')                           // Alternative relative path
        ];

        for (const p of possiblePaths) {
            if (fs.existsSync(p)) return p;
        }
        return null;
    };

    const BUILD_PATH = findBuildPath();
    if (BUILD_PATH) {
        console.log('✓ Serving static frontend from:', BUILD_PATH);
        app.use(express.static(BUILD_PATH));

        // Catch-all for SPA - use middleware instead of wildcard route for Express 5 compatibility
        app.use((req, res) => {
            res.sendFile(path.resolve(BUILD_PATH, 'index.html'));
        });
    } else {
        console.warn('⚠️ Frontend build NOT found. SPA catch-all route not registered.');
    }

    console.log('✓ Routes initialized');
};

// Start Server if running directly (e.g. Local or Render)
// Vercel imports this file, so we don't want to listen there.
if (require.main === module) {
    (async () => {
        try {
            await connectDB(app);
            initializeRoutes();

            // Start Newsletter Cron
            // const { startNewsletterCron } = require('../scripts/newsletterCron');
            // startNewsletterCron();

            server.listen(PORT, () => {
                console.log(`✓ Server and Socket Server is running on port ${PORT}`);
            });
        } catch (error) {
            console.error('Failed to start server:', error);
            process.exit(1);
        }
    })();
} else {
    // For Vercel, connect and initialize routes immediately
    connectDB(app).then(() => {
        initializeRoutes();
    }).catch(err => {
        console.error('Failed to initialize:', err);
    });
}

module.exports = app;
