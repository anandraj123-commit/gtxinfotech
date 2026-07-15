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
      desc: "Business Evaluation; Rollout Plan; and Transformation Roadmap",
      content: `Determine a clear implementation approach by analysing business objectives, the current SAP environment, and what needs. Create a plan that is in line with SAP best practices, local needs, and international company objectives.`,
    },
    {
      id: "02",
      title: "Prepare",
      desc: "System Readiness, Governance, and Project Planning",
      content: `Establish clear governance, deadlines, roles, and rollout strategies to build a solid project foundation. Set up teams, settings, and systems to guarantee a seamless execution process.`,
    },
    {
      id: "03",
      title: "Examine",
      desc: "Fit-to-Standard Analysis; Process Harmonization; and Requirement Validation",
      content: `Examine current business procedures and make sure they adhere to the global SAP framework. Determine the necessary changes, process modifications, and translation needed to enable effective implementation.`,
    },
    {
      id: "04",
      title: "Recognize",
      desc: "SAP Setup, Development, Integration, and Testing",
      content: `Set up and modify SAP systems in accordance with company needs. To guarantee solution quality and preparedness, carry out integration tasks, data validation, and thorough testing.`,
    },
    {
      id: "05",
      title: "Deploy",
      desc: "Cutover Scheduling • Go-Live Implementation • User Training",
      content: `Carry out the rollout deployment including production migration, end-user enablement, and thorough cutover operations. Make sure the changeover is managed and has no effect on business operations.`,
    },
    {
      id: "06",
      title: "Run",
      desc: "Support for Hypercare • Ongoing Enhancement • Optimization",
      content: `To stabilize operations, fix problems, and maximize SAP performance, offer post-go-live assistance. Utilize SAP's strengths to allow company innovation and continuously enhance procedures.`,
    },
  ];

  return (
    <section className="w-full bg-[f3f4f6] py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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