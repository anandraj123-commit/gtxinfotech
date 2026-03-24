"use client";

import { useEffect, useRef, useState } from "react";
import { FaSmile, FaBox, FaThumbsUp, FaGift } from "react-icons/fa";

const stats = [
  { icon: FaSmile, value: 320, label: "Happy Clients" },
  { icon: FaBox, value: 350, label: "Projects Completed" },
  { icon: FaThumbsUp, value: 158, label: "Positive Feedback" },
  { icon: FaGift, value: 250, label: "Cups of Coffee" },
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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[url('/images/ctasection.jpg')] bg-cover bg-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <Card key={i} {...item} start={start} />
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
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);

      const currentValue = Math.floor(progressPercent * value);
      setCount(currentValue);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <div
      className={`bg-[#2f3742] text-gray-300 text-center py-10 px-6 rounded-xl
      transform transition-all duration-700
      ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      hover:scale-105 hover:-translate-y-2 hover:bg-[#3a4452]`}
    >
      <div className="text-4xl mb-4 flex justify-center">
        <Icon className="animate-bounce" />
      </div>

      <h2 className="text-3xl font-bold text-white mb-2">{count}</h2>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}