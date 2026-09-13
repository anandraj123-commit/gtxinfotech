"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function CareerPage() {
  const cards = [
    {
      title: "Growth",
      gradient: "from-pink-200 to-white",
    },
    {
      title: "Culture",
      gradient: "from-blue-200 to-white",
    },
    {
      title: "Innovation",
      gradient: "from-green-200 to-white",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="relative min-h-[620px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/Career _ Header_Image.png"
          alt="Team"
          fill
          priority
          className="object-cover"
        />

        {/* DARK BLUE OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative mx-auto flex min-h-[620px] max-w-[1920px] items-center px-16 py-16">
          {/* LEFT CONTENT */}
          <div className="max-w-[750px] text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Build Your Career{" "}
              <span className="text-teal-400">
                With Us
              </span>
            </h1>

            <p className="mb-6 mt-6 max-w-xl text-gray-300">
              Join our team and work on exciting projects that make a real
              impact. We believe in innovation, collaboration, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-6 text-black">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Join Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${item.gradient}`}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel mauris quam.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-[#0f1c4d] py-16 px-6 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="office"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Work With Amazing People
            </h2>

            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vivamus vel elit ut turpis blandit placerat.
            </p>

            <p className="text-gray-300">
              Curabitur at lacus ac velit ornare lobortis. Donec pede justo,
              fringilla vel, aliquet nec.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center text-black">
        <h2 className="text-3xl font-bold mb-4">
          Didn’t find your role?
        </h2>

        {/* 
        <p className="text-black mb-6">
          Send us your resume and we’ll get in touch with you.
        </p>
        */}

        <Link href="/contact">
          <button className="mt-8 rounded-lg bg-teal-400 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-500">
            Contact Us
          </button>
        </Link>
      </section>
    </>
  );
}