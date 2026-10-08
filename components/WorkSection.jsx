"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkSection() {
  return (
    <section
      className="
        flex
        w-full
        flex-col
        overflow-hidden
        bg-gray-50
        md:flex-row
        lg:min-h-screen
      "
    >
      {/* =====================================================
          LEFT IMAGE
      ====================================================== */}
      <div
        className="
          relative
          h-[260px]
          w-full
          overflow-hidden

          sm:h-[340px]

          md:h-auto
          md:min-h-[700px]
          md:w-[45%]

          lg:min-h-screen
          lg:w-1/2
        "
      >
        <Image
          src="/images/worksection.jpg"
          alt="Team working"
          fill
          priority
          sizes="
            (max-width: 767px) 100vw,
            50vw
          "
          className="
            object-cover
            object-center
            scale-105
            transition-transform
            duration-700
            hover:scale-110
          "
        />

        {/* ORANGE OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-orange-500/30
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          RIGHT CONTENT
      ====================================================== */}
      <div
        className="
          flex
          w-full
          items-center
          bg-gray-50

          md:w-[55%]

          lg:w-1/2
        "
      >
        <div
          className="
            mx-auto
            w-full
            px-4
            py-12

            sm:px-6
            sm:py-14

            md:px-8
            md:py-12

            lg:px-10
            lg:py-16

            xl:px-14

            2xl:px-16
          "
        >
          {/* =================================================
              HEADING
          ================================================== */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              mb-4
              text-3xl
              font-bold
              leading-tight
              text-gray-900

              sm:text-4xl
              sm:mb-5

              md:text-3xl

              lg:text-4xl

              xl:text-5xl
              xl:mb-6
            "
          >
            We’re A Digital{" "}
            <span className="text-orange-500">
              SAP & IT
            </span>{" "}
            <span className="text-teal-400">
              Solutions
            </span>{" "}
            Agency
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              mb-8
              text-sm
              leading-7
              text-gray-600
              text-justify

              sm:text-base
              sm:leading-7
              sm:mb-9

              lg:leading-8

              xl:mb-10
            "
          >
            Transforming Businesses and Careers with{" "}
            <span className="font-medium text-teal-400">
              Smart SAP Solutions
            </span>
            , Practical Training & Innovative IT Services.

            <br />
            <br />

            We deliver results that fuel your success. Whether you’re scaling
            your business or advancing your SAP career, we help you grow
            smarter and stronger.
          </motion.p>

          {/* =================================================
              FEATURES
          ================================================== */}
          <div
            className="
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
              sm:gap-5

              md:grid-cols-1

              lg:grid-cols-2
              lg:gap-5

              xl:gap-6
            "
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                }}
                className="
                  group
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-white/30
                  bg-white/20
                  p-4
                  shadow-md
                  backdrop-blur-lg
                  transition-all
                  duration-300

                  sm:gap-4
                  sm:p-5

                  md:p-4

                  lg:p-5

                  hover:bg-orange-500/90
                  hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)]
                "
              >
                {/* =============================================
                    ICON
                ============================================== */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    min-h-[44px]
                    min-w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-100
                    text-lg
                    text-orange-500
                    transition
                    duration-300

                    sm:h-12
                    sm:w-12
                    sm:min-h-[48px]
                    sm:min-w-[48px]
                    sm:text-xl

                    group-hover:scale-110
                    group-hover:bg-white
                    group-hover:text-orange-500
                  "
                >
                  {item.icon}
                </div>

                {/* =============================================
                    TEXT
                ============================================== */}
                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      mb-1
                      text-base
                      font-semibold
                      leading-snug
                      text-gray-900
                      transition
                      duration-300

                      sm:text-[17px]

                      group-hover:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      whitespace-pre-line
                      text-sm
                      leading-6
                      text-gray-600
                      text-justify
                      transition
                      duration-300

                      group-hover:text-orange-100
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
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
    title: "SAP Consulting",
    desc: "Expert guidance on SAP S/4HANA deployment, system integration, and business process optimization.",
  },
  {
    icon: "⚙️",
    title: "SAP Training",
    desc: "Hands-on live projects, SAP system access, and career-focused mentorship programs.",
  },
  {
    icon: "📈",
    title: "IT Solutions",
    desc: "Seamless integration across HRMS, E-commerce, banking, and enterprise systems.",
  },
  {
    icon: "📣",
    title: "Our Approach",
    desc: "Analyze → Design → Deploy → Support with real-world impact.",
  },
  {
    icon: "🔐",
    title: "Data Security",
    desc: "Robust data protection strategies ensuring secure transactions and compliance with industry standards.",
  },
  {
    icon: "☁️",
    title: "Cloud Integration",
    desc: "Scalable cloud solutions enabling flexible, cost-effective, and future-ready business operations.",
  },
];