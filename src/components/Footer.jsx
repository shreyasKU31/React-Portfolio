export default function Footer() {
  return (
    <footer className="text-white font-orbitron px-6 py-10 border-t border-yellow-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Logo or Name */}
        <div className="text-xl font-semibold text-gold drop-shadow-[0_0_10px_#FFD700]">
          badsha.code
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 justify-center text-sm text-white">
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white transition"
          >
            <i className="fab fa-github text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white transition"
          >
            <i className="fab fa-linkedin text-xl" />
          </a>
          <a
            href="https://instagram.com/scriptedweb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white transition"
          >
            <i className="fab fa-instagram text-xl" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} badsha.code — All rights reserved.
      </div>
    </footer>
  );
}
