import { createMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { training } from "@/data/training";
import HeroSection from "@/components/training/heroSection";
import TrainingType from "@/components/training/TrainingType";
import TrainingCategory from "@/components/training/trainingCategory";
import ClientsSection from "@/components/service/ClientsSection";
import StudentTestimonialSection from "@/components/StudentTestimonial";
import Navbar from "@/components/Navbar";
import WorkforceBannerTraining from '@/components/WorkforceBannerTraining.jsx'

export async function generateMetadata({ params }) {
  const resolved = await params;
  const requestedType = decodeURIComponent(resolved.trainingType).replace(/\s+/g, " ").trim().toLowerCase();
  const group = training.find((item) => item.type.replace(/\s+/g, " ").trim().toLowerCase() === requestedType);
  const category = group?.category.find((item) => String(item.id) === String(resolved.categoryId));
  if (!group || !category) notFound();
  return createMetadata({
    title: `${category.title} Training | ZisanTech Solutions`,
    description: `Build practical ${category.title} skills with SAP training from ZisanTech Solutions. Explore hands-on learning for your professional development.`,
    path: `/trainingprogrammes/${encodeURIComponent(group.type)}/${category.id}`,
    image: category.image,
  });
}

export default async function TrainingPage({ params }) {
  // ✅ unwrap params
  const resolvedParams = await params;
  const trainingType = decodeURIComponent(resolvedParams.trainingType)
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const categoryId = resolvedParams.categoryId;
  console.log("URL:", resolvedParams.trainingType);
  console.log("Decoded:", trainingType);

  // ✅ robust matching
  const selectedTraining = training.find(
    (item) =>
      item.type
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase() === trainingType
  );

  if (!selectedTraining) {
    console.log("Available types:", training.map(t => t.type));
    notFound();
  }

  const selectedCategory = selectedTraining.category.find(
    (cat) => String(cat.id) === String(categoryId)
  );

  if (!selectedCategory) {
    notFound();
  }

  return (
    <>
      {/* <Navbar /> */}
      <WorkforceBannerTraining/>
      <HeroSection />
      <TrainingType training={selectedTraining} />
      <TrainingCategory category={selectedCategory} />
      {/* <ClientsSection /> */}
      <StudentTestimonialSection/>
    </>
  );
}