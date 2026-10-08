"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { training } from "../data/training";

export default function TrainingSection() {
  const [allTraining, setAllTraining] = useState([]);

  useEffect(() => {
    const data = training
      .flatMap((group) =>
        group.category.map((item) => ({
          ...item,
          type: group.type,
        }))
      )
      .slice(0, -3);

    setAllTraining(data);
  }, []);

  if (!allTraining.length) return null;

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-12
        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
          px-4
          text-center
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* HEADER */}
        <div
          className="
            mx-auto
            mb-9
            w-full
            max-w-4xl
            sm:mb-10
            md:mb-12
            lg:mb-14
          "
        >
          {/* SMALL HEADING */}
          <p
            className="
              mb-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-orange-500
              sm:mb-3
              sm:text-sm
              sm:tracking-widest
            "
          >
            Training We’re Offering
          </p>

          {/* MAIN HEADING */}
          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-black
              sm:text-4xl
              md:text-[42px]
              lg:text-5xl
            "
          >
            We’re Dedicated to Serve
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            you All Time
          </h2>

          {/* HEADING LINE */}
          <div
            className="
              mx-auto
              mt-5
              h-1
              w-16
              rounded-full
              bg-teal-400
              sm:mt-6
            "
          />
        </div>

        {/* TRAINING GRID */}
        <div
          className="
            grid
            grid-cols-2
            gap-3

            min-[420px]:gap-4

            sm:grid-cols-3
            sm:gap-5

            md:grid-cols-4
            md:gap-5

            lg:grid-cols-5
            lg:gap-6

            xl:grid-cols-6
          "
        >
          {allTraining.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={`/trainingprogrammes/${encodeURIComponent(
                item.type
              )}/${item.id}`}
              className="
                group
                block
                h-full
                rounded-xl
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-teal-400
                focus-visible:ring-offset-2
              "
            >
              {/* TRAINING CARD */}
              <div
                className="
                  flex
                  h-[145px]
                  w-full
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/5
                  bg-[#1a2236]
                  px-3
                  py-4
                  text-center
                  text-white
                  shadow-md
                  transition-all
                  duration-300

                  min-[420px]:h-[155px]

                  sm:h-[165px]
                  sm:px-4
                  sm:py-5

                  md:h-[175px]

                  lg:h-[180px]
                  lg:p-5

                  xl:p-6

                  hover:-translate-y-2
                  hover:bg-teal-400
                  hover:shadow-xl
                "
              >
                {/* ICON */}
                <div
                  className="
                    mb-3
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    sm:mb-4
                    sm:h-12
                    sm:w-12
                  "
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.title}
                      loading="lazy"
                      className="
                        mx-auto
                        h-9
                        w-9
                        object-contain
                        brightness-0
                        invert
                        transition-transform
                        duration-300

                        sm:h-10
                        sm:w-10

                        group-hover:scale-110
                      "
                    />
                  )}
                </div>

                {/* TITLE */}
                <p
                  className="
                    w-full
                    break-words
                    text-xs
                    font-semibold
                    leading-5
                    text-white

                    min-[420px]:text-sm

                    sm:leading-6

                    lg:text-[14px]
                  "
                >
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}