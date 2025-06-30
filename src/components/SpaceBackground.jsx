import React, { useEffect } from "react";

export default function SpaceBackground() {
  useEffect(() => {
    const canvas = document.getElementById("space-canvas");
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2,
      speed: 0.3 + Math.random() * 0.8,
    }));

    const comets = Array.from({ length: 10 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 150 + Math.random() * 50,
      angle: Math.random() * Math.PI * 2,
      speed: 1 + Math.random() * 1.5,
      alpha: 0.5 + Math.random() * 0.5,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      comets.forEach((comet) => {
        ctx.save();
        ctx.translate(comet.x, comet.y);
        ctx.rotate(comet.angle);
        const gradient = ctx.createLinearGradient(0, 0, comet.length, 0);
        gradient.addColorStop(0, `rgba(255,255,255,${comet.alpha})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, comet.length, 1); // reduced tail width from 2 to 1
        ctx.restore();

        // move in the opposite direction
        comet.x -= Math.cos(comet.angle) * comet.speed;
        comet.y -= Math.sin(comet.angle) * comet.speed;

        if (
          comet.x < -comet.length ||
          comet.x > width + comet.length ||
          comet.y < -comet.length ||
          comet.y > height + comet.length
        ) {
          comet.x = Math.random() * width;
          comet.y = Math.random() * height;
          comet.angle = Math.random() * Math.PI * 2;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      id="space-canvas"
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-black"
    ></canvas>
  );
}
