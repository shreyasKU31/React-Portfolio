import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2021",
    title: "Launched into Engineering Orbit",
    description:
      "Commenced B.E in Electronics & Instrumentation at SIT Tumkur, igniting my journey into the cosmos of code and circuits.",
  },
  {
    year: "2022",
    title: "Docked at Scripted Web",
    description:
      "Launched Scripted Web on Instagram, educating developers with UI/UX tips, JavaScript tricks, and MERN stack magic.",
  },
  {
    year: "2023",
    title: "Orbited through Internships",
    description:
      "Completed web development internships, contributing to real-world projects and expanding my galaxy of skills.",
  },
  {
    year: "2024",
    title: "Engineered Stellar Projects",
    description:
      "Completed LogicLink AI, Prescripto, MemberHub, Dharani, and Elite Stays with immersive UI, powerful backend, and ML integration.",
  },
  {
    year: "2025",
    title: "Initiated AI Systems",
    description:
      "Built multilingual AI systems, voice interfaces, and smart agriculture solutions powered by ML models and Raspberry Pi.",
  },
];

export default function About() {
  return (
    <section className="relative min-h-screen py-20 text-white overflow-hidden mt-15">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-20 font-orbitron">
        My Cosmic Journey
      </h2>

      <div className="relative w-full max-w-4xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1.5 before:bg-yellow-400 before:transform before:-translate-x-1/2">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`relative w-full mb-20 px-4 md:px-8 flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-full md:w-1/2 relative">
                <div
                  className={`absolute top-1/2 ${
                    isLeft ? "-right-[17px]" : "-left-[17px]"
                  } w-6 h-6 bg-yellow-400 rounded-full shadow-yellow-400 shadow-md transform -translate-y-1/2 z-20`}
                ></div>
                <div
                  className={`relative bg-black border-2 border-yellow-400 p-6 rounded-xl shadow-lg transition-all hover:shadow-yellow-500/50 hover:shadow-2xl cursor-hover ${
                    isLeft ? "mr-8" : "ml-8"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-yellow-300">
                    {item.year} — {item.title}
                  </h3>
                  <p className="text-white mt-2 text-sm leading-relaxed ">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
