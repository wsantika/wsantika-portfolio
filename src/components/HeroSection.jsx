import { useEffect, useState } from "react";
import myLogo from "../assets/my-logo.jpg";

const getGreetingInfo = () => {
  const now = new Date();
  const hour = now.getHours();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (hour >= 5 && hour < 12) {
    return { greeting: "Good Morning", time };
  }

  if (hour >= 12 && hour < 17) {
    return { greeting: "Good Afternoon", time };
  }

  if (hour >= 17 && hour < 21) {
    return { greeting: "Good Evening", time };
  }

  return { greeting: "Good Night", time };
};

const HeroSection = () => {
  const [greetingInfo, setGreetingInfo] = useState(getGreetingInfo);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setGreetingInfo(getGreetingInfo());
    }, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="reveal-section relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:75px_75px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_34%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-8 py-20 md:flex-row md:justify-between md:px-20 lg:px-24">
        <div className="max-w-2xl text-center md:text-left">
          <div className="mb-4 flex flex-col items-center gap-2 font-mono text-sm font-bold tracking-[0.2em] text-cyan-400 sm:flex-row md:justify-start">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] tracking-[0.12em] text-cyan-200">
              Hello, {greetingInfo.greeting} • {greetingInfo.time}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl">
            Stone. Code
          </h1>

          <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-zinc-400 sm:text-base">
            Blending thoughtful UI design with clean, responsive development to
            create websites that look great and perform flawlessly.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#contact"
              className="inline-flex rounded-lg border border-cyan-300 bg-cyan-300 px-5 py-3 text-sm font-bold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex rounded-lg border border-zinc-700 bg-zinc-950/80 px-5 py-3 text-sm font-bold text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View Projects
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-8 md:justify-start">
            <a
              href="mailto:wahyuputra7396@gmail.com"
              aria-label="Email"
              className="text-zinc-500 transition hover:text-cyan-300"
            >
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
                <path d="M4 6h16v12H4V6Z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </a>

            <a
              href="http://instagram.com/wsant1ka"
              aria-label="Instagram"
              className="text-zinc-500 transition hover:text-cyan-300"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>

            <a
              href="https://github.com/wsantika"
              aria-label="GitHub"
              className="text-zinc-500 transition hover:text-cyan-300"
            >
              <svg
                className="h-5 w-5"
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
          </div>
        </div>

        <div className="relative w-full max-w-64 md:max-w-80 lg:max-w-96">
          <div className="absolute -inset-5 rounded-full bg-cyan-400/10 blur-2xl" />
          <img
            src={myLogo}
            alt="Logo"
            className="hero-logo-spin relative mx-auto aspect-square w-full rounded-full border border-zinc-800 bg-zinc-950 object-cover shadow-[0_18px_60px_rgba(34,211,238,0.12)]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
