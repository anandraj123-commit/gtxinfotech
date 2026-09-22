"use client";

import { Briefcase } from "lucide-react";

const jobs = [
  {
    title: "SAP MM Consultant",
    type: "Full Time",
  },
  {
    title: "SAP FICO Consultant",
    type: "Full Time",
  },
  {
    title: "SAP ABAP Consultant",
    type: "Full Time",
  },
  {
    title: "SAP CPI Consultant",
    type: "Full Time",
  },
  {
    title: "SAP BW Consultant",
    type: "Full Time",
  },
];

export default function CareerOpenings() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-full">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Join Our Team
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Current{" "}
            <span className="text-teal-400">
              Openings
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
            Explore exciting career opportunities at Zisan Tech and become
            part of our growing SAP consulting team.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="
                group relative flex min-h-[230px] flex-col
                overflow-hidden rounded-2xl
                border border-teal-500
                bg-teal-400 p-7
                shadow-md
                transition-all duration-300
                hover:-translate-y-1
                hover:border-orange-500
                hover:shadow-xl
              "
            >
              {/* Orange Hover Line */}
              <div
                className="
                  absolute left-0 top-0
                  h-1 w-0
                  bg-orange-500
                  transition-all duration-500
                  group-hover:w-full
                "
              />

              {/* Icon */}
              <div
                className="
                  mb-5 flex h-11 w-11
                  items-center justify-center
                  rounded-xl bg-white/90
                  text-orange-500
                  shadow-sm
                  transition-all duration-300
                  group-hover:bg-orange-500
                  group-hover:text-white
                "
              >
                <Briefcase size={21} strokeWidth={2.2} />
              </div>

              {/* Job Title */}
              <h3 className="mb-3 text-xl font-bold text-teal-950">
                {job.title}
              </h3>

              {/* Job Type */}
              <div className="mb-7 flex items-center gap-2 text-sm font-medium text-teal-950">
                <Briefcase size={16} />
                <span>{job.type}</span>
              </div>

              {/* Apply Button */}
              <a
                href={`mailto:Info@zisantech.com?subject=${encodeURIComponent(
                  `Application for ${job.title}`
                )}&body=${encodeURIComponent(
                  `Hello Zisan Tech Team,

I would like to apply for the ${job.title} position.

Please find my resume attached for your consideration.

Regards,
`
                )}`}
                className="
                  mt-auto inline-flex w-fit
                  items-center gap-2
                  rounded-lg
                  bg-orange-500
                  px-5 py-2.5
                  text-sm font-semibold
                  text-white
                  shadow-sm
                  transition-all duration-300
                  hover:bg-orange-600
                  hover:shadow-md
                "
              >
                Apply Now

                <span
                  className="
                    text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t see the right position? Send your resume to{" "}
            <a
              href="mailto:Info@zisantech.com"
              className="font-semibold text-orange-500 transition-colors hover:text-teal-600"
            >
              Info@zisantech.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}