import { createMetadata } from "@/lib/metadata";
import ContactFormSection from "../../components/about-us/ContactFormSection"
import ClientSuccessSection from "../../components/about-us/ClientSuccessSection"
import VisionSection from "../../components/about-us/VisionSection";
import TimelineSection from "../../components/about-us/TimelineSection";
import ValuesSection from "../../components/about-us/ValuesSection";
import Navbar from '../../components/Navbar';
import TeamSection from "../../components/about-us/TeamSection";
import OfficeLocations from "../../components/about-us/OfficeLocations";
import AboutHeroImage from "../../components/about-us/AboutHeroImage";
import DigitalTransformationSection from '../../components/DigitalTransformationSection';

export const metadata = createMetadata({
  path: "/about",
  title: "About ZisanTech Solutions | SAP, IT & ERP Expertise",
  description:
    "Learn about ZisanTech Solutions and our approach to SAP consulting, IT services, ERP and software development, and practical SAP training for businesses and learners across India.",
});

export default function About() {
  return (
   <>
   {/* <Navbar/> */}
   {/* <WorkforceBanner/> */}
    <AboutHeroImage/>
     <ClientSuccessSection/>
     {/* <ContactFormSection/> */}
     <VisionSection/>
     <TimelineSection/>
     <ValuesSection/>
    <DigitalTransformationSection/>
     </>
  )
}