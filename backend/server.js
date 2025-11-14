import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getWikiSummary } from "./services/wikiService.js";
import { generateAIResponse } from "./services/aiService.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/study", async (req, res) => {
  try {
    const { topic, mode = "normal" } = req.query;

    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    const wikiText = await getWikiSummary(topic);

    const aiResponse = await generateAIResponse(topic, wikiText, mode);

    return res.json(aiResponse);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});
