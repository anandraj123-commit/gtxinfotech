const Gtxinfotechservices = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/sap_solutions.jpeg"
        alt="SAP Services Training Programmes"
        className="w-full h-auto block"
      />

      {/* Content on Image */}
      <div className="absolute inset-0 flex items-start justify-center">
        <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black  font-bold leading-tight">
            Innovative SAP Solutions
          </h1>

          <p className="mt-5 mx-auto max-w-7xl text-base sm:text-lg md:text-xl leading-relaxed text-black">
            Driving smarter operations and connected experiences with flexible,
            future-ready SAP solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gtxinfotechservices;