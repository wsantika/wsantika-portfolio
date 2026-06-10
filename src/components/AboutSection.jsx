const AboutSection = () => {
  const skills = ["Full Stack Dev", "TypeScript", "PHP", "Node.js", "Python"];

  return (
    <section className="bg-black px-8 py-24 text-white md:px-20 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            // Get To Know Me
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
            About Me
          </h2>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-zinc-400 sm:text-base">
            A short introduction about how I build clean, responsive, and useful
            digital products.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:border-cyan-400/40 sm:p-8">
          <div>
            <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-zinc-100">
              What is Stone. Code?
            </h3>
            <p className="mb-4 text-sm font-semibold leading-7 text-zinc-400 sm:text-base">
              We are Stone. Code, a web developer who focuses on building clean,
              responsive, and user-friendly digital products. I enjoy
              transforming ideas into functional websites with modern
              technologies like React, Tailwind CSS, JavaScript, TypeScript,
              Node.js, and PHP.
            </p>
            <p className="mb-7 text-sm font-semibold leading-7 text-zinc-400 sm:text-base">
              I help brands, businesses, and individuals create a stronger
              online presence through portfolio websites, landing pages,
              dashboards, and custom web interfaces. My goal is to build
              products that look professional, feel smooth to use, and clearly
              communicate their value.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-xs font-bold text-zinc-300 transition duration-300 hover:border-cyan-400/50 hover:text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
