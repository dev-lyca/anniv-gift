"use client";

import { memories } from "@/data/memories";
import type { Memories } from "@/types/index";
import { Image } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Memories() {
  const memoryList: Memories = memories;

  return (
    <section
      className="relative bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)] 
    mb-10 py-16 px-6 overflow-hidden font-serif"
    >
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
              <div className="font-serif animate-appearance-in">
                <div className="flex flex-col items-center">
                  <Image
                    src={memory.image}
                    alt={memory.title}
                    width={300}
                    height={300}
                    className="w-full h-auto md:h-80 
                    object-cover rounded-lg shadow-large"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {memory.title}
                    </h3>
                    <p className="text-sm text-white mb-2">{memory.date}</p>
                    <p className="text-base text-white leading-relaxed">
                      {memory.note}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
