"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const leftFAQs = [
  {
    question: "What Services Do You Offer?",
    answer:
      "We offer consulting, strategy, and digital transformation services.",
  },
  {
    question: "How Can Your Firm Help Improve Our Business?",
    answer:
      "We analyze your processes and provide data-driven improvements.",
  },
  {
    question: "What Experience Do You Have In Our Industry?",
    answer:
      "We have worked across multiple industries with proven results.",
  },
  {
    question: "What Is Your Approach Or Methodology?",
    answer:
      "We follow a structured, agile, and collaborative approach.",
  },
  {
    question: "Can You Provide References Or Case Studies?",
    answer:
      "Yes, we can share case studies upon request.",
  },
];

const rightFAQs = [
  {
    question: "How Do You Determine The Cost Of Services?",
    answer:
      "Pricing depends on scope, complexity, and timeline.",
  },
  {
    question: "What Sets Your Firm Apart From Competitors?",
    answer:
      "We focus on measurable outcomes and client collaboration.",
  },
  {
    question: "How Long Does Consulting Engagement Last?",
    answer:
      "It varies from weeks to months depending on project size.",
  },
  {
    question: "Can You Explain Your Team's Expertise?",
    answer:
      "Our team consists of industry experts and strategists.",
  },
  {
    question: "How You Measure The Success Of Your Service?",
    answer:
      "We track KPIs, ROI, and business impact.",
  },
];

function FAQItemComponent({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        w-full
        border-b
        border-gray-300
        py-4
        sm:py-5
      "
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="
          flex
          w-full
          items-start
          justify-between
          gap-4
          text-left
        "
      >
        {/* QUESTION */}
        <span
          className="
            min-w-0
            flex-1
            pr-1
            text-sm
            font-semibold
            leading-6
            text-gray-900

            sm:text-base
            sm:leading-7

            lg:text-[16px]
          "
        >
          {item.question}
        </span>

        {/* PLUS / MINUS */}
        <span
          className="
            mt-0.5
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            text-orange-500
            transition-all
            duration-300

            hover:bg-orange-50

            sm:h-9
            sm:w-9
          "
        >
          {open ? (
            <Minus size={20} />
          ) : (
            <Plus size={20} />
          )}
        </span>
      </button>

      {/* ANSWER */}
      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out

          ${
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <p
            className="
              max-w-2xl
              pr-8
              pt-3
              text-sm
              leading-6
              text-gray-600

              sm:pr-10
              sm:leading-7
            "
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      className="
        w-full
        bg-gray-100
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
      {/* MAIN CONTAINER */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        {/* TITLE */}
        <div
          className="
            mb-8
            sm:mb-10
            md:mb-12
          "
        >
          <h2
            className="
              text-center
              text-3xl
              font-bold
              leading-tight
              text-gray-900

              sm:text-4xl

              lg:text-[42px]
            "
          >
            Most Asked Question To Us
          </h2>

          {/* TITLE UNDERLINE */}
          <div
            className="
              mx-auto
              mt-4
              h-1
              w-16
              rounded-full
              bg-teal-500
            "
          />
        </div>

        {/* FAQ GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-0

            md:grid-cols-2
            md:gap-8

            lg:gap-12

            xl:gap-16
          "
        >
          {/* LEFT FAQs */}
          <div className="w-full">
            {leftFAQs.map((item, i) => (
              <FAQItemComponent
                key={i}
                item={item}
              />
            ))}
          </div>

          {/* RIGHT FAQs */}
          <div className="w-full">
            {rightFAQs.map((item, i) => (
              <FAQItemComponent
                key={i}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div
          className="
            mx-auto
            mt-10
            w-full
            max-w-3xl
            text-center

            sm:mt-12

            md:mt-14

            lg:mt-16
          "
        >
          <p
            className="
              mb-5
              text-sm
              leading-6
              text-gray-600

              sm:mb-6
              sm:text-base
              sm:leading-7
            "
          >
            If you haven’t found the answer you’re looking for, we’re here to
            help. Here’s a method for getting help!
          </p>

          {/* CTA BUTTONS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-4

              sm:flex-row
            "
          >
            {/* CONTACT US */}
            <button
              type="button"
              className="
                group
                relative
                w-full
                overflow-hidden
                bg-orange-500
                px-8
                py-3
                text-sm
                font-semibold
                uppercase
                tracking-widest
                text-white
                shadow-md
                transition-all
                duration-300

                sm:w-auto

                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              {/* BUTTON TEXT */}
              <span
                className="
                  relative
                  z-10
                  transition-colors
                  duration-300
                  group-hover:text-black
                "
              >
                Contact Us
              </span>

              {/* TEAL SLIDE HOVER */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-[var(--color-teal-400)]
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:translate-x-0
                "
              />
            </button>

            {/* 
            <button
              className="
                w-full
                border
                border-orange-500
                px-6
                py-3
                font-medium
                text-orange-500
                transition
                hover:bg-orange-50
                sm:w-auto
              "
            >
              Contact Nearest Office
            </button>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}