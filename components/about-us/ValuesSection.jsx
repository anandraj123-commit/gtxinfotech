"use client";

const values = [
  {
    title: "Ethical Integrity",
    desc: "We believe in doing the right thing—being honest, transparent, and accountable in every interaction to build lasting trust.",
  },
  {
    title: "Focused on Your Success",
    desc: "Our clients’ and learners’ goals are our priority. We listen closely and tailor solutions that deliver real, measurable outcomes.",
  },
  {
    title: "Innovate and Evolve",
    desc: "We embrace the fast pace of technology by continuously updating our skills and exploring new ideas to keep you ahead.",
  },
  {
    title: "Excellence in Delivery",
    desc: "Quality is non-negotiable. We commit to providing precise, reliable, and impactful SAP solutions and training that exceed expectations.",
  }
];

export default function ValuesSection() {
  return (
    <section className="relative w-full bg-[#f3f4f6] px-6 lg:px-20 py-20 overflow-hidden">

      {/* TOP DOTS */}
      <div className="absolute top-10 right-10 grid grid-cols-12 gap-2">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-[#0f1c4d] rounded-full opacity-70"></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Core Values
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
            Our values are the compass guiding our work and relationships. They fuel our passion and commitment to your success.
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
            Collaborate with Us
          </button>
        </div>

        {/* VALUES GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">

          {values.slice(0, 3).map((item, i) => (
            <div key={i} className="space-y-4">

              {/* ICON */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-400 rounded-sm"></div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 text-center max-w-4xl mx-auto">

          {values.slice(3).map((item, i) => (
            <div key={i} className="space-y-4">

              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#0f1c4d] flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-400 rounded-sm"></div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* BOTTOM LEFT STRIPES */}
      <div className="absolute bottom-6 left-6 flex gap-3">
  {Array.from({ length: 10 }).map((_, i) => (
    <span
      key={i}
      className="block w-[2px] h-10 bg-orange-500 transform skew-x-[-20deg]"
    ></span>
  ))}
</div>

    </section>
  );
}
