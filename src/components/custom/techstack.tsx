import { FaPython, FaJs, FaReact } from "react-icons/fa";
import {  SiTypescript, SiNextdotjs, SiPostgresql, SiMysql, SiPrisma, SiShadcnui, SiVercel, SiCloudflare, SiSupabase, SiHono } from "react-icons/si";
import { FaTools } from "react-icons/fa";

export function TechStack() {
  const stacks = [
    { name: "Python", icon: <FaPython  /> },
    { name: "Cheerio", icon: <FaTools  /> }, 
    { name: "TypeScript", icon: <SiTypescript  /> },
    { name: "JavaScript", icon: <FaJs  /> },
    { name: "React", icon: <FaReact  /> },
    { name: "Hono.js", icon: <SiHono  /> }, 
    { name: "Prisma", icon: <SiPrisma  /> },
    { name: "PostgreSQL", icon: <SiPostgresql  /> },
    { name: "MySQL", icon: <SiMysql  /> },
    { name: "Cloudflare", icon: <SiCloudflare  /> },
    { name: "Vercel", icon: <SiVercel  /> },
    { name: "Next.js", icon: <SiNextdotjs  /> },
    {name: "Supabase", icon: <SiSupabase />},
    {name: "ShadcnUI", icon: <SiShadcnui />}
  ];

  return (
    <section className="w-full px-4 py-12 flex flex-col items-center md:flex-row md:justify-center md:space-x-8 border-t border-gray-600">

      {/* Tech stack list */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-black font-medium">
          {stacks.map((tech, idx) => (
            <li
              key={idx}
              className="flex items-center space-x-2 bg-gray-100 rounded-md py-2 px-3 hover:bg-gray-200 transition"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-gray-500 font-semibold">and others...</p>
      </div>
    </section>
  );
}
