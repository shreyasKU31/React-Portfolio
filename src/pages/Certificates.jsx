import { useState } from "react";
import certificatesImg from "../assets/certificates/certificates";

const certificates = [
  {
    title: "UI/UX Design by Google",
    org: "Google",
    image: certificatesImg.googleuiux,
    link: "/certificates/uiux-google.png",
  },
  {
    title: "Full Stack Developer",
    org: "Apna College",
    image: certificatesImg.sigma,
    link: "/certificates/fullstack-fcc.png",
  },
  {
    title: "C - Programming",
    org: "V-Tech Solutions",
    image: certificatesImg.cprogramme,
    link: "/certificates/ethical-hacking.png",
  },
  {
    title: "DSA in CPP",
    org: "Code Chef",
    image: certificatesImg.cppdsa,
    link: "/certificates/ethical-hacking.png",
  },
  {
    title: "Internship in Campalin",
    org: "Campalin",
    image: certificatesImg.Campalin,
    link: "/certificates/ethical-hacking.png",
  },
  {
    title: "C++ Tutorial",
    org: "Code Chef",
    image: certificatesImg.ccc,
    link: "/certificates/ethical-hacking.png",
  },
  {
    title: "Figma Design",
    org: "Udemy",
    image: certificatesImg.figma,
    link: "/certificates/ethical-hacking.png",
  },
  {
    title: "Innovate Intern Internship",
    org: "Innovate Intern",
    image: certificatesImg.innovate,
    link: "/certificates/ethical-hacking.png",
  },
  {
    title: "JavaScript",
    org: "Code Chef",
    image: certificatesImg.js,
    link: "/certificates/ethical-hacking.png",
  },
];

export default function CertificateShowcase() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative min-h-screen text-white font-orbitron overflow-hidden px-6 py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#111_1px,transparent_1px)] bg-[length:20px_20px] animate-pulse" />
      <h2 className="text-center text-5xl font-bold mb-20 font-orbitron">
        Certificates
      </h2>
      <div className="flex flex-wrap justify-center gap-20 relative z-10">
        {certificates.map((cert, i) => (
          <div
            key={i}
            onClick={() => setActive(cert)}
            className="group relative w-64 h-64 cursor-pointer transition-transform hover:scale-105 rounded-full bg-gradient-to-br from-yellow-400 via-black to-yellow-400 p-1 shadow-[0_0_30px_#FFD700] hover:rotate-1 hover:shadow-[0_0_50px_#FFD700]"
          >
            <div className="absolute inset-0 animate-rotateRing rounded-full"></div>
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-full transition duration-500 grayscale-100 hover:grayscale-0"
              />
            </div>
            <p className="absolute -bottom-8 w-full text-center text-gold drop-shadow-[0_0_6px_#FFD700] text-lg">
              {cert.title}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-[#111] border border-gold rounded-3xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_30px_#FFD700]">
            <button
              className="absolute top-3 right-4 text-white text-2xl hover:text-gold"
              onClick={() => setActive(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl mb-4 text-gold">{active.title}</h3>
            <img
              src={active.image}
              alt={active.title}
              className="w-full rounded-lg border border-gold shadow-[0_0_20px_#FFD700]"
            />
            <p>Organization : {active.org}</p>
            <a
              href={active.link}
              download
              className="mt-4 inline-block bg-gold text-black px-5 py-2 rounded hover:bg-white hover:text-gold transition"
            >
              Download Certificate
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
