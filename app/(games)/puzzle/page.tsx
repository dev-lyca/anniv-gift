"use client";

import BubbleBG from "@/components/bubble-bg";
import { Button, Card, Modal, ModalContent } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";

type Cell = {
  letter: string | null;
  userInput?: string;
  number?: number;
};

const GRID_SIZE = 12;

const WORDS = [
  {
    word: "LOVE",
    row: 0,
    col: 0,
    direction: "across",
    clue: "What I feel for you 💖",
  },
  {
    word: "FOREVER",
    row: 1,
    col: 6,
    direction: "down",
    clue: "How long I’ll choose you ⏳",
  },
  {
    word: "ANNIVERSARY",
    row: 4,
    col: 1,
    direction: "across",
    clue: "The special day we celebrate 🎉",
  },
  {
    word: "MEMORIES",
    row: 7,
    col: 2,
    direction: "across",
    clue: "Our collection of moments 📸",
  },
];

export default function CrosswordPage() {
  const initializer = () => {
    const grid: Cell[][] = Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => ({ letter: null }))
    );

    let clueCounter = 1;
    const numberedWords: Array<{
      number: number;
      word: string;
      clue: string;
      direction: string;
    }> = [];

    WORDS.forEach(({ word, row, col, direction, clue }) => {
      word.split("").forEach((ch, i) => {
        const r = direction === "across" ? row : row + i;
        const c = direction === "across" ? col + i : col;
        if (r < GRID_SIZE && c < GRID_SIZE) {
          if (i === 0 && !grid[r][c].number) {
            grid[r][c].number = clueCounter++;
          }
          grid[r][c].letter = ch.toUpperCase();
        } else {
          console.warn(
            `Word "${word}" char "${ch}" at (${r},${c}) is out of bounds`
          );
        }
      });

      const startCellNumber =
        grid[row] && grid[row][col] ? grid[row][col].number : undefined;
      numberedWords.push({
        number: startCellNumber ?? clueCounter++,
        word,
        clue,
        direction,
      });
    });

    numberedWords.sort((a, b) => a.number - b.number);

    return { grid, numberedWords };
  };

  const { grid: initialGrid, numberedWords } = initializer();

  const [grid, setGrid] = useState<Cell[][]>(initialGrid);
  const [open, setOpen] = useState(false);

  const handleChange = (r: number, c: number, value: string) => {
    setGrid((prev) => {
      const copy = prev.map((row) => row.map((cell) => ({ ...cell })));
      copy[r][c].userInput = value.toUpperCase().slice(-1);
      return copy;
    });
  };

  const checkWin = () => {
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const cell = grid[r][c];
        if (cell.letter && cell.letter !== (cell.userInput || "")) {
          return false;
        }
      }
    }
    return true;
  };

  const handleCheck = () => {
    if (checkWin()) {
      setOpen(true);
    } else {
      alert("Not yet complete — keep going! 💪");
    }
  };

  const acrossClues = numberedWords.filter((w) => w.direction === "across");
  const downClues = numberedWords.filter((w) => w.direction === "down");

  return (
    <section className="relative bg-gradient-to-br from-neutral-900/60 to-neutral-800/70 text-white min-h-screen flex items-center justify-center overflow-hidden px-6">
      <Card
        className="p-6 border border-neutral-700 bg-gradient-to-br from-neutral-900/60
         to-neutral-800/70 shadow-lg rounded-2xl"
      >
        <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">
          Anniversary Crossword 💌
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          <div
            className="grid gap-1 mb-6"
            style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 2rem)` }}
          >
            {grid.map((row, r) =>
              row.map((cell, c) =>
                cell.letter ? (
                  <div key={`${r}-${c}`} className="relative">
                    {cell.number && (
                      <span className="absolute text-[0.55rem] text-gray-900 top-0 left-0 pl-[2px]">
                        {cell.number}
                      </span>
                    )}
                    <input
                      value={cell.userInput || ""}
                      onChange={(e) => handleChange(r, c, e.target.value)}
                      className="w-8 h-8 border text-center font-bold text-lg uppercase bg-white text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
                      maxLength={1}
                      inputMode="text"
                      aria-label={`Cell ${r + 1}-${c + 1}`}
                    />
                  </div>
                ) : (
                  <div key={`${r}-${c}`} className="w-8 h-8 bg-gray-600" />
                )
              )
            )}
          </div>

          <div className="grid grid-cols gap-6 mb-4">
            <div>
              <h2 className="font-bold text-orange-200">Across</h2>
              <ul className="mb-2 list-decimal list-inside text-gray-100">
                {acrossClues.map((w) => (
                  <li key={w.number} className="mb-1">
                    <span className="font-semibold mr-2">{w.number}.</span>
                    <span>{w.clue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-orange-200">Down</h2>
              <ul className="list-decimal list-inside text-gray-100">
                {downClues.map((w) => (
                  <li key={w.number} className="mb-1">
                    <span className="font-semibold mr-2">{w.number}.</span>
                    <span>{w.clue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            color="secondary"
            className="bg-rose-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-rose-600"
            onPress={handleCheck}
          >
            Check Answers
          </Button>
          <Button
            color="primary"
            className="px-6 py-2 rounded-full"
            onPress={() => {
              setGrid((prev) =>
                prev.map((row) =>
                  row.map((cell) => ({ ...cell, userInput: "" }))
                )
              );
            }}
          >
            Reset
          </Button>
        </div>
      </Card>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        size="md"
        placement="center"
      >
        <ModalContent className="p-6 text-center bg-gradient-to-br from-rose-600 to-pink-500 text-white rounded-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-3xl font-bold mb-3">You Did It! 🎉</h2>
            <p className="text-lg mb-4">
              Just like this crossword, we fit together perfectly. 💖
            </p>
            <Button
              className="mt-2 bg-white text-rose-600 font-semibold rounded-full"
              onPress={() => setOpen(false)}
            >
              Close
            </Button>
          </motion.div>
        </ModalContent>
      </Modal>
      <BubbleBG />
    </section>
  );
}
