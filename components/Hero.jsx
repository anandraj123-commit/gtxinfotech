// export default function Hero() {
//     return (
//       <section className="relative h-screen w-full">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('/images/hero.jpg')" }}
//         ></div>
  
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/70"></div>
  
//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          
//           <h1 className="text-4xl md:text-6xl font-semibold mb-6">
//             Experience The New Reality
//           </h1>
  
//           <p className="max-w-2xl text-gray-300 mb-8">
//           We provide perfect IT solutions & technology.During this time, we’ve built a reputation for excellent clients satisfaction as evidenced by our
//           </p>
  
//           <button className="relative overflow-hidden border border-white px-6 py-3 text-white group">
  
//   <span className="relative z-10 group-hover:text-black transition duration-300">
//     Explore Us
//   </span>

//   <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

// </button>
  
//         </div>
//       </section>
//     );
//   }

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🔥 FLOATING IMAGE (NEW STYLE) */}
      <motion.div
        initial={{ y: 0, rotate: 0, scale: 1.05 }}
        animate={{
          y: [-10, 10, -10],          // 👈 vertical float
          rotate: [-0.5, 0.5, -0.5],  // 👈 micro rotation (cinematic feel)
          scale: [1.05, 1.08, 1.05],  // 👈 slight breathing zoom
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gtxinfotech.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 LIGHT RAYS EFFECT */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
      />

      {/* 🔥 DEPTH SHADOW */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

    </section>
  );
}