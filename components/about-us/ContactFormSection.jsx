import Image from "next/image";

export default function ContactFormSection() {
  return (
    <section className="bg-[#F4F6FB] py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative">
          <h2 className="text-[36px] font-semibold text-[#0F172A] mb-8">
            What Do You Need?
          </h2>

          <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
            <Image
              src="/contact-woman.jpg" // replace with your image
              alt="Contact"
              fill
              className="object-cover"
            />
          </div>

          {/* DOT PATTERN */}
          <div className="absolute bottom-[-20px] left-10 grid grid-cols-12 gap-2">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-orange-500 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-[36px] font-semibold text-[#0F172A] mb-10">
            We Will Be Happy To Help You
          </h2>

          <form className="space-y-6">
            
            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Full Name" required />
              <Input label="Company" />
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Phone Number" required />
              <Input label="Email" required />
            </div>

            {/* SUBJECT */}
            <Input label="Subject You Requested Or Asked About" required />

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 font-medium text-[#0F172A]">
                Message <span className="text-orange-500">*</span>
              </label>
              <textarea
                className="w-full h-[140px] rounded-xl border border-[#94A3B8] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            {/* BUTTON */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition"
              >
                Submit Form
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({ label, required }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-[#0F172A]">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <input
        type="text"
        className="w-full h-[48px] rounded-xl border border-[#94A3B8] bg-transparent px-4 outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}