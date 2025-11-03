export function Nav() {
  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex items-center justify-center space-x-6 border p-3 rounded-lg border-gray-300 shadow-sm backdrop-blur-md">
        {[
          ["Github", "https://github.com/quin1sue"],
          ["LinkedIn", "https://www.linkedin.com/in/alquin-suedad/"],
          ["Email", "mailto:suedadken@gmail.com"],
          ["Resume", "https://drive.google.com/file/d/1Amps_POqwdYqJAuw_urPRgD8xNUd8fyN/view?usp=drive_link"],
        ].map(([name, link], index) => (
          <li key={index}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-semibold transition-all duration-300 hover:text-gray-600 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-600 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
