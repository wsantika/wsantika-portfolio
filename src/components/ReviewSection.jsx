const ReviewSection = () => {
  const reviews = [
    {
      name: "Raka Pratama",
      role: "Startup Founder",
      review:
        "Santika helped turn our rough idea into a clean landing page. The final result looks professional and works smoothly on mobile.",
      rating: 5,
    },
    {
      name: "Dewi Lestari",
      role: "Small Business Owner",
      review:
        "The website is simple to understand, fast to load, and fits our brand. Communication was clear from start to finish.",
      rating: 5,
    },
    {
      name: "Ardi Nugroho",
      role: "Project Collaborator",
      review:
        "He handled the frontend details well and made the interface feel cleaner, more responsive, and easier to use.",
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
      className="reveal-section relative overflow-hidden bg-black px-8 py-24 text-white md:px-20 lg:px-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            // Reviews
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
            Client Feedback
          </h2>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-zinc-400 sm:text-base">
            Dummy testimonials you can replace later with real client feedback.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_18px_50px_rgba(34,211,238,0.08)]"
            >
              <div className="mb-6 flex gap-1 text-cyan-400">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <svg
                    key={index}
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="m12 3 2.7 5.47 6.04.88-4.37 4.26 1.03 6.02L12 16.79l-5.4 2.84 1.03-6.02-4.37-4.26 6.04-.88L12 3Z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm font-semibold leading-7 text-zinc-300">
                “{item.review}”
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-zinc-800 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-sm font-extrabold text-cyan-300">
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-zinc-100">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-zinc-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
