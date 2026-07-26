"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCategory({ category }) {
  if (!category) return null;

  return (
    <section className="w-full py-20 bg-[#f3f4f6]  px-6">
      <div className="mx-auto space-y-16">

        {/* SECTION HEADING */}
        <div className="mb-4   pl-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 opacity-100 translate-y-0">
            {/* <span className="text-orange-500">Welcome to </span> */}
            <span className="text-teal-500">{category.title}</span>
          </h2>
        </div>

        {/* TOP ROW */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch mt-20">

{/* LEFT - IMAGE */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex h-full"
>
  <div className="relative rounded-3xl p-2 w-full h-full">
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
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
    <p className="text-gray-600 leading-relaxed max-w-xl">
      {category.description}
    </p>
  )}

<h2 className="py-5 font-semibold text-teal-500">Benefits of {category.title} with Zisan Tech Solutions</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  
    {category.benefits.map((item, index) => (
      <div
        key={index}
        className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
      >
        <h4 className="text-orange-500 font-semibold text-sm mb-1">
          {item.name}
        </h4>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    ))}
  </div>

</motion.div>

</div>

        {/* FEATURES BELOW IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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