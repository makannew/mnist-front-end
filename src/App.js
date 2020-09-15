import React, { useEffect } from "react";
import "./App.css";
import Canvas from "./components/canvas/canvas";
import Links from "./components/links/links";
import Result from "./components/result/result";
import { useStateGateway } from "use-linked-state";
import Detect from "./components/detect/detect";
import * as tf from "@tensorflow/tfjs";

function App() {
  const pixelsGateway = useStateGateway(null);

  return (
    <div className="App">
      <Canvas
        xPixels={112}
        yPixels={112}
        color="#ff0000"
        pixelsGateway={pixelsGateway}
      />
      <Detect pixelsGateway={pixelsGateway} />
      <Result />
      <Links />
    </div>
  );
}

export default App;
