"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[white] text-black py-20 px-6">
      <div className="max-w-full mx-auto">

        {/* TOP H1 */}
        <h1 className="text-4xl text-center font-semibold mb-4 text-gray-900 opacity-100 translate-y-0">
          <span className="text-orange-500">Welcome to </span> <span className="text-teal-500">Zisan Tech Solutions</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-start mt-20">

  {/* LEFT CONTENT */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col justify-start h-full"
  >
    <h2 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">
    Accelerate business success through SAP excellence and technology
    </h2>

    <p className="text-black leading-relaxed mb-8 text-justify">
Zisan Tech Solutions is a leading SAP and IT consulting firm dedicated to transforming business operations through innovative technology and strategic expertise.

We specialize in delivering end-to-end SAP solutions that enhance efficiency, optimize workflows, and drive measurable business growth.

Our team partners with organizations to implement scalable digital solutions, ensuring seamless integration and long-term success.

From system implementation to continuous support, we empower businesses to navigate their digital transformation journey with confidence.

With a focus on performance and reliability, Zisan Tech Solutions helps enterprises unlock their full potential through smart and future-ready IT solutions.    </p>


<p className="text-black leading-relaxed mb-8 text-justify">
Zisan Tech Solutions stands at the forefront of SAP and IT consulting, helping businesses modernize their operations through intelligent and future-ready technologies.

We bring deep industry expertise to design and implement customized SAP solutions that streamline processes, improve productivity, and accelerate digital growth.

Our approach focuses on understanding each client’s unique challenges and delivering scalable systems that seamlessly integrate with existing infrastructures.

From initial strategy and deployment to ongoing optimization and support, we ensure a smooth and impactful digital transformation journey.

At Zisan Tech Solutions, we are committed to delivering reliable, high-performance solutions that empower organizations to innovate, adapt, and lead in a rapidly evolving digital landscape.
</p>

  </motion.div>

  {/* RIGHT IMAGE */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="relative flex justify-start"
  >
    {/* Border Frame */}
    <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl translate-x-4 translate-y-4 z-10"></div>

    {/* Image */}
    <div className="relative rounded-3xl overflow-hidden z-0 w-full">
      <Image
        src="/images/We create best solution for you- service page images.png"
        alt="Handshake"
        width={600}
        height={500}
        className="object-cover w-full h-full"
      />
    </div>

    {/* Dotted Pattern */}
    <div className="absolute top-4 right-4 grid grid-cols-6 gap-2">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="w-2 h-2 bg-orange-500 rounded-full"
        ></span>
      ))}
    </div>
  </motion.div>

</div>
      </div>
    </section>
  );
}