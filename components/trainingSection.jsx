"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { training } from "../data/training";
import { Star, Users } from "lucide-react";

export default function TrainingSection() {
  const [allTraining, setAllTraining] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const data = training.flatMap((group) =>
      group.category.map((item) => ({
        ...item,
        type: group.type,
        rating: (4 + Math.random()).toFixed(1),
        reviews: Math.floor(Math.random() * 20000 + 10000),
        learners: Math.floor(Math.random() * 90000 + 20000),
      }))
    );

    setAllTraining(data);
  }, []);

  if (!allTraining.length) return null;

  return (
    <section
      className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20"
      id="training-programs"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-orange-500">Our Training</span>{" "}
            <span className="text-teal-400">Programs</span>
          </h2>

          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded" />
        </div>


        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {allTraining.slice(0, visibleCount).map((item) => (

            <Link
              key={`${item.type}-${item.id}`}
              href={`/trainingprogrammes/${encodeURIComponent(
                item.type
              )}/${item.id}`}
            >

              <div
                className={`
                  group relative overflow-hidden
                  min-h-[360px]
                  rounded-2xl

                  bg-white/40
                  backdrop-blur-xl

                  border border-white/60

                  shadow-lg
                  transition-all duration-500

                  hover:-translate-y-3
                  hover:scale-[1.03]

                  ${
                    item.id % 2 === 0
                      ? `
                        hover:border-orange-500
                        hover:shadow-xl
                        hover:shadow-orange-500/30
                      `
                      : `
                        hover:border-teal-400
                        hover:shadow-xl
                        hover:shadow-teal-400/30
                      `
                  }

                  cursor-pointer
                `}
              >

                {/* HOVER COLOR GLOW */}
                <div
                  className={`
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition duration-500

                    ${
                      item.id % 2 === 0
                        ? "bg-orange-500/10"
                        : "bg-teal-400/10"
                    }
                  `}
                />


                {/* IMAGE */}
                <div className="relative w-full h-40 overflow-hidden">

                  <img
                    src={'/images/img2.png' || "/default-service.jpg"}
                    alt={item.title}
                    className="
                      w-full h-full object-cover

                      transition duration-500

                      group-hover:scale-110
                      group-hover:brightness-90
                    "
                  />

                </div>



                {/* ACCENT BORDER */}
                <div
                  className={`
                    absolute left-0 top-44
                    h-14 w-1

                    ${
                      item.id % 2 === 0
                        ? "bg-orange-500 shadow-lg shadow-orange-500/50"
                        : "bg-teal-400 shadow-lg shadow-teal-400/50"
                    }
                  `}
                />



                {/* CONTENT */}
                <div
                  className="
                    relative z-10
                    p-5
                    flex flex-col
                    flex-1
                  "
                >


                  {/* TITLE */}
                  <h3
                    className={`
                      text-lg
                      font-semibold
                      transition

                      ${
                        item.id % 2 === 0
                          ? "text-gray-800 group-hover:text-orange-500"
                          : "text-gray-800 group-hover:text-teal-400"
                      }
                    `}
                  >
                    {item.title}
                  </h3>



                  {/* TYPE */}
                  <span
                    className="
                      text-xs
                      text-gray-500
                      group-hover:text-gray-700
                      transition
                    "
                  >
                    {item.type}
                  </span>



                  {/* DESCRIPTION */}
                  {item.description && (

                    <p
                      className="
                        text-sm
                        text-gray-600

                        group-hover:text-gray-800

                        line-clamp-8
                        mt-2

                        transition
                      "
                      dangerouslySetInnerHTML={{
                        __html: Array.isArray(item.description)
                          ? item.description
                              .map((d) => d.description)
                              .join("")
                          : item.description,
                      }}
                    />

                  )}



                  {/* FOOTER */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      text-sm
                      text-gray-500

                      group-hover:text-gray-700

                      mt-4

                      transition
                    "
                  >


                    {/* RATING */}
                    <div className="flex items-center gap-2">

                      <Star
                        size={16}
                        className="text-orange-500"
                      />

                      <span className="font-semibold">
                        {item.rating}
                      </span>

                      <span>
                        ({item.reviews})
                      </span>

                    </div>



                    <span>|</span>



                    {/* LEARNERS */}
                    <div className="flex items-center gap-2">

                      <Users
                        size={16}
                        className="text-teal-400"
                      />

                      <span className="font-semibold">
                        {item.learners}
                      </span>

                    </div>


                  </div>


                </div>


              </div>


            </Link>

          ))}

        </div>



        {/* LOAD MORE */}
        {visibleCount < allTraining.length && (

          <div className="text-center mt-12">

            <button

              onClick={() =>
                setVisibleCount(allTraining.length)
              }

              className="
                px-6 py-3

                rounded-lg

                bg-orange-500
                text-white

                font-medium

                hover:bg-orange-600

                transition

                shadow-md
              "
            >
              Load More
            </button>

          </div>

        )}


      </div>
    </section>
  );
}