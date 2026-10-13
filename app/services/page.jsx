import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  path: "/services",
  title: "SAP Consulting & IT Services | ZisanTech Solutions",
  description: "Explore SAP consulting, integration, support, ERP development, web applications, and digital solutions for your business at ZisanTech Solutions.",
});


import HeroSection from '../../components/service/heroSection';
import ServiceType from '../../components/service/ServiceType';
import ServiceCategory from '../../components/service/serviceCategory';
import ClientsSection from '../../components/service/ClientsSection';

export default function Service() {
  return (
   <>
   {/* <Navbar/> */}
   <HeroSection/>
   <ServiceType/>
   <ServiceCategory/>
   <ClientsSection/>
  </>
  )
}