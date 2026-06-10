const AboutSection = () => {
  return (
    <section className="bg-white px-8 py-14 md:px-20 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold tracking-wide text-gray-500">
            GET TO KNOW ME
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="max-w-2xl">
            <h3 className="mb-4 text-xl font-bold text-gray-800">
              Who is Santika?
            </h3>
            <p className="mb-4 leading-relaxed text-gray-600">
              I’m Santika, a web developer who focuses on building clean,
              responsive, and user-friendly digital products. I enjoy
              transforming ideas into functional websites with modern
              technologies like React, Tailwind CSS, JavaScript, TypeScript,
              Node.js, and PHP.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              I help brands, businesses, and individuals create a stronger
              online presence through portfolio websites, landing pages,
              dashboards, and custom web interfaces. My goal is to build
              products that look professional, feel smooth to use, and clearly
              communicate their value.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600">
                Full Stack Dev
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600">
                TypeScript
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600">
                PHP
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600">
                Node.js
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600">
                Python
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
