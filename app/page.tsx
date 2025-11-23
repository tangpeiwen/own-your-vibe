import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Tracks from "@/components/sections/Tracks";
import Testimonials from "@/components/sections/Testimonials";
import Showcase from "@/components/sections/Showcase";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Tracks />
      <Testimonials />
      <Showcase />
      <Footer />
    </main>
  );
}
