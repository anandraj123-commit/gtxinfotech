import ContactFormSection from "../../components/about-us/ContactFormSection"
import ClientSuccessSection from "../../components/about-us/ClientSuccessSection"
import VisionSection from "../../components/about-us/VisionSection";
import TimelineSection from "../../components/about-us/TimelineSection";
import ValuesSection from "../../components/about-us/ValuesSection";
import Navbar from '../../components/Navbar';
import TeamSection from "../../components/about-us/TeamSection";
import OfficeLocations from "../../components/about-us/OfficeLocations";

export default function About() {
  return (
   <>
   <Navbar/>
     <ClientSuccessSection/>
     {/* <ContactFormSection/> */}
     <VisionSection/>
     <TimelineSection/>
     <ValuesSection/>
     <TeamSection/>
     {/* <OfficeLocations/> */}
     </>
  )
}