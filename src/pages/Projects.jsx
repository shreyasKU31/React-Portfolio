import React, { useState } from "react";
import assets from "../assets/assets.js";

// import "/public/Projects.css";

const projects = [
  {
    className: "Kandl",
    title: "Kandl",
    img: assets.kandl,
    description: "Modern brokerage UI with analytics dashboard.",
    skills: ["React", "NodeJS", "MongoDB", "Express"],
    problem: "Complex brokerage platforms confuse users.",
    solution: "Simplified user interface for easy navigation.",
    live: "https://kandl.live",
    repo: "https://github.com/shreyasKU31/Kandl",
  },
  {
    className: "LogicLink",
    title: "Logic Link AI",
    img: assets.logicLinkAI,
    description: "AI Chat bot uses GIMINI to answer queries.",
    skills: ["React", "Node.js"],
    problem: "Farmers lack tech-driven crop prediction tools.",
    solution: "Voice-first AI crop recommendation tool.",
    live: "https://logiclinkai.netlify.app",
    repo: "https://github.com/shreyasKU31/LogicLinkAI",
  },
  {
    className: "Priscripto",
    title: "Priscripto",
    img: assets.priscripto,
    description: "Doctor appointment booking platform.",
    skills: ["MongoDB", "Express", "React"],
    problem: "Manual appointment systems are outdated.",
    solution: "Streamlined, digital booking system.",
    live: "https://priscripto.live",
    repo: "https://github.com/shreyasKU31/Prescripto",
  },
  {
    className: "Netflix",
    title: "Netflix Clone",
    img: assets.netflix,
    description: "A Netflix UI/UX clone with full streaming UI.",
    skills: ["HTML5", "CSS"],
    problem: "Learn modern media streaming UIs.",
    solution: "Fully functional Netflix interface clone.",
    live: "https://netflixclone.live",
    repo: "https://github.com/shreyasKU31/Projects/tree/main/Netflix%20clone",
  },
  {
    className: "EliteStays",
    title: "Elite Stays",
    img: assets.eliteStays,
    description: "Airbnb-style modern housing platform.",
    skills: ["React", "Node.js", "MongoDB"],
    problem: "Finding stays lacks good UI and filters.",
    solution: "Interactive booking with filters and UI.",
    live: "https://elite-stays.onrender.com/",
    repo: "https://github.com/shreyasKU31/elite-stays",
  },
  {
    className: "Dharani",
    title: "Dharani",
    img: assets.dharani,
    description: "Smart agriculture platform with AI voice support.",
    skills: ["ML", "IoT", "React"],
    problem: "Lack of automation in farming.",
    solution: "AI + sensors to automate farming decisions.",
    live: "https://dharani.live",
    repo: "https://github.com/user/dharani",
  },
  {
    className: "WeatherApp",
    title: "Weather App",
    img: assets.weatherApp,
    description: "Live weather updates based on location.",
    skills: ["React", "API"],
    problem: "Quick access to weather data is difficult.",
    solution: "Easy and accurate weather display.",
    live: "https://weatherapp.live",
    repo: "https://github.com/shreyasKU31/Projects",
  },
  {
    className: "TodoApp",
    title: "Todo App",
    img: assets.todoApp,
    description: "Task manager with CRUD features.",
    skills: ["React"],
    problem: "Lack of organized task planning.",
    solution: "Minimal UI todo system for productivity.",
    live: "https://todoapp.live",
    repo: "https://github.com/shreyasKU31/Projects",
  },
];

export default function ProjectsGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen py-10 text-white">
      <h2 className="text-center text-5xl font-bold mb-20 font-orbitron">
        Project Constellation
      </h2>

      <div className="container px-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className={`${proj.className} project-tile relative group cursor-pointer`}
            onClick={() => setSelected(proj)}
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-full object-cover"
            />
            <div className="project-title flex items-end justify-center">
              <h3 className="text-white font-bold text-lg font-orbitron">
                {proj.title}
              </h3>
            </div>
            <div className="overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-center px-4 mb-4 ">
                {proj.description}
              </p>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="project-modal">
            <button
              className="absolute top-2 right-3 text-white text-xl hover:text-yellow-400"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <h3>{selected.title}</h3>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full rounded-lg mb-4"
            />
            <p>
              <span className="text-yellow-300 font-semibold">Skills:</span>{" "}
              {selected.skills.join(", ")}
            </p>
            <p className="mt-2">
              <span className="text-yellow-300 font-semibold">Problem:</span>{" "}
              {selected.problem}
            </p>
            <p className="mt-2">
              <span className="text-yellow-300 font-semibold">Solution:</span>{" "}
              {selected.solution}
            </p>
            <div className="mt-4 flex gap-4">
              <a href={selected.live} target="_blank" className="btn">
                Live Demo
              </a>
              <a
                href={selected.repo}
                target="_blank"
                className="btn border border-yellow-400 text-yellow-400 bg-transparent"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
