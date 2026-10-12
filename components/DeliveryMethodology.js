"use client";

import { useEffect, useState } from "react";

export default function DeliveryMethodology() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const steps = [
    {
      id: "01",
      title: "Discover",
      desc: "Business Goals • Challenges • Requirements",
      content: `We understand your vision, business needs, and challenges to identify opportunities and define the right direction for your digital journey.`,
    },
    {
      id: "02",
      title: "Strategize",
      desc: "Project Roadmap • Resources • Timelines",
      content: `We create a clear action plan with defined priorities, realistic milestones, and the right resources to keep your project focused and on track.`,
    },
    {
      id: "03",
      title: "Design",
      desc: "Creative Thinking • Solution Design • User Experience",
      content: `We transform ideas into practical solution designs that combine innovation, usability, and business value while keeping future growth in mind.`,
    },
    {
      id: "04",
      title: "Develop",
      desc: "Development • System Integration • Quality Testing",
      content: `We build and connect digital solutions, test functionality, and refine performance to deliver reliable outcomes aligned with your requirements.`,
    },
    {
      id: "05",
      title: "Launch",
      desc: "Deployment • User Guidance • Knowledge Transfer",
      content: `We support a smooth launch, help users adapt to new solutions, and share the knowledge needed to use technology confidently and effectively.`,
    },
    {
      id: "06",
      title: "Support",
      desc: "Ongoing Support • Optimization • Continuous Growth",
      content: `We provide ongoing assistance, identify improvement opportunities, and help your business adapt to changing needs and emerging technologies.`,
    },
  ];

  return (
    <section className="w-full bg-[f3f4f6] py-24 px-6 lg:px-20">
      <div className="mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 text-gray-900 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Delivery Methodology
          </h2>

          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* STEP NUMBER */}
              <div className="text-orange-500 font-bold text-lg mb-2">
                {step.id}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* SUBTITLE */}
              <p className="text-sm text-teal-400 font-medium mb-4">
                {step.desc}
              </p>

              {/* CONTENT (UNCHANGED) */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.content}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}