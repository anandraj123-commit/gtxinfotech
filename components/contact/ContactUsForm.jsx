
"use client";

import { useState } from "react";

export default function ContactUsForm() {
  const [status, setStatus] = useState("");

  const inputClass = `
    w-full min-w-0 rounded-lg
    border border-gray-300 bg-white
    px-4 py-3 text-sm text-gray-900
    outline-none transition-all duration-300
    placeholder:text-gray-400
    focus:border-teal-400
    focus:ring-2 focus:ring-teal-400/20
    sm:text-base
  `;

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-800";

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus(
      "Online form submission is not configured yet. Please contact us by email."
    );
  };

  return (
    <section
      id="contact-form"
      className="
        relative w-full scroll-mt-20
        bg-[#f4f6fb]
        px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16
        2xl:px-20
      "
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div
          className="
            grid grid-cols-1
            items-stretch gap-8
            md:grid-cols-2 md:gap-10
            lg:gap-12
            xl:gap-16
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              relative min-h-[220px]
              overflow-hidden
              sm:min-h-[300px]
              md:min-h-full
            "
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Zisan Tech Solutions team collaboration"
              className="
                absolute inset-0
                h-full w-full object-cover
              "
            />

            <div className="absolute inset-0 bg-white/80" />

            <div
              className="
                relative z-10 flex h-full
                min-h-[220px] flex-col
                items-center justify-center
                px-5 py-10 text-center
                sm:min-h-[300px]
                md:min-h-[550px]
                lg:px-10
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
                What Do You{" "}
                <span className="text-teal-500">
                  Need?
                </span>
              </h2>

              <div
                className="
                  mt-5 h-1 w-20 rounded-full
                  bg-gradient-to-r
                  from-orange-500 to-teal-400
                "
              />

              <p
                className="
                  mt-5 max-w-sm
                  text-sm leading-7 text-gray-700
                  sm:text-base sm:leading-8
                "
              >
                Tell us about your requirements,
                challenges, or business goals.
                Our team is here to help you
                find the right solution.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="
              flex min-w-0 items-center
              py-2
              md:py-4
            "
          >
            <div className="w-full min-w-0">
              <div className="mb-7 sm:mb-8">
                <h2
                  className="
                    text-2xl font-bold
                    leading-tight text-gray-900
                    sm:text-3xl
                    lg:text-[34px]
                  "
                >
                  We Will Be Happy{" "}
                  <span className="text-teal-500">
                    To Help You
                  </span>
                </h2>

                <p
                  className="
                    mt-3 text-sm leading-7
                    text-gray-600 sm:text-base
                  "
                >
                  Fill out the form below and
                  share your requirements with us.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="
                  grid grid-cols-1
                  gap-x-5 gap-y-5
                  xl:grid-cols-2
                "
              >
                {/* NAME */}
                <div className="min-w-0">
                  <label
                    htmlFor="contact-name"
                    className={labelClass}
                  >
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>

                {/* COMPANY */}
                <div className="min-w-0">
                  <label
                    htmlFor="contact-company"
                    className={labelClass}
                  >
                    Company
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Enter company name"
                    className={inputClass}
                  />
                </div>

                {/* PHONE */}
                <div className="min-w-0">
                  <label
                    htmlFor="contact-phone"
                    className={labelClass}
                  >
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="Enter phone number"
                    className={inputClass}
                  />
                </div>

                {/* EMAIL */}
                <div className="min-w-0">
                  <label
                    htmlFor="contact-email"
                    className={labelClass}
                  >
                    Email *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter email address"
                    className={inputClass}
                  />
                </div>

                {/* SUBJECT */}
                <div className="min-w-0 xl:col-span-2">
                  <label
                    htmlFor="contact-subject"
                    className={labelClass}
                  >
                    Subject You Requested Or Asked About *
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Enter your subject"
                    className={inputClass}
                  />
                </div>

                {/* MESSAGE */}
                <div className="min-w-0 xl:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className={labelClass}
                  >
                    Message *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className={`${inputClass} min-h-[140px] resize-y`}
                  />
                </div>

                {/* BUTTON */}
                <div
                  className="
                    flex flex-col items-stretch
                    sm:flex-row sm:justify-end
                    xl:col-span-2
                  "
                >
                  <button
                    type="submit"
                    className="
                      group relative inline-flex
                      min-h-12 items-center
                      justify-center overflow-hidden
                      rounded-lg bg-orange-500
                      px-8 py-3
                      text-sm font-semibold
                      text-white shadow-md
                      transition-all duration-300
                      hover:shadow-lg
                      sm:text-base
                    "
                  >
                    <span
                      className="
                        absolute inset-0
                        -translate-x-full
                        bg-teal-400
                        transition-transform
                        duration-500 ease-in-out
                        group-hover:translate-x-0
                      "
                    />

                    <span
                      className="
                        relative z-10
                        transition-colors duration-300
                        group-hover:text-gray-950
                      "
                    >
                      Submit Form
                    </span>
                  </button>
                </div>

                {status && (
                  <p
                    role="status"
                    className="text-sm leading-6 text-gray-700 xl:col-span-2"
                  >
                    {status}{" "}
                    <a
                      href="mailto:Info@zisantech.com"
                      className="font-semibold text-orange-500 underline"
                    >
                      Email us
                    </a>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
