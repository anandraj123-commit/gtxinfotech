"use client";

import Image from "next/image";

export default function WorkSection() {
  return (
    <section className="w-full min-h-screen flex">
      {/* Left Image */}
      <div className="w-1/2 relative hidden md:block">
        <Image
          src="/images/worksection.jpg"
          alt="Team working"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 bg-slate-800 text-white flex items-center">
        <div className="max-w-xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            We’re A Digital SAP & IT Solutions Agency
          </h1>

          <p className="text-gray-300 mb-10 text-justify">
            Transforming Businesses and Careers with Smart SAP Solutions, Practical Training & Innovative IT Services.
            <br /><br />
            We deliver results that fuel your success. Whether you’re scaling your business or advancing your SAP career, we’re here to help you grow smarter and stronger in today’s digital landscape.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-teal-400 text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm whitespace-pre-line text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "🌐",
    title: "SAP Consulting",
    desc: "Expert guidance on SAP S/4HANA deployment and ongoing support, comprehensive module configuration, streamlining business processes, and seamless integration with your existing systems.",
  },
  {
    icon: "⚙️",
    title: "SAP Training",
    desc: "Experience hands-on training through live projects, access to SAP systems for practice, personalized interview preparation, and on-demand recorded lessons from industry experts.",
  },
  {
    icon: "📈",
    title: "IT & Integration Solutions",
    desc: "Effortlessly unify your business systems to boost efficiency and accuracy. We specialize in integrating Gate Management, E-commerce platforms, HRMS, banking systems, and a wide range of third-party applications. Additionally, we offer CRM and ERP integration alongside custom app and web development services, creating a comprehensive technology ecosystem tailored to support your operational objectives.",
  },
  {
    icon: "📣",
    title: "Our Approach",
    desc: `Analyze → Design → Deploy → Support

Our process begins with a deep understanding of your goals, followed by designing and implementing solutions that produce real-world benefits.`,
  },
];