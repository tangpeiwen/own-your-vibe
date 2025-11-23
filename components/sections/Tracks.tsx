"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { tracks } from "@/data/mockData";

gsap.registerPlugin(ScrollTrigger);

export default function Tracks() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".track-card");
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <section id="tracks" ref={containerRef} className="py-32 px-6 bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold mb-20 text-left tracking-tighter font-heading uppercase">
          Curated Tracks
      </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black">
          {tracks.map((track, index) => (
          <div
            key={track.id}
              className={`track-card group relative p-12 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300 ${
                index % 2 === 0 ? "md:border-r-2" : ""
              } ${index < tracks.length - 2 ? "border-b-2" : "border-b-2 md:border-b-0"}`}
          >
            <div className="relative z-10">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300 origin-left">{track.icon}</div>
                <h3 className="text-3xl font-bold mb-4 uppercase font-heading tracking-wide">{track.title}</h3>
                <p className="text-lg text-gray-600 group-hover:text-gray-300 transition-colors mb-8 font-medium leading-relaxed">
                {track.description}
              </p>
              
                <div className="flex items-center text-base font-bold uppercase tracking-wider">
                  View Syllabus <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  );
}

