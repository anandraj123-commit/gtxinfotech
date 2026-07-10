"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaSearch, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const features = [
  {
    icon: FaSearch,
    title: "Driving Business Success",
    desc: `We collaborate with companies to enhance workflows, boost productivity, and fuel expansion by offering:
• Comprehensive SAP Consulting and Deployment
• Smooth Integration Across Systems
• Dependable Support and Continuous Improvement Services`,
  },
  {
    icon: FaCheckCircle,
    title: "Empowering Aspiring SAP Experts",
    desc: `We believe that well-developed skills create lasting opportunities. Our programs offer:
• Simulated project experiences for practical learning
• Interactive system training sessions
• Industry-aligned educational content
• Career-centric teaching methods

We focus on equipping you with the SAP expertise necessary for real-world achievement.`,
  },
  {
    icon: FaArrowRight,
    title: "Delivering Smart IT Solutions",
    desc: `Whether integrating with external platforms such as Gate Management, Weighbridge, E-commerce, HRMS, and Bank Integration, or offering tailored IT services, we guarantee smooth and efficient technology collaboration across your systems.`,
  },
];

export default function SuccessSection() {
  return (
    <section className="bg-gray-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Work Is For Your <span className="text-orange-500">Success</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              Our commitment centers on empowering your journey to success. Whether you’re an organization seeking to enhance operational efficiency or an individual aspiring to establish a career in SAP.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              Leveraging deep SAP expertise and modern IT solutions, we help you stay ahead in a rapidly evolving digital world.
            </p>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/work.jpg"
              alt="Work"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src="/images/work.jpg"
                alt="Work process"
                width={600}
                height={500}
                className="object-cover w-full h-[420px] group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            </div>


          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="flex gap-5 items-start group"
                >
                  {/* ICON */}
                  <div className="w-14 h-14 min-w-[56px] min-h-[56px] flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-500 bg-white shadow-md aspect-square transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110">
  <Icon className="text-lg" />
</div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed whitespace-pre-line text-justify">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}