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
    <section id="tracks" ref={containerRef} className="bg-white border-b-2 border-black">
      {/* Section Header */}
      <div className="border-b-2 border-black bg-pastel-green py-16 px-6">
         <h2 className="text-6xl md:text-9xl font-bold text-center tracking-tighter font-heading uppercase">
          Curated Tracks
        </h2>
      </div>
      
      <div className="max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 border-black">
          {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`track-card group relative p-12 md:p-20 border-black bg-white hover:bg-pastel-purple transition-colors duration-300 flex flex-col justify-between min-h-[400px] ${
                index % 2 === 0 ? "md:border-r-2" : ""
              } ${index < tracks.length - 2 || (tracks.length % 2 !== 0 && index < tracks.length - 1) ? "border-b-2" : "border-b-2 md:border-b-0"}`}
          >
             {/* Circle Number/Icon */}
             <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300">
               {track.icon}
             </div>

            <div>
               <h3 className="text-4xl md:text-5xl font-bold mb-6 uppercase font-heading tracking-wide leading-none">{track.title}</h3>
               <p className="text-xl text-black font-medium leading-relaxed mb-12 max-w-md">
                {track.description}
              </p>
            </div>
              
            <div className="flex items-center justify-between w-full mt-auto">
                <div className="text-lg font-bold uppercase tracking-wider border-b-2 border-black pb-1">
                  View Syllabus
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <span className="transform -rotate-45 text-xl">→</span>
                </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

