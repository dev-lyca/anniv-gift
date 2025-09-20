"use client";

import BubbleBG from "@/components/bubble-bg";
import { Button, Card, Modal, ModalContent } from "@heroui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Letter() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const paragraph = `
Hi, my love. Happy anniversary to us! 💖 I wish I didn’t have work today so I 
could be with you, but instead, I poured my heart into making this for you. 
Thank you for always staying by my side, for loving me even through my flaws. 
I know neither of us is perfect, and yet, every day you choose me — and that’s 
more than enough reason for me to choose you over and over again. Yes, there are 
arguments and misunderstandings — that’s normal, especially with how comfortable 
we’ve grown with each other. But please know, I’m sorry for the mistakes I’ve made. 
I’m blessed to have you — someone who never leaves, who loves me whether I have 
everything or nothing. Mahal, thank you so much for being you. I love you deeply. 
I promise I’ll make it up to you once I get the job, but for now, let this be my little gift.  
Happy anniversary, my love. Here’s to more dates, laughter, food trips, silly fights, 
and endless memories together. You are my best, my enough, and my forever. 
Always take care of yourself, and remember — I’ll be here for you through thick and thin. 
Here’s to us, to our love, and to many, many more years together. 🥂💖
`;

  const words = paragraph.split(" ");

  const handleOpen = () => {
    setOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked, user must interact");
      });
    }
  };
  return (
    <section className="relative bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)] text-white min-h-screen flex items-center justify-center overflow-hidden px-6">
      <audio ref={audioRef} src="/music/bg.mp3" loop />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl"
      >
        <Card
          className="p-10 rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-900/60
         to-neutral-800/70 shadow-lg shadow-rose-500/10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Letter for You 💌
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Because some feelings are too special to stay unwritten.
          </p>

          <Button
            color="secondary"
            size="lg"
            radius="full"
            className="font-semibold px-8 py-6 text-lg shadow-lg bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)] text-white shadow-rose-500/20 hover:shadow-rose-500/40 transition"
            onPress={() => setOpen(true)}
          >
            Open Your Letter 💌
          </Button>
        </Card>
      </motion.div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        size="3xl"
        placement="center"
        className="max-h-[90vh] flex items-center"
      >
        <ModalContent
          className="border border-neutral-700 
               bg-gradient-to-br from-neutral-900 to-neutral-800 
               text-gray-200 p-8 rounded-2xl shadow-xl 
               max-h-[80vh] overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-rose-400 mb-6">
              My Dearest Love
            </h3>
            <div className="relative">
              <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
                {words.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: idx * 0.12,
                      duration: 0.05,
                    }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>
            <p className="text-xl font-semibold text-white text-center mt-8">
              Here’s to many more years, my love. 💖
            </p>
          </motion.div>
        </ModalContent>
      </Modal>
      <BubbleBG />
    </section>
  );
}
