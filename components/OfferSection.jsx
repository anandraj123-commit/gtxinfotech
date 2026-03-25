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
    title: "Method Development",
    desc: "Strategic method development for business excellence and progress.",
  },
  {
    icon: FaCheckCircle,
    title: "Quality Assurance",
    desc: "Quality excellence for optimal and sustainable business operation.",
  },
  {
    icon: FaUserTie,
    title: "Human Resources",
    desc: "Optimize human resources for sustainable business growth.",
  },

  // ✅ NEW ITEMS
  {
    icon: FaSearch,
    title: "Policy Compliance",
    desc: "Strategic policy compliance for seamless business operations.",
  },
  {
    icon: FaChartBar,
    title: "Business Strategies",
    desc: "Unlocking growth potential using dynamic business strategies.",
  },
  {
    icon: FaBullseye,
    title: "Management System",
    desc: "Maximize productivity with our advanced management structure.",
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
        <div className="mb-16 max-w-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Can Offer You
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Optimize your journey with our consulting services, delivering
            personalized solutions for success.
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