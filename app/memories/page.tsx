"use client";

import { memories } from "@/data/memories";
import type { Memories } from "@/types/index";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import BubbleBG from "@/components/bubble-bg";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Memories() {
  const memoryList: Memories = memories;

  return (
    <section className="relative bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)] text-white min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="container mx-auto text-center relative z-5 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center font-serif mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Memories Together
          </h2>
          <p className="text-white text-lg">
            A journey of little & big moments that made us “us”.
          </p>
        </div>

        <div className="max-w-xl mx-auto p-4">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {memoryList.map((memory, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  className="relative font-serif"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${memory.image})` }}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <motion.div
                    className="relative flex flex-col items-center p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                      }}
                      className="rounded-lg shadow-lg overflow-hidden"
                    >
                      <Image
                        src={memory.image}
                        alt={memory.title}
                        width={300}
                        height={300}
                        className="w-full h-auto md:h-80 object-cover"
                      />
                    </motion.div>
                    <motion.div
                      className="mt-2 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold text-white">
                        {memory.title}
                      </h3>
                      <p className="text-sm text-white mb-2">{memory.date}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <BubbleBG />
    </section>
  );
}
