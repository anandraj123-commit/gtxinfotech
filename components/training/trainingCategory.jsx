
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlacementSupport from "../placementData";

const tabs = ["Overview", "Course Content", "Join Us"];

const benefits = [
  {
    title: "Trainers with Industry Experience",
    desc: "Learn directly from qualified experts who have real-time project experience.",
    color: "from-indigo-100 to-indigo-200",
  },
  {
    title: "Real-World Experiential Learning",
    desc: "Gain practical expertise through case studies and hands-on exercises.",
    color: "from-teal-100 to-teal-200",
  },
  {
    title: "Updated Course Materials",
    desc: "Content is regularly revised to match current industry standards.",
    color: "from-orange-100 to-orange-200",
  },
  {
    title: "Real-Time Project Exposure",
    desc: "Understand real business workflows and project execution methods.",
    color: "from-cyan-100 to-cyan-200",
  },
  {
    title: "Interview Preparation Support",
    desc: "Resume building, mock interviews, and expert guidance included.",
    color: "from-rose-100 to-rose-200",
  },
  {
    title: "Flexible Learning Options",
    desc: "Choose from online, offline, weekday, or weekend batches.",
    color: "from-lime-100 to-lime-200",
  },
  {
    title: "Recorded Sessions Access",
    desc: "Revise anytime with full access to session recordings.",
    color: "from-amber-100 to-amber-200",
  },
  {
    title: "Certification Guidance",
    desc: "Complete support for exam preparation and certifications.",
    color: "from-fuchsia-100 to-fuchsia-200",
  },
  {
    title: "Placement Support",
    desc: "Career counseling and job assistance to kickstart your career.",
    color: "from-emerald-100 to-emerald-200",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function TrainingCategory({ category }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openIndexes, setOpenIndexes] = useState([0]);

  if (!category) return null;

  const descriptions = category.description ?? [];

  const toggleAccordion = (index) => {
    setOpenIndexes((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-white text-gray-900
        px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16
        2xl:px-20
      "
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* MAIN HEADING */}
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <h2
            className="
              text-3xl font-bold
              leading-tight tracking-tight
              text-gray-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Discover{" "}
            <span className="text-teal-500">|</span>{" "}
            Learn{" "}
            <span className="text-teal-500">|</span>{" "}
            Join the Journey
          </h2>
        </div>

        {/* TABS */}
        <div
          role="tablist"
          aria-label="Training information"
          className="
            mb-8 grid w-full
            grid-cols-3 gap-2
            sm:mx-auto sm:max-w-2xl
            sm:gap-4
          "
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <motion.button
                key={tab}
                type="button"
                role="tab"
                id={`training-tab-${tabs.indexOf(tab)}`}
                aria-selected={isActive}
                aria-controls="training-tab-panel"
                onClick={() => setActiveTab(tab)}
                whileTap={{ scale: 0.97 }}
                className={`
                  min-w-0 rounded-lg
                  px-2 py-3
                  text-xs font-semibold
                  transition-colors duration-300
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-teal-500
                  sm:px-5 sm:text-sm
                  md:text-base
                  ${
                    isActive
                      ? "bg-teal-500 text-white shadow-sm"
                      : "bg-gray-100 text-gray-800 hover:bg-teal-50"
                  }
                `}
              >
                {tab}
              </motion.button>
            );
          })}
        </div>

        {/* TAB CONTENT */}
        <div
          id="training-tab-panel"
          role="tabpanel"
          aria-labelledby={`training-tab-${tabs.indexOf(activeTab)}`}
          className="min-w-0"
        >
          <AnimatePresence mode="wait">
            {/* OVERVIEW */}
            {activeTab === "Overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {descriptions.map((itemData, index) => {
                  const isOpen = openIndexes.includes(index);

                  return (
                    <div
                      key={index}
                      className="
                        min-w-0 overflow-hidden
                        rounded-lg border
                        border-gray-200 bg-white
                      "
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`training-accordion-${index}`}
                        onClick={() => toggleAccordion(index)}
                        className="
                          flex w-full min-w-0
                          items-center justify-between
                          gap-4 bg-gray-100
                          px-4 py-4 text-left
                          transition-colors
                          hover:bg-gray-200/70
                          focus-visible:outline
                          focus-visible:outline-2
                          focus-visible:outline-teal-500
                          sm:px-6 sm:py-5
                        "
                      >
                        <span
                          className="
                            min-w-0 break-words
                            text-sm font-semibold
                            leading-6 text-gray-900
                            sm:text-base
                          "
                          dangerouslySetInnerHTML={{
                            __html: itemData.title,
                          }}
                        />

                        <span
                          aria-hidden="true"
                          className="
                            flex h-7 w-7
                            shrink-0 items-center
                            justify-center
                            rounded-full bg-white
                            text-lg font-bold
                            text-teal-600
                          "
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            id={`training-accordion-${index}`}
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div
                              className="
                                training-description
                                min-w-0 break-words
                                px-4 py-5
                                text-sm leading-7
                                text-gray-700
                                sm:px-6 sm:text-base
                                sm:leading-8
                                [&_a]:break-all
                                [&_a]:text-teal-600
                                [&_a]:underline
                                [&_img]:max-w-full
                                [&_img]:h-auto
                                [&_li]:mb-2
                                [&_ol]:list-decimal
                                [&_ol]:pl-5
                                [&_p]:mb-3
                                [&_table]:block
                                [&_table]:max-w-full
                                [&_table]:overflow-x-auto
                                [&_ul]:list-disc
                                [&_ul]:pl-5
                              "
                              dangerouslySetInnerHTML={{
                                __html: itemData.description,
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* COURSE CONTENT */}
            {activeTab === "Course Content" && (
              <motion.div
                key="course"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="
                  min-w-0 bg-gray-100
                  px-4 py-6
                  sm:px-6 sm:py-8
                  md:px-8 md:py-10
                  lg:px-10
                "
              >
                <h3
                  className="
                    mb-6 text-xl font-bold
                    text-gray-900
                    sm:text-2xl
                    lg:text-3xl
                  "
                >
                  Course Materials
                </h3>

                <div className="space-y-4">
                  {category.courseContent?.map(
                    (courseItem, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -2 }}
                        className="
                          flex min-w-0
                          flex-col gap-4
                          border border-gray-200
                          bg-white p-4
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                          sm:p-5
                        "
                      >
                        <p
                          className="
                            min-w-0 break-words
                            text-sm font-medium
                            leading-6 text-gray-800
                            sm:text-base
                          "
                        >
                          {courseItem.title}
                        </p>

                        <a
                          href={courseItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group relative inline-flex
                            min-h-11 w-full shrink-0
                            items-center justify-center
                            overflow-hidden rounded-lg
                            bg-teal-400
                            px-6 py-2.5
                            text-sm font-semibold
                            text-white
                            transition-colors
                            sm:w-auto
                          "
                        >
                          <span
                            aria-hidden="true"
                            className="
                              absolute inset-0
                              -translate-x-full
                              bg-orange-500
                              transition-transform
                              duration-500
                              group-hover:translate-x-0
                            "
                          />

                          <span className="relative z-10">
                            Download
                          </span>
                        </a>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )}

            {/* JOIN US */}
            {activeTab === "Join Us" && (
              <motion.div
                key="join"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="
                  bg-gray-100
                  px-4 py-10 text-center
                  sm:px-8 sm:py-14
                  lg:px-12 lg:py-16
                "
              >
                <h3
                  className="
                    mx-auto max-w-3xl
                    break-words text-2xl
                    font-bold leading-tight
                    text-gray-900
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  Enroll in{" "}
                  <span className="text-teal-500">
                    {category.title}
                  </span>
                </h3>

                <p
                  className="
                    mx-auto mb-8 mt-5
                    max-w-2xl text-sm
                    leading-7 text-gray-600
                    sm:text-base sm:leading-8
                  "
                >
                  Ready to boost your career? Fill out
                  the enrollment form and get started
                  with expert-led training.
                </p>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={category.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative inline-flex
                    min-h-12 w-full
                    items-center justify-center
                    overflow-hidden rounded-lg
                    bg-teal-400 px-8 py-3
                    font-semibold text-white
                    sm:w-auto
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      absolute inset-0
                      -translate-x-full
                      bg-orange-500
                      transition-transform duration-500
                      group-hover:translate-x-0
                    "
                  />

                  <span className="relative z-10">
                    Apply Now
                  </span>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* TRAINING BENEFITS */}
        <div
          className="
            mt-12 bg-gray-100
            px-4 py-10
            sm:mt-14 sm:px-6 sm:py-12
            md:px-8 md:py-14
            lg:mt-16 lg:px-10 lg:py-16
          "
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              mb-8 text-center
              text-2xl font-bold
              leading-tight text-gray-900
              sm:text-3xl
              lg:mb-10 lg:text-4xl
            "
          >
            Key Benefits of Training with{" "}
            <span className="text-teal-500">
              Zisan Tech Solutions
            </span>
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              grid grid-cols-1
              gap-5
              sm:grid-cols-2
              sm:gap-6
              lg:grid-cols-3
            "
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`
                  min-w-0 rounded-2xl
                  border border-gray-200
                  bg-gradient-to-br
                  ${benefit.color}
                  p-5 shadow-sm
                  transition-shadow duration-300
                  hover:shadow-lg
                  sm:p-6
                `}
              >
                <div
                  className="
                    mb-4 flex h-12 w-12
                    items-center justify-center
                    rounded-full bg-white
                    text-lg font-bold
                    text-gray-900 shadow-sm
                  "
                >
                  {index + 1}
                </div>

                <h4
                  className="
                    mb-3 text-lg font-semibold
                    leading-snug text-gray-900
                  "
                >
                  {benefit.title}
                </h4>

                <p
                  className="
                    text-sm leading-7
                    text-gray-700
                    sm:text-base
                  "
                >
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* PLACEMENT SUPPORT */}
        <div className="mt-12 min-w-0 sm:mt-14 lg:mt-16">
          <PlacementSupport />
        </div>
      </div>
    </section>
  );
}
