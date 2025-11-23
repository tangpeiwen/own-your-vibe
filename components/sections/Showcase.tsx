"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/data/mockData";

export default function Showcase() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <section id="showcase" ref={containerRef} className="py-32 px-6 bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-2 border-black pb-10">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter font-heading uppercase">
            Student<br />Showcase
          </h2>
          <p className="text-xl max-w-md mt-6 md:mt-0 text-right font-bold uppercase tracking-wide">
            See what our community is building. From generative art to immersive 3D experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black bg-black">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative aspect-video bg-gray-100 overflow-hidden border border-black cursor-pointer hover:contrast-125 transition-all duration-500"
            >
              {/* Placeholder for Image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-black/10 text-4xl font-bold uppercase">
                {project.title} Preview
              </div>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-white border-t-2 border-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-1 uppercase font-heading">{project.title}</h3>
                <p className="text-sm font-bold uppercase tracking-wider">by {project.author}</p>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <span className="bg-black text-white px-6 py-3 font-bold uppercase tracking-widest text-xs border-2 border-white">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

