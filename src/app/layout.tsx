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
        className={`${jostSans.className} antialiased bg-black text-white animate-fade-in`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
