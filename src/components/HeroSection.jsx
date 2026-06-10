import myLogo from "../assets/my-logo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-8 py-14 md:flex-row md:justify-between md:px-20 lg:px-24">
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-4 text-sm font-semibold tracking-wide text-gray-500">
            I am Santika
          </p>

          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Full-Stack
            <br />
            Developer &amp; Penjoki
          </h1>

          <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-gray-500">
            Blending thoughtful UI design with clean, responsive development to
            create websites that look great and perform flawlessly.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex rounded-lg border border-gray-300 bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:bg-gray-700"
          >
            Contact Me
          </a>

          <div className="mt-12 flex justify-center gap-8 md:justify-start">
            <a
              href="http://instagram.com/wsant1ka"
              aria-label="Instagram"
              className="text-gray-500 transition hover:text-gray-900"
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
              className="text-gray-500 transition hover:text-gray-900"
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

        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
          <img
            src={myLogo}
            alt="Logo"
            className="mx-auto w-full rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
