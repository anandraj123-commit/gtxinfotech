"use client";

import Image from "next/image";

export default function WorkSection() {
  return (
    <section className="w-full min-h-screen flex">
      {/* Left Image */}
      <div className="w-1/2 relative hidden md:block">
        <Image
          src="/images/worksection.jpg" // place your image in /public/hero.jpg
          alt="Team working"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 bg-slate-800 text-white flex items-center">
        <div className="max-w-xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            We’re A Digital Design Agency.
          </h1>
          <p className="text-gray-300 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            tempora itaque, autem dolores culpa cum mollitia voluptate nesciunt
            voluptatibus quasi.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-teal-400 text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
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
    title: "SEO Optimized",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: "⚙️",
    title: "Easy Customization",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: "📈",
    title: "SEO Optimized",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: "📣",
    title: "Easy Customization",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];
