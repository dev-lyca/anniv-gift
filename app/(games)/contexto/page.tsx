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

function useGuessingGame(
  topWord: string,
  wordList: { word: string; clue: string }[]
) {
  const [guessedWords, setGuessedWords] = useState<
    { word: string; score: number }[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);

  const resetGame = () => {
    setGuessedWords([]);
    setIsOpen(false);
  };

  const getScore = (word: string): number => {
    const index = wordList.findIndex((w) => w.word === word.toLowerCase());
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

    if (!wordList.some((w) => w.word === word)) {
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
      topWordClue: "Our special day we celebrate every year 🎉",
      wordList: [
        { word: "monthsary", clue: "Our little celebration every month 🎉" },
        { word: "anniv", clue: "Short way of saying our special day 💌" },
        { word: "three", clue: "How many years together so far 🔢" },
        { word: "years", clue: "Time we’ve been through ⏳" },
        { word: "memories", clue: "Photos and moments we keep 📸" },
        { word: "together", clue: "Where we always belong 🤝" },
        { word: "happiness", clue: "What you always give me 😊" },
        { word: "celebration", clue: "How we mark milestones 🎂" },
      ],
    },
    {
      topWord: "inasal",
      topWordClue: "Your favorite fast food 🍗",
      wordList: [
        { word: "chicken", clue: "The main dish you love 🍗" },
        { word: "rice", clue: "Always paired with every meal 🍚" },
        { word: "gravy", clue: "Extra flavor you can’t miss 🥣" },
        { word: "sarap", clue: "The Tagalog word for delicious 😋" },
      ],
    },
    {
      topWord: "capitol",
      topWordClue: "Our favorite dating place 🏛️",
      wordList: [
        { word: "beach", clue: "Where the waves meet the shore 🌊" },
        { word: "sand", clue: "Soft and warm beneath our feet 🏖️" },
        { word: "sea", clue: "The endless blue we watch together 🌌" },
        { word: "sunset", clue: "The sky turning gold as day ends 🌅" },
        { word: "lights", clue: "Shining bright when night falls ✨" },
        { word: "bench", clue: "Where we sit, talk, and laugh 🪑" },
      ],
    },
    {
      topWord: "august",
      topWordClue: "The month we first met 🌸",
      wordList: [
        { word: "first", clue: "The start of our journey ✨" },
        { word: "meet", clue: "When our eyes first locked 👀" },
        { word: "smile", clue: "What I noticed right away 😊" },
        { word: "moment", clue: "A memory I’ll never forget 🕰️" },
      ],
    },
    {
      topWord: "may",
      topWordClue: "The month we first talked 🌼",
      wordList: [
        { word: "chat", clue: "Where our words began 💬" },
        { word: "hello", clue: "The simple start of it all 👋" },
        { word: "late", clue: "Our favorite time to talk 🌙" },
        { word: "bond", clue: "What we built from the start 🤝" },
      ],
    },
    {
      topWord: "i love you",
      topWordClue: "The three magic words I’ll always tell you 💖",
      wordList: [
        { word: "care", clue: "What I always show you 💕" },
        { word: "hug", clue: "Tight and warm 🤗" },
        { word: "kiss", clue: "Sweet gesture 💋" },
        { word: "promise", clue: "What I’ll always keep 🤞" },
      ],
    },
    {
      topWord: "thank you",
      topWordClue: "The words I say for all the love you give 🙏",
      wordList: [
        { word: "gratitude", clue: "What I feel every day 🙏" },
        { word: "smile", clue: "What brightens my day 😁" },
        { word: "help", clue: "What you offer when I need it 🛟" },
        { word: "respect", clue: "The way I see you 🫡" },
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
          <Card
            className="w-full max-w-md border border-neutral-700 bg-gradient-to-br from-neutral-900/60
         to-neutral-800/70 "
          >
            <CardBody className="flex flex-col gap-3">
              <h2 className="text-xl text-pink-400 font-bold text-center">
                Guess the Secret Word
              </h2>
              <p className="text-sm text-gray-100 text-center mb-3">
                Hint: {games[currentGame].topWordClue}
              </p>
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
                <p className="text-red-300 text-center font-bold text-lg mt-2">
                  {error}
                </p>
              )}
              <div className="mt-4 w-full">
                <h3 className="font-semibold text-gray-300 mb-2">
                  Your Guesses:
                </h3>
                <div className="space-y-3">
                  {guessedWords.map((g, idx) => {
                    const clue = games[currentGame].wordList.find(
                      (w) => w.word === g.word
                    )?.clue;
                    return (
                      <div key={idx} className="text-left">
                        <Progress
                          value={g.score}
                          label={`${g.word} (${clue || ""})`}
                          showValueLabel={true}
                          color="success"
                          className="w-full text-gray-100"
                        />
                      </div>
                    );
                  })}
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
      <BubbleBG />
    </section>
  );
}
