"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen pt-20 flex flex-col border-b-2 border-black"
    >
      {/* Top Section: Massive Title */}
      <div className="flex-1 bg-pastel-pink flex items-center justify-center border-b-2 border-black overflow-hidden p-4">
        <h1
          ref={titleRef}
          className="text-[12vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter font-heading uppercase text-center text-black mix-blend-multiply"
        >
          Code With Vibe
        </h1>
      </div>

      {/* Bottom Section: Grid Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[40vh]">
        {/* Left Cell: Slogan/CTA */}
        <div className="bg-pastel-purple border-b-2 md:border-b-0 md:border-r-2 border-black p-8 md:p-16 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading uppercase mb-8">
              Create Momentum
            </h2>
          </div>
          <div>
             <button className="w-full md:w-auto bg-black text-white px-8 py-4 text-xl font-bold uppercase tracking-wider hover:bg-transparent hover:text-black border-2 border-black transition-all duration-300">
              Start Exploring
            </button>
          </div>
        </div>

        {/* Right Cell: Description */}
        <div className="bg-pastel-blue p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
           {/* Decorative circle or element */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-black rounded-full -mr-16 -mt-16 mix-blend-overlay opacity-20"></div>

          <p className="text-xl md:text-2xl font-medium uppercase tracking-wide leading-relaxed">
            在代码中寻找韵律，用技术构建美学。
            <br /><br />
            <span className="opacity-70">
              Discover the rhythm in code and build aesthetics with technology.
              We help you master the art of creative coding.
            </span>
          </p>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
              <span className="transform -rotate-45">→</span>
            </div>
            <span className="font-bold uppercase tracking-wider">Learn More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

