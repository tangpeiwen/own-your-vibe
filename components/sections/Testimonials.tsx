"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { testimonials } from "@/data/mockData";

export default function Testimonials() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useGSAP(() => {
    gsap.to(scrollerRef.current, {
      x: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="testimonials" ref={containerRef} className="py-32 overflow-hidden bg-black text-white border-t-2 border-white">
      <h2 className="text-5xl md:text-7xl font-bold mb-24 px-6 text-center uppercase tracking-tighter font-heading text-white">
        Student Stories
      </h2>
      
      <div ref={scrollerRef} className="flex w-max border-y-2 border-white bg-white">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="w-[400px] md:w-[500px] p-12 border-r-2 border-black bg-white text-black flex flex-col justify-between shrink-0 hover:bg-black hover:text-white transition-colors duration-300 group"
          >
            <p className="text-2xl font-bold mb-12 uppercase leading-tight">"{t.quote}"</p>
            <div>
              <div className="font-bold text-xl uppercase tracking-wide group-hover:text-white">{t.name}</div>
              <div className="text-sm font-mono text-gray-600 group-hover:text-gray-400 uppercase mt-2">{t.role}</div>
            </div>
          </div>
        ))}
        {/* Duplicate for seamless feel */}
        {testimonials.map((t) => (
          <div
            key={`${t.id}-duplicate`}
            className="w-[400px] md:w-[500px] p-12 border-r-2 border-black bg-white text-black flex flex-col justify-between shrink-0 hover:bg-black hover:text-white transition-colors duration-300 group"
          >
            <p className="text-2xl font-bold mb-12 uppercase leading-tight">"{t.quote}"</p>
            <div>
              <div className="font-bold text-xl uppercase tracking-wide group-hover:text-white">{t.name}</div>
              <div className="text-sm font-mono text-gray-600 group-hover:text-gray-400 uppercase mt-2">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

