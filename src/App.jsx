import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-dark-900 text-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-500 mb-8">
          Tailwind is working! 🎉
        </h1>

        <div className="mb-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="inline-block mx-4"
          >
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="inline-block mx-4"
          >
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h2 className="text-2xl text-gray-300 mb-6">Vite + React</h2>

        <div className="card mb-6">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-400">
            Edit{" "}
            <code className="bg-dark-700 px-2 py-1 rounded">src/App.jsx</code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
