import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const checkBackend = async () => {
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://localhost:8000/api/test"
      );

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const data = await response.json();

      setStatus("Backend Connected: " + data.message);

    } catch (error) {
      setStatus(
        "🔴 Backend Not Connected"
      );
    }

    setLoading(false);
  };

  return (
    <div className="app">

      <nav>
        <h2>DevOps Demo</h2>

        <a href="#about">
          About
        </a>
      </nav>


      <section className="hero">

        <p className="tag">
          REACT + FASTAPI
        </p>

        <h1>
          My First <span>DevOps</span> Website
        </h1>

        <p className="description">
          Test whether the React frontend
          is connected to the FastAPI backend.
        </p>


        {/* Backend Connection Button */}

        <button
          onClick={checkBackend}
          disabled={loading}
        >
          {loading
            ? "Checking..."
            : "Check Backend Connection"
          }
        </button>


        {/* Backend Status */}

        {status && (
          <div className="backend-status">
            {status}
          </div>
        )}

      </section>


      <section
        id="about"
        className="about"
      >

        <h2>DevOps Technologies</h2>

        <div className="cards">

          <div className="card">
            <h3>⚛️ React</h3>
            <p>Frontend</p>
          </div>

          <div className="card">
            <h3>🐍 FastAPI</h3>
            <p>Backend</p>
          </div>

          <div className="card">
            <h3>🐙 GitHub</h3>
            <p>Source Code</p>
          </div>

          <div className="card">
            <h3>🔄 CI/CD</h3>
            <p>Automation</p>
          </div>

        </div>

      </section>


      <footer>
        React + FastAPI DevOps Project
      </footer>

    </div>
  );
}

export default App;