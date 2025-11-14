import { useState } from "react";
import "../styles/form.css";

function TopicForm({ onSearch }) {
  const [topic, setTopic] = useState("");
  const [mathMode, setMathMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    onSearch(topic, mathMode ? "math" : "normal");
  };

  return (
    <form className="topic-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a topic (e.g., gravity, photosynthesis, permutations)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <label className="checkbox">
        <input
          type="checkbox"
          checked={mathMode}
          onChange={() => setMathMode(!mathMode)}
        />
        Math mode
      </label>

      <button type="submit">Search</button>
    </form>
  );
}

export default TopicForm;
