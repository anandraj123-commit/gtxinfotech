"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">

      {/* subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-50 via-white to-teal-50 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10 text-black">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Know Our Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-black leading-relaxed mb-8 text-justify"
          >
            At the core of Zisan Tech Solutions is a commitment to empower organizations through next-generation SAP solutions and tailored IT services that align with strategic business goals, including SAP Training.
            <br /><br />
            Founded by a group of SAP experts, we leverage extensive industry knowledge to craft solutions that deliver measurable business benefits.
            In a digital-first world, our approach focuses on agility, scalability, and long-term value for our clients.
          </motion.p>

          {/* PREMIUM BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/about">
              <button className="relative overflow-hidden bg-orange-500 px-6 py-3 rounded-md text-white font-semibold group shadow-lg hover:shadow-xl transition-all duration-300">
                
                <span className="relative z-10 group-hover:text-black transition duration-300">
                  Learn More
                </span>

                {/* sliding overlay */}
                <span className="absolute inset-0 bg-teal-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                {/* shine effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white blur-md transition duration-500"></span>

              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* glow behind image */}
          <div className="absolute -inset-2 bg-orange-100 rounded-3xl blur-2xl opacity-40"></div>

          {/* floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative  rounded-3xl p-2 shadow-xl bg-white/40 backdrop-blur-lg"
          >
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

        


        </motion.div>
      </div>
    </section>
  );
}