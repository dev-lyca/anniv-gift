"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[linear-gradient(to_right,#e56443,#f08853,#cf7973,#fd9e8a,#ffcbba)] text-white min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="container mx-auto text-center relative z-5 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold font-stretch-expanded font-serif mb-6 animate-fadeInDown">
          Welcome to Your Next Adventure
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-xl mx-auto font-thin animate-fadeInUp">
          Discover amazing experiences and create unforgettable memories with
          us.
        </p>
        <div className="flex justify-center space-x-4 animate-fadeInUp delay-200">
          <button
            type="button"
            className="bg-white text-[#e56443] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#ffcbba] transition"
          >
            Get Started
          </button>
          <button
            type="button"
            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#e56443] transition"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Animated floating circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#ffcbba] opacity-20 rounded-full animate-bounce-slow" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#fd9e8a] opacity-15 rounded-full animate-bounce-slower" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#cf7973] opacity-10 rounded-full animate-bounce" />
    </section>
  );
};

export default HeroSection;
