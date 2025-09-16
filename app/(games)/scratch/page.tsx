"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ScratchCardGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [scratched, setScratched] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 320;
    canvas.height = 320;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    // Fill overlay
    ctx.fillStyle = "#555"; // scratch gray
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Overlay text
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "white";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch Me 💌", canvas.width / 2, canvas.height / 2);

    // Set to erase mode for scratching
    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const handleScratch = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x =
      "touches" in e
        ? e.touches[0].clientX - rect.left
        : (e as React.MouseEvent).clientX - rect.left;
    const y =
      "touches" in e
        ? e.touches[0].clientY - rect.top
        : (e as React.MouseEvent).clientY - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    // Check how much scratched (auto-complete if >50%)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    for (let i = 3; i < imageData.length; i += 4) {
      if (imageData[i] === 0) cleared++;
    }
    if (cleared / (canvas.width * canvas.height) > 0.5) {
      setScratched(true);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Scratch to Reveal 💝</h1>

      <div className="relative w-[320px] h-[320px] rounded-xl overflow-hidden shadow-lg">
        {/* Hidden image */}
        <Image
          src="/images/bg.jpg" // replace with your romantic image
          alt="Hidden surprise"
          fill
          className="object-cover"
        />

        {/* Scratch overlay */}
        {!scratched && (
          <canvas
            ref={canvasRef}
            onMouseMove={handleScratch}
            onTouchMove={handleScratch}
            className="absolute inset-0 cursor-pointer"
          />
        )}
      </div>
    </section>
  );
}
