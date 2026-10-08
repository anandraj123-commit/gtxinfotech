"use client";

import {
  FaSyncAlt,
  FaCheckCircle,
  FaUserTie,
  FaSearch,
  FaChartBar,
  FaBullseye,
} from "react-icons/fa";

const services = [
  {
    icon: FaSyncAlt,
    title: "Process Optimization",
    desc: "We analyze your existing workflows and identify inefficiencies, then design streamlined, standardized processes that boost productivity and reduce operational friction.",
  },
  {
    icon: FaCheckCircle,
    title: "Tailored SAP Implementation & Support",
    desc: "Our team customizes SAP solutions to fit your specific business requirements, ensuring seamless integration and maximum value from your technology investment.",
  },
  {
    icon: FaUserTie,
    title: "Quality Assurance & Continuous Improvement",
    desc: "Through rigorous testing and ongoing monitoring, we maintain high standards for all solutions, ensuring reliability, accuracy, and performance over time.",
  },
  {
    icon: FaSearch,
    title: "Workforce Enablement",
    desc: "We empower your HR and operations teams by integrating SAP and digital tools that simplify employee management, improve communication, and enhance overall productivity.",
  },
  {
    icon: FaChartBar,
    title: "Scalable Digital Transformation",
    desc: "We develop flexible, future-ready IT frameworks that grow with your business, enabling you to adapt quickly to market changes and new opportunities.",
  },
  {
    icon: FaBullseye,
    title: "Strategic IT Consulting",
    desc: "We provide expert guidance to align your technology roadmap with business goals, helping you make informed decisions and achieve long-term success.",
  },
];

export default function OfferSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
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
      {/* DECORATIVE DOTS */}
      <div
        className="
          pointer-events-none
          absolute
          right-4
          top-6
          grid
          grid-cols-10
          gap-1.5
          opacity-10
          sm:right-6
          sm:top-8
          sm:gap-2
          md:right-10
          md:top-10
          md:opacity-20
        "
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="
              h-1
              w-1
              rounded-full
              bg-teal-500
              sm:h-1.5
              sm:w-1.5
            "
          />
        ))}
      </div>

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        {/* HEADER */}
        <div
          className="
            mx-auto
            mb-10
            w-full
            max-w-5xl
            sm:mb-12
            md:mb-14
            lg:mb-16
          "
        >
          <h2
            className="
              mb-4
              text-center
              text-3xl
              font-bold
              leading-tight
              text-black
              sm:text-4xl
              md:text-4xl
              lg:text-[42px]
            "
          >
            What We Bring to Your Business
          </h2>

          {/* HEADING UNDERLINE */}
          <div
            className="
              mx-auto
              mb-5
              h-1
              w-16
              rounded-full
              bg-teal-500
              sm:mb-6
            "
          />

          <p
            className="
              mx-auto
              text-center
              text-sm
              leading-7
              text-black
              sm:text-base
              sm:leading-7
              md:leading-8
              lg:text-[16px] 
              text-justify
            "
          >
            At Zisan Tech Solutions, we provide dependable, business-focused
            solutions designed to simplify your operations and support
            sustainable growth. Our blend of SAP expertise and IT innovation
            ensures your business runs efficiently and adapts to changing
            needs.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-6
            gap-y-10
            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-12
            lg:grid-cols-3
            lg:gap-x-10
            lg:gap-y-14
            xl:gap-x-12
            xl:gap-y-16
          "
        >
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  items-center
                  px-2
                  text-center
                  sm:px-3
                  md:px-4
                  lg:px-5
                "
              >
                {/* ICON */}
                <div
                  className="
                    relative
                    mx-auto
                    mb-5
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-teal-500
                    sm:mb-6
                    sm:h-18
                    sm:w-18
                    md:h-20
                    md:w-20
                    md:border-4
                  "
                >
                  {/* ROTATING BORDER */}
                  <div
                    className="
                      absolute
                      inset-[-3px]
                      rounded-full
                      border-[3px]
                      border-orange-500
                      border-l-transparent
                      border-t-transparent
                      animate-spin-slow
                      md:inset-[-4px]
                      md:border-4
                    "
                  />

                  {/* ICON */}
                  <Icon
                    className="
                      relative
                      z-10
                      text-xl
                      text-teal-500
                      transition-transform
                      duration-300
                      sm:text-2xl
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mb-3
                    flex
                    items-start
                    justify-center
                    text-lg
                    font-semibold
                    leading-snug
                    text-black
                    transition-colors
                    duration-300
                    sm:text-xl
                    lg:min-h-[56px]
                    group-hover:text-teal-600
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mx-auto
                    max-w-md
                    text-sm
                    leading-6
                    text-black
                    sm:leading-7
                    md:text-[15px]
                    lg:text-sm
                    lg:leading-7
                    xl:text-[15px]
                    text-justify
                  "
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}