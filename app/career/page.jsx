
import Image from "next/image";
import Link from "next/link";
import CareerOpenings from "../../components/CareerOpenings";

const cards = [
  {
    title: "Growth",
    gradient: "from-pink-200 to-white",
    desc: "Grow your career through continuous learning, meaningful opportunities, and challenging projects that help you develop professionally.",
  },
  {
    title: "Culture",
    gradient: "from-blue-200 to-white",
    desc: "Be part of a collaborative and supportive workplace where teamwork, creativity, and individual contributions are valued.",
  },
  {
    title: "Innovation",
    gradient: "from-green-200 to-white",
    desc: "Work with modern technologies, explore new ideas, and contribute to innovative solutions that make a real difference.",
  },
];

export default function CareerPage() {
  return (
    <main className="w-full min-w-0 overflow-x-clip bg-white">
      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative flex w-full items-center
          overflow-hidden
          min-h-[400px]
          sm:min-h-[460px]
          md:min-h-[520px]
          lg:min-h-[600px]
          xl:min-h-[650px]
        "
      >
        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/Career _ Header_Image.png"
          alt="Zisan Tech Solutions career opportunities"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* SUBTLE GRADIENT */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/60
            via-black/20
            to-transparent
          "
        />

        {/* HERO CONTENT */}
        <div
          className="
            relative z-10 mx-auto
            flex w-full max-w-[1600px]
            items-center
            px-4 py-16
            sm:px-6 sm:py-20
            md:px-8 md:py-24
            lg:px-12 lg:py-28
            xl:px-16
            2xl:px-20
          "
        >
          <div className="w-full max-w-[750px] text-white">
            {/* SMALL LABEL */}
            <div
              className="
                mb-5 inline-flex items-center
                rounded-full
                border border-white/30
                bg-white/10
                px-4 py-2
                text-xs font-semibold
                tracking-wide text-teal-300
                backdrop-blur-sm
                sm:mb-6 sm:text-sm
              "
            >
              Careers at Zisan Tech Solutions
            </div>

            {/* HEADING */}
            <h1
              className="
                text-[32px] font-bold
                leading-[1.15] tracking-tight
                sm:text-[42px]
                md:text-[52px]
                lg:text-[60px]
                xl:text-[68px]
              "
            >
              Build Your Career{" "}
              <span className="text-teal-400">
                With Us
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5 max-w-xl
                text-sm leading-7 text-gray-200
                sm:mt-6 sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              Join our team and work on exciting projects
              that make a real impact. We believe in
              innovation, collaboration, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY JOIN US ================= */}
      <section
        className="
          w-full bg-white
          px-4 py-12
          sm:px-6 sm:py-14
          md:px-8 md:py-16
          lg:px-12 lg:py-20
          xl:px-16
          2xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1600px]">
          {/* HEADER */}
          <div
            className="
              mx-auto mb-10
              max-w-3xl text-center
              sm:mb-12
              lg:mb-14
            "
          >
            <h2
              className="
                text-3xl font-bold
                leading-tight text-gray-900
                sm:text-4xl
                lg:text-[42px]
              "
            >
              Why <span className="text-teal-400">Join Us?</span>
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
              Discover an environment where your ideas,
              skills, and ambitions can grow while you
              build a rewarding career.
            </p>
          </div>

          {/* RESPONSIVE CARDS */}
          <div
            className="
              grid grid-cols-1
              items-stretch gap-5
              sm:gap-6
              md:grid-cols-2
              lg:grid-cols-3
              xl:gap-8
            "
          >
            {cards.map((item, index) => (
              <div
                key={item.title}
                className={`
                  group relative flex h-full
                  min-w-0 flex-col
                  overflow-hidden
                  rounded-2xl
                  border border-gray-100
                  bg-gradient-to-br
                  ${item.gradient}
                  p-6 shadow-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:p-7
                  lg:p-8
                `}
              >
                {/* CARD NUMBER */}
                <div
                  className="
                    mb-6 flex h-12 w-12
                    items-center justify-center
                    rounded-xl bg-white/80
                    text-lg font-bold text-orange-500
                    shadow-sm
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-xl font-bold
                    text-gray-900
                    sm:text-2xl
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-4 text-sm
                    leading-7 text-gray-700
                    sm:text-base
                  "
                >
                  {item.desc}
                </p>

                {/* BOTTOM ACCENT */}
                <div className="mt-auto pt-8">
                  <div
                    className="
                      h-1 w-12 rounded-full
                      bg-teal-400
                      transition-all duration-300
                      group-hover:w-20
                      group-hover:bg-orange-500
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAREER OPENINGS ================= */}
      <CareerOpenings />

      {/* ================= CTA SECTION ================= */}
      <section
        className="
          w-full bg-gray-50
          px-4 py-12
          sm:px-6 sm:py-14
          md:px-8 md:py-16
          lg:px-12 lg:py-20
          xl:px-16
          2xl:px-20
        "
      >
        <div
          className="
            mx-auto w-full max-w-[1600px]
            text-center
          "
        >
          <div className="mx-auto max-w-2xl">
            <h2
              className="
                text-3xl font-bold
                leading-tight text-gray-900
                sm:text-4xl
                lg:text-[42px]
              "
            >
              Didn&apos;t find{" "}
              <span className="text-teal-400">
                your role?
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
                mx-auto mt-5 max-w-xl
                text-sm leading-7 text-gray-600
                sm:text-base sm:leading-8
              "
            >
              We are always interested in connecting
              with talented professionals. Reach out
              to explore future opportunities with us.
            </p>

            <Link
              href="/contact"
              className="
                mt-8 inline-flex min-h-12
                items-center justify-center
                rounded-full bg-teal-400
                px-8 py-3
                text-sm font-semibold text-white
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-orange-500
                hover:shadow-xl
                sm:text-base
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
