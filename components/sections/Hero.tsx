"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
    })
      .from(
        subtitleRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 1,
        },
        "-=1"
      )
      .from(
        ctaRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      );
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 bg-white text-black relative overflow-hidden"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-4 md:left-10 top-0 bottom-0 w-[1px] bg-gray-200"></div>
        <div className="absolute right-4 md:right-10 top-0 bottom-0 w-[1px] bg-gray-200"></div>
      </div>

      <div className="overflow-hidden z-10">
        <h1
          ref={titleRef}
          className="text-[15vw] leading-[0.8] font-bold tracking-tighter font-heading uppercase mb-4 text-black mix-blend-multiply"
        >
          Code
          <br />
          <span className="text-transparent bg-clip-text bg-black stroke-black stroke-2 text-stroke-2">With Vibe</span>
        </h1>
      </div>
      
      <p
        ref={subtitleRef}
        className="text-xl md:text-2xl font-medium max-w-3xl mb-12 uppercase tracking-wide border-l-4 border-black pl-6 text-left"
      >
        在代码中寻找韵律，用技术构建美学。
        <br />
        <span className="text-gray-600">Discover the rhythm in code and build aesthetics with technology.</span>
      </p>
      
      <div ref={ctaRef}>
        <button className="bg-black text-white px-12 py-5 text-xl font-bold uppercase tracking-wider hover:bg-transparent hover:text-black border-2 border-black transition-all duration-300">
          Start Exploring
        </button>
      </div>
    </section>
  );
}

