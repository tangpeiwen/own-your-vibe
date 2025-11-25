import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-black flex justify-between items-stretch h-20">
      <div className="flex items-center px-6 border-r-2 border-black h-full bg-pastel-pink">
        <Link href="/" className="text-3xl font-bold tracking-tighter font-heading uppercase leading-none">
          Vibe<br/><span className="font-normal">Coding</span>
        </Link>
      </div>
      
      <div className="hidden md:flex flex-1 justify-center items-center gap-12 text-lg font-bold tracking-wide uppercase">
        <Link href="#hero" className="hover:bg-black hover:text-white px-4 py-1 transition-colors">Home</Link>
        <Link href="#tracks" className="hover:bg-black hover:text-white px-4 py-1 transition-colors">Tracks</Link>
        <Link href="#testimonials" className="hover:bg-black hover:text-white px-4 py-1 transition-colors">Stories</Link>
        <Link href="#showcase" className="hover:bg-black hover:text-white px-4 py-1 transition-colors">Showcase</Link>
      </div>

      <div className="hidden md:flex items-center px-8 border-l-2 border-black h-full bg-black text-white hover:bg-gray-900 transition-colors cursor-pointer">
        <span className="text-sm font-bold uppercase tracking-wider">
          Join Waitlist
        </span>
      </div>
      
      {/* Mobile Menu Button Placeholder - visible only on mobile */}
      <div className="md:hidden flex items-center px-6 border-l-2 border-black h-full">
        <button className="uppercase font-bold">Menu</button>
      </div>
    </nav>
  );
}

