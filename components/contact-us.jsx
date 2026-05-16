import React from "react";
import { FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#2f3943] text-gray-300 flex items-center justify-center">
      <div className="w-full max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-white">
            Contact <span className="text-teal-400">Us</span>
          </h1>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl text-white mb-4">Contact Details</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              vero, provident, eum eligendi blanditiis ex explicabo vitae nostrum
              facilis asperiores dolorem illo officiis ratione vel fugiat dicta
              laboriosam labore adipisci.
            </p>

            <div className="space-y-4 text-gray-400">
              <p>📍 Khaja Road, Bayzid, Chittagong, Bangladesh</p>
              <p>📞 Phone: +91-8797818499</p>
              {/* <p>📠 Fax: +880-31-000-000</p> */}
              <p>✉️ Email: info@gtxinfotech.com</p>
            </div>
          </div>

          {/* Right Side Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border border-gray-600 text-gray-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-transparent border border-gray-600 text-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-transparent border border-gray-600 text-gray-300 focus:outline-none"
            />
            <textarea
              rows="6"
              placeholder="Message"
              className="w-full p-3 bg-transparent border border-gray-600 text-gray-300 focus:outline-none"
            ></textarea>

<button
  type="submit"
  className="relative overflow-hidden w-full bg-orange-500 text-white py-3 transition group"
>
  <span className="relative z-10 group-hover:text-black transition duration-300">
    Submit
  </span>

  <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
</button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-16">

  {/* <a href="https://www.linkedin.com/company/gtxinfotech-sapservices/" className="group w-12 h-12 flex items-center justify-center bg-[#2a333c] cursor-pointer transition hover:bg-[#1877F2]">
    <FaFacebookF className="text-gray-400 group-hover:text-white" />
  </a> */}

  {/* <a href="#" className="group w-12 h-12 flex items-center justify-center bg-[#2a333c] cursor-pointer transition hover:bg-[#1DA1F2]">
    <FaTwitter className="text-gray-400 group-hover:text-white" />
  </a> */}

  <a href="https://www.youtube.com/results?search_query=GTX+InfoTech" className="group w-12 h-12 flex items-center justify-center bg-[#2a333c] cursor-pointer transition hover:bg-[#FF0000]">
    <FaYoutube className="text-gray-400 group-hover:text-white" />
  </a>

  <a href="https://www.linkedin.com/company/gtxinfotech-sapservices/" className="group w-12 h-12 flex items-center justify-center bg-[#2a333c] cursor-pointer transition hover:bg-[#0A66C2]">
    <FaLinkedinIn className="text-gray-400 group-hover:text-white" />
  </a>

  <a href="https://www.instagram.com/gtxinfotech/" className="group w-12 h-12 flex items-center justify-center bg-[#2a333c] cursor-pointer transition hover:bg-[#EA4C89]">
    <FaInstagram className="text-gray-400 group-hover:text-white" />
  </a>

  {/* <a href="#" className="group w-12 h-12 flex items-center justify-center bg-[#2a333c] cursor-pointer transition hover:bg-[#E60023]">
    <FaPinterestP className="text-gray-400 group-hover:text-white" />
  </a> */}
</div>
        </div>
      </div>
  );
}
