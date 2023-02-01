import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    //Our first draw
    function drawCircle() {
      ctx.fillStyle = "black";
      ctx.strokeStyle = "red";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    const mouse = {
      x: undefined,
      y: undefined,
    };
    {
      /*
    canvas.addEventListener("click", (e) => {
      mouse.x = e.x - 345;
      mouse.y = e.y;
      console.log(e.x - 345);
      drawCircle();
    });
    
    canvas.addEventListener("mousemove", (e) => {
        mouse.x = e.x - 790;
        mouse.y = e.y;
        console.log(e.x - 790);
      console.log(e.x);
      drawCircle();
    }); 
*/
    }
  }, []);

  return (
    <canvas
      className="absolute w-full top-0 h-screen z-10 left-0"
      id="canvas1"
      ref={canvasRef}
    ></canvas>
  );
};

export default Canvas;
