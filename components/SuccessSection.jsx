"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: FaSearch,
    title: "Driving Business Success",
    desc: `We collaborate with companies to enhance workflows, boost productivity, and fuel expansion by offering:
• Comprehensive SAP Consulting and Deployment
• Smooth Integration Across Systems
• Dependable Support and Continuous Improvement Services`,
  },
  {
    icon: FaCheckCircle,
    title: "Empowering Aspiring SAP Experts",
    desc: `We believe that well-developed skills create lasting opportunities. Our programs offer:
• Simulated project experiences for practical learning
• Interactive system training sessions
• Industry-aligned educational content
• Career-centric teaching methods

We focus on equipping you with the SAP expertise necessary for real-world achievement.`,
  },
  {
    icon: FaArrowRight,
    title: "Delivering Smart IT Solutions",
    desc: `Whether integrating with external platforms such as Gate Management, Weighbridge, E-commerce, HRMS, and Bank Integration, or offering tailored IT services, we guarantee smooth and efficient technology collaboration across your systems.`,
  },
];

export default function SuccessSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-gray-50
        px-4
        py-12
        sm:px-6
        sm:py-14
        md:px-8
        md:py-16
        lg:px-12
        lg:py-20
        xl:px-16
        2xl:px-20
      "
    >
      <div className="mx-auto w-full max-w-[1600px]">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            mb-12

            sm:gap-10
            sm:mb-14

            md:grid-cols-2
            md:gap-10
            md:mb-16

            lg:gap-14
            lg:mb-20

            xl:gap-16
          "
        >
          {/* TEXT */}
          <div className="w-full">
            <h2
              className="
                mb-4
                text-3xl
                font-bold
                leading-tight
                text-gray-900

                sm:text-4xl
                sm:mb-5

                md:text-4xl

                lg:text-5xl
                lg:mb-6

                xl:text-[52px]
              "
            >
              Our Work Is For Your{" "}
              <span className="text-orange-500">
                Success
              </span>
            </h2>

            <p
              className="
                mb-4
                text-sm
                leading-7
                text-gray-600
                text-justify

                sm:text-base
                sm:leading-7

                lg:text-[17px]
                lg:leading-8
              "
            >
              Our commitment centers on empowering your journey to success.
              Whether you’re an organization seeking to enhance operational
              efficiency or an individual aspiring to establish a career in
              SAP.
            </p>

            <p
              className="
                mb-4
                text-sm
                leading-7
                text-gray-600
                text-justify

                sm:text-base
                sm:leading-7

                lg:text-[17px]
                lg:leading-8
              "
            >
              Leveraging deep SAP expertise and modern IT solutions, we help
              you stay ahead in a rapidly evolving digital world.
            </p>

            <p
              className="
                text-sm
                leading-7
                text-gray-600
                text-justify

                sm:text-base
                sm:leading-7

                lg:text-[17px]
                lg:leading-8
              "
            >
              With a strong foundation in SAP technologies and innovative IT
              strategies, we empower businesses to adapt, grow, and succeed in
              today’s fast-changing digital landscape.
            </p>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              h-[220px]
              w-full
              overflow-hidden
              rounded-xl
              shadow-lg

              sm:h-[280px]
              sm:rounded-2xl

              md:h-[300px]

              lg:h-[340px]

              xl:h-[380px]
            "
          >
            <Image
              src="/images/our-work-is-for-your-success-zisan-tech-solutions.png"
              alt="Work"
              fill
              sizes="
                (max-width: 767px) 100vw,
                (max-width: 1200px) 50vw,
                700px
              "
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10

            sm:gap-12

            md:grid-cols-2
            md:gap-10

            lg:gap-14

            xl:gap-16
          "
        >

          {/* ===================================================
              LEFT IMAGE
          ==================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-xl
                shadow-xl

                sm:rounded-2xl

                lg:rounded-3xl
              "
            >
              <Image
                src="/images/our work is your success 2nd image.png"
                alt="Work process"
                width={600}
                height={500}
                sizes="
                  (max-width: 767px) 100vw,
                  (max-width: 1200px) 50vw,
                  700px
                "
                className="
                  h-[280px]
                  w-full
                  object-cover
                  transition
                  duration-700

                  sm:h-[350px]

                  md:h-[440px]

                  lg:h-[520px]

                  xl:h-[580px]

                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  transition
                  duration-300
                  group-hover:bg-black/20
                "
              />
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT CONTENT
          ==================================================== */}
          <div
            className="
              w-full
              space-y-8

              sm:space-y-9

              md:space-y-8

              lg:space-y-10
            "
          >
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    flex
                    w-full
                    items-start
                    gap-3

                    sm:gap-4

                    lg:gap-5
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      min-h-[44px]
                      min-w-[44px]
                      aspect-square
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-orange-500
                      bg-white
                      text-orange-500
                      shadow-md
                      transition-all
                      duration-300

                      sm:h-12
                      sm:w-12
                      sm:min-h-[48px]
                      sm:min-w-[48px]

                      lg:h-14
                      lg:w-14
                      lg:min-h-[56px]
                      lg:min-w-[56px]

                      group-hover:scale-110
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >
                    <Icon
                      className="
                        text-base
                        sm:text-lg
                      "
                    />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className="
                        mb-2
                        text-lg
                        font-semibold
                        leading-snug
                        text-gray-900
                        transition

                        sm:text-xl

                        group-hover:text-orange-500
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        whitespace-pre-line
                        text-sm
                        leading-7
                        text-gray-600
                        text-justify

                        sm:text-base
                        sm:leading-7

                        lg:leading-8
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}