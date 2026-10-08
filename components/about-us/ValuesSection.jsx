
"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    title: "Ethical Integrity",
    desc: "We believe in doing the right thing—being honest, transparent, and accountable in every interaction to build lasting trust.",
  },
  {
    title: "Focused on Your Success",
    desc: "Our clients’ and learners’ goals are our priority. We listen closely and tailor solutions that deliver real, measurable outcomes.",
  },
  {
    title: "Innovate and Evolve",
    desc: "We embrace the fast pace of technology by continuously updating our skills and exploring new ideas to keep you ahead.",
  },
  {
    title: "Excellence in Delivery",
    desc: "Quality is non-negotiable. We commit to providing precise, reliable, and impactful SAP solutions and training that exceed expectations.",
  },
];

const particles = Array.from({ length: 40 }, (_, i) => ({
  top: `${(i * 37 + 13) % 100}%`,
  left: `${(i * 61 + 17) % 100}%`,
}));

export default function ValuesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const hoverQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (motionQuery.matches || !hoverQuery.matches) {
      return;
    }

    const cards = container.querySelectorAll(".mag-card");

    const handleMove = (event) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;

        const distance = Math.hypot(dx, dy);

        if (distance < Math.max(rect.width, rect.height)) {
          const x = Math.max(-8, Math.min(8, dx * 0.03));
          const y = Math.max(-8, Math.min(8, dy * 0.03));

          card.style.setProperty("--mag-x", `${x}px`);
          card.style.setProperty("--mag-y", `${y}px`);
        } else {
          card.style.setProperty("--mag-x", "0px");
          card.style.setProperty("--mag-y", "0px");
        }
      });
    };

    const reset = () => {
      cards.forEach((card) => {
        card.style.setProperty("--mag-x", "0px");
        card.style.setProperty("--mag-y", "0px");
      });
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", reset);
      reset();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative isolate w-full overflow-hidden
        bg-[#f3f4f6]
        px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16
        2xl:px-20
      "
    >
      {/* PARTICLE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {particles.map((particle, index) => (
          <span
            key={index}
            className="
              absolute h-1.5 w-1.5
              rounded-full bg-orange-500/30
              sm:h-2 sm:w-2
            "
            style={{
              top: particle.top,
              left: particle.left,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* HEADER */}
        <div
          className="
            mx-auto mb-10 max-w-3xl text-center
            sm:mb-12 md:mb-14 lg:mb-16
          "
        >
          <h2
            className="
              text-3xl font-bold leading-tight
              text-gray-900
              sm:text-4xl
              lg:text-[42px]
            "
          >
            Our Core Values
          </h2>

          <div
            className="
              mx-auto mt-4 h-1 w-20 rounded-full
              bg-gradient-to-r
              from-orange-500 to-teal-400
            "
          />

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-sm leading-7 text-gray-600
              sm:mt-6 sm:text-base sm:leading-8
              md:text-lg
            "
          >
            Our values are the compass guiding our work
            and relationships. They fuel our passion
            and commitment to your success.
          </p>
        </div>

        {/* RESPONSIVE GRID */}
        <div
          className="
            grid grid-cols-1 items-stretch gap-5
            sm:grid-cols-2 sm:gap-6
            lg:grid-cols-4
            xl:gap-8
          "
        >
          {values.map((item) => (
            <div
              key={item.title}
              className="
                mag-card group relative flex h-full
                min-w-0 flex-col
                rounded-2xl border border-gray-100
                bg-white p-5 shadow-md
                transition-[transform,box-shadow,border-color]
                duration-300
                hover:border-orange-200
                hover:shadow-xl
                sm:p-6 lg:p-5 xl:p-7
              "
              style={{
                transform:
                  "translate(var(--mag-x, 0px), var(--mag-y, 0px))",
              }}
            >
              {/* ICON */}
              <div
                className="
                  mb-5 flex h-14 w-14 shrink-0
                  items-center justify-center
                  rounded-full border-2 border-teal-400
                  transition-colors duration-300
                  group-hover:border-orange-500
                  sm:h-16 sm:w-16
                "
              >
                <div
                  className="
                    h-5 w-5 rounded-sm bg-orange-400
                    transition-transform duration-300
                    group-hover:rotate-12
                    group-hover:scale-110
                    sm:h-6 sm:w-6
                  "
                />
              </div>

              <h3
                className="
                  text-lg font-semibold leading-snug
                  text-gray-900
                  sm:text-xl lg:text-lg xl:text-xl
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3 text-sm leading-7 text-gray-600
                  sm:text-base lg:text-sm xl:text-base
                "
              >
                {item.desc}
              </p>

              <div className="mt-auto pt-6">
                <div
                  className="
                    h-1 w-10 rounded-full
                    bg-gradient-to-r
                    from-orange-500 to-teal-400
                    transition-all duration-300
                    group-hover:w-20
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
