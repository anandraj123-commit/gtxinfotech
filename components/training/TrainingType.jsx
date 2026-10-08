
"use client";

import { motion, useReducedMotion } from "framer-motion";

const colors = [
  "from-orange-100 to-orange-200",
  "from-blue-100 to-blue-200",
  "from-green-100 to-green-200",
  "from-purple-100 to-purple-200",
  "from-pink-100 to-pink-200",
  "from-yellow-100 to-yellow-200",
];

export default function TrainingType({ training }) {
  const reduceMotion = useReducedMotion();

  if (!training) return null;

  const items = Array.isArray(training.items)
    ? training.items
    : [];

  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#f3f4f6] font-sans
        px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16
        2xl:px-20
      "
    >
      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* HEADING */}
          <div className="mb-7 text-center sm:mb-9 lg:mb-10">
            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                mx-auto max-w-4xl
                break-words
                text-3xl font-semibold
                leading-tight tracking-tight
                text-gray-900
                sm:text-4xl
                lg:text-[44px]
                xl:text-5xl
              "
            >
              {training.type}
            </motion.h2>

            {/* ACCENT LINE */}
            <div
              className="
                mx-auto mt-5 h-1 w-20
                rounded-full
                bg-gradient-to-r
                from-orange-500 to-teal-400
              "
            />
          </div>

          {/* DESCRIPTION */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="
              mb-8 min-w-0
              break-words
              text-sm leading-7
              text-gray-600
              sm:mb-10 sm:text-base
              sm:leading-8
              lg:mb-12

              [&_h1]:mb-4
              [&_h1]:text-2xl
              [&_h1]:font-bold
              [&_h1]:text-gray-900
              sm:[&_h1]:text-3xl

              [&_h2]:mb-3
              [&_h2]:text-xl
              [&_h2]:font-semibold
              [&_h2]:text-gray-900
              sm:[&_h2]:text-2xl

              [&_h3]:mb-3
              [&_h3]:text-lg
              [&_h3]:font-semibold
              [&_h3]:text-gray-800
              sm:[&_h3]:text-xl

              [&_p]:mb-4
              [&_p]:text-gray-600

              [&_ul]:mb-4
              [&_ul]:mt-3
              [&_ul]:list-disc
              [&_ul]:pl-5
              sm:[&_ul]:pl-6

              [&_ol]:mb-4
              [&_ol]:list-decimal
              [&_ol]:pl-5

              [&_li]:mb-2
              [&_li]:text-gray-700

              [&_a]:break-all
              [&_a]:text-teal-600
              [&_a]:underline

              [&_img]:h-auto
              [&_img]:max-w-full

              [&_table]:block
              [&_table]:max-w-full
              [&_table]:overflow-x-auto
            "
            dangerouslySetInnerHTML={{
              __html:
                training.description ||
                "Explore our professional training programs designed to enhance your skills and career growth.",
            }}
          />

          {/* TRAINING FEATURES */}
          {items.length > 0 && (
            <div
              className="
                grid grid-cols-1
                gap-4
                sm:grid-cols-2 sm:gap-5
                lg:gap-6
              "
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4 }
                  }
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.05, 0.3),
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  className={`
                    group flex min-w-0
                    items-center
                    rounded-xl
                    border border-white/60
                    bg-gradient-to-br
                    ${colors[index % colors.length]}
                    p-5
                    shadow-sm
                    transition-shadow duration-300
                    hover:shadow-md
                    sm:p-6
                    lg:min-h-[100px]
                  `}
                >
                  {/* NUMBER */}
                  <div
                    className="
                      mr-4 flex h-10 w-10
                      shrink-0 items-center
                      justify-center
                      rounded-full
                      bg-white/80
                      text-sm font-bold
                      text-gray-900
                      sm:h-11 sm:w-11
                    "
                  >
                    {index + 1}
                  </div>

                  {/* FEATURE TEXT */}
                  <p
                    className="
                      min-w-0 break-words
                      text-sm font-medium
                      leading-6 text-gray-800
                      sm:text-base sm:leading-7
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
