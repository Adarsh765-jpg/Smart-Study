import React from "react";
import "../styles/result.css";

function ResultSection({ results }) {
  if (!results) return null;

  const { topic, summary, quiz, studyTip, mathProblem } = results;

  return (
    <section className="result-wrapper">
      <h2>
        Results for: <span className="topic-name">{topic}</span>
      </h2>

      <div className="card">
        <h3>Summary</h3>
        {summary?.length ? (
          <ul>
            {summary.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        ) : (
          <p>No summary available.</p>
        )}
      </div>

      <div className="card">
        <h3>Quiz</h3>

        {!quiz?.length && <p>No quiz available.</p>}

        {quiz?.map((q, i) => (
          <div className="quiz-item" key={i}>
            <p className="q-text">
              {i + 1}. {q.question}
            </p>

            <ul className="options">
              {q.options.map((opt, idx) => (
                <li key={idx}>
                  <strong>{String.fromCharCode(65 + idx)}.</strong> {opt}
                </li>
              ))}
            </ul>

            <p className="answer">
              Correct Answer: <strong>{q.answer}</strong>
            </p>
          </div>
        ))}
      </div>

      <div className="card">
        <h3>Study Tip</h3>
        <p>{studyTip || "No tip available."}</p>
      </div>

      {mathProblem && (
        <div className="card">
          <h3>Math Problem</h3>
          <p>{mathProblem.question}</p>

          <details>
            <summary>Show Answer</summary>
            <p>
              <strong>Answer:</strong> {mathProblem.answer}
            </p>
            <p>
              <strong>Explanation:</strong> {mathProblem.explanation}
            </p>
          </details>
        </div>
      )}
    </section>
  );
}

export default ResultSection;
