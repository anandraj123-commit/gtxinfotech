"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCategory({ category }) {
  if (!category) return null;

  return (
    <section className="w-full py-20 bg-[#f3f4f6]  px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* SECTION HEADING */}
        <div className="mb-4   pl-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 opacity-100 translate-y-0">
            <span className="text-orange-500">Welcome to </span>
            <span className="text-teal-500">{category.title}</span>
          </h2>
        </div>

        {/* TOP ROW */}
        <div className="grid md:grid-cols-2 gap-12 items-start mt-20">

{/* LEFT - IMAGE */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-start"
>
  <div className="relative rounded-3xl p-2 w-full">
    <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
      <Image
        src={category.image}
        alt={category.title}
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>
</motion.div>

{/* RIGHT - CONTENT */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col justify-start h-full"
>
  {category.description?.trim() !== "" && (
    <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
      {category.description}
    </p>
  )}
</motion.div>

</div>

        {/* FEATURES BELOW IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {category.items.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-5 rounded-xl border border-gray-100 hover:shadow-lg transition bg-white"
            >
              <span className="mt-2 w-2 h-2 bg-teal-500 rounded-full" />

              <div>
                {typeof text === "string" ? (
                  <p className="text-gray-700">{text}</p>
                ) : (
                  <>
                    <p className="font-semibold text-black">
                      {text.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {text.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}