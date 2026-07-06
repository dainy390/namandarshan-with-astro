const express = require("express");
const router = express.Router();

const aiAgent = require("../services/aiChatbot");

router.post("/chat", async (req, res) => {
  try {
    const { message, filters } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required"
      });
    }

    const aiResponse = await aiAgent(message, filters);

    return res.json({
      success: true,
      data: aiResponse
    });
  } catch (error) {
    console.error("AI Chat Error:", error);
    return res.status(500).json({
      success: false,
      message: "AI processing failed"
    });
  }
});

module.exports = router;
