import { Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      name: "Price Guides PH",
      image: "/price-guides-proj.png",
      link: "https://price-guides.bettergov.ph/",
      description:
        "An economic and financial data platform containing over 1,500+ datasets — centralized within a single web app under BetterGov.ph.",
    },
  ];

  return (
    <>
      <main className="text-center mt-8 border-t border-gray-700 min-h-[40vh] p-6 relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <section className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <Image
            alt="python"
            src={"/icons/python.png"}
            width={100}
            height={100}
            className="h-16 w-16 absolute top-3 left-4 rotate-[-15deg] sm:h-20 sm:w-20"
          />
          <Image
            alt="typescript"
            src={"/icons/typescript.png"}
            width={100}
            height={100}
            className="h-16 w-16 absolute top-8 right-4 rotate-10 sm:h-20 sm:w-20"
          />
          <Image
            alt="sql"
            src={"/icons/sql.png"}
            width={100}
            height={100}
            className="h-16 w-16 absolute bottom-4 right-10 skew-x-3 sm:h-20 sm:w-20"
          />
          <Image
            alt="cpp"
            src={"/icons/cpp.png"}
            width={100}
            height={100}
            className="h-16 -z-10 w-16 absolute bottom-4 left-10 rotate-15 sm:h-20 sm:w-20"
          />
        </section>
        <p className="leading-relaxed text-lg mt-4 max-w-3xl mx-auto px-2 sm:px-0">
          Hi! I am <b>Alquin Suedad</b>, also known as <b>Quin</b>. I started learning programming at the age of 17 (2023), beginning with the fundamentals in <b>C++</b> and software development, along with <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. At the time, I didn’t yet realize that frameworks could make development much more efficient.
        </p>

        <p className="leading-relaxed text-lg mt-4 max-w-3xl mx-auto px-2 sm:px-0">
          After a year of learning, I began exploring powerful libraries and frameworks such as <b>React</b> and <b>Next.js</b>. These tools made development more seamless and enjoyable, enabling me to design and build full-stack applications with greater efficiency.
        </p>

        <a
          href="https://www.flaticon.com/free-icons/sql"
          className="text-gray-400 hover:underline mt-4 inline-block"
          title="SQL icons"
        >
          SQL icons created by Aswell Studio - Flaticon
        </a>
      </main>

      {/* Projects Section */}
      <main
        id="projects"
        className="min-h-[70vh] w-full border-t border-gray-700 px-4 sm:px-6 py-12 sm:py-16 bg-black text-white flex flex-col items-center justify-center"
      >
        <div className="max-w-6xl w-full">
          <div className="flex items-center space-x-3 justify-center mb-12 gap-2">
            <a href="https://github.com/quin1sue" rel="noreferrer noopener" target="_blank" className="hover:underline text-4xl font-bold text-center">Projects</a>
            <Github size={40}/>
          </div>

          {projects.map((project, index) => (
            <article
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 mb-12`}
            >
              {/* Project Image */}
              <section className="relative w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-all duration-500"
                />
              </section>

              {/* Project Description */}
              <section className="lg:w-1/2 text-center lg:text-left space-y-4 px-2 sm:px-0">
                <h3 className="text-2xl sm:text-3xl font-semibold">{project.name}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 duration-300"
                >
                  Visit Project
                </a>
              </section>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
