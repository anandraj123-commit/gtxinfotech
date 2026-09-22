"use client";

import { Mail, MessageSquareText, Phone } from "lucide-react";

const channels = [
  {
    title: "Email",
    description:
      "Reach our team for sales, support, and transformation discussions.",
    action: "info@zisantech.com",
    href: "mailto:info@zisantech.com",
    icon: Mail,
  },
  {
    title: "Live Chat",
    description:
      "Start a quick conversation and let us route you to the right team.",
    action: "Send a message",
    href: "#",
    icon: MessageSquareText,
  },
  {
    title: "Phone",
    description:
      "Speak with our team for immediate assistance and consultation.",
    action: "+91-8797818499",
    href: "tel:+91-8797818499",
    icon: Phone,
  },
];

export default function ContactChannels() {
  return (
    <section className="w-full bg-[#f3f4f6] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider ">
              SAP Solutions
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Our Contact{" "}
              <span className="text-orange-500">Channels</span>
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-md text-sm leading-6 text-gray-500">
              Connect with the Zisan Tech Solutions team for consulting, support,
              product enquiries, and transformation discussions across
              industries and SAP solution areas.
            </p>
          </div>
        </div>

        {/* Contact Cards Container */}
        <div className="rounded-2xl bg-teal-400 p-5 sm:p-7 lg:p-9">
          <div className="grid gap-6 md:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channel.icon;

              return (
                <div
                  key={channel.title}
                  className="
                    group relative flex min-h-[230px] flex-col
                    overflow-hidden rounded-xl
                    border border-teal-100
                    bg-white p-6
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-orange-200
                    hover:shadow-xl
                  "
                >
                  {/* Orange hover line */}
                  <div
                    className="
                      absolute left-0 top-0 h-1 w-0
                      bg-orange-500
                      transition-all duration-500
                      group-hover:w-full
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      mb-5 flex h-12 w-12
                      items-center justify-center
                      rounded-xl bg-teal-50
                      text-teal-600
                      transition-all duration-300
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >
                    <Icon size={24} strokeWidth={2.4} />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mb-3 text-xl font-bold text-gray-950
                      transition-colors duration-300
                      group-hover:text-teal-700
                    "
                  >
                    {channel.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-6 text-gray-600">
                    {channel.description}
                  </p>

                  {/* Link */}
                  <a
                    href={channel.href}
                    className="
                      mt-auto inline-flex w-fit items-center
                      gap-2 text-sm font-semibold
                      text-orange-500
                      transition-all duration-300
                      hover:text-teal-600
                    "
                  >
                    {channel.action}

                    <span
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}