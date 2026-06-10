const ContactSection = () => {
  const email = "wahyuputra7396@gmail.com";
  const whatsappNumber = "6285171702787";
  const whatsappMessage = encodeURIComponent(
    "Halo Santika, saya tertarik untuk diskusi project website.",
  );

  const contacts = [
    {
      title: "Chat on WhatsApp",
      description:
        "Best for quick questions, project discussion, or asking about availability.",
      href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      label: "Start WhatsApp Chat",
      icon: (
        <path d="M5 19.5 6.2 16A7.5 7.5 0 1 1 9 18.1L5 19.5ZM9.5 8.8c.2 2.5 2 4.3 4.7 4.8l1.1-1.1c.2-.2.5-.3.8-.2 1 .3 1.9.4 2.9.4.4 0 .7.3.7.7v2.1c0 .4-.3.7-.7.7A10.7 10.7 0 0 1 8.3 5.5c0-.4.3-.7.7-.7h2.1c.4 0 .7.3.7.7 0 1 .1 2 .4 2.9.1.3 0 .6-.2.8l-1.1 1.1Z" />
      ),
      primary: true,
    },
    {
      title: "Send an Email",
      description:
        "Best for detailed briefs, references, timelines, or project requirements.",
      href: `mailto:${email}`,
      label: "Email Me",
      icon: (
        <>
          <path d="M4 6h16v12H4V6Z" />
          <path d="m4 7 8 6 8-6" />
        </>
      ),
      primary: false,
    },
  ];

  return (
    <section
      id="contact"
      className="reveal-section relative overflow-hidden bg-black px-8 py-24 text-white md:px-20 lg:px-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:75px_75px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.1),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            // Get In Touch
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
            Let&apos;s Build Something
          </h2>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-zinc-400 sm:text-base">
            Have a project idea, website request, or collaboration in mind?
            Reach me through WhatsApp for quick chat or email for detailed
            briefs.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {contacts.map((item) => (
            <article
              key={item.title}
              className={`group rounded-2xl border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-1 ${
                item.primary
                  ? "border-cyan-400/50 bg-cyan-400/10 hover:shadow-[0_18px_55px_rgba(34,211,238,0.1)]"
                  : "border-zinc-800 bg-zinc-950/80 hover:border-cyan-400/50"
              }`}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-cyan-300">
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
                  {item.icon}
                </svg>
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-zinc-400">
                {item.description}
              </p>

              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${
                  item.primary
                    ? "border border-cyan-300 bg-cyan-300 text-zinc-950 hover:bg-cyan-200"
                    : "border border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-cyan-400/60 hover:text-cyan-200"
                }`}
              >
                {item.label}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
