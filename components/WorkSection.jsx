"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
        <Image
          src="/images/worksection.jpg"
          alt="Team working"
          fill
          className="object-cover scale-105 hover:scale-110 transition duration-700"
        />

        {/* ORANGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-transparent"></div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 bg-white flex items-center">
        <div className="max-w-xl mx-auto px-6 py-16">
          
          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
          >
            We’re A Digital{" "}
            <span className="text-orange-500">SAP & IT</span>{" "}
            <span className="text-teal-400">Solutions</span> Agency
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 mb-10 text-justify leading-relaxed"
          >
            Transforming Businesses and Careers with{" "}
            <span className="text-teal-400 font-medium">
              Smart SAP Solutions
            </span>
            , Practical Training & Innovative IT Services.
            <br /><br />
            We deliver results that fuel your success. Whether you’re scaling
            your business or advancing your SAP career, we help you grow
            smarter and stronger.
          </motion.p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="
                group flex gap-4 items-start p-5 rounded-xl
                bg-white/20 backdrop-blur-lg border border-white/30
                shadow-md
                hover:bg-orange-500/90
                hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)]
                transition-all duration-300
              "
            >
              
              {/* ICON */}
              <div
                className="
                  w-12 h-12 flex items-center justify-center rounded-full
                  bg-orange-100 text-orange-500 text-xl shrink-0
                  transition duration-300
                  group-hover:bg-white
                  group-hover:text-orange-500
                  group-hover:scale-110
                "
              >
                {item.icon}
              </div>
            
              {/* TEXT */}
              <div>
                <h3
                  className="
                    font-semibold mb-1 text-gray-900
                    transition duration-300
                    group-hover:text-white
                  "
                >
                  {item.title}
                </h3>
            
                <p
                  className="
                    text-gray-600 text-sm whitespace-pre-line text-justify
                    transition duration-300
                    group-hover:text-orange-100
                  "
                >
                  {item.desc}
                </p>
              </div>
            
            </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "🌐",
    title: "SAP Consulting",
    desc: "Expert guidance on SAP S/4HANA deployment, system integration, and business process optimization.",
  },
  {
    icon: "⚙️",
    title: "SAP Training",
    desc: "Hands-on live projects, SAP system access, and career-focused mentorship programs.",
  },
  {
    icon: "📈",
    title: "IT Solutions",
    desc: "Seamless integration across HRMS, E-commerce, banking, and enterprise systems.",
  },
  {
    icon: "📣",
    title: "Our Approach",
    desc: "Analyze → Design → Deploy → Support with real-world impact.",
  },
];