export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer - Very transparent to show body background */}
      <div className="absolute inset-0 z-0 bg-black/10">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Pratham Dubey
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-2">
              Full Stack Developer
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8">
              Building systems that survive chaos
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-md text-base sm:text-lg">
                Enter the Upside Down
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md text-base sm:text-lg">
                View the File
              </button>
            </div>
          </div>

          {/* Right: Centered Image Container */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-[260px] h-[340px] md:w-[320px] md:h-[420px]">
              {/* Human image placeholder - will be replaced with actual image */}
              <div className="w-full h-full bg-white/10 rounded-lg border border-white/20 flex items-center justify-center">
                <span className="text-white/40 text-sm">Human Image</span>
              </div>
              {/* Actual image will be:
              <Image
                src="/hero-image.jpg"
                alt="Pratham Dubey"
                fill
                className="object-cover rounded-lg"
                priority
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

