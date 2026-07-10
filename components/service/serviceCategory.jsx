"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCategory({ category }) {
  if (!category) return null;

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full h-[700px] md:h-[800px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto h-full flex items-center px-6 md:px-12 lg:px-20">
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl"
        >

          {/* HEADING */}
          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6"
          >
            {category.title}
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={item}
            className="text-gray-200 text-lg leading-relaxed mb-10"
          >
            {category.description}
          </motion.p>

          {/* FEATURES */}
          <motion.div variants={container} className="space-y-5">
            {category.items.map((text, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4"
              >
                {/* LINE */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  transition={{ duration: 0.4 }}
                  className="h-[2px] bg-orange-500 mt-3"
                />

                {/* TEXT */}
                <p className="text-gray-100 leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}