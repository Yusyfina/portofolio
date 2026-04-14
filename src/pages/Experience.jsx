import React from "react";
import { motion } from "framer-motion";

const workExp = [
  {
    role: "Fullstack Web Developer",
    company: "PT.Bumiagara Mitra Konsultan",
    date: "Apr 2026 - Present",
    desc: "Developed a company profile website",
    points: [
      "Design figma prototype",
      "Developed website using React.js",
      "Data management",
    ],
    tech: ["Figma","React","Vite","Tailwind"]
  }
];

const volunteerExp = [
  {
    role: "Website Optimization",
    company: "Polimeritas",
    date: "Jan 2026 - Present",
    desc: "Optimized website content using SEO best practices to improve search engine visibility and organic reach.",
    points: [
      "Design content",
      "SEO optimization",
      "Collaborated with team"
    ],
    tech: ["Canva","Figma"]
  },
  {
    role: "Graphic Design",
    company: "Forum TBM Aceh",
    date: "Jul 2025 - Dec 2025",
    desc: "Developed visually engaging graphics to support educational campaigns.",
    points: [
      "Design content"
    ],
    tech: ["Canva"]
  }
];

const Card = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 30 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6 }}
    className="group relative pl-12"
  >

   <span className="absolute left-0 top-7 h-[2px] w-10 bg-gradient-to-r from-cyan-400/60 to-transparent"></span>
   
    <div className="border-border-primary rounded-3xl border bg-card-bg p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-[0_0_50px_rgba(56,189,248,0.2)]">

      <h4 className="text-text-primary text-xl font-bold">
        {exp.role}
      </h4>

      <p className="text-text-secondary text-sm">
        {exp.company} • {exp.date}
      </p>

      <p className="text-text-secondary mt-3 text-sm leading-relaxed">
        {exp.desc}
      </p>

      <ul className="text-text-secondary mt-4 space-y-2 text-sm">
        {exp.points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-cyan-400">•</span>
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {exp.tech.map((t, i) => (
          <span
            key={i}
            className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400"
          >
            {t}
          </span>
        ))}
      </div>

    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <section className="relative overflow-hidden pb-32 pt-10 text-primary">

      <div className="mx-auto max-w-6xl px-6 lg:px-20">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* GARIS UTAMA (TIPIS → TEBAL → TIPIS) */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-40"></div>

          <div className="ml-12 space-y-16">

            {/* WORK */}
            <div>
              <h3 className="text-text-primary mb-10 text-2xl font-bold">
                Work Experience
              </h3>

              <div className="space-y-10">
                {workExp.map((exp, i) => (
                  <Card key={i} exp={exp} index={i} />
                ))}
              </div>
            </div>

            {/* VOLUNTEER */}
            <div>
              <h3 className="text-text-primary mb-10 text-2xl font-bold">
                Volunteer Experience
              </h3>

              <div className="space-y-10">
                {volunteerExp.map((exp, i) => (
                  <Card key={i} exp={exp} index={i} />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}