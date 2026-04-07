import { training } from "@/data/training";
import HeroSection from "@/components/training/heroSection";
import TrainingType from "@/components/training/TrainingType";
import TrainingCategory from "@/components/training/trainingCategory";
import ClientsSection from "@/components/service/ClientsSection";
import Navbar from "@/components/Navbar";

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
    return <div>Training type not found</div>;
  }

  const selectedCategory = selectedTraining.category.find(
    (cat) => String(cat.id) === String(categoryId)
  );

  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <TrainingType training={selectedTraining} />
      <TrainingCategory category={selectedCategory} />
      <ClientsSection />
    </>
  );
}