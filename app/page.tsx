import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar/>
      <AboutSection />
    </main>
  );
}