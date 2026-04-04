import { services } from "@/data/services";
import HeroSection from "@/components/service/heroSection";
import ServiceType from "@/components/service/ServiceType";
import ServiceCategory from "@/components/service/serviceCategory";
import ClientsSection from "@/components/service/ClientsSection";
import Navbar from "@/components/Navbar";

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
      <Navbar />

      <HeroSection />

      <ServiceType service={selectedService} />

      <ServiceCategory category={selectedCategory} />

      <ClientsSection />
    </>
  );
}