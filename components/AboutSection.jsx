"use client";

export default function AboutSection() {
  const data = [
    {
      title: "We're Creative",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nihil, libero, perspiciatis eos provident laborum eum dignissimos.",
      icon: "✏️",
    },
    {
      title: "We're Professional",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nihil, libero, perspiciatis eos provident laborum eum dignissimos.",
      icon: "🏆",
    },
    {
      title: "We're Genius",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nihil, libero, perspiciatis eos provident laborum eum dignissimos.",
      icon: "💭",
    },
  ];

  return (
    <section className="bg-[#3b4148] py-20 text-white">
      
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light">
          About <span className="text-teal-400 font-medium">Us</span>
        </h2>

        {/* underline */}
        <div className="w-20 h-[3px] bg-teal-400 mx-auto mt-4 relative">
          <div className="absolute left-[-80px] top-1/2 w-20 h-[1px] bg-gray-500"></div>
          <div className="absolute right-[-80px] top-1/2 w-20 h-[1px] bg-gray-500"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#2f3640] p-10 text-center rounded-sm 
            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Icon Circle */}
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-gray-500 rounded-full text-3xl text-gray-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl mb-4">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}