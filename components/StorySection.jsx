"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StorySection() {
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
      {/* subtle gradient glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-tr
          from-orange-50
          via-white
          to-teal-50
          opacity-60
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
          text-black
        "
      >
        {/* =====================================================
            RIGHT IMAGE
            Mobile: normal block
            Medium/Desktop: floats right so text flows below it
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            mb-8
            w-full

            md:float-right
            md:mb-8
            md:ml-10
            md:w-[47%]

            lg:mb-10
            lg:ml-14
            lg:w-[48%]

            xl:ml-16
          "
        >
          {/* glow behind image */}
          <div
            className="
              absolute
              -inset-2
              rounded-3xl
              bg-orange-100
              opacity-40
              blur-2xl
            "
          />

          {/* floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              relative
              rounded-2xl
              bg-white/40
              p-1.5
              shadow-xl
              backdrop-blur-lg

              sm:p-2
              lg:rounded-3xl
            "
          >
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/images/know-our-story-zisan-tech-solutions.jpeg"
                alt="Team"
                width={600}
                height={400}
                sizes="
                  (max-width: 767px) 100vw,
                  (max-width: 1200px) 48vw,
                  750px
                "
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-110
                "
              />
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="
              mb-4
              text-3xl
              font-bold
              leading-tight

              sm:mb-5
              sm:text-4xl

              md:text-4xl

              lg:mb-6
              lg:text-5xl
            "
          >
            Know Our Story
          </motion.h2>

          {/* FIRST CONTENT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="
              text-sm
              leading-7
              text-black
              text-justify

              sm:text-base
              sm:leading-7

              lg:text-[16px]
              lg:leading-8
            "
          >
            Zisan Tech Solutions is dedicated to helping businesses embrace
            digital transformation through intelligent SAP solutions and
            modern IT services. Our focus is on aligning technology with real
            business objectives to improve efficiency, visibility, and
            decision-making.

            <br />
            <br />

            With a strong foundation in SAP consulting and training, we enable
            organizations to build capable teams while implementing systems
            that deliver long-term value. Our approach emphasizes clarity,
            adaptability, and measurable outcomes in every project we
            undertake.

            <br />
            <br />

            We believe successful digital transformation goes beyond
            technology—it requires the right strategy, expertise, and
            continuous support. By combining industry knowledge with a
            client-focused approach, we help businesses adapt confidently to
            evolving technology and market demands. Our goal is to build
            lasting partnerships and empower organizations with solutions that
            support sustainable growth and long-term success.
          </motion.p>

          {/* SECOND CONTENT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="
              mt-4
              text-sm
              leading-7
              text-black
              text-justify

              sm:text-base
              sm:leading-7

              lg:text-[16px]
              lg:leading-8
            "
          >
            What sets us apart is our commitment to delivering solutions that
            are not only technically sound but also practical and scalable. We
            work closely with clients to understand their workflows,
            challenges, and growth plans, ensuring every solution fits
            seamlessly into their ecosystem.
          </motion.p>

          {/* ===================================================
              BUTTON
          ==================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="
              mt-7
              sm:mt-8
              lg:mt-10
            "
          >
            <Link
              href="/about"
              className="
                group
                relative
                inline-flex
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-md
                bg-orange-500
                px-7
                py-3
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300

                sm:w-auto

                hover:shadow-xl
              "
            >
              <span
                className="
                  relative
                  z-10
                  transition
                  duration-300
                  group-hover:text-black
                "
              >
                Learn More
              </span>

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

              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-white
                  opacity-0
                  blur-md
                  transition
                  duration-500
                  group-hover:opacity-20
                "
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Clear floated image */}
        <div className="clear-both" />
      </div>
    </section>
  );
}