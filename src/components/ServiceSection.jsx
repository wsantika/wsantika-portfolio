const ServiceSection = () => {
  const services = [
    {
      title: "UI/UX Website Design",
      description:
        "I design clean, user-friendly website interfaces with clear structure, strong visual hierarchy, and smooth navigation to improve user experience.",
      items: ["Modern layout", "User flow", "Responsive design"],
      icon: (
        <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16h-13A1.5 1.5 0 0 1 4 14.5v-9ZM8 20h8M12 16v4M8 8h8M8 11h5" />
      ),
    },
    {
      title: "Frontend Development",
      description:
        "I build responsive and interactive websites using modern frontend technologies, ensuring the interface looks consistent across different devices.",
      items: ["React development", "Tailwind CSS", "Smooth interactions"],
      icon: <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />,
    },
    {
      title: "Performance Optimization",
      description:
        "I optimize websites for faster loading, better responsiveness, and improved usability so users can access content quickly and comfortably.",
      items: ["Fast loading", "Mobile-first", "Clean assets"],
      icon: <path d="M12 14 16 8M5 19a9 9 0 1 1 14 0M9 19h6" />,
    },
    {
      title: "Full-Stack Development",
      description:
        "I develop complete web solutions from responsive interfaces to backend logic, API integration, and database structure so your website can work smoothly end to end.",
      items: ["Frontend UI", "Backend logic", "API integration"],
      icon: (
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11ZM8 9h4M8 12h8M8 15h5M16 8l2 2-2 2" />
      ),
    },
  ];

  return (
    <section className="bg-black px-8 py-20 text-white md:px-20 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
            Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-zinc-300 sm:text-base">
            I help brands and businesses build clean, responsive, and
            high-performing websites.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_18px_45px_rgba(255,255,255,0.06)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-100 transition duration-300 group-hover:border-zinc-500 group-hover:bg-zinc-700">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </div>

              <h3 className="mb-4 text-lg font-extrabold leading-tight text-zinc-100">
                {service.title}
              </h3>
              <p className="min-h-36 text-sm font-medium leading-relaxed text-zinc-300 sm:min-h-32 lg:min-h-44">
                {service.description}
              </p>

              <div className="mt-6 space-y-3 border-t border-zinc-800 pt-4">
                {service.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-zinc-800 bg-zinc-800/70 px-4 py-3 text-xs font-semibold text-zinc-300 transition duration-300 group-hover:border-zinc-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/70 px-6 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-xl font-extrabold tracking-tight text-zinc-100">
            Have a project in mind?
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex rounded-lg border border-zinc-700 bg-zinc-100 px-5 py-3 text-sm font-bold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-100 hover:bg-white sm:mt-0"
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
