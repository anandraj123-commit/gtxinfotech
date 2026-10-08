"use client";

import { useEffect, useState } from "react";

export default function SkillsSection() {
  return (
    <section
      className="
        w-full
        bg-white
        text-black
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
            TITLE
        ====================================================== */}
        <div
          className="
            mb-10
            text-center
            sm:mb-12
            md:mb-14
            lg:mb-16
          "
        >
          <h2
            className="
              text-3xl
              font-semibold
              leading-tight
              sm:text-3xl
              md:text-4xl
            "
          >
            Our{" "}
            <span className="text-teal-500">
              Skills
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-4
              h-1
              w-16
              rounded
              bg-teal-500
            "
          />
        </div>

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
              LEFT CONTENT
          ==================================================== */}
          <div className="w-full min-w-0">
            
            <h3
              className="
                mb-4
                text-xl
                leading-relaxed
                text-gray-700

                sm:text-2xl
                sm:mb-5

                md:text-2xl

                lg:mb-6
                lg:text-3xl
              "
            >
              We’ve skilled in wide range of web and other digital market
              tools.
            </h3>

            <p
              className="
                mb-7
                text-sm
                leading-7
                text-gray-600
                text-justify

                sm:mb-8
                sm:text-base

                md:mb-9

                lg:mb-10
                lg:leading-8
              "
            >
              We combine advanced technical skills, real-world project
              experience, and a strong understanding of business needs to
              create impactful, tailored solutions.
            </p>

            {/* =================================================
                FAKE GRAPH
            ================================================== */}
            <div
              className="
                mt-7
                space-y-3

                sm:mt-8
                sm:space-y-4

                lg:mt-10
              "
            >
              <div className="h-1 w-full rounded bg-gray-300" />

              <div className="h-1 w-5/6 rounded bg-gray-300" />

              <div className="h-1 w-4/6 rounded bg-gray-300" />

              <div className="h-1 w-3/6 rounded bg-gray-300" />
            </div>
          </div>

          {/* ===================================================
              RIGHT SKILLS
          ==================================================== */}
          <div
            className="
              w-full
              min-w-0
              space-y-6

              sm:space-y-7

              md:space-y-7

              lg:space-y-8
            "
          >
            {skills.map((skill, index) => (
              <AnimatedBar
                key={index}
                skill={skill}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


/* ============================================================
   ANIMATED PROGRESS COMPONENT
============================================================ */

function AnimatedBar({ skill, index }) {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(skill.value);
    }, index * 200);

    return () => clearTimeout(timeout);
  }, [skill.value, index]);

  return (
    <div className="w-full">

      {/* =======================================================
          SKILL TITLE + PERCENTAGE
      ======================================================== */}
      <div
        className="
          mb-2
          flex
          w-full
          items-start
          justify-between
          gap-3
          text-xs
          text-gray-600

          sm:text-sm
        "
      >
        <span
          className="
            min-w-0
            flex-1
            leading-5
          "
        >
          {String(index + 1).padStart(2, "0")} — {skill.name}
        </span>

        <span
          className="
            shrink-0
            font-medium
            text-teal-600
          "
        >
          {skill.value}
        </span>
      </div>

      {/* =======================================================
          PROGRESS BAR
      ======================================================== */}
      <div
        className="
          h-1
          w-full
          overflow-hidden
          rounded
          bg-gray-300
        "
      >
        <div
          className="
            h-1
            rounded
            bg-teal-500
            transition-all
            duration-1000
            ease-out
          "
          style={{ width }}
        />
      </div>

    </div>
  );
}


/* ============================================================
   SKILLS DATA
============================================================ */

const skills = [
  {
    name: "SAP Expertise",
    value: "90%",
  },
  {
    name: "System Integration",
    value: "70%",
  },
  {
    name: "SAP Training Excellence",
    value: "80%",
  },
  {
    name: "IT & Digital Solutions",
    value: "95%",
  },
  {
    name: "Business Transformation",
    value: "75%",
  },
];