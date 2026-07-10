import Hero from "@/components/Hero";
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
import WorkforceBanner from '@/components/WorkforceBanner';

import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main>

      {/* <WorkforceBanner/> */}
      {/* <Hero /> */}
      {/* <AboutSection /> */}
      <HeroSection />
      <StorySection/>
      <img src="/images/sap-services-training-programes.png" alt="SAP Services Training Programmes" className="w-full h-auto"/>
      <SuccessSection/>
      <WorkSection/>
      <SkillSection/>
      <ServicesSection/>
      <TrainingSection/>
      <OfferSection/>
      {/* <TeamSection/> */}
      <img src="/images/stay-connected.png" alt="stay connected" className="w-full h-auto"/>
      
      <TestimonialSection/> 
      <WhyChooseGTX/>
      <StatsSection/>
      {/* <LatestPost/> */}
      
      {/* <FAQ/> */}
      <CTASection/>
      <ContactUs/>
    </main>
  );
}