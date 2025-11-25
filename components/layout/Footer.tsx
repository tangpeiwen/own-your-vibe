export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-white">
        {/* Left Column */}
        <div className="p-12 md:p-20 border-b-2 md:border-b-0 md:border-r-2 border-white">
          <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter font-heading mb-8 leading-none">
            Vibe<br/>Coding
          </h2>
          <p className="max-w-sm text-gray-400 font-medium text-xl uppercase">
            Empowering the next generation of creative technologists through rhythm and code.
          </p>
        </div>

        {/* Right Column: Links */}
        <div className="p-12 md:p-20 flex flex-col justify-between bg-neutral-900">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-6">
                <h3 className="font-bold uppercase tracking-wider text-white mb-2 border-b border-white/20 pb-2">Navigation</h3>
                <a href="#hero" className="hover:text-pastel-pink transition-colors uppercase font-bold text-lg">Home</a>
                <a href="#tracks" className="hover:text-pastel-pink transition-colors uppercase font-bold text-lg">Tracks</a>
                <a href="#testimonials" className="hover:text-pastel-pink transition-colors uppercase font-bold text-lg">Stories</a>
              </div>
              
              <div className="flex flex-col gap-6">
                <h3 className="font-bold uppercase tracking-wider text-white mb-2 border-b border-white/20 pb-2">Socials</h3>
                <a href="#" className="hover:text-pastel-blue transition-colors uppercase font-bold text-lg">Twitter / X</a>
                <a href="#" className="hover:text-pastel-blue transition-colors uppercase font-bold text-lg">Instagram</a>
                <a href="#" className="hover:text-pastel-blue transition-colors uppercase font-bold text-lg">GitHub</a>
              </div>
            </div>
            
            <div className="mt-12 pt-8 text-sm font-bold uppercase tracking-widest text-gray-500">
                &copy; {new Date().getFullYear()} Vibe Coding. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
}

