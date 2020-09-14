import React, { useEffect } from "react";
import { useLinkedState } from "use-linked-state";

export default function Detect({ pixelsGateway }) {
  const [pixels, setPixels] = useLinkedState(pixelsGateway);
  const handleChange = () => {
    console.log(pixels);
  };

  return (
    <div>
      <button onClick={handleChange}>change</button>
    </div>
  );
}
