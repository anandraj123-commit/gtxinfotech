
"use client";

import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-12
        text-white
        sm:px-6
        sm:py-14
        md:px-8
        md:py-16
        lg:px-12
        lg:py-20
        xl:px-16
        2xl:px-20
      "
      style={{
        backgroundImage: "url('/images/footer-image.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* BACKGROUND WORLD MAP */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[url('/images/world-map.png')]
          bg-cover
          bg-center
          bg-no-repeat
          opacity-10
        "
      />

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
        {/* FOOTER GRID */}
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-8
            sm:gap-10
            md:grid-cols-2
            md:gap-8
            lg:grid-cols-3
            lg:gap-10
            xl:gap-12
          "
        >
          {/* =====================================
              COLUMN 1 — ABOUT
          ====================================== */}
          <div
            className="
              w-full
              min-w-0
              rounded-md
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-md
              sm:p-6
              md:p-7
              lg:p-8
            "
          >
            {/* LOGO */}
            <div className="mb-5 sm:mb-6">
              <Image
                src="/images/logo/ZisanTech_Solutions_logo.png"
                alt="Zisan Tech Solutions"
                width={150}
                height={50}
                sizes="150px"
                className="
                  h-auto
                  w-[130px]
                  object-contain
                  sm:w-[150px]
                "
              />
            </div>

            {/* ABOUT TEXT */}
            <p
              className="
                mb-6
                text-sm
                leading-7
                text-gray-300
                sm:text-base
                sm:leading-8
              "
            >
              Zisan Tech Solutions is a leading technology
              solutions provider specializing in SAP consulting,
              training, and enterprise software solutions.
            </p>

            {/* EMAIL SUBSCRIPTION */}
            <div
              className="
                flex
                w-full
                items-center
                overflow-hidden
                rounded-full
                bg-white
                shadow-md
              "
            >
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
                className="
                  min-w-0
                  flex-1
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-black
                  outline-none
                  placeholder:text-gray-500
                  sm:px-5
                  sm:text-base
                "
              />

              <button
                type="button"
                aria-label="Subscribe"
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  bg-teal-400
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-teal-500
                "
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </div>

          {/* =====================================
              COLUMN 2 — COMPANY LINKS
          ====================================== */}
          <div
            className="
              w-full
              min-w-0
              px-2
              py-2
              text-center
              sm:px-4
              md:px-5
              md:py-6
              lg:px-6
              lg:py-8
            "
          >
            <h3
              className="
                mb-5
                text-xl
                font-semibold
                text-white
                sm:mb-6
              "
            >
              Company
            </h3>

            <ul
              className="
                space-y-3
                text-sm
                text-gray-300
                sm:space-y-4
                sm:text-base
              "
            >
              <li>
                <Link
                  href="/about"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/#training-programs"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Training Programs
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/career"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* =====================================
              COLUMN 3 — CONTACT INFO
          ====================================== */}
          <div
            className="
              w-full
              min-w-0
              px-2
              py-2
              text-center
              sm:px-4
              md:px-5
              md:py-6
              lg:px-6
              lg:py-8
            "
          >
            <h3
              className="
                mb-5
                text-xl
                font-semibold
                text-white
                sm:mb-6
              "
            >
              Contact Info
            </h3>

            <div
              className="
                space-y-5
                text-sm
                text-gray-300
                sm:space-y-6
                sm:text-base
              "
            >
              {/* PHONE */}
              <div>
                <p className="mb-1 font-semibold text-white">
                  PHONE:
                </p>

                <a
                  href="tel:+918797818499"
                  className="
                    inline-block
                    break-words
                    transition-colors
                    duration-300
                    hover:text-teal-400
                  "
                >
                  +91 8797818499
                </a>
              </div>

              {/* EMAIL */}
              <div>
                <p className="mb-1 font-semibold text-white">
                  EMAIL:
                </p>

                <a
                  href="mailto:info@zisantech.com"
                  className="
                    inline-block
                    break-all
                    transition-colors
                    duration-300
                    hover:text-teal-400
                  "
                >
                  info@zisantech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM COPYRIGHT
        ====================================== */}
        <div
          className="
            mt-10
            w-full
            border-t
            border-white/10
            pt-6
            text-center
            text-xs
            leading-6
            text-gray-400
            sm:mt-12
            sm:text-sm
            md:mt-14
            lg:mt-16
          "
        >
          © 2026 Zisan Tech Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
