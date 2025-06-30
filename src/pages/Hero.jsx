import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import Name from "../components/Name";

export default function Hero() {
  const skills = [
    "Full Stack Developer",
    "UI/UX Designer",
    "MERN Stack Engineer",
    "AI Enthusiast",
    "Ethical Hacker",
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative h-screen w-full text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#000000" },
          particles: {
            number: { value: 100 },
            size: { value: 1.5 },
            move: { enable: true, speed: 0.3 },
            color: { value: "#FFD700" },
            links: {
              enable: true,
              color: "#FFD700",
              distance: 130,
              opacity: 0.2,
              width: 0.5,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <nav className="absolute top-5 w-full z-10 flex justify-between items-center px-6 md:px-10 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-[#FFD700] font-bold font-orbitron text-lg">
            SHREYAS
          </span>
        </div>
        <ul className="flex gap-6 text-white font-medium text-base md:text-lg">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-10">
        <div className="w-1/2 max-md:w-2/3 max-sm:w-full aspect-video rounded-xl border-[3px] border-[#FFD700] shadow-[0_0_40px_#FFD700aa] animate-float overflow-hidden">
          <img
            src="/src/assets/Image.jpeg"
            alt="Badsha"
            className="w-full h-full object-cover"
          />
        </div>

        <Name
          colors={["#facc15", "#000", "#facc15", "#000", "#facc15"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class mt-6 text-4xl md:text-7xl font-bold text-white "
        >
          Shreyas K U
        </Name>

        <h2 className="mt-2 text-[#FFD700] text-lg md:text-xl font-medium tracking-wide">
          <Typewriter
            words={skills}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="/assets/badsha_cv.pdf"
            download
            className="flex items-center gap-2 bg-[#FFD700] text-black font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition-all duration-200"
          >
            <FaDownload />
            Download CV
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-2 border-2 border-[#FFD700] text-[#FFD700] px-6 py-2 font-semibold rounded-lg hover:bg-[#FFD700] hover:text-black transition-all duration-200"
          >
            <FaEnvelope />
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
