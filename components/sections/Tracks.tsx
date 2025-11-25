"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { tracks } from "@/data/mockData";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Tracks() {
  const containerRef = useRef(null);
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".track-item");
    
    gsap.from(items, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 100,
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

      {/* Tracks List */}
      <div className="flex flex-col">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="track-item group border-b-2 border-black py-12 md:py-20 cursor-pointer hover:bg-pastel-purple transition-colors duration-300 px-6 md:px-12"
              onClick={() => setActiveTrack(activeTrack === track.id ? null : track.id)}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                
                {/* Index */}
                <div className="text-xl md:text-2xl font-bold text-gray-400 group-hover:text-black transition-colors font-mono">
                   [{String(index + 1).padStart(2, '0')}]
                </div>

                {/* Main Content */}
                <div className="flex-1 md:pl-12">
                  <h3 className="text-4xl md:text-7xl font-bold uppercase font-heading tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-300">
                    {track.title}
                  </h3>
                  
                  {/* Expandable Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeTrack === track.id ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row gap-12 pt-8 border-t-2 border-black">
                        <div className="flex-1">
                            <p className="text-xl md:text-2xl leading-relaxed font-medium">
                                {track.description}
                            </p>
                        </div>
                        <div className="flex-none">
                             <button className="bg-black text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-transparent hover:text-black border-2 border-black transition-all duration-300 flex items-center gap-2">
                                 View Syllabus <ArrowUpRight size={20} />
                             </button>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Icon (Always visible) */}
                <div className="self-end md:self-start">
                   <ArrowUpRight 
                     size={48} 
                     className={`transform transition-transform duration-500 ${activeTrack === track.id ? 'rotate-90' : 'group-hover:rotate-45'}`} 
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

