import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WorkSection from '@/components/WorkSection';
import SkillSection from '@/components/SkillsSection';
import  ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import ContactUs from '@/components/contact-us';
import TeamSection from '@/components/TeamSection';
import LatestPost from '@/components/LatestPost';
import TestimonialSection from '@/components/TestimonialSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar/>
      <AboutSection />
      <WorkSection/>
      <SkillSection/>
      <ServicesSection/>
      <TeamSection/>
      <CTASection/>
      <TestimonialSection/> 
      <StatsSection/>
      <LatestPost/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}