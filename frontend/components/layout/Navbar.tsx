"use client";

export default function Navbar() {
  const navLinks = [
    { id: "hero", label: "Hero", href: "#hero" },
    { id: "file", label: "The File", href: "#file" },
    { id: "experiments", label: "Experiments", href: "#experiments" },
    { id: "abilities", label: "Abilities", href: "#abilities" },
    { id: "battles", label: "Battles", href: "#battles" },
    { id: "signal", label: "Signal", href: "#signal" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" aria-label="Primary navigation">
      {/* Transparent dark background with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md border-b border-white/10" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Name + Role */}
          <div className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm md:text-base">
                Pratham Dubey
              </span>
              <span className="text-white/70 text-xs md:text-sm">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-label={`Scroll to ${link.label} section`}
                className="px-3 py-2 text-sm lg:text-base text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Toggle + Resume Button */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Toggle Placeholder (Reality / Upside Down) */}
            <button
              type="button"
              aria-label="Switch between Reality and Upside Down"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/20"
            >
              <span className="text-white/80 text-xs md:text-sm font-medium">
                Reality
              </span>
              <span className="text-white/40 text-xs">/</span>
              <span className="text-white/40 text-xs md:text-sm">
                Upside Down
              </span>
            </button>

            {/* Resume Button Placeholder */}
            <button className="px-4 py-2 text-sm md:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-colors font-medium">
              Resume
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Basic) */}
        <div className="md:hidden pt-4 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-label={`Scroll to ${link.label} section`}
                className="px-2 py-1 text-xs text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

