"use client";

import { useEffect, useRef, useState } from "react";
import { FaSmile, FaBox, FaThumbsUp, FaGift } from "react-icons/fa";

const stats = [
  {
    icon: FaSmile,
    value: 320,
    label: "Happy Clients",
  },
  {
    icon: FaBox,
    value: 350,
    label: "Projects Completed",
  },
  {
    icon: FaThumbsUp,
    value: 158,
    label: "Positive Feedback",
  },
  {
    icon: FaGift,
    value: 250,
    label: "Cups of Coffee",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="
        relative
        w-full
        overflow-hidden
        bg-[url('/images/ctasection.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
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
      {/* BACKGROUND OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          gap-4
          min-[480px]:grid-cols-2
          sm:gap-5
          md:gap-6
          lg:grid-cols-4
          lg:gap-6
          xl:gap-8
        "
      >
        {stats.map((item, i) => (
          <Card
            key={i}
            icon={item.icon}
            value={item.value}
            label={item.label}
            start={start}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ icon: Icon, value, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame;

    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;

      const progressPercent = Math.min(
        progress / duration,
        1
      );

      const currentValue = Math.floor(
        progressPercent * value
      );

      setCount(currentValue);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, value]);

  return (
    <div
      className={`
        group
        flex
        min-h-[180px]
        w-full
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-[#2f3742]
        px-4
        py-7
        text-center
        text-gray-300
        shadow-lg
        transform
        transition-all
        duration-700

        sm:min-h-[190px]
        sm:px-5
        sm:py-8

        md:min-h-[200px]
        md:px-6
        md:py-9

        lg:min-h-[210px]
        lg:py-10

        ${
          start
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }

        hover:-translate-y-2
        hover:scale-[1.03]
        hover:bg-[#3a4452]
        hover:shadow-2xl
      `}
    >
      {/* ICON */}
      <div
        className="
          mb-3
          flex
          h-12
          w-12
          items-center
          justify-center
          text-3xl
          text-white

          sm:mb-4
          sm:h-14
          sm:w-14
          sm:text-4xl
        "
      >
        <Icon
          className="
            animate-bounce
            transition-colors
            duration-300
            group-hover:text-teal-400
          "
        />
      </div>

      {/* COUNTER */}
      <h2
        className="
          mb-1
          text-2xl
          font-bold
          leading-tight
          text-white

          sm:mb-2
          sm:text-3xl

          lg:text-[32px]
        "
      >
        {count}
      </h2>

      {/* LABEL */}
      <p
        className="
          text-sm
          leading-6
          text-gray-400

          sm:text-base

          group-hover:text-gray-200
          transition-colors
          duration-300
        "
      >
        {label}
      </p>
    </div>
  );
}