"use client";

export default function ClientsSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16 relative overflow-hidden">

      {/* Top Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Successful Clients With Our Help
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Spotlighting clients’ triumphs, achieved through collaboration with our consulting firm.
            Witness success through exceptional partnerships.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden border-2 border-orange-400">
            <img
              src="/images/services/clientsSection.jpg"
              alt="clients"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Logos Row (Animated) */}
      <div className="mt-16 overflow-hidden">
        <div className="flex w-max animate-marquee gap-8 opacity-50">
          
          {/* Original Logos */}
          <img src="/images/logo.jpg" alt="logo" className="h-10" />
          <img src="/images/logo1.jpg" alt="logo" className="h-10" />
          <img src="/images/logo2.jpg" alt="logo" className="h-10" />
          <img src="/images/logo.jpg" alt="logo" className="h-10" />

          {/* Duplicate for smooth loop */}
          <img src="/images/logo.jpg" alt="logo" className="h-10" />
          <img src="/images/logo1.jpg" alt="logo" className="h-10" />
          <img src="/images/logo2.jpg" alt="logo" className="h-10" />
          <img src="/images/logo.jpg" alt="logo" className="h-10" />

          <img src="/images/logo.jpg" alt="logo" className="h-10" />
          <img src="/images/logo1.jpg" alt="logo" className="h-10" />
          <img src="/images/logo2.jpg" alt="logo" className="h-10" />
          <img src="/images/logo.jpg" alt="logo" className="h-10" />

          <img src="/images/logo.jpg" alt="logo" className="h-10" />
          <img src="/images/logo1.jpg" alt="logo" className="h-10" />
          <img src="/images/logo2.jpg" alt="logo" className="h-10" />
          <img src="/images/logo.jpg" alt="logo" className="h-10" />

          <img src="/images/logo.jpg" alt="logo" className="h-10" />
          <img src="/images/logo1.jpg" alt="logo" className="h-10" />
          <img src="/images/logo2.jpg" alt="logo" className="h-10" />
          <img src="/images/logo.jpg" alt="logo" className="h-10" />

          <img src="/images/logo.jpg" alt="logo" className="h-10" />
          <img src="/images/logo1.jpg" alt="logo" className="h-10" />
          <img src="/images/logo2.jpg" alt="logo" className="h-10" />
          <img src="/images/logo.jpg" alt="logo" className="h-10" />

          <img src="/images/logo2.jpg" alt="logo" className="h-10" />
          <img src="/images/logo.jpg" alt="logo" className="h-10" />
        </div>
        
      </div>

      {/* Dotted Pattern */}
      <div className="absolute bottom-0 left-0 w-full flex flex-wrap gap-3 px-4 pb-4">
        {Array.from({ length: 120 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-orange-500 rounded-full"
          ></span>
        ))}
      </div>
    </section>
  );
}