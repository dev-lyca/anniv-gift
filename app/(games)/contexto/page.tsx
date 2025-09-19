"use client";

import BubbleBG from "@/components/bubble-bg";
import {
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Progress,
} from "@heroui/react";
import { useState } from "react";

function useGuessingGame(topWord: string, wordList: string[]) {
  const [guessedWords, setGuessedWords] = useState<
    { word: string; score: number }[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);

  const resetGame = () => {
    setGuessedWords([]);
    setIsOpen(false);
  };

  const getScore = (word: string): number => {
    const index = wordList.indexOf(word.toLowerCase());
    if (index === -1) return 0;

    const rawScore = Math.round(
      ((wordList.length - index) / wordList.length) * 100
    );
    return Math.min(rawScore, 90);
  };

  const guessWord = (input: string) => {
    const word = input.trim().toLowerCase();
    if (!word) return { status: "empty" };

    if (word === topWord.toLowerCase()) {
      setGuessedWords((prev) => [...prev, { word, score: 100 }]);
      setIsOpen(true);
      return { status: "win" };
    }

    if (guessedWords.some((g) => g.word === word)) {
      return { status: "duplicate" };
    }

    if (!wordList.includes(word)) {
      return { status: "unknown" };
    }

    const score = getScore(word);
    setGuessedWords((prev) => [...prev, { word, score }]);
    return { status: "ok", word, score };
  };

  return { guessedWords, guessWord, isOpen, setIsOpen, topWord, resetGame };
}

export default function Page() {
  const games = [
    {
      topWord: "anniversary",
      wordList: [
        "monthsary",
        "anniv",
        "three",
        "years",
        "memories",
        "word",
        "together",
        "happiness",
        "sadness",
        "cry",
        "us",
        "moments",
        "celebration",
        "milestone",
        "noun",
      ],
    },
    {
      topWord: "i love you",
      wordList: [
        "care",
        "affection",
        "forever",
        "always",
        "heart",
        "soul",
        "kiss",
        "hug",
        "promise",
      ],
    },
    {
      topWord: "thank you",
      wordList: [
        "gratitude",
        "appreciation",
        "thanks",
        "kindness",
        "respect",
        "smile",
        "support",
        "help",
      ],
    },
  ];

  const [currentGame, setCurrentGame] = useState(0);
  const [guess, setGuess] = useState("");
  const { guessedWords, guessWord, isOpen, setIsOpen, topWord, resetGame } =
    useGuessingGame(games[currentGame].topWord, games[currentGame].wordList);
  const [error, setError] = useState<string | null>(null);

  const handleGuess = () => {
    const result = guessWord(guess);

    if (result?.status === "duplicate") {
      setError("Already included!");
    } else if (result?.status === "unknown") {
      setError("Not familiar!");
    } else {
      setError(null);
    }

    setGuess("");
  };

  return (
    <section className="relative bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)] text-white min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="container mx-auto text-center relative z-5 max-w-4xl">
        <div className="flex flex-col items-center min-h-screen p-6 gap-6">
          <Card className="w-full max-w-md bg-white">
            <CardBody className="flex flex-col gap-3">
              <h2 className="text-xl text-gray-700 font-bold text-center">
                Guess the Secret Word
              </h2>

              <div className="flex justify-between gap-2">
                <Input
                  className="flex-1"
                  placeholder="Enter a word..."
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGuess()}
                />
                <Button color="danger" onPress={handleGuess}>
                  Submit
                </Button>
              </div>
              {error && (
                <p className="text-red-500 text-center font-bold text-lg mt-2">
                  {error}
                </p>
              )}
              <div className="mt-4 w-full">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Your Guesses:
                </h3>
                <div className="space-y-3">
                  {guessedWords.map((g, idx) => (
                    <Progress
                      key={idx}
                      value={g.score}
                      label={g.word}
                      showValueLabel={true}
                      color="success"
                      className="w-full text-gray-900"
                    />
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>

          <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <ModalContent>
              <ModalHeader className="font-bold text-lg">
                🎉 Congratulations!
              </ModalHeader>
              <ModalBody>
                <p>
                  You guessed the secret word: <b>{topWord}</b> 💖
                </p>
                <p>You are amazing, baby!</p>
                {currentGame < games.length - 1 && (
                  <Button
                    className="mt-3"
                    onPress={() => {
                      resetGame();
                      setIsOpen(false);
                      setCurrentGame(currentGame + 1);
                      setGuess("");
                    }}
                  >
                    Next Game ➡️
                  </Button>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
      <BubbleBG/>
    </section>
  );
}
