
import Image from "next/image";

const Gtxinfotechservices = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* MOBILE CONTENT - ABOVE IMAGE */}
      <div
        className="
          relative z-10
          bg-white text-center
          px-4 pt-10 pb-8
          sm:px-6 sm:pt-12 sm:pb-10
          md:hidden
        "
      >
        <h1
          className="
            text-[30px]
            font-bold
            leading-[1.2]
            text-black
            sm:text-[36px]
          "
        >
          Innovative SAP Solutions
        </h1>

        <p
          className="
            mx-auto mt-4
            max-w-[650px]
            text-sm
            leading-7
            text-black
            sm:mt-5 sm:text-base
          "
        >
          Driving smarter operations and connected
          experiences with flexible, future-ready
          SAP solutions.
        </p>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="relative w-full">
        <Image
          src="/images/sap_solutions.jpeg"
          alt="SAP Services Training Programmes"
          width={1920}
          height={900}
          priority
          sizes="100vw"
          className="
            block h-auto w-full
            object-cover
          "
        />

        {/* TABLET AND DESKTOP CONTENT - ON IMAGE */}
        <div
          className="
            absolute inset-0
            hidden items-start
            justify-center
            md:flex
          "
        >
          <div
            className="
              mx-auto w-full
              max-w-[1600px]
              px-8 pt-16
              text-center
              lg:px-12 lg:pt-20
              xl:px-16
              2xl:px-20
            "
          >
            <h1
              className="
                text-[44px]
                font-bold
                leading-tight
                text-black
                lg:text-[52px]
                xl:text-[60px]
              "
            >
              Innovative SAP Solutions
            </h1>

            <p
              className="
                mx-auto mt-5
                max-w-[1100px]
                text-lg
                leading-relaxed
                text-black
                lg:text-xl
              "
            >
              Driving smarter operations and connected
              experiences with flexible, future-ready
              SAP solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gtxinfotechservices;
