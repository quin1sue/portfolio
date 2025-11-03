import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaLinkedin, FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";

export function Footer() {
  // Social media links
  const socials = [
    { name: "Instagram", link: "https://www.instagram.com/queenidafu/", icon: <FaInstagram /> },
    { name: "Facebook", link: "https://www.facebook.com/kin1hunnid", icon: <FaFacebookF /> },
    { name: "TikTok", link: "https://www.tiktok.com/@kinokinkwin?_r=1&_t=ZS-915tSX5JASD", icon: <FaTiktok /> },
    { name: "YouTube", link: "https://www.youtube.com/@Ken-gy7jr", icon: <FaYoutube /> },
  ];

  // Contact links
  const contacts = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/alquin-suedad/", icon: <FaLinkedin /> },
    { name: "GitHub", link: "https://github.com/quin1sue", icon: <FaGithub /> },
    { name: "Email", link: "mailto:suedadken@gmail.com", icon: <FaEnvelope /> },
    { name: "Discord", link: "https://discord.com/users/1410937102463533096", icon: <FaDiscord /> },
  ];

  return (
    <footer className="px-6 py-8 mt-12">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        <nav aria-label="Social Media Links">
          <h2 className="font-bold text-lg mb-2 text-center md:text-left">Follow Me</h2>
          <ul className="flex justify-center md:justify-start space-x-4 text-xl">
            {socials.map((social, idx) => (
              <li key={idx}>
                <a 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.name}
                  className="hover:text-gray-600 transition"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic">
          <h2 className="font-bold text-lg mb-2 text-center md:text-left">Contact Me</h2>
          <ul className="flex justify-center md:justify-start space-x-4 text-xl">
            {contacts.map((contact, idx) => (
              <li key={idx}>
                <a 
                  href={contact.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={contact.name}
                  className="hover:text-blue-600 transition"
                >
                  {contact.icon}
                </a>
              </li>
            ))}
          </ul>
        </address>

      </section>

      <hr className="my-6 border-gray-300" />
      <section className="text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Alquin Suedad. All rights reserved.</p>
      </section>
    </footer>
  );
}
