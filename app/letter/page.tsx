"use client";

import { Button, Card, Modal, ModalContent } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-900 py-16 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl"
      >
        <Card className="p-10 rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-900/90 to-neutral-800/80 shadow-lg shadow-rose-500/10 text-center">
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
            className="font-semibold px-8 py-6 text-lg shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 transition"
            onPress={() => setOpen(true)}
          >
            Open Your Letter 💌
          </Button>
        </Card>
      </motion.div>

      {/* Modal with the heartfelt letter */}
      <Modal isOpen={open} onClose={() => setOpen(false)} size="3xl">
        <ModalContent className="bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-gray-200 p-8 rounded-2xl shadow-xl border border-neutral-700">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-rose-400 mb-6">
              My Dearest Love ❤️
            </h3>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              From the moment we met, my world has been brighter. Every laugh we
              share, every quiet moment, and every adventure has become my
              favorite memory. You are my safe place, my joy, and my forever.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              Thank you for loving me so deeply and for being the most amazing
              part of my life. I can’t wait to write many more chapters of “us”
              together.
            </p>
            <p className="text-xl font-semibold text-white text-center mt-8">
              Here’s to many more years, my love. 💖
            </p>
          </motion.div>
        </ModalContent>
      </Modal>
    </section>
  );
}
