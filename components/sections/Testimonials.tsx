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
    <section id="testimonials" ref={containerRef} className="py-0 overflow-hidden bg-pastel-blue border-b-2 border-black">
       <div className="border-b-2 border-black py-16 px-6 bg-white">
        <h2 className="text-5xl md:text-8xl font-bold text-center uppercase tracking-tighter font-heading text-black">
          Student Stories
        </h2>
      </div>
      
      <div className="py-20">
        <div ref={scrollerRef} className="flex w-max">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-[400px] md:w-[600px] mx-6 p-10 border-2 border-black bg-white text-black flex flex-col justify-between shrink-0 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300"
            >
              <p className="text-2xl md:text-3xl font-bold mb-12 uppercase leading-tight font-heading">"{t.quote}"</p>
              <div className="flex items-center gap-4 border-t-2 border-black pt-6">
                 <div className="w-12 h-12 bg-black rounded-full"></div>
                 <div>
                  <div className="font-bold text-xl uppercase tracking-wide">{t.name}</div>
                  <div className="text-sm font-mono text-gray-600 uppercase">{t.role}</div>
                 </div>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless feel */}
          {testimonials.map((t) => (
            <div
              key={`${t.id}-duplicate`}
              className="w-[400px] md:w-[600px] mx-6 p-10 border-2 border-black bg-white text-black flex flex-col justify-between shrink-0 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300"
            >
              <p className="text-2xl md:text-3xl font-bold mb-12 uppercase leading-tight font-heading">"{t.quote}"</p>
              <div className="flex items-center gap-4 border-t-2 border-black pt-6">
                 <div className="w-12 h-12 bg-black rounded-full"></div>
                 <div>
                  <div className="font-bold text-xl uppercase tracking-wide">{t.name}</div>
                  <div className="text-sm font-mono text-gray-600 uppercase">{t.role}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

