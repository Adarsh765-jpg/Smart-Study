import { useState } from "react";
import TopicForm from "../components/TopicForm";
import ResultSection from "../components/ResultSection";
import HistoryList from "../components/HistoryList";
import { fetchStudyData } from "../api/studyApi";

function Home() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("topicHistory")) || []
  );

  const handleSearch = async (topic, mode) => {
    setLoading(true);
    setError("");
    setResults(null);

    try {
      const data = await fetchStudyData(topic, mode);
      setResults(data);

      const updated = [topic, ...history.filter((t) => t !== topic)].slice(
        0,
        5
      );
      setHistory(updated);
      localStorage.setItem("topicHistory", JSON.stringify(updated));
    } catch (err) {
      setError("Something went wrong. Try again");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🎓 Smart Study Assistant</h1>
      <p className="tagline">Learn smarter with AI-powered insights</p>

      <TopicForm onSearch={handleSearch} />
      <HistoryList history={history} onSelect={handleSearch} />

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Generating study materials...</p>
        </div>
      )}

      {error && <div className="error-box">{error}</div>}

      {results && <ResultSection results={results} />}
    </div>
  );
}

export default Home;
