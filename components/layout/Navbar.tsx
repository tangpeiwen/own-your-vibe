import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white border-b-2 border-black flex justify-between items-center">
      <div className="text-3xl font-bold tracking-tighter font-heading uppercase">
        Vibe<span className="font-normal">Coding</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-lg font-bold tracking-wide uppercase">
        <Link href="#hero" className="hover:underline decoration-2 underline-offset-4">Home</Link>
        <Link href="#tracks" className="hover:underline decoration-2 underline-offset-4">Tracks</Link>
        <Link href="#testimonials" className="hover:underline decoration-2 underline-offset-4">Stories</Link>
        <Link href="#showcase" className="hover:underline decoration-2 underline-offset-4">Showcase</Link>
      </div>

      <button className="hidden md:block bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
        Join Waitlist
      </button>
    </nav>
  );
}

