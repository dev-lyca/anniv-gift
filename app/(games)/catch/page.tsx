"use client";

import { useEffect, useRef, useState } from "react";

type Heart = {
  id: number;
  x: number;
  y: number;
};

export default function HeartCatcherGame() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [basketX, setBasketX] = useState(200);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);

  // Handle keyboard movement
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setBasketX((prev) => Math.max(prev - 40, 0));
      if (e.key === "ArrowRight")
        setBasketX((prev) => Math.min(prev + 40, 400));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Falling hearts
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        { id: Date.now(), x: Math.random() * 400, y: 0 },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Animate falling
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setHearts(
        (prev) =>
          prev.map((h) => ({ ...h, y: h.y + 10 })).filter((h) => h.y < 500) // remove hearts below screen
      );
    }, 100);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Collision detection
  useEffect(() => {
    const basketY = 450;
    setHearts((prev) =>
      prev.filter((h) => {
        if (
          h.y >= basketY - 20 &&
          h.y <= basketY + 20 &&
          h.x >= basketX - 30 &&
          h.x <= basketX + 70
        ) {
          setScore((s) => s + 1);
          return false;
        }
        return true;
      })
    );
  }, [basketX, hearts]);

  // Timer countdown
  useEffect(() => {
    if (gameOver) return;
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameOver]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-900 via-rose-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-4">Heart Catcher 💖</h1>
      <p className="mb-2">Catch as many hearts as you can in 30 seconds!</p>
      <p className="mb-6">
        Time Left: <span className="font-bold">{timeLeft}</span>s
      </p>
      <p className="mb-6 text-lg">Score: {score}</p>

      {/* Game Area */}
      <div
        ref={gameRef}
        className="relative w-[500px] h-[500px] bg-gradient-to-b from-pink-200 to-rose-300 rounded-lg overflow-hidden"
      >
        {/* Hearts */}
        {hearts.map((h) => (
          <div
            key={h.id}
            className="absolute text-2xl"
            style={{ left: h.x, top: h.y }}
          >
            💖
          </div>
        ))}

        {/* Basket */}
        <div
          className="absolute bottom-4 w-20 h-6 bg-pink-700 rounded-full"
          style={{ left: basketX }}
        />
      </div>

      {/* Game Over Message */}
      {gameOver && (
        <div className="mt-8 text-center animate-bounce">
          <h2 className="text-2xl font-bold text-pink-300">
            That’s how much love I have for you 💕
          </h2>
          <p className="mt-2 text-lg">Final Score: {score}</p>
        </div>
      )}
    </section>
  );
}
