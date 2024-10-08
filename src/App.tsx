import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greetSync() {
    setGreetMsg("Greeting synchronously...");
    setGreetMsg(await invoke("greet_sync", { name }));
  }

  async function greetAsync() {
    setGreetMsg("Greeting asynchronously...");
    setGreetMsg(await invoke("greet_async", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <input
        id="greet-input"
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Enter a name..."
      />
      <button onClick={greetSync}>Greet [sync]</button>
      <button onClick={greetAsync}>Greet [async]</button>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
