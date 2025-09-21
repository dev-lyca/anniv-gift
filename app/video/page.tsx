"use client";

import BubbleBG from "@/components/bubble-bg";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Letter() {
  const [play, setPlay] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-neutral-900/60 to-neutral-800/70 text-white min-h-screen flex items-center justify-center overflow-hidden px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl"
      >
        <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg relative cursor-pointer">
          {play ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jWID1nf7PDs?si=nkKw4p0bZqC37fNF&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              {/* Thumbnail */}
              <img
                src="/images/memories/3.jpg"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
                onClick={() => setPlay(true)}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l12 6-12 6V4z" />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
      <BubbleBG />
    </section>
  );
}
