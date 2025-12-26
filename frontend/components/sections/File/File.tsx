export default function File() {
  return (
    <section id="file" className="min-h-screen bg-black/40 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 border-b border-white/20 pb-3 inline-block">
            THE FILE
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Panel: About Text */}
          <div className="flex-1">
            <div className="bg-black border border-white/10 rounded p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-white/90 mb-6 pb-4 border-b border-white/10">
                CLASSIFIED INFORMATION
              </h3>
              
              <div className="space-y-6 text-white/70 leading-relaxed max-w-2xl">
                <p className="text-base md:text-lg">
                  Pratham Dubey operates as a full stack developer with expertise spanning
                  modern web technologies and system architecture. Specialized in building
                  scalable applications that handle complex business requirements while
                  maintaining clean, maintainable codebases.
                </p>
                
                <p className="text-base md:text-lg">
                  With a focus on production-grade solutions, Pratham combines frontend
                  interactivity with robust backend systems. Experience includes working
                  with Next.js, NestJS, PostgreSQL, and various cloud deployment
                  strategies to deliver reliable, performant applications.
                </p>
                
                <p className="text-base md:text-lg">
                  The approach emphasizes clean architecture, modular design, and
                  scalable patterns. Each project is treated as a system that must survive
                  real-world chaos while remaining adaptable to changing requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Metadata */}
          <div className="flex-1 lg:max-w-md">
            <div className="bg-black/80 border border-white/20 rounded p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-white/90 mb-6 pb-4 border-b border-white/10">
                SUBJECT METADATA
              </h3>
              
              <dl className="space-y-5">
                {/* Metadata Item */}
                <div className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <dt className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-wider mb-1">
                    Subject
                  </dt>
                  <dd className="text-base md:text-lg text-white/90 font-medium">
                    Pratham Dubey
                  </dd>
                </div>

                {/* Metadata Item */}
                <div className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <dt className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-wider mb-1">
                    Role
                  </dt>
                  <dd className="text-base md:text-lg text-white/90 font-medium">
                    Full Stack Developer
                  </dd>
                </div>

                {/* Metadata Item */}
                <div className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <dt className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-wider mb-1">
                    Stack
                  </dt>
                  <dd className="text-base md:text-lg text-white/90 font-medium">
                    Frontend / Backend
                  </dd>
                </div>

                {/* Metadata Item */}
                <div className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <dt className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-wider mb-1">
                    Status
                  </dt>
                  <dd className="text-base md:text-lg text-white/90 font-medium">
                    Active
                  </dd>
                </div>

                {/* Metadata Item */}
                <div className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <dt className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-wider mb-1">
                    Location
                  </dt>
                  <dd className="text-base md:text-lg text-white/90 font-medium">
                    India
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

