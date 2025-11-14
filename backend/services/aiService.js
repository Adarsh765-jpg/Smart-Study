import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const groqClient = process.env.GROQ_API_KEY
  ? new Groq({ apiKey: process.env.GROQ_API_KEY })
  : null;

function buildPrompt(topic, wikiText, mode) {
  return `You are a study assistant.

Using this topic: "${topic}"
And this Wikipedia text:
${wikiText}

Return ONLY a valid JSON object with EXACTLY this format (no extra text before or after):

{
  "topic": "${topic}",
  "summary": ["point 1", "point 2", "point 3"],
  "quiz": [
    {
      "question": "Question 1?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option A"
    },
    {
      "question": "Question 2?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option B"
    },
    {
      "question": "Question 3?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option C"
    }
  ],
  "studyTip": "one simple study tip",
  "mathProblem": ${
    mode === "math"
      ? `{"question":"math question here", "answer":"answer here", "explanation":"explanation here"}`
      : "null"
  }
}

IMPORTANT: Generate EXACTLY 3 quiz questions. Each question must have 4 options. Return ONLY the JSON, nothing else.`;
}

function mockResponse(topic, wikiText, mode) {
  return {
    topic,
    summary: [
      `Summary point 1 for ${topic}`,
      `Summary point 2 for ${topic}`,
      `Summary point 3 for ${topic}`,
    ],
    quiz: [
      {
        question: `What is a key idea about ${topic}?`,
        options: ["A", "B", "C", "D"],
        answer: "A",
      },
      {
        question: `Which statement about ${topic} is true?`,
        options: ["A", "B", "C", "D"],
        answer: "B",
      },
      {
        question: `How does ${topic} relate to X?`,
        options: ["A", "B", "C", "D"],
        answer: "C",
      },
    ],
    studyTip: `Try to summarize ${topic} in your own words.`,
    mathProblem:
      mode === "math"
        ? { question: "2+2=?", answer: "4", explanation: "Basic addition." }
        : null,
  };
}

async function callGroq(prompt) {
  if (!groqClient) throw new Error("Missing GROQ_API_KEY");

  const response = await groqClient.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
    max_tokens: 2000,
  });

  return response.choices[0].message.content;
}

export async function generateAIResponse(topic, wikiText, mode) {
  const prompt = buildPrompt(topic, wikiText, mode);

  try {
    console.log("Calling Groq API for topic:", topic);
    const raw = await callGroq(prompt);
    const cleaned = raw.trim();

    try {
      const parsed = JSON.parse(cleaned);
      console.log("Successfully parsed response");
      return parsed;
    } catch (parseErr) {
      console.warn("Failed to parse JSON, extracting...");
      const jsonStart = cleaned.indexOf("{");
      const jsonEnd = cleaned.lastIndexOf("}");
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const sub = cleaned.slice(jsonStart, jsonEnd + 1);
        try {
          const parsed = JSON.parse(sub);
          console.log("Successfully extracted JSON");
          return parsed;
        } catch (e) {
          console.warn("Malformed JSON:", e.message);
        }
      }
      throw parseErr;
    }
  } catch (err) {
    console.error("Error:", err && err.message ? err.message : err);
    console.log("Using fallback for:", topic);
    return mockResponse(topic, wikiText, mode);
  }
}
