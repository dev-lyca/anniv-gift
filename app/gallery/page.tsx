"use client";

import BubbleBG from "@/components/bubble-bg";
import { gallery } from "@/data/gallery";
import { Galleries } from "@/types";
import { Card, Image } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Gallery() {
  const galleries: Galleries = gallery;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleries.length) % galleries.length);
  };
  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleries.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section
      className="relative min-h-screen bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)]  
    py-16 px-6 font-serif"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-100 font-thin text-lg">
          A little glimpse of the moments that made us smile ✨
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto space-y-4">
        {galleries.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <Card
              isPressable
              onClick={() => setSelectedIndex(idx)}
              className="relative overflow-hidden mb-4 bg-neutral-900/80 border border-orange-700 
              rounded-xl hover:shadow-lg hover:shadow-rose-500 transition break-inside-avoid cursor-pointer"
            >
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  removeWrapper
                  alt={item.caption}
                  src={item.src}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    {item.caption}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/60 to-transparent px-4 text-center"
              >
                <p className="text-white text-lg font-medium">{item.caption}</p>
                <p className="text-gray-300 italic mt-2">{item.quote}</p>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-full mx-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={galleries[selectedIndex].src}
                alt={galleries[selectedIndex].caption}
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                loading="eager"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-semibold">
                  {galleries[selectedIndex].caption}
                </h3>
                <p className="italic mt-2 text-gray-300">
                  {galleries[selectedIndex].quote}
                </p>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={showPrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
                aria-label="Previous Image"
              >
                &#8592;
              </button>
              <button
                onClick={showNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
                aria-label="Next Image"
              >
                &#8594;
              </button>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-rose-500 transition"
                aria-label="Close Modal"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <BubbleBG/>
    </section>
  );
}
