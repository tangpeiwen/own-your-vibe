export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="text-left">
          <h2 className="text-4xl font-bold uppercase tracking-tighter font-heading mb-6">Vibe Coding</h2>
          <p className="max-w-sm text-gray-400 font-medium">
            Empowering the next generation of creative technologists through rhythm and code.
          </p>
        </div>

        <div className="flex gap-12 text-left">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-wider text-gray-500 mb-2">Navigation</h3>
            <a href="#hero" className="hover:underline decoration-2 underline-offset-4 uppercase font-bold">Home</a>
            <a href="#tracks" className="hover:underline decoration-2 underline-offset-4 uppercase font-bold">Tracks</a>
            <a href="#testimonials" className="hover:underline decoration-2 underline-offset-4 uppercase font-bold">Stories</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-wider text-gray-500 mb-2">Socials</h3>
            <a href="#" className="hover:underline decoration-2 underline-offset-4 uppercase font-bold">Twitter / X</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4 uppercase font-bold">Instagram</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4 uppercase font-bold">GitHub</a>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/20 text-center text-sm font-bold uppercase tracking-widest text-gray-500">
        &copy; {new Date().getFullYear()} Vibe Coding. All rights reserved.
      </div>
    </footer>
  );
}

