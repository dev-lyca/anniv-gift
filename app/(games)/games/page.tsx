"use client";

import { Button, Card } from "@heroui/react";
import { motion } from "framer-motion";

const games = [
  {
    title: "Scratch-to-Reveal Love Note 💌",
    desc: "Scratch the card to uncover a surprise message!",
  },
  {
    title: "Puzzle Game 🧩",
    desc: "Solve the puzzle and reveal a special memory.",
  },
  {
    title: "Heart Catcher Game ❤️",
    desc: "Catch falling hearts — simple, cute, and fun!",
  },
];

export default function GamesPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-900 py-16 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Playful Moments 🎮
        </h1>
        <p className="text-gray-400 text-lg">
          Let’s make love even more fun with these cute little games.
        </p>
      </div>

      {/* Game Choices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 flex flex-col items-center justify-between h-full rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-900/90 to-neutral-800/80 hover:shadow-lg hover:shadow-rose-500/20 transition">
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {game.title}
              </h3>
              <p className="text-gray-400 text-sm text-center flex-grow mb-6">
                {game.desc}
              </p>
              <Button
                color="primary"
                radius="full"
                className="px-6 font-semibold shadow-md shadow-rose-500/20 hover:shadow-rose-500/40"
              >
                Play Now
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
