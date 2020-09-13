import React from "react";
import "./App.css";
import Canvas from "./components/canvas/canvas";
import Links from "./components/links/links";
import Result from "./components/result/result";

function App() {
  return (
    <div className="App">
      <Canvas />
      <Result />
      <Links />
    </div>
  );
}

export default App;
