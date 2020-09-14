import React, { useRef, useEffect } from "react";
import styles from "./canvas.module.css";
import { useLinkedState } from "use-linked-state";

export default function Canvas({ xPixels, yPixels, pixelsGateway, color }) {
  const canvasRef = useRef();
  let left;
  let top;
  let width;
  let height;
  let ctx;
  let pixelX;
  let pixelY;
  let drawing = false;

  const [pixels, setPixels] = useLinkedState(pixelsGateway);

  const handleMouseDown = (e) => {
    e.preventDefault();
    calcPos(e.clientX - left, e.clientY - top);
    drawing = true;
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    drawing = false;
    setPixels(ctx.getImageData(0, 0, width, height).data);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!drawing) return;
    ctx.beginPath();
    ctx.moveTo(pixelX, pixelY);
    calcPos(e.clientX - left, e.clientY - top);
    ctx.lineTo(pixelX, pixelY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
  };

  const calcPos = (x, y) => {
    pixelX = Math.round((x * xPixels) / width);
    pixelY = Math.round((y * yPixels) / height);
  };

  const getBoundingRect = () => {
    const rect = canvasRef.current.getBoundingClientRect();
    left = rect.left;
    top = rect.top;
    width = rect.width;
    height = rect.height;
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, width, height);
    setPixels(ctx.getImageData(0, 0, width, height).data);
  };

  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");
    getBoundingRect();
  });

  useEffect(() => {
    window.addEventListener("resize", getBoundingRect);
    getBoundingRect();
    return () => {
      window.removeEventListener("resize", getBoundingRect);
    };
  }, []);

  return (
    <div className={styles["container"]}>
      <canvas
        ref={canvasRef}
        className={styles["canvas"]}
        width={xPixels}
        height={yPixels}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
      />
      <button onClick={clearCanvas}>Clear</button>
    </div>
  );
}
