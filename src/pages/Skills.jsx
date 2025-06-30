import React, { useEffect, useState } from "react";
// import "/public/SkillsOrbit.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaGithub,
  FaChrome,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiC,
  SiCplusplus,
  SiMysql,
  SiJavascript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const getOrbitSkills = (skills, radius, speed, reverse) => {
  const angleStep = (2 * Math.PI) / skills.length;

  return (
    <div
      className={`absolute left-1/2 top-1/2 orbit ${
        reverse ? "orbit-reverse" : "orbit-normal"
      }`}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        marginLeft: `-${radius}px`,
        marginTop: `-${radius}px`,
        animationDuration: `${speed}s`,
        border: "2px solid rgba(255, 215, 0, 0.6)",
      }}
    >
      {skills.map((Icon, i) => {
        const angle = angleStep * i;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={i}
            className="absolute text-yellow-300 text-2xl"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            {Icon}
          </div>
        );
      })}
    </div>
  );
};

export default function SkillsOrbit() {
  const orbit1 = [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />];
  const orbit2 = [<FaBootstrap />, <FaReact />, <FaNodeJs />];
  const orbit3 = [<FaDocker />, <FaGit />, <FaGithub />, <SiTailwindcss />];
  const orbit4 = [<SiRedux />, <SiExpress />, <SiMongodb />, <SiMysql />];
  const orbit5 = [
    <SiPostman />,
    <VscVscode />,
    <SiFigma />,
    <SiC />,
    <SiCplusplus />,
    <FaChrome />,
  ];

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setScale(0.4);
      } else if (width < 640) {
        setScale(0.6);
      } else if (width < 768) {
        setScale(0.8);
      } else if (width < 1024) {
        setScale(0.9);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white tracking-wide font-orbitron">
        Orbit of Mastery
      </h2>
      <div className="relative w-[900px] h-[900px]">
        <div
          className="absolute top-1/2 left-1/2 bg-yellow-400 rounded-full shadow-[0_0_60px_30px_rgba(250,204,21,0.5)] flex items-center justify-center text-black font-bold text-xl -translate-x-1/2 -translate-y-1/2 z-50"
          style={{
            width: `${120 * scale}px`,
            height: `${120 * scale}px`,
          }}
        >
          KU
        </div>

        {getOrbitSkills(orbit1, 75 * scale, 30, false)}
        {getOrbitSkills(orbit2, 150 * scale, 40, true)}
        {getOrbitSkills(orbit3, 225 * scale, 50, false)}
        {getOrbitSkills(orbit4, 300 * scale, 60, true)}
        {getOrbitSkills(orbit5, 375 * scale, 70, false)}
      </div>
    </section>
  );
}
