"use client";

import { useEffect, useState } from "react";

const ROWS = 2;
const COLS = 3;
const TOTAL_PIECES = ROWS * COLS;
const IMAGE_URL = "https://i.imgur.com/tWeiDj5.jpeg"; // 💖 Replace with your photo

export default function PuzzleGame() {
  const [tiles, setTiles] = useState<number[]>([]);
  const [dragging, setDragging] = useState<number | null>(null);
  const [isSolved, setIsSolved] = useState(false);

  // initialize puzzle shuffled
  useEffect(() => {
    const arr = Array.from({ length: TOTAL_PIECES }, (_, i) => i);
    const shuffled = arr.sort(() => Math.random() - 0.5);
    setTiles(shuffled);
  }, []);

  // check if solved
  useEffect(() => {
    if (tiles.length > 0 && tiles.every((val, idx) => val === idx)) {
      setIsSolved(true);
    }
  }, [tiles]);

  const handleDragStart = (index: number) => {
    setDragging(index);
  };

  const handleDrop = (index: number) => {
    if (dragging === null) return;
    const newTiles = [...tiles];
    [newTiles[dragging], newTiles[index]] = [
      newTiles[index],
      newTiles[dragging],
    ];
    setTiles(newTiles);
    setDragging(null);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Puzzle Game 🧩</h1>
      <p className="text-gray-400 mb-8">Put the pieces back together 💕</p>

      {/* Puzzle Grid */}
      <div
        className="grid bg-neutral-800 rounded-lg overflow-hidden shadow-xl"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 120px)`,
          gridTemplateRows: `repeat(${ROWS}, 120px)`,
        }}
      >
        {tiles.map((tile, idx) => {
          // correct position in full image
          const row = Math.floor(tile / COLS);
          const col = tile % COLS;

          return (
            <div
              key={idx}
              draggable
              onDragStart={() => handleDragStart(idx)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(idx)}
              className="w-[120px] h-[120px] border border-neutral-700 cursor-grab active:cursor-grabbing"
              style={{
                backgroundImage: `url(${IMAGE_URL})`,
                backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                backgroundPosition: `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`,
              }}
            />
          );
        })}
      </div>

      {isSolved && (
        <div className="mt-8 text-center animate-bounce">
          <h2 className="text-2xl font-semibold text-pink-400">
            You complete me 💕
          </h2>
        </div>
      )}
    </section>
  );
}
