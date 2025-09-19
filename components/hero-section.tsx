"use client";

import React from "react";
import BubbleBG from "./bubble-bg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)] text-white min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="container mx-auto text-center relative z-5 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold font-stretch-expanded font-serif mb-6 animate-fadeInDown">
          Welcome, Baby!
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-xl mx-auto font-thin animate-fadeInUp">
          Happy 3 years of being a couple filled with love, arguments, and many
          moreeee
        </p>
      </div>

      <BubbleBG />
    </section>
  );
};

export default HeroSection;
