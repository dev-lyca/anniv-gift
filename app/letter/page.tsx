"use client";

import BubbleBG from "@/components/bubble-bg";
import { Button, Card, Modal, ModalContent } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Letter() {
  const [open, setOpen] = useState(false);

  const paragraph = `
Hi, Baby! Happy anniversary to us! Sayang, Wala ako work para sana mapuntahan ka :(( so I made this para makabawi sa efforts mk sakin. I really hope magustuhan mo ito. I am thankful to you, for always being there up until now. Thank youu kasi di ka nagsasawa. I know I'm not perfect, we both aren't. But the fact that you still chose to stay here are enough for me to choose you everyday also. There's always arguments and misunderstandings, di na Yan mawawala Lalo at matagal na Tayo and really, comfortable na Tayo sobra sa isat isa. I just want also to take this as my opportunity to apologize for all those things I have said and done. I'm really sorry kasi di ako naging maayos na gf. I'm really blessed kasi Meron akong Ikaw na laging andyan for me, to help me. Meron man ako o Wala. Thank you so much, mahal kasi mahal mo ako. Mahal din kita. I will surely treat you and make it up to you as soon as I got the job. For now, ito na Muna. Happy anniversary to uss anddd cheers to more dates, lamon, and away! hahahaha I love you so much,.mahalko. the best ka, enough ka, and mahal kita. Take care of yourself and always know that I am always be here for you through thick and thin. For more years together!! Chheeeersss!
`;

  const words = paragraph.split(" ");

  return (
    <section className="relative bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)] text-white min-h-screen flex items-center justify-center overflow-hidden px-6">
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
              <p className="text-lg leading-normal text-gray-200 whitespace-pre-line">
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
