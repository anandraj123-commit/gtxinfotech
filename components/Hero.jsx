export default function Hero() {
    return (
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        ></div>
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Experience The New Reality
          </h1>
  
          <p className="max-w-2xl text-gray-300 mb-8">
          We provide perfect IT solutions & technology.During this time, we’ve built a reputation for excellent clients satisfaction as evidenced by our
          </p>
  
          <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition duration-300">
            Explore Us
          </button>
  
        </div>
      </section>
    );
  }