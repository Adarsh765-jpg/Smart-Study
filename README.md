🎓 Smart Study Assistant

AI-Powered Learning Companion — Summary • Quizzes • Math Mode

Smart Study Assistant is a full-stack AI-powered web application that helps students learn faster and smarter.
Enter any topic, and the app will:

Fetch real information from Wikipedia

Generate 3-bullet summaries

Create 3 AI-generated MCQs

Provide a helpful study tip

(Optional) Generate a Math/Logic question with full explanation

Built with React + Vite (frontend) and Node.js + Express (backend), powered by Groq AI, and deployed on Vercel + Render.

🚀 Live Demo

🔗 Frontend: https://smart-study-zeta-azure.vercel.app/

🔗 Backend: https://smart-study-v0pa.onrender.com

✨ Features
🔍 Topic Search

Fetches real-time topic details using Wikipedia’s public API.

🤖 AI-Powered Learning

Uses Groq AI to generate:

3-point concise summary

3 MCQ quiz questions

1 study tip

➗ Math Mode

When enabled, the app produces:

A logic/quantitative question

Correct answer

Full explanation

🎨 Modern UI

Fully responsive

Clean animations

History tracking

Smooth loading state

Improved UX via Claude-assisted design refinements

☁️ Fully Deployed

Frontend → Vercel

Backend → Render

🛠️ Tech Stack
Frontend

React

Vite

Custom CSS

Fetch API

Environment variables (import.meta.env)

Backend

Node.js

Express

Groq API (LLM)

Wikipedia summary API

CORS enabled

Deployment

Vercel (frontend)

Render (backend)

📡 API Details
Endpoint: /study

Method: GET
Example:

/study?topic=gravity&mode=normal
/study?topic=algebra&mode=math

Query Parameters
Parameter	Required	Description
topic	✔	Topic to study
mode	✖	math = enable Math Mode
Sample JSON Response
{
  "summary": ["Point 1", "Point 2", "Point 3"],
  "quiz": [
    { "question": "Q1?", "options": ["A","B","C","D"], "answer": "A" },
    { "question": "Q2?", "options": ["A","B","C","D"], "answer": "B" },
    { "question": "Q3?", "options": ["A","B","C","D"], "answer": "C" }
  ],
  "studyTip": "A helpful study tip.",
  "mathQuestion": {
    "question": "A math/logic question.",
    "answer": "Correct answer",
    "explanation": "Detailed explanation"
  }
}

🧑‍💻 Local Development
1️⃣ Clone the repository
git clone https://github.com/Adarsh765-jpg/Smart-Study.git

2️⃣ Backend Setup
cd backend
npm install
npm start


Set environment variables:

GROQ_API_KEY=your_groq_key_here


Server runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


Set .env:

VITE_API_URL=http://localhost:5000


Frontend runs on:

http://localhost:5173

🎥 Demo Video

📺 Coming Soon (Add your link here)

🧠 AI Tools Used

Groq API → Fast, efficient LLM responses

Claude → UI/UX improvements, animations, styling refinements

ChatGPT → Logic, debugging, deployment guidance

Wikipedia API → Topic data source

🙌 Acknowledgments

Built using:

React + Vite

Node.js + Express

Groq AI

Render (Backend Hosting)

Vercel (Frontend Hosting)

⭐ Want to Contribute?

Pull requests are welcome!
Feel free to open issues for bugs, enhancements, or suggestions.

🎓 Start learning smarter today!

🚀 Live App: https://smart-study-zeta-azure.vercel.app/