import "../styles/history.css";

function HistoryList({ history, onSelect }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="history-container">
      <p>Recent:</p>
      <div className="history-list">
        {history.map((item, i) => (
          <button
            key={i}
            className="history-btn"
            onClick={() => onSelect(item, "normal")}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
