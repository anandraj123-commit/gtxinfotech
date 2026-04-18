// components/WhyChooseGTX.jsx

"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Layers,
  TrendingUp,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Experienced SAP Consultants",
    description:
      "Certified professionals with live project expertise ensure your SAP initiatives are executed with precision and insight.",
  },
  {
    icon: Layers,
    title: "Holistic SAP Services",
    description:
      "From initial consultation to full-scale implementation and support, we deliver scalable solutions tailored to your unique challenges.",
  },
  {
    icon: TrendingUp,
    title: "Business-Centric Technology Approach",
    description:
      "We prioritize solutions that enhance your business processes and drive tangible results.",
  },
  {
    icon: GraduationCap,
    title: "Interactive SAP Training Programs",
    description:
      "Our training emphasizes practical learning through real-time projects, enabling you to apply knowledge confidently.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function WhyChooseGTX() {
  return (
    <section className="relative py-20 px-6 bg-[#0f172a] overflow-hidden">
      
      {/* Gradient Glow Background */}
      <div className="absolute w-96 h-96 bg-[#22d3ee]/20 blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-[#ff6a00]/20 blur-3xl bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          <span className="text-white">Why Choose </span>
          <span className="bg-gradient-to-r from-[#ff6a00] to-[#22d3ee] bg-clip-text text-transparent">
            GTX InfoTech?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg mb-14"
        >
          Focused on Delivering Value Through SAP & IT Solutions
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#22d3ee]/40 group-hover:shadow-[0_0_25px_#22d3ee33] transition"></div>

                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#22d3ee] shadow-lg group-hover:scale-110 transition">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom Hover Line */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#ff6a00] to-[#22d3ee] group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}