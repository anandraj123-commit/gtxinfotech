
"use client";

import { Briefcase, ArrowUpRight } from "lucide-react";

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
    <section
      className="
        relative w-full overflow-hidden bg-gray-50
        px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16
        2xl:px-20
      "
    >
      {/* MAIN CONTAINER */}
      <div className="mx-auto w-full max-w-[1600px]">

        {/* SECTION HEADING */}
        <div
          className="
            mx-auto mb-10 max-w-3xl text-center
            sm:mb-12
            lg:mb-14
          "
        >
          <p
            className="
              mb-3 text-xs font-semibold uppercase
              tracking-[0.2em] text-orange-500
              sm:text-sm
            "
          >
            Join Our Team
          </p>

          <h2
            className="
              text-3xl font-bold leading-tight
              text-gray-900
              sm:text-4xl
              lg:text-[42px]
            "
          >
            Current{" "}
            <span className="text-teal-400">
              Openings
            </span>
          </h2>

          <div
            className="
              mx-auto mt-4 h-1 w-20
              rounded-full
              bg-gradient-to-r
              from-orange-500 to-teal-400
            "
          />

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-sm leading-7 text-gray-600
              sm:text-base sm:leading-8
            "
          >
            Explore exciting career opportunities at Zisan Tech
            and become part of our growing SAP consulting team.
          </p>
        </div>

        {/* RESPONSIVE JOB CARDS */}
        <div
          className="
            grid grid-cols-1
            items-stretch
            gap-5
            sm:grid-cols-2 sm:gap-6
            lg:grid-cols-3
            xl:grid-cols-5 xl:gap-5
            2xl:gap-6
          "
        >
          {jobs.map((job) => {
            const emailSubject = encodeURIComponent(
              `Application for ${job.title}`
            );

            const emailBody = encodeURIComponent(
              `Hello Zisan Tech Team,

I would like to apply for the ${job.title} position.

Please find my resume attached for your consideration.

Regards,
`
            );

            const mailtoLink =
              `mailto:Info@zisantech.com?subject=${emailSubject}&body=${emailBody}`;

            return (
              <article
                key={job.title}
                className="
                  group relative flex h-full min-w-0
                  flex-col overflow-hidden
                  rounded-2xl
                  border border-teal-500
                  bg-teal-400
                  p-5
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-orange-500
                  hover:shadow-xl
                  sm:p-6
                  lg:min-h-[260px]
                  xl:p-5
                  2xl:p-7
                "
              >
                {/* TOP HOVER LINE */}
                <div
                  aria-hidden="true"
                  className="
                    absolute left-0 top-0
                    h-1 w-0 bg-orange-500
                    transition-all duration-500
                    group-hover:w-full
                  "
                />

                {/* ICON */}
                <div
                  className="
                    mb-5 flex h-12 w-12
                    shrink-0 items-center
                    justify-center
                    rounded-xl bg-white/90
                    text-orange-500
                    shadow-sm
                    transition-all duration-300
                    group-hover:bg-orange-500
                    group-hover:text-white
                  "
                >
                  <Briefcase
                    size={22}
                    strokeWidth={2.2}
                  />
                </div>

                {/* JOB TITLE */}
                <h3
                  className="
                    text-lg font-bold
                    leading-snug text-teal-950
                    sm:text-xl
                    xl:text-lg
                    2xl:text-xl
                  "
                >
                  {job.title}
                </h3>

                {/* JOB TYPE */}
                <div
                  className="
                    mt-3 flex items-center
                    gap-2 text-sm font-medium
                    text-teal-950
                  "
                >
                  <Briefcase
                    size={16}
                    className="shrink-0"
                  />

                  <span>{job.type}</span>
                </div>

                {/* APPLY BUTTON */}
                <div className="mt-auto pt-8">
                  <a
                    href={mailtoLink}
                    aria-label={`Apply for ${job.title}`}
                    className="
                      inline-flex min-h-11
                      w-full items-center
                      justify-center gap-2
                      rounded-xl bg-orange-500
                      px-4 py-2.5
                      text-sm font-semibold
                      text-white shadow-sm
                      transition-all duration-300
                      hover:bg-orange-600
                      hover:shadow-md
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-orange-600
                    "
                  >
                    Apply Now

                    <ArrowUpRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM TEXT */}
        <div
          className="
            mx-auto mt-10 max-w-2xl
            text-center
            sm:mt-12
          "
        >
          <p
            className="
              text-sm leading-7
              text-gray-600
              sm:text-base
            "
          >
            Don&apos;t see the right position? Send your
            resume to{" "}
            <a
              href="mailto:Info@zisantech.com"
              className="
                break-all font-semibold
                text-orange-500
                transition-colors
                hover:text-teal-600
              "
            >
              Info@zisantech.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
