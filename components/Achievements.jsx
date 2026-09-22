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
      <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
  
          {/* =====================================================
              ACHIEVEMENTS SECTION
          ====================================================== */}
  
          <div
            className="
              relative
              min-h-[520px]
              w-full
              overflow-hidden
              rounded-3xl
              bg-cover
              bg-center
              bg-no-repeat
              shadow-2xl
            "
            style={{
              backgroundImage:
                "url('/images/achievements-bg.png')",
            }}
          >
  
            {/* =====================================================
                DARK OVERLAY
                Makes text readable over background
            ====================================================== */}
  
          
  
            {/* Slight Center Darkness */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/20
                via-black/40
                to-black/70
              "
            />
  
            {/* =====================================================
                DECORATIVE TOP LINE
            ====================================================== */}
  
            <div
              className="
                absolute
                left-1/2
                top-0
                h-px
                w-3/4
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-orange-500
                to-transparent
              "
            />
  
            {/* =====================================================
                CONTENT
            ====================================================== */}
  
            <div
              className="
                relative
                z-10
                flex
                min-h-[520px]
                flex-col
                justify-center
                px-6
                py-14
                sm:px-10
                lg:px-12
                lg:py-16
              "
            >
  
              {/* =====================================================
                  HEADING
              ====================================================== */}
  
              <div className="mx-auto mb-14 max-w-3xl text-center">
  
                {/* Small Heading */}
  
                <div className="mb-4 flex items-center justify-center gap-4">
  
                  <span
                    className="
                      hidden
                      h-px
                      w-14
                      bg-orange-500
                      sm:block
                    "
                  />
  
                  <p
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-orange-500
                    "
                  >
                    Our Achievements
                  </p>
  
                  <span
                    className="
                      hidden
                      h-px
                      w-14
                      bg-orange-500
                      sm:block
                    "
                  />
  
                </div>
  
                {/* Main Heading */}
  
                <h2
                  className="
                    text-3xl
                    font-extrabold
                    tracking-tight
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
  
                {/* Description */}
  
                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-sm
                    leading-7
                    text-gray-200
                    sm:text-base
                  "
                >
                  Our milestones showcase our commitment to
                  excellence, client-focused results, and
                  continuous innovation.
                </p>
  
              </div>
  
              {/* =====================================================
                  STATISTICS
              ====================================================== */}
  
              <div
                className="
                  grid
                  grid-cols-1
                  gap-y-10
                  sm:grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-5
                  lg:gap-0
                "
              >
  
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="
                      group
                      relative
                      flex
                      min-h-[155px]
                      flex-col
                      items-center
                      justify-center
                      px-5
                      text-center
  
                      lg:border-r
                      lg:border-white/30
                      lg:last:border-r-0
                    "
                  >
  
                    {/* ===============================================
                        NUMBER
                    =============================================== */}
  
                    <div className="flex items-start justify-center">
  
                      <span
                        className="
                          text-4xl
                          font-extrabold
                          tracking-tight
                          text-teal-400
                          drop-shadow-lg
                          transition-all
                          duration-300
  
                          group-hover:scale-110
                          group-hover:text-white
  
                          md:text-5xl
                          xl:text-6xl
                        "
                      >
                        {item.value}
                      </span>
  
                      <span
                        className="
                          ml-1
                          mt-1
                          text-3xl
                          font-extrabold
                          text-orange-500
                          transition-transform
                          duration-300
  
                          group-hover:scale-125
  
                          md:text-4xl
                        "
                      >
                        {item.suffix}
                      </span>
  
                    </div>
  
                    {/* ===============================================
                        ORANGE LINE
                    =============================================== */}
  
                    <div
                      className="
                        my-4
                        h-[3px]
                        w-10
                        rounded-full
                        bg-orange-500
                        transition-all
                        duration-300
  
                        group-hover:w-16
                      "
                    />
  
                    {/* ===============================================
                        LABEL
                    =============================================== */}
  
                    <p
                      className="
                        max-w-[190px]
                        text-sm
                        font-medium
                        leading-6
                        text-white
                        drop-shadow-md
                      "
                    >
                      {item.label}
                    </p>
  
                  </div>
                ))}
  
              </div>
  
            </div>
  
            {/* =====================================================
                BOTTOM TEAL LINE
            ====================================================== */}
  
            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-px
                w-4/5
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