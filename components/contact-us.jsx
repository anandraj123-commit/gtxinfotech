"use client";

import React from "react";
import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section
      className="
        w-full
        bg-white
        px-4
        py-12
        text-gray-700

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
        {/* =========================================
            HEADER
        ========================================== */}
        <div
          className="
            mb-10
            text-center

            sm:mb-12

            md:mb-14

            lg:mb-16
          "
        >
          <h1
            className="
              text-3xl
              font-semibold
              leading-tight
              text-gray-900

              sm:text-4xl

              lg:text-[42px]
            "
          >
            Contact <span className="text-teal-500">Us</span>
          </h1>

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

        {/* =========================================
            CONTACT + FORM
        ========================================== */}
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-10

            md:grid-cols-2
            md:gap-10

            lg:gap-14

            xl:gap-16
          "
        >
          {/* =====================================
              LEFT SIDE
          ====================================== */}
          <div
            className="
              w-full
              md:pr-2
              lg:pr-6
            "
          >
            <h2
              className="
                mb-4
                text-2xl
                font-semibold
                leading-tight
                text-gray-900

                sm:text-2xl

                lg:text-3xl
              "
            >
              Contact Details
            </h2>

            <p
              className="
                mb-6
                max-w-2xl
                text-sm
                leading-7
                text-gray-600

                sm:text-base
                sm:leading-7

                lg:leading-8
              "
            >
              Ready to transform your business with innovative technology
              solutions? Contact Zisan Tech Solutions today and let our experts
              help you achieve your goals.
            </p>

            {/* CONTACT DETAILS */}
            <div
              className="
                space-y-4
                text-sm
                text-gray-600

                sm:text-base
              "
            >
              {/* LOCATION */}
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    mt-0.5
                    shrink-0
                    text-lg
                  "
                >
                  📍
                </span>

                <p className="leading-6">
                  Delhi
                </p>
              </div>

              {/* PHONE */}
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    mt-0.5
                    shrink-0
                    text-lg
                  "
                >
                  📞
                </span>

                <p
                  className="
                    min-w-0
                    break-words
                    leading-6
                  "
                >
                  Phone: +91-8797818499
                </p>
              </div>

              {/* EMAIL */}
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    mt-0.5
                    shrink-0
                    text-lg
                  "
                >
                  ✉️
                </span>

                <p
                  className="
                    min-w-0
                    break-all
                    leading-6
                  "
                >
                  Email: Info@zisantech.com
                </p>
              </div>
            </div>
          </div>

          {/* =====================================
              RIGHT SIDE FORM
          ====================================== */}
          <form
            className="
              w-full
              space-y-4
            "
          >
            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                rounded-md
                border
                border-gray-300
                bg-white
                px-4
                py-3
                text-sm
                text-gray-700
                outline-none
                transition-all
                duration-300

                placeholder:text-gray-400

                sm:text-base

                focus:border-teal-500
                focus:ring-2
                focus:ring-teal-500/10
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                rounded-md
                border
                border-gray-300
                bg-white
                px-4
                py-3
                text-sm
                text-gray-700
                outline-none
                transition-all
                duration-300

                placeholder:text-gray-400

                sm:text-base

                focus:border-teal-500
                focus:ring-2
                focus:ring-teal-500/10
              "
            />

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className="
                w-full
                rounded-md
                border
                border-gray-300
                bg-white
                px-4
                py-3
                text-sm
                text-gray-700
                outline-none
                transition-all
                duration-300

                placeholder:text-gray-400

                sm:text-base

                focus:border-teal-500
                focus:ring-2
                focus:ring-teal-500/10
              "
            />

            {/* MESSAGE */}
            <textarea
              rows={6}
              placeholder="Message"
              className="
                w-full
                resize-none
                rounded-md
                border
                border-gray-300
                bg-white
                px-4
                py-3
                text-sm
                leading-6
                text-gray-700
                outline-none
                transition-all
                duration-300

                placeholder:text-gray-400

                sm:text-base

                focus:border-teal-500
                focus:ring-2
                focus:ring-teal-500/10
              "
            />

            {/* =================================
                SUBMIT BUTTON
            ================================== */}
            <button
              type="submit"
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-md
                bg-orange-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300

                sm:text-base

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
                Submit
              </span>

              {/* TEAL SLIDE ANIMATION */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-teal-400
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:translate-x-0
                "
              />
            </button>
          </form>
        </div>

        {/* =========================================
            SOCIAL ICONS
        ========================================== */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-3

            sm:mt-12
            sm:gap-4

            md:mt-14

            lg:mt-16
          "
        >
          {/* YOUTUBE */}
          <a
            href="https://www.youtube.com/results?search_query=GTX+InfoTech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="
              group
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-md
              bg-gray-200
              shadow-sm
              transition-all
              duration-300

              sm:h-12
              sm:w-12

              hover:-translate-y-1
              hover:bg-[#FF0000]
              hover:shadow-md
            "
          >
            <FaYoutube
              className="
                text-lg
                text-gray-600
                transition-all
                duration-300

                sm:text-xl

                group-hover:scale-110
                group-hover:text-white
              "
            />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/gtxinfotech-sapservices/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              group
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-md
              bg-gray-200
              shadow-sm
              transition-all
              duration-300

              sm:h-12
              sm:w-12

              hover:-translate-y-1
              hover:bg-[#0A66C2]
              hover:shadow-md
            "
          >
            <FaLinkedinIn
              className="
                text-lg
                text-gray-600
                transition-all
                duration-300

                sm:text-xl

                group-hover:scale-110
                group-hover:text-white
              "
            />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/gtxinfotech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              group
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-md
              bg-gray-200
              shadow-sm
              transition-all
              duration-300

              sm:h-12
              sm:w-12

              hover:-translate-y-1
              hover:bg-[#EA4C89]
              hover:shadow-md
            "
          >
            <FaInstagram
              className="
                text-lg
                text-gray-600
                transition-all
                duration-300

                sm:text-xl

                group-hover:scale-110
                group-hover:text-white
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}