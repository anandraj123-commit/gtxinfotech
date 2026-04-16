"use client";

import Image from "next/image";
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
    <section className="bg-gray-100 py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Work Is For Your Success
            </h2>

            <p className="text-gray-600 max-w-xl mb-4 text-justify">
              Our commitment centers on empowering your journey to success. Whether you’re an organization seeking to enhance operational efficiency or an individual aspiring to establish a career in SAP, we deliver solutions designed to drive meaningful outcomes.
            </p>

            <p className="text-gray-600 max-w-xl text-justify">
              Leveraging extensive SAP expertise, industry insights, and cutting-edge IT services, we help you maintain a competitive edge in today’s digital landscape. Our process is straightforward: listen to your needs, craft tailored solutions, and achieve quantifiable outcomes.
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold shadow-md mx-auto">
            Book an Appointment
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            
            <div className="border-2 border-orange-500 rounded-3xl p-2">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/work.jpg"
                  alt="Work"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="absolute -top-10 right-0 flex gap-3">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="w-10 h-[2px] bg-slate-800 rotate-45"
                ></span>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="flex gap-6 items-start flex-wrap sm:flex-nowrap"
                >
                  
                  {/* ICON */}
                  <div className="relative flex-shrink-0">
                    
                    <div className="absolute -top-2 -left-2 grid grid-cols-5 gap-1 opacity-40">
                      {[...Array(25)].map((_, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 bg-orange-500 rounded-full"
                        ></span>
                      ))}
                    </div>

                    <div className="w-14 h-14 flex items-center justify-center border-2 border-slate-800 rounded-full relative z-10 bg-white">
                      {item.title.includes("Initiate") ? (
                        <Icon className="text-slate-800 rotate-[-45deg]" />
                      ) : (
                        <Icon className="text-slate-800" />
                      )}
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line break-words">
                      {item.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}