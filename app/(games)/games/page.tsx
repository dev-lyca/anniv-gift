"use client";

import BubbleBG from "@/components/bubble-bg";
import { Button, Card } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const games = [
  {
    title: "Contexto",
    desc: "Guess the top words using top clues!",
    href: "/contexto",
  },
  {
    title: "Crossword Puzzle",
    desc: "Solve clues and fill the grid in this classic word challenge!",
    href: "/puzzle",
  },
];

export default function GamesPage() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-900/60 to-neutral-800/70 text-white min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="container mx-auto text-center relative max-w-4xl">
        <div className="max-w-3xl mx-auto text-center font-serif mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Playful Moments
          </h1>
          <p className="text-gray-100 text-lg">
            Let’s make love even more fun with these cute little games.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {games.map((game, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className="p-6 flex flex-col items-center justify-between h-full rounded-2xl 
              border border-neutral-700 bg-gradient-to-br from-neutral-900/60 to-neutral-800/70 hover:shadow-lg hover:shadow-rose-500/20 transition"
              >
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {game.title}
                </h3>
                <p className="text-gray-200 text-sm text-center flex-grow mb-6">
                  {game.desc}
                </p>
                <Button
                  as={Link}
                  color="primary"
                  href={game.href}
                  radius="full"
                  className="bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)] text-white px-6 font-semibold shadow-md shadow-rose-500/20 hover:shadow-rose-500/40"
                >
                  Play Now
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <BubbleBG />
    </section>
  );
}
