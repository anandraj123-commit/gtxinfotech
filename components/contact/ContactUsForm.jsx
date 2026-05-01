'use client';

export default function ContactUsForm() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f4f6fb]">
      
      {/* Left Side */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center px-4">
            What Do You Need?
          </h2>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-6 md:p-16 bg-[#e9ecf5] flex">
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            We Will Be Happy To Help You
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-1 font-semibold">Full Name *</label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Company</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Phone Number *</label>
              <input
                type="tel"
                required
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email *</label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold">
                Subject You Requested Or Asked About *
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold">Message *</label>
              <textarea
                required
                className="w-full p-3 rounded-lg border border-gray-300 h-32"
              />
            </div>

            <div className="md:col-span-2 flex justify-end">
             <button className="relative overflow-hidden mt-8 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold text-white shadow-lg group">
  
  <span className="relative z-10 group-hover:text-black transition duration-300">
    Submit Form
  </span>

  <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}