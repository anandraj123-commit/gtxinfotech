"use client";

import { FiMail, FiSmartphone } from "react-icons/fi";

export default function OfficeLocations() {
  const locations = [
    {
      city: "Malang, Indonesia",
      desc: "Lunaria Consulting Malang is placed in one of the strategic places for efficient business meetings.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      phone: "0812-3456-7890",
    },
    {
      city: "Kyoto, Japan",
      desc: "Lunaria Consulting Kyoto, an ideal for innovative and effective business strategies.",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      phone: "+81 90 1234 5678",
    },
    {
      city: "Birmingham, Britain",
      desc: "Lunaria Consulting Birmingham strategic hub for cutting-edge business solutions and collaborations.",
      img: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
      phone: "+44 7700 123456",
    },
    {
      city: "Marseille, France",
      desc: "Lunaria Consulting Marseille is placed in one of the strategic places for efficient business meetings.",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
      phone: "+1 555-123-4567",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          We Are Open To Visit At Any Time
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Explore the authentic sentiments and experiences of our clients as they
          share their thoughts and satisfaction.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <img
              src={`${loc.img}?w=900`}
              alt={loc.city}
              className="w-full h-64 object-cover"
            />

            {/* Content */}
            <div className="bg-orange-600 text-white p-6">
              <h3 className="text-xl font-bold">{loc.city}</h3>
              <p className="text-sm mt-2 text-orange-100">{loc.desc}</p>

              {/* Contact */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mt-6">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="bg-white text-black p-2 rounded-full flex items-center justify-center">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Office Email</p>
                    <p className="text-xs text-orange-100">
                      example@email.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="bg-white text-black p-2 rounded-full flex items-center justify-center">
                    <FiSmartphone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Office Contact</p>
                    <p className="text-xs text-orange-100">{loc.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
