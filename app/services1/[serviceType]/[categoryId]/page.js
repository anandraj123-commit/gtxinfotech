import { createMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import  HeroSection from "@/components/service/heroSection";
import ServiceCategory from "@/components/service/serviceCategory";

import TestimonialSection from "@/components/TestimonialSection";

import WorkforceBannerService from "@/components/WorkforceBannerService";
import DeliveryMethodology from "@/components/DeliveryMethodology";
import WhyChooseGTX from "@/components/WhyChooseGTX";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolved = await params;
  const requestedType = decodeURIComponent(resolved.serviceType).replace(/\s+/g, " ").trim().toLowerCase();
  const group = services.find((item) => item.type.replace(/\s+/g, " ").trim().toLowerCase() === requestedType);
  const category = group?.category.find((item) => String(item.id) === String(resolved.categoryId));
  if (!group || !category) notFound();
  return createMetadata({
    title: `${category.title} | ZisanTech Solutions`,
    description: `Explore ${category.title} services from ZisanTech Solutions. Get expert guidance and practical solutions tailored to your business needs.`,
    path: `/services1/${encodeURIComponent(group.type)}/${category.id}`,
    image: category.image,
  });
}

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
    notFound();
  }

  // ✅ Find category
  const selectedCategory = selectedService.category.find(
    (cat) => String(cat.id) === categoryId
  );

  if (!selectedCategory) {
    notFound();
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