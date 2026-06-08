export default function WorkforceBanner() {
  return (
    <section className="relative overflow-hidden bg-[#03175A] min-h-[620px] w-full">

      {/* Top Right Dots */}
      <div className="absolute right-0 top-0 opacity-90">
        <svg width="320" height="120" viewBox="0 0 320 120" fill="none">
          <defs>
            <pattern
              id="dots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="2" fill="#4DB7CC" />
            </pattern>
          </defs>

          <path
            d="M100 0H320V120C240 70 180 50 100 0Z"
            fill="url(#dots)"
          />
        </svg>
      </div>

      <div className="mx-auto flex min-h-[620px] max-w-[1920px] items-center justify-between px-10 lg:px-24">

        {/* LEFT CONTENT */}
        <div className="max-w-[950px] text-white">

          {/* Heading */}
          <h1 className="text-[44px] lg:text-[72px] font-bold leading-[1.1] max-w-[900px]">
  Your Trusted{" "}
  <span style={{ color: "var(--color-orange-500)" }}>
    SAP Training & IT Services Partner
  </span>
</h1>

          {/* Description */}
          <p className="mt-6 text-[18px] lg:text-[22px] text-white/80 max-w-[800px]">
            Empowering professionals and businesses with industry-leading SAP
            training and innovative IT solutions.
          </p>

          {/* Features */}
          <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-6">
  <Feature text="SAP Certified Trainers" />
  <Feature text="Real-Time Project Exposure" />
  <Feature text="Corporate Training Programs" />
  <Feature text="End-to-End IT Services" />
</div>

          {/* Button */}
          <button
            className="mt-12 rounded-xl px-10 py-5 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.05]"
            style={{ backgroundColor: "var(--color-orange-500)" }}
          >
            Explore Solutions
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex flex-col items-center justify-center">

          {/* 25 TEXT LOGO */}
          <div
            className="text-[260px] font-extrabold leading-none select-none"
            style={{
              color: "var(--color-orange-500)",
              textShadow: "0 10px 30px rgba(0,0,0,0.25)"
            }}
          >
            25+
          </div>

          {/* YEARS */}
          <div className="text-white text-5xl font-bold tracking-[12px] -mt-8">
            YEARS
          </div>

        </div>
      </div>
    </section>
  );
}

/* FEATURE COMPONENT */
function Feature({ text }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="text-[24px]"
        style={{ color: "var(--color-orange-500)" }}
      >
        ✔
      </span>

      <span className="text-[18px] lg:text-[20px] text-white">
        {text}
      </span>
    </div>
  );
}