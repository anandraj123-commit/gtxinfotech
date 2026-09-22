import { services } from "@/data/services";
import  HeroSection from "@/components/service/heroSection";
import ServiceType from "@/components/service/ServiceType";
import ServiceCategory from "@/components/service/serviceCategory";
import ClientsSection from "@/components/service/ClientsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Navbar from "@/components/Navbar";
import WorkforceBannerService from "@/components/WorkforceBannerService";
import DeliveryMethodology from "@/components/DeliveryMethodology";
import WhyChooseGTX from "@/components/WhyChooseGTX";
import Link from "next/link";
export default async function Service({ params }) {
  // ✅ Await params (IMPORTANT)
  const resolvedParams = await params;

  const serviceType = decodeURIComponent(resolvedParams.serviceType);
  const categoryId = resolvedParams.categoryId;

  console.log("serviceType, categoryId", serviceType, categoryId);

  // ✅ Find service type
  const selectedService = services.find(
    (service) => service.type === serviceType
  );

  if (!selectedService) {
    return <div>Service type not found</div>;
  }

  // ✅ Find category
  const selectedCategory = selectedService.category.find(
    (cat) => String(cat.id) === categoryId
  );

  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  return (
    <>
      {/* <Navbar /> */}
      <WorkforceBannerService/>
      <HeroSection />
      {/* <ServiceType service={selectedService} /> */}
      <ServiceCategory category={selectedCategory} />
      <DeliveryMethodology/>
      <WhyChooseGTX/>
      {/* <ClientsSection /> */}
      <TestimonialSection />
    </>
  );
}

<Link href="/#services">
<button className="mt-10 rounded-xl bg-teal-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.05] hover:bg-orange-500">
Explore Services
</button>
</Link>