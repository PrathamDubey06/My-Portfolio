export default function Battles() {
  // Placeholder experience data - will be replaced with actual data
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      organization: "Tech Company Inc.",
      timeRange: "2022 - Present",
      description: "Leading development of scalable web applications using modern frameworks. Architecting system solutions that handle high traffic and complex business logic.",
    },
    {
      role: "Full Stack Developer",
      organization: "Startup Solutions",
      timeRange: "2020 - 2022",
      description: "Built end-to-end features for SaaS platform. Collaborated with cross-functional teams to deliver production-ready applications with clean architecture.",
    },
    {
      role: "Frontend Developer",
      organization: "Digital Agency",
      timeRange: "2018 - 2020",
      description: "Developed responsive web interfaces and interactive user experiences. Focused on performance optimization and accessibility standards.",
    },
  ];

  return (
    <section id="battles" className="min-h-screen bg-black/40 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 border-b border-white/20 pb-3 inline-block mb-4">
            BATTLES
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Real-world system engagements
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Desktop: Left Column - Timeline */}
          <div className="hidden lg:flex lg:flex-shrink-0 lg:w-16 lg:relative">
            {/* Vertical Line - spans from first to last dot */}
            <div className="absolute left-1/2 top-8 bottom-8 w-px bg-white/15 -translate-x-1/2" />
            
            {/* Timeline Markers - aligned with card centers */}
            <div className="relative flex flex-col justify-center space-y-10 w-full">
              {experiences.map((_, index) => (
                <div
                  key={index}
                  className="relative z-10 flex items-center justify-center"
                >
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-white/20" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience Cards */}
          <div className="flex-1 space-y-10 max-w-3xl">
            {experiences.map((experience, index) => (
              <div key={index}>
                {/* Mobile: Single dot above each card */}
                <div className="lg:hidden mb-4">
                  <div className="w-2 h-2 rounded-full bg-black border-2 border-white/20" />
                </div>

                {/* Experience Card */}
                <div className="bg-black/80 border border-white/15 rounded p-6 md:p-8">
                  <div className="mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90 mb-1">
                      {experience.role}
                    </h3>
                    <p className="text-sm md:text-base text-white/65 font-medium">
                      {experience.organization}
                    </p>
                  </div>
                  
                  <p className="text-xs md:text-sm text-white/50 mb-4">
                    {experience.timeRange}
                  </p>
                  
                  <p className="text-sm md:text-base text-white/55 leading-relaxed">
                    {experience.description}
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
