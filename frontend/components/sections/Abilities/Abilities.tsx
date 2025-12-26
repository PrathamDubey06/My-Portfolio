export default function Abilities() {
  // Placeholder category boxes - will be replaced with actual ability categories
  const categoryCount = 5;

  return (
    <section id="abilities" className="min-h-screen bg-black/40 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 border-b border-white/20 pb-3 inline-block mb-4">
            ABILITIES
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Core strengths and technical capabilities
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
          {/* Left Column: Category List */}
          <div className="flex-1 lg:max-w-sm">
            <div className="space-y-3">
              {Array.from({ length: categoryCount }).map((_, index) => (
                <div
                  key={index}
                  className="bg-black/70 border border-white/10 rounded h-16 md:h-20"
                />
              ))}
            </div>
          </div>

          {/* Right Column: Detail Panel */}
          <div className="flex-1">
            <div className="bg-black/90 border border-white/20 rounded h-96 md:h-[500px] min-h-[400px] shadow-inner" />
          </div>
        </div>
      </div>
    </section>
  );
}

