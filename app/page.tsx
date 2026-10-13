import { createMetadata } from "@/lib/metadata";
import WorkSection from '@/components/WorkSection';
import SkillSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSectionf';
import TrainingSection from '@/components/trainingSectionf';
import CTASection from '@/components/CTASection';
import ContactUs from '@/components/contact-us';
import TestimonialSection from '@/components/TestimonialSection';
import StatsSection from '@/components/StatsSection';
import OfferSection from '@/components/OfferSection';
import StorySection from '@/components/StorySection';
import SuccessSection from '@/components/SuccessSection';
import WhyChooseGTX from '@/components/WhyChooseGTX';

import HeroSection from '@/components/HeroSection';
import Gtxinfotechservices from '@/components/Gtxinfotechservice';

export const metadata = createMetadata({
  path: "/",
  title: "SAP Consulting, IT Services & Training in India | ZisanTech Solutions",

  description:
    "Explore SAP consulting, IT services, ERP and software development, and practical SAP training at ZisanTech Solutions. Supporting businesses and learners across India through online services.",
});

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection/>
      <Gtxinfotechservices/>
      <SuccessSection/>
      <WorkSection/>
      <SkillSection/>
      <ServicesSection/> 
      <OfferSection/>
      <TrainingSection/>
      <img src="/images/stay-connected.png" alt="stay connected" className="w-full h-auto"/>
      <TestimonialSection/> 
      <WhyChooseGTX/>
      <StatsSection/>
      <CTASection/>
      <ContactUs/>
    </main>
  );
}