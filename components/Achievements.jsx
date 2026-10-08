
export default function TimelineSection() {
  const stats = [
    {
      value: "10",
      suffix: "+",
      label: "Years of Consulting Excellence",
    },
    {
      value: "45",
      suffix: "+",
      label: "Customers Across the Globe",
    },
    {
      value: "90",
      suffix: "%",
      label: "Business from Repeat Customers",
    },
    {
      value: "25",
      suffix: "+",
      label: "SAP Implementations Participated In",
    },
    {
      value: "150",
      suffix: "+",
      label: "SAP Consultants",
    },
  ];

  return (
    <section
    className="
      relative w-full bg-white
      px-2 py-12
      sm:px-4 sm:py-14
      md:px-6 md:py-16
      lg:px-10 lg:py-20
      xl:px-12
      2xl:px-16
    "
  >
      {/* SAME CONTAINER AS VISION SECTION */}
      <div className="mx-auto w-full min-w-0 max-w-[1600px]">
        {/* BACKGROUND PANEL */}
        <div
          className="
            relative w-full min-w-0
            overflow-hidden
            rounded-3xl
            bg-cover bg-center bg-no-repeat
            shadow-xl
          "
          style={{
            backgroundImage:
              "url('/images/achievements-bg.png')",
          }}
        >
          {/* DARK OVERLAY */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-b
              from-black/40
              via-black/60
              to-black/80
            "
          />

          {/* TOP DECORATIVE LINE */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-1/2 top-0
              h-px w-3/4
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-orange-500
              to-transparent
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative z-10
              flex w-full
              flex-col justify-center
              px-4 py-10
              sm:px-6 sm:py-12
              md:px-8 md:py-14
              lg:min-h-[520px]
              lg:px-10 lg:py-16
            "
          >
            {/* HEADING */}
            <div className="mx-auto mb-8 w-full max-w-3xl text-center sm:mb-10 lg:mb-14">
              <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
                <span className="hidden h-px w-10 bg-orange-500 sm:block lg:w-14" />

                <p
                  className="
                    text-xs font-semibold uppercase
                    tracking-[0.15em]
                    text-orange-500
                    sm:text-sm sm:tracking-[0.3em]
                  "
                >
                  Our Achievements
                </p>

                <span className="hidden h-px w-10 bg-orange-500 sm:block lg:w-14" />
              </div>

              <h2
                className="
                  text-3xl font-extrabold
                  leading-tight tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Zisan Tech{" "}
                <span className="text-teal-400">
                  at a Glance
                </span>
              </h2>

              <p
                className="
                  mx-auto mt-4 max-w-2xl
                  text-sm leading-7
                  text-gray-200
                  sm:mt-5 sm:text-base
                "
              >
                Our milestones showcase our commitment to
                excellence, client-focused results, and
                continuous innovation.
              </p>
            </div>

            {/* STATISTICS */}
            <div
              className="
                grid w-full min-w-0
                grid-cols-1 gap-3
                min-[360px]:grid-cols-2
                sm:gap-4
                md:grid-cols-3
                lg:grid-cols-5
                lg:gap-0
              "
            >
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className="
                    group relative
                    flex min-w-0
                    flex-col items-center justify-center
                    rounded-xl
                    border border-white/15
                    bg-white/10
                    px-2 py-6
                    text-center
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-white/15
                    sm:px-4 sm:py-7
                    lg:min-h-[170px]
                    lg:rounded-none
                    lg:border-0
                    lg:border-r
                    lg:border-white/30
                    lg:bg-transparent
                    lg:backdrop-blur-none
                    lg:last:border-r-0
                  "
                >
                  {/* NUMBER */}
                  <div className="flex items-start justify-center whitespace-nowrap">
                    <span
                      className="
                        text-3xl font-extrabold
                        tracking-tight
                        text-teal-400
                        drop-shadow-lg
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:text-white
                        sm:text-4xl
                        md:text-5xl
                        xl:text-6xl
                      "
                    >
                      {item.value}
                    </span>

                    <span
                      className="
                        ml-1 mt-0.5
                        text-2xl font-extrabold
                        text-orange-500
                        transition-transform duration-300
                        group-hover:scale-125
                        sm:text-3xl
                        md:text-4xl
                      "
                    >
                      {item.suffix}
                    </span>
                  </div>

                  {/* ORANGE LINE */}
                  <div
                    aria-hidden="true"
                    className="
                      my-3 h-[3px] w-9
                      rounded-full bg-orange-500
                      transition-all duration-300
                      group-hover:w-14
                      sm:my-4 sm:w-10
                      sm:group-hover:w-16
                    "
                  />

                  {/* LABEL */}
                  <p
                    className="
                      max-w-[190px]
                      text-xs font-medium
                      leading-5 text-white
                      drop-shadow-md
                      sm:text-sm sm:leading-6
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM DECORATIVE LINE */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute bottom-0 left-1/2
              h-px w-4/5
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-teal-400
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}
