'use client';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function CareerPage() {
  return (
    <>
    <Navbar/>
     <div className="bg-[#f4f6fb] text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center min-h-screen">
        <div className="w-full md:w-1/2 p-10 md:p-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Career With Us
          </h1>
          <p className="text-lg mb-6 text-gray-600">
            Join our team and work on exciting projects that make a real impact.
            We believe in innovation, collaboration, and growth.
          </p>
          {/* <button className="bg-[#ff5a2c] text-white px-6 py-3 rounded-lg hover:bg-[#e04a1f] transition">
            View Open Positions
          </button> */}
        </div>

        <div className="w-full md:w-1/2 h-[400px] md:h-screen relative">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="team"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Join Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Growth", "Culture", "Innovation"].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-md bg-[#e9ecf5]"
            >
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel mauris quam.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="office"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Work With Amazing People
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vivamus vel elit ut turpis blandit placerat.
            </p>
            <p className="text-gray-600">
              Curabitur at lacus ac velit ornare lobortis. Donec pede justo,
              fringilla vel, aliquet nec.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      {/* <section className="py-16 px-6 md:px-20 bg-[#e9ecf5]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Open Positions
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[1, 2, 3].map((job) => (
            <div
              key={job}
              className="bg-white p-6 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                <p className="text-gray-500">Remote • Full-time</p>
              </div>
              <button className="bg-[#ff5a2c] text-white px-4 py-2 rounded-lg hover:bg-[#e04a1f]">
                Apply
              </button>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Didn’t find your role?
        </h2>
        <p className="text-gray-600 mb-6">
          Send us your resume and we’ll get in touch with you.
        </p>
        <button className="bg-[#ff5a2c] text-white px-6 py-3 rounded-lg hover:bg-[#e04a1f]">
          Contact Us
        </button>
      </section>
    </div>
    </>
   
  );
}
