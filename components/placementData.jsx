"use client";
import { motion } from "framer-motion";

const placementData = [
  {
    id: "01",
    title: "Creating a Resume",
    desc: "With professional advice, create a polished, ATS-friendly résumé.",
  },
  {
    id: "02",
    title: "Applications for Jobs",
    desc: "Get startups and top hiring firms to see your profile.",
  },
  {
    id: "03",
    title: "Interview Preparation",
    desc: "Use technical rounds, practice interviews, and HR advice to get ready.",
  },
  {
    id: "04",
    title: "Placement Assistance",
    desc: "Full assistance from interview through hiring process and onboarding.",
  },
];

export default function PlacementSupport() {
  return (
    <section className=" py-16 px-6 mt-5">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Zisan Tech Solutions Placement Support
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Build your resume, practice interviews, and apply for real SAP roles 
            to get fully prepared for the workforce.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementData.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
            >
              {/* NUMBER BADGE */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold mb-4">
                {item.id}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}