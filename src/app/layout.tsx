import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Nav } from "@/components/custom/nav";
import "./globals.css";

const jostSans = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alquin Suedad | Portfolio",
  description: "Alquin Suedad is a Full-Stack Developer from the Philippines who is eager to grow and learn with other people. Whether it's developers or any tech-related subjects, Alquin is eager to collaborate with other people seeking opportunities to provide a seamless softwares for those who in need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jostSans.className} antialiased bg-black text-white animate-fade-in relative`}
      >
        <Nav />
        {/* background */}
        <div className="-z-10 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]" />
        <div className="-z-10 absolute left-0 right-0 top-[-10%] h-[900px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"/>
        {children}
      </body>
    </html>
  );
}
