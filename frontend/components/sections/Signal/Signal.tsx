export default function Signal() {
  return (
    <section id="signal" className="min-h-screen bg-black/40 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Top-Centered */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-red-500 uppercase mb-6">
            SIGNAL
          </h2>
          <p className="text-sm md:text-base text-red-400/80 uppercase tracking-wider mb-2">
            ESTABLISH CONNECTION
          </p>
          <div className="w-full max-w-xs mx-auto h-px bg-red-500/40 mb-2" />
          <p className="text-sm md:text-base text-red-400/80 uppercase tracking-wider">
            SECURE CHANNEL OPEN
          </p>
        </div>

        {/* Main Signal Panel */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <div className="bg-[#0b1220] border border-red-500/40 rounded-md p-6 md:p-8 shadow-[0_0_40px_rgba(255,0,0,0.15)]">
              {/* Panel Header */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-red-500 uppercase mb-1">
                  SEND A SIGNAL
                </h3>
                <p className="text-xs md:text-sm text-red-400/70 mb-3">
                  Your message will be received.
                </p>
                <div className="w-full h-px bg-red-500/30" />
              </div>

              {/* Form Fields */}
              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-xs md:text-sm text-red-400/80 uppercase tracking-wide mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-red-500/30 text-white rounded px-3 py-2 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs md:text-sm text-red-400/80 uppercase tracking-wide mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black/40 border border-red-500/30 text-white rounded px-3 py-2 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs md:text-sm text-red-400/80 uppercase tracking-wide mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={6}
                    className="w-full bg-black/40 border border-red-500/30 text-white rounded px-3 py-2 resize-none focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40"
                  />
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="mt-8 text-center">
                <button className="border border-red-500 text-red-400 px-6 py-2 rounded tracking-wide uppercase">
                  TRANSMIT SIGNAL
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Action - Extract File */}
        <div className="flex justify-center">
          <div className="border border-red-500/40 rounded px-6 py-4 text-center bg-[#0b1220]/50">
            <p className="text-base md:text-lg font-bold text-red-500 uppercase">
              EXTRACT FILE
            </p>
            <p className="text-xs md:text-sm text-red-400/70 mt-1">
              PDF · Updated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
