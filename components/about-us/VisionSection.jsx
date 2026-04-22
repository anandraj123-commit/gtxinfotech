"use client";

export default function VisionSection() {
  const timeline = [
    {
      title: "MISSION",
      content: [
        "We are dedicated to empowering organizations and professionals by providing dependable SAP consulting, hands-on SAP training, and cutting-edge IT solutions.",
        "Drive Real-World Solutions – solving authentic business problems.",
        "Prepare Industry-Ready Experts – practical skills for enterprise.",
        "Cultivate Enduring Trust – long-term partnerships.",
      ],
    },
    {
      title: "VISION",
      content: [
        "Our goal is to become a trusted global leader in technology solutions.",
        "Empowering Growth Through Technology.",
        "Bridging Global Practices with Local Needs.",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] px-6 lg:px-20 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Vision & Mission
        </h1>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line (centered with icons) */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-300"></div>

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start gap-8">

                {/* Icon Wrapper */}
                <div className="relative flex items-center justify-center">
                  
                  {/* Circular Icon */}
                  <div className="z-10 w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition hover:scale-110">
                    
                    {/* Inner Ring */}
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-orange-500">
                      
                      {/* Center Dot */}
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    
                    </div>
                  </div>

                </div>

                {/* Content Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm w-full">
                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-gray-600 leading-relaxed">
                    {item.content.map((text, i) => (
                      <li key={i}>• {text}</li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="mt-20 bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-lg font-semibold shadow-md">
            Collaborate with Us
          </button>
        </div>

      </div>
    </section>
  );
}