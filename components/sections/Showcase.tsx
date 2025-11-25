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
    <section id="showcase" ref={containerRef} className="py-0 bg-white">
      {/* Header */}
       <div className="flex flex-col md:flex-row justify-between items-end bg-pastel-pink border-b-2 border-black p-12 md:p-20">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter font-heading uppercase text-black leading-none">
            Student<br />Showcase
          </h2>
          <p className="text-xl max-w-md mt-6 md:mt-0 text-right font-bold uppercase tracking-wide">
            See what our community is building. From generative art to immersive 3D experiences.
          </p>
        </div>

      <div className="max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group relative aspect-video bg-white overflow-hidden border-black cursor-pointer ${
                  index % 2 === 0 ? "md:border-r-2" : ""
              } ${index < projects.length - 2 ? "border-b-2" : "border-b-2 md:border-b-0"}`}
            >
              {/* Placeholder for Image */}
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-black/10 text-6xl font-bold uppercase group-hover:bg-pastel-purple transition-colors duration-500">
                {project.title}
              </div>
              
              {/* Hover Overlay - Reveal Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/5">
                  <div className="self-end">
                     <span className="bg-black text-white px-4 py-2 font-bold uppercase text-sm border-2 border-transparent group-hover:border-white transition-all">
                        View Project
                     </span>
                  </div>
                  
                  <div>
                    <h3 className="text-4xl font-bold mb-2 uppercase font-heading text-black bg-white inline-block px-2 border-2 border-black">{project.title}</h3>
                    <br/>
                    <p className="text-lg font-bold uppercase tracking-wider text-black bg-white inline-block px-2 mt-2 border-2 border-black">by {project.author}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

