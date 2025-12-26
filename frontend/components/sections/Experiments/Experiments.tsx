export default function Experiments() {
  // Placeholder cards - will be replaced with actual project data
  const cardCount = 6;

  return (
    <section id="experiments" className="min-h-[80vh] bg-black/40 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 border-b border-white/20 pb-3 inline-block mb-4">
            EXPERIMENTS
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Explorations, prototypes, and system experiments
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {Array.from({ length: cardCount }).map((_, index) => (
            <div
              key={index}
              className="bg-black/80 border border-white/10 rounded h-64 md:h-80 shadow-inner"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

