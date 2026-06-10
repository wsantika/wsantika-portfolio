import gastronexPreview from "../assets/gastronex.png";
import ecobalitech from "../assets/ecobalitech.png";
import lenteraPreview from "../assets/lentera-baca.png";
import stravaTraining from "../assets/stravatraining.png";

const ProjectSection = () => {
  const projectLimit = 4;

  const techIcons = {
    React: (
      <path d="M12 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 12.5c5 0 9-1.57 9-3.5s-4-3.5-9-3.5S3 7.07 3 9s4 3.5 9 3.5ZM12 12.5c4.33 2.5 8.31 3.15 9.27 1.48.96-1.67-1.76-4.65-6.09-7.15C10.85 4.33 6.87 3.68 5.91 5.35c-.96 1.67 1.76 4.65 6.09 7.15ZM12 12.5c-4.33 2.5-7.05 5.48-6.09 7.15.96 1.67 4.94 1.02 9.27-1.48 4.33-2.5 7.05-5.48 6.09-7.15-.96-1.67-4.94-1.02-9.27 1.48Z" />
    ),
    Python: (
      <path d="M12 4H8.5A2.5 2.5 0 0 0 6 6.5V10h6M12 4h3.5A2.5 2.5 0 0 1 18 6.5V8h-6M12 20h3.5A2.5 2.5 0 0 0 18 17.5V14h-6M12 20H8.5A2.5 2.5 0 0 1 6 17.5V16h6M9 7h.01M15 17h.01" />
    ),
    Streamlit: <path d="m13 3-6 9h5l-1 9 6-10h-5l1-8Z" />,
    Gemini: (
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />
    ),
    MySQL: (
      <path d="M4 7c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3ZM4 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" />
    ),
    Tailwind: (
      <path d="M4 12c2-4 5-4 8-1.5 2 1.67 4 1.67 6-1.5-2 4-5 4-8 1.5C8 8.83 6 8.83 4 12Zm2 5c2-4 5-4 8-1.5 2 1.67 4 1.67 6-1.5-2 4-5 4-8 1.5C10 13.83 8 13.83 6 17Z" />
    ),
    JavaScript: (
      <path d="M4 4h16v16H4V4ZM9 9v5.5A1.5 1.5 0 0 1 7.5 16H7M13 15c.5.7 1.2 1 2.1 1 1.1 0 1.9-.55 1.9-1.5 0-.8-.5-1.2-1.7-1.55l-.8-.25c-1.1-.35-1.7-.85-1.7-1.85 0-1.1.9-1.85 2.2-1.85.95 0 1.65.35 2.05.95" />
    ),
    Next: <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0ZM8.5 16V8l7 8V8" />,
    Vercel: <path d="m12 5 8 14H4L12 5Z" />,
    API: <path d="M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14" />,
    Strava: <path d="m8 17 4-10 4 10M5 17l3-6 3 6M13 17l3-6 3 6" />,
    Database: (
      <path d="M5 7c0-1.66 3.13-3 7-3s7 1.34 7 3-3.13 3-7 3-7-1.34-7-3ZM5 7v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
    ),
    WordPress: (
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM4.5 12a7.5 7.5 0 0 1 .45-2.56L8.5 19A7.5 7.5 0 0 1 4.5 12ZM12 19.5c-.6 0-1.18-.07-1.73-.2l2.25-6.54 2.3 6.31c-.86.28-1.8.43-2.82.43ZM19.5 12a7.48 7.48 0 0 1-2.9 5.92l2.29-6.62c.42-1.05.56-1.9.56-2.65 0-.28-.02-.54-.06-.78.07.43.11.87.11 1.33v2.8ZM7.8 6.3c1.12-.8 2.56-1.3 4.2-1.3 1.22 0 2.34.29 3.31.8-.7.04-1.05.43-1.05.9 0 .42.25.77.52 1.19.2.35.45.8.45 1.47 0 .45-.17.98-.4 1.7l-.52 1.75-1.88-5.6c.7-.04 1.34-.11 1.34-.11.63-.08.56-1.01-.07-.97 0 0-1.9.15-3.12.15-1.15 0-3.08-.15-3.08-.15-.63-.04-.7.93-.07.97 0 0 .6.07 1.23.11l1.82 4.98-1.02 3.05L7.8 6.3Z" />
    ),
  };

  const createTag = (name, iconKey = name) => ({
    name,
    icon: techIcons[iconKey] ?? techIcons.API,
  });

  const projects = [
    {
      title: "Gastronex App",
      description:
        "A Streamlit expert system for gastrointestinal diagnosis, combining certainty factor logic with Gemini AI assistance.",
      image: gastronexPreview,
      url: "http://192.168.1.25:8501",
      githubUrl: "https://github.com/wsantika/sp-masalahPencernaan",
      tags: [
        createTag("Python"),
        createTag("Streamlit"),
        createTag("Gemini AI", "Gemini"),
        createTag("MySQL"),
      ],
    },
    {
      title: "Eco Bali Tech",
      description:
        "A modern environmental web app for sharing waste education, sustainability content, and interactive awareness features.",
      image: ecobalitech,
      url: "https://eco-bali-tech.vercel.app",
      tags: [createTag("Next.js", "Next"), createTag("Vercel"), createTag("Tailwind CSS", "Tailwind")],
      githubUrl: "https://github.com/wsantika/eco-bali-tech",
    },
    {
      title: "Lentera Baca",
      description:
        "An inclusive literacy app for children with dyslexia, featuring reading exercises, audio support, points, and progress tracking.",
      image: lenteraPreview,
      url: "https://lentera-baca-phi.vercel.app",
      tags: [createTag("Next.js", "Next"), createTag("Vercel"), createTag("JavaScript")],
      githubUrl: "https://github.com/wsantika/lentera-baca",
    },
    {
      title: "Strava Training",
      description:
        "A Streamlit running dashboard for Strava data, pace analysis, prediction, and Gemini-powered training recommendations.",
      image: stravaTraining,
      url: "https://stravatraining.streamlit.app",
      tags: [
        createTag("Python"),
        createTag("Streamlit"),
        createTag("Strava API", "Strava"),
        createTag("Gemini AI", "Gemini"),
      ],
      githubUrl: "https://github.com/wsantika/stravaTraining",
    },
    {
      title: "WordPress Website",
      description:
        "A lightweight WordPress website setup designed for easy content management, fast loading, and flexible business presentation.",
      tags: [
        createTag("WordPress"),
        createTag("Tailwind CSS", "Tailwind"),
        createTag("JavaScript"),
      ],
      icon: <path d="M6 4h9l3 3v13H6V4ZM15 4v4h4M9 11h6M9 15h6M9 8h3" />,
    },
    {
      title: "E-Commerce UI",
      description:
        "A product-focused shopping interface with clear product cards, simple browsing flow, and responsive checkout-ready layout.",
      tags: [
        createTag("React"),
        createTag("Tailwind CSS", "Tailwind"),
        createTag("API"),
      ],
      icon: (
        <path d="M6 6h15l-2 8H8L6 6ZM6 6 5 3H3M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      ),
    },
  ];

  const visibleProjects = projects.slice(0, projectLimit);

  return (
    <section className="relative overflow-hidden bg-black px-8 py-24 text-white md:px-20 lg:px-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:75px_75px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            // Projects
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
            What I&apos;ve Built
          </h2>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-zinc-400 sm:text-base">
            A selection of websites and digital products built with clean
            design, responsive layouts, and practical development workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-black/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_18px_50px_rgba(34,211,238,0.08)] sm:p-5"
            >
              {project.image && (
                <div className="mb-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-48 w-full object-cover object-top transition duration-500 group-hover:scale-105 md:h-44 xl:h-36"
                  />
                </div>
              )}

              <div className="mb-4 flex items-center gap-4">
                <h3 className="text-lg font-extrabold tracking-tight text-zinc-100">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm font-semibold leading-6 text-zinc-400 xl:min-h-36">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-bold text-zinc-300 transition duration-300 group-hover:border-zinc-700"
                  >
                    <svg
                      className="h-3.5 w-3.5 text-cyan-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {tag.icon}
                    </svg>
                    {tag.name}
                  </span>
                ))}
              </div>

              {(project.url || project.githubUrl) && (
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-xs font-bold text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
                    >
                      Live Demo
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
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-bold text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
                    >
                      GitHub
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.98c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.56 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
