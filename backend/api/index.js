const express = require("express");
const mongoose = require("mongoose");
const Booking = require("./models/Booking");
const Lead = require("./models/Lead");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const envPath = path.resolve(__dirname, "../.env");
const dotenvResult = require("dotenv").config({ path: envPath });
if (dotenvResult.error) {
  console.warn(`⚠️ dotenv failed to load from ${envPath}:`, dotenvResult.error.message);
} else {
  console.log(`✓ dotenv loaded from ${envPath}`);
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Adjust for production
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  }
});

// Expose io instance to routes via req.app.get('io') or global
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
      name
    });
  });

  socket.on("call:leave", ({ roomId, role, name }) => {
    if (!roomId) return;
    socket.to(roomId).emit("call:peer-left", {
      from: socket.id,
      roomId,
      role,
      name
    });
    socket.leave(roomId);
  });

  socket.on("call:offer", ({ roomId, description }) => {
    if (!roomId || !description) return;
    socket.to(roomId).emit("call:offer", {
      from: socket.id,
      description
    });
  });

  socket.on("call:answer", ({ roomId, description }) => {
    if (!roomId || !description) return;
    socket.to(roomId).emit("call:answer", {
      from: socket.id,
      description
    });
  });

  socket.on("call:ice-candidate", ({ roomId, candidate }) => {
    if (!roomId || !candidate) return;
    socket.to(roomId).emit("call:ice-candidate", {
      from: socket.id,
      candidate
    });
  });

  socket.on("call:end", ({ roomId }) => {
    if (!roomId) return;
    socket.to(roomId).emit("call:end", {
      from: socket.id,
      roomId
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
        agentId: agentId || agentName
      });
    } catch (err) {
      console.error("[Socket.io] Error assigning lead:", err);
    }
  });

  socket.on("test_ping", () => {
    console.log("[Socket.io] Received test_ping, blasting new_lead to all clients...");
    io.emit("new_lead", {
      type: "Test Ping",
      id: "ping-123",
      name: "Test User",
      service: "System Test",
      location: "Localhost",
      timestamp: new Date()
    });
  });

  socket.on("disconnect", () => {
    console.log(`[Socket.io] Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());


// Connect to Database
mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 3000, // Fail fast (3s) if DB is down
  })
  .then(() => {
    app.locals.mongoReady = true;
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    app.locals.mongoReady = false;
    console.error("MongoDB Connection Error:", err);
  });

// Routes
app.use("/api/temples", require("./routes/temples"));
app.use("/api/bookings", require("./routes/bookings"));
app.use("/api/pujas", require("./routes/pujas"));
app.use("/api/darshan", require("./routes/darshan"));
app.use("/api/prasadams", require("./routes/prasadams"));
app.use("/api/chadhava", require("./routes/chadhava"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/auth", require("./routes/user-auth"));
app.use("/api/payments", require("./routes/payments"));
app.use("/api/wallet", require("./routes/wallet"));
app.use("/api/pandit-dashboard", require("./routes/pandit-dashboard"));
app.use("/api/panchang", require("./routes/panchang"));
app.use("/api/newsletter", require("./routes/newsletter"));
app.use("/api/form-dumps", require("./routes/form-dumps"));
app.use("/api/user-activity", require("./routes/user-activity"));
app.use("/api/posts", require("./routes/posts"));

// CRM Routes
app.use("/api/crm/auth", require("./routes/crm-auth"));
app.use("/api/crm/users", require("./routes/crm-users"));
app.use("/api/crm/analytics", require("./routes/analytics"));
app.use("/api/crm/bookings", require("./routes/bookings-crm"));
app.use("/api/crm/leads", require("./routes/leads"));
app.use("/api/crm/lead-transfers", require("./routes/lead-transfers"));
app.use("/api/crm/campaigns", require("./routes/campaigns"));
app.use("/api/crm/search", require("./routes/crm-search"));
app.use("/api/crm/consolidated", require("./routes/consolidated"));
app.use("/api/crm/csv-import", require("./routes/csv-import"));
app.use("/api/referrals", require("./routes/referrals"));

// AI Chat Route (Redirect to AI handler if needed, or handle here)
app.use("/ai", require("../server/routes/aiChat"));

app.get("/", (req, res) => {
  res.send("Temple Whisperer API is running (JSON Mode)");
});

// Start Server only if not running in Vercel (exported)
if (process.env.NODE_ENV !== "production") {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
module.exports = server;
