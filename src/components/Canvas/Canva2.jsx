import React, { useRef, useEffect } from "react";

function Canva2() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height, lastNow;
    let snowflakes;
    const maxSnowflakes = 100;

    function init() {
      snowflakes = [];
      resize();
      render((lastNow = performance.now()));
    }

    function render(now) {
      requestAnimationFrame(render);

      const elapsed = now - lastNow;
      lastNow = now;

      ctx.clearRect(0, 0, width, height);
      if (snowflakes.length < maxSnowflakes) snowflakes.push(new Snowflake());

      ctx.fillStyle = ctx.strokeStyle = "#fff";

      snowflakes.forEach((snowflake) => snowflake.update(elapsed, now));
    }

    function pause() {
      cancelAnimationFrame(render);
    }
    function resume() {
      lastNow = performance.now();
      requestAnimationFrame(render);
    }

    class Snowflake {
      constructor() {
        this.spawn();
      }

      spawn(anyY = false) {
        this.x = rand(0, width);
        this.y = anyY === true ? rand(-50, height + 50) : rand(-50, -10);
        this.xVel = rand(-0.05, 0.05);
        this.yVel = rand(0.02, 0.1);
        this.angle = rand(0, Math.PI * 2);
        this.angleVel = rand(-0.001, 0.001);
        this.size = rand(7, 12);
        this.sizeOsc = rand(0.01, 0.5);
      }

      update(elapsed, now) {
        const xForce = rand(-0.001, 0.001);

        if (Math.abs(this.xVel + xForce) < 0.075) {
          this.xVel += xForce;
        }

        this.x += this.xVel * elapsed;
        this.y += this.yVel * elapsed;
        this.angle += this.xVel * 0.05 * elapsed; //this.angleVel * elapsed

        if (
          this.y - this.size > height ||
          this.x + this.size < 0 ||
          this.x - this.size > width
        ) {
          this.spawn();
        }

        this.render();
      }

      render() {
        ctx.save();
        const { x, y, angle, size } = this;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.2, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
      }
    }

    // Utils
    const rand = (min, max) => min + Math.random() * (max - min);

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("blur", pause);
    window.addEventListener("focus", resume);
    init();
  }, []);

  return (
    <canvas
      className="absolute top-0 left-0 z-10 overflow-hidden s:w-full s:h-full lg:hidden"
      id="canvas2"
      ref={canvasRef}
    ></canvas>
  );
}

export default Canva2;
