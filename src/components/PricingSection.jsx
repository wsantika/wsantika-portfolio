const PricingSection = () => {
  const packages = [
    {
      name: "Starter",
      price: "Start from Rp500K",
      description:
        "Best for a simple profile page, landing page, or small business website.",
      features: ["1-3 sections", "Responsive layout", "Basic SEO setup", "Contact button"],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "Start from Rp1.5M",
      description:
        "Ideal for a complete portfolio, company profile, or product website.",
      features: ["Up to 6 sections", "Custom UI design", "Smooth interactions", "Performance optimization"],
      highlighted: true,
    },
    {
      name: "Custom App",
      price: "Custom Quote",
      description:
        "For web apps that need dashboard, API integration, database, or custom logic.",
      features: ["Frontend & backend", "API integration", "Database structure", "Custom workflow"],
      highlighted: false,
    },
  ];

  return (
    <section className="bg-black px-8 py-24 text-white md:px-20 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            // Pricing
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
            Simple Pricing Plans
          </h2>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-zinc-400 sm:text-base">
            Flexible packages for websites, portfolios, and custom web apps.
            Final pricing can be adjusted based on project scope.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-1 ${
                item.highlighted
                  ? "border-cyan-400/50 bg-cyan-400/10 shadow-[0_18px_55px_rgba(34,211,238,0.08)]"
                  : "border-zinc-800 bg-zinc-950/80 hover:border-zinc-600"
              }`}
            >
              {item.highlighted && (
                <div className="absolute right-5 top-5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">
                  Popular
                </div>
              )}

              <h3 className="text-xl font-extrabold text-zinc-100">
                {item.name}
              </h3>
              <p className="mt-4 text-2xl font-extrabold tracking-tight text-white">
                {item.price}
              </p>
              <p className="mt-4 min-h-16 text-sm font-semibold leading-6 text-zinc-400">
                {item.description}
              </p>

              <div className="mt-7 space-y-3 border-t border-zinc-800 pt-6">
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm font-semibold text-zinc-300"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300">
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${
                  item.highlighted
                    ? "border border-cyan-300 bg-cyan-300 text-zinc-950 hover:bg-cyan-200"
                    : "border border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-cyan-400/60 hover:text-cyan-200"
                }`}
              >
                Discuss Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
