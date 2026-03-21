import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WorkSection from '@/components/WorkSection';
import SkillSection from '@/components/SkillsSection';
import  ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar/>
      <AboutSection />
      <WorkSection/>
      <SkillSection/>
      <ServicesSection/>
      <CTASection/>
    </main>
  );
}