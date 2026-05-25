"use client";

import { useEffect, useRef } from "react";

function makeStars(width: number, height: number) {
  return Array.from({ length: 300 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.2 + 0.3,
    speed: Math.random() * 0.008 + 0.002,
    phase: Math.random() * Math.PI * 2,
  }));
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const hero = canvas.parentElement;
    if (!hero) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;

    let stars = makeStars(canvas.width, canvas.height);
    let animId: number;

    function drawStars(t: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        const a = 0.15 + 0.85 * ((Math.sin(t * s.speed + s.phase) + 1) / 2);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(241, 233, 219, ${a * 0.6})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(drawStars);
    }

    drawStars(0);

    const onResize = () => {
      if (!canvas || !hero) return;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
      stars = makeStars(canvas.width, canvas.height);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-spotlight]");
    function update() {
      const cy = window.innerHeight / 2;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - cy);
        const maxDist = window.innerHeight * 0.5;
        el.style.opacity = String(Math.max(0.15, 1 - dist / maxDist));
      });
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="hero">
      <canvas id="star-canvas" ref={canvasRef} />
      <div className="hero-inner">
        <div className="hero-decorative-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/frame365-line.svg" alt="" className="sword-desktop" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/sword_mobile.svg" alt="" className="sword-mobile" />
        </div>

        <div className="hero-label">CONFIDENTIAL ADVISOR</div>

        <h1 className="hero-title">
          <span className="gold">THE</span><br />
          <span className="gold">PRIVATE</span><br />
          <span className="light">OFFICE</span>
        </h1>

        <p className="hero-tagline">
          Individuated operational intelligence for the architects of industry, legacy, and institution.
        </p>

        <div className="hero-circle">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/circle.svg" alt="" className="circle-desktop" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/frame_222.svg" alt="" className="circle-mobile" />
        </div>

        <div className="hero-copy">
          <p className="spotlight" data-spotlight>
            At a certain altitude, advisory becomes commonplace.
          </p>
          <p className="spotlight" data-spotlight>
            Your consultants deliver recycled frameworks calibrated for someone else&apos;s constraints. Your adviser has multiple clients. Your board brings strategy, but you already have strategy.
          </p>
          <p className="spotlight" data-spotlight>
            You need to see the hidden variables beneath your merger, your marriage, and your succession plan. You need to identify where your company will break before it does, where power is silently shifting, where profit is leaking through structural misalignment. You need to know exactly when, and how to act.
          </p>
          <p className="spotlight hero-copy-accent" data-spotlight>
            The Private Office is second perspective built exclusively for your strategic topology - one that sees angles your board cannot and reaches conclusions no conventional channel can produce.
          </p>
        </div>
      </div>
    </section>
  );
}
