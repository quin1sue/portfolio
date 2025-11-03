import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <main className="-z-10 w-full h-[90vh] flex items-center justify-center text-center">
      <section className="flex flex-col items-center animate-slide-up">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          Alquin Suedad
        </h1>
        <h2 className="sm:text-xl md:text-2xl lg:text-3xl mt-5">A Full-Stack Developer from the Philippines.</h2>
        <p className="text-sm sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed border-t p-4">
          I have a passion for exploring tech-related fields that fascinate me,
          such as Software Development and Artificial Intelligence.
        </p>
        <div className="mt-8 items-center space-x-3.5 px-6 py-3 rounded-full border flex text-white font-semibold hover:text-black hover:bg-gray-200 transition-all"
>
          <Link
            href="#about-me">
            Scroll Down 
          </Link>
          <ArrowDown className="animate-bounce" />
        </div>
      </section>
    </main>
  );
}
