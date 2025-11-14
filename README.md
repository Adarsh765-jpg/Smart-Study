# 🎓 Smart Study Assistant

An AI-powered learning platform that generates study summaries, quiz questions, study tips, and math problems for any topic.

## ✨ Features

- 📚 **AI Summaries** - 3-point summaries of any topic
- 🧠 **Interactive Quizzes** - 3 MCQs per topic
- 💡 **Study Tips** - AI-generated learning strategies
- 🔢 **Math Mode** - Quantitative problems with explanations
- 📱 **Responsive Design** - Works on desktop, tablet, mobile
- ⚡ **Modern UI** - Beautiful gradient design with animations
- 💾 **History** - Saves last 5 searches locally

## 🛠️ Tech Stack

**Backend:** Node.js + Express + Groq API + Wikipedia API  
**Frontend:** React 19 + Vite + Axios + CSS3

## 🚀 Quick Start

### Prerequisites

- Node.js v16 or higher
- npm or yarn
- API key for one of: Groq (recommended), Google Gemini, or OpenAI

### 1. Clone Repository

```bash
git clone <repository-url>
cd smartStudy
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
GROQ_API_KEY=your_api_key_here
PORT=5000
```

**Get API Keys:**

## 🚀 Quick Start

### 1. Backend Setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
GROQ_API_KEY=your_key_here
PORT=5000
```

Get free key: https://console.groq.com

Start:

```bash
npm start
```

### 2. Frontend Setup (new terminal)

```bash
cd frontend
npm install
```

Create `frontend/.env.local`:

```env
VITE_API_URL=http://localhost:5000
```

Start:

```bash
npm run dev
```

### 3. Open Browser

Go to: **http://localhost:5173**

## 📖 How to Use

1. Enter a topic (e.g., "gravity", "photosynthesis")
2. Click "Search"
3. See AI-generated results:
   - Summary (3 bullets)
   - Quiz (3 questions)
   - Study tip
4. Check "Math mode" for quantitative problems

## 📡 API Endpoint

```
GET /study?topic=gravity&mode=normal
GET /study?topic=quadratic equations&mode=math
```

Response format:

```json
{
  "topic": "gravity",
  "summary": ["point 1", "point 2", "point 3"],
  "quiz": [
    {
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "answer": "A"
    }
  ],
  "studyTip": "...",
  "mathProblem": null
}
```

## 📝 Project Structure

```
smartStudy/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env (create this)
│   └── services/
│       ├── aiService.js
│       └── wikiService.js
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── .env.local (create this)
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── pages/Home.jsx
        ├── components/
        ├── api/studyApi.js
        └── styles/
```

## 🔧 Troubleshooting

**Backend not responding?**

- Check if backend is running: `npm start`
- Verify GROQ_API_KEY is set in `.env`

**Frontend can't find backend?**

- Verify VITE_API_URL in `frontend/.env.local`
- Check if backend is running on port 5000

**Only getting 1 question instead of 3?**

- Restart backend with latest code
- Clear browser cache and reload

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
npm run build
# Deploy dist/ folder
```

### Backend (Render/Railway)

1. Push to GitHub
2. Connect repository
3. Set GROQ_API_KEY environment variable
4. Deploy

## 🤖 AI Models

- **Groq** (llama-3.3-70b-versatile) - Fast, free
- **Wikipedia API** - Public data source

---

**Ready to learn? Start the servers and go! 🎓**
