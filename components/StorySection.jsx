"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="bg-[white] py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-black">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-black"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Know Our Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-black leading-relaxed mb-8 text-justify"
          >
            At the core of Nisan Tech Solutions is a commitment to empower organizations through next-generation SAP solutions and tailored IT services that align with strategic business goals, including SAP Training.
            <br /><br />
            Founded by a group of SAP experts, we leverage extensive industry knowledge to craft solutions that deliver measurable business benefits.
            In a digital-first world, our approach focuses on agility, scalability, and long-term value for our clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/about">
              <button className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md text-white font-semibold group">
                
                <span className="relative z-10 group-hover:text-black transition duration-300">
                  Learn More
                </span>

                <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          
          {/* Border container */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border-2 border-orange-500 rounded-3xl p-2"
          >
            {/* Image INSIDE */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="Team"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -left-10 top-10 grid grid-cols-2 gap-3"
          >
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                className="w-2 h-2 bg-orange-500 rounded-full"
              ></motion.span>
            ))}
          </motion.div>

          {/* Decorative lines */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -right-10 bottom-10 flex flex-col gap-3"
          >
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                animate={{ rotate: [45, 60, 45] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                className="w-12 h-[2px] bg-orange-500 rotate-45"
              ></motion.span>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}