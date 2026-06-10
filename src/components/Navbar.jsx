const Navbar = () => {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Pricing", id: "pricing" },
    { label: "Reviews", id: "reviews" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavigate = (event, sectionId) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/75 px-5 py-4 text-white backdrop-blur-xl md:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <a
          href="/"
          onClick={(event) => handleNavigate(event, "home")}
          className="font-mono text-sm font-extrabold tracking-[0.2em] text-cyan-400"
        >
          STONE.CODE
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950/80 p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/${item.id}`}
              onClick={(event) => handleNavigate(event, item.id)}
              className="rounded-full px-4 py-2 text-xs font-bold text-zinc-400 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          onClick={(event) => handleNavigate(event, "contact")}
          className="hidden rounded-lg border border-cyan-300 bg-cyan-300 px-4 py-2 text-xs font-bold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 sm:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <div className="flex max-w-[58vw] gap-2 overflow-x-auto rounded-full border border-zinc-800 bg-zinc-950/80 p-1 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/${item.id}`}
              onClick={(event) => handleNavigate(event, item.id)}
              className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold text-zinc-400 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
