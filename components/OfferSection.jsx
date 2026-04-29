"use client";

import { 
  FaSyncAlt, 
  FaCheckCircle, 
  FaUserTie, 
  FaSearch, 
  FaChartBar, 
  FaBullseye 
} from "react-icons/fa";

const services = [
  {
    icon: FaSyncAlt,
    title: "Process Optimization",
    desc: "We analyze your existing workflows and identify inefficiencies, then design streamlined, standardized processes that boost productivity and reduce operational friction.",
  },
  {
    icon: FaCheckCircle,
    title: "Tailored SAP Implementation & Support",
    desc: "Our team customizes SAP solutions to fit your specific business requirements, ensuring seamless integration and maximum value from your technology investment.",
  },
  {
    icon: FaUserTie,
    title: "Quality Assurance & Continuous Improvement",
    desc: "Through rigorous testing and ongoing monitoring, we maintain high standards for all solutions, ensuring reliability, accuracy, and performance over time.",
  },

  // ✅ NEW ITEMS
  {
    icon: FaSearch,
    title: "Workforce Enablement",
    desc: "We empower your HR and operations teams by integrating SAP and digital tools that simplify employee management, improve communication, and enhance overall productivity.",
  },
  {
    icon: FaChartBar,
    title: "Scalable Digital Transformation",
    desc: "We develop flexible, future-ready IT frameworks that grow with your business, enabling you to adapt quickly to market changes and new opportunities.",
  },
];

export default function OfferSection() {
  return (
    <section className="bg-gray-100 py-20 relative overflow-hidden">
      
      {/* Decorative dots */}
      <div className="absolute top-10 right-10 grid grid-cols-10 gap-2 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-16  w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What We Bring to Your Business
          </h2>
          <p className="text-gray-600 leading-relaxed">
          At GTX InfoTech, we provide dependable, business-focused solutions designed to simplify your operations and support sustainable growth. Our blend of SAP expertise and IT innovation ensures your business runs efficiently and adapts to changing needs. 
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="text-center group">
                
                <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full border-4 border-slate-800 relative">
                  
                  {/* Rotating border */}
                  <div className="absolute w-full h-full rounded-full border-4 border-orange-500 border-t-transparent border-l-transparent animate-spin-slow"></div>

                  <Icon className="text-2xl text-slate-800 relative z-10" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}