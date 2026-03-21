"use client";

export default function SkillsSection() {
  return (
    <section className="w-full bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl mb-6 text-gray-300 leading-relaxed">
              We’ve skilled in wide range of web and other digital market tools.
            </h3>
            <p className="text-gray-400 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis magni explicabo cum aperiam recusandae sunt accusamus
              totam. Quidem quos fugiat sapiente numquam accusamus quas hic,
              itaque in libero reiciendis tempora!
            </p>

            {/* Fake Graph */}
            <div className="mt-10 space-y-4">
              <div className="h-1 bg-gray-700 rounded" />
              <div className="h-1 bg-gray-700 rounded w-5/6" />
              <div className="h-1 bg-gray-700 rounded w-4/6" />
              <div className="h-1 bg-gray-700 rounded w-3/6" />
            </div>
          </div>

          {/* Right Skills */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>
                    {String(index + 1).padStart(2, "0")} — {skill.name}
                  </span>
                </div>
                <div className="w-full h-1 bg-gray-700 rounded">
                  <div
                    className="h-1 bg-teal-400 rounded"
                    style={{ width: skill.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  { name: "Business Development", value: "90%" },
  { name: "Analysis", value: "70%" },
  { name: "Design", value: "80%" },
  { name: "iOS Development", value: "95%" },
  { name: "Android Development", value: "75%" },
];
