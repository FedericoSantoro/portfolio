import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let spots = [];
    let hue = 0;
    const mouse = {
      x: undefined,
      y: undefined,
    };
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = window.innerWidth;
    canvas.style.height = window.innerHeight;
    canvas.addEventListener("mouseout", (e) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      mouse.x = undefined;
      mouse.y = undefined;
    });
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    window.addEventListener("mousemove", (e) => {
      const { scrollTop } = document.documentElement;
      if ( scrollTop <= window.innerHeight ) {
        mouse.x = e.x;
        mouse.y = e.y + scrollTop;
        for (let i = 0; i < 5; i++) {
          spots.push(new Particle());
        }
      }
    });
    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = "hsl(" + hue + ", 100%, 50%)";
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) {
          this.size -= 0.02;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const handleParticle = () => {
      for (let i = 0; i < spots.length; i++) {
        spots[i].update();
        spots[i].draw();
        for (let j = i; j < spots.length; j++) {
          const dx = spots[i].x - spots[j].x;
          const dy = spots[i].y - spots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 90) {
            ctx.beginPath();
            ctx.strokeStyle = spots[i].color;
            ctx.lineWidth = spots[i].size / 10;
            ctx.moveTo(spots[i].x, spots[i].y);
            ctx.lineTo(spots[j].x, spots[j].y);
            ctx.stroke();
          }
        }
        if (spots[i].size <= 0.3) {
          spots.splice(i, 1);
          i--;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticle();
      hue++;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      className="absolute top-0 -left-[10.6rem] z-10 overflow-hidden s:hidden lg:block"
      id="canvas1"
      ref={canvasRef}
    ></canvas>
  );
};

export default Canvas;
