import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WorkSection from '@/components/WorkSection';
import SkillSection from '@/components/SkillsSection';
import  ServicesSection from '@/components/ServicesSection';
import  TrainingSection from '@/components/trainingSection';
import CTASection from '@/components/CTASection';
import ContactUs from '@/components/contact-us';
import TeamSection from '@/components/TeamSection';
import LatestPost from '@/components/LatestPost';
import TestimonialSection from '@/components/TestimonialSection';
import StatsSection from '@/components/StatsSection';
import OfferSection from '@/components/OfferSection';
import StorySection from '@/components/StorySection';
import SuccessSection from '@/components/SuccessSection';
import FAQ from '@/components/Faqs';
import WhyChooseGTX from '@/components/WhyChooseGTX';


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      {/* <AboutSection /> */}
      <StorySection/>
      <SuccessSection/>
      <WorkSection/>
      <SkillSection/>
      <ServicesSection/>
      <TrainingSection/>
      <OfferSection/>
      {/* <TeamSection/> */}
      
      <TestimonialSection/> 
      <CTASection/>
      <StatsSection/>
      {/* <LatestPost/> */}
      <WhyChooseGTX/>
      <FAQ/>
      <ContactUs/>
    </main>
  );
}