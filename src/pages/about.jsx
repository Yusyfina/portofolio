/* eslint-disable no-unused-vars */
import React, { useMemo } from "react"
import { Code, Award, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { Download, Linkedin, Github } from "lucide-react"
import { projects, certificates, techStack } from "../data/Portofolio";

const Header = React.memo(() => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8 }}
    className="mb-8 px-[5%] text-center md:mb-16"
  >
    <h2 className="mb-4 inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.3)] md:text-5xl lg:text-6xl">
      About Me
    </h2>
  </motion.div>
))

const ProfileImage = React.memo(() => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex items-center justify-center lg:justify-end"
  >
    <div className="group relative">
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-xl transition duration-1000 group-hover:opacity-70 group-hover:blur-2xl" />
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur-md transition duration-500 group-hover:opacity-100" />

      <div className="group relative h-72 w-72 overflow-hidden rounded-full bg-card-bg shadow-[0_0_60px_rgba(56,189,248,.4)] transition-transform duration-700 ease-out hover:scale-105">

        <img
          src="/Photo.png"
          alt="Profile"
          className="h-full w-full -translate-y-14 translate-x-6 scale-[1.5] object-cover object-center transition-transform duration-700 ease-out group-hover:rotate-3 group-hover:scale-[1.65]"
        />

      </div>
    </div>
  </motion.div>
))

const StatCard = React.memo(({ icon: Icon, value, label, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      className="... group relative cursor-pointer overflow-hidden rounded-3xl bg-card-bg p-6 backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
            {Icon && <Icon className="h-8 w-8 text-cyan-400 transition-colors duration-500 group-hover:text-primary" />}
          </div>
          <span className="text-4xl font-black tracking-tighter text-blue-600 dark:text-cyan-300">

            {value}
          </span>
        </div>

        <p className="mb-1 text-sm font-bold uppercase tracking-widest text-cyan-300 transition-colors duration-500 group-hover:text-cyan-200">
          {label}
        </p>
        <p className="text-text-secondary group-hover:text-text-primary text-sm font-medium transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  )
})

const AboutPage = () => {

  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    return {
      totalProjects: projects.length,
      totalCertificates: certificates.length,
      YearExperience: 2,
    };
  }, []);

  const statsData = [
    { icon: Code, value: totalProjects, label: "Projects", description: "Software Projects & Applications", delay: 0 },
    { icon: Award, value: totalCertificates, label: "Certificates", description: "Skills & learning milestones", delay: 0.15 },
    { icon: Globe, value: YearExperience, label: "Experience", description: "Years learning & building", delay: 0.3 },
  ]

  return (
    <section id="about" className="relative overflow-hidden py-10 text-primary transition-colors duration-500">

      <div className="relative z-10 mx-auto max-w-6xl px-[5%]">
        <Header />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight text-primary transition-colors duration-500 sm:text-4xl">
                Hello, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Yusyfina</span>
              </h3>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>

            <p className="text-cyan-300/80 md:text-lg">
              Informatics student, <span className="font-semibold text-primary transition-colors duration-500">Flutter Mobile App and Fullstack Developer</span> building modern web and mobile applications with clean design and strong engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">

              <div className="group relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur transition duration-500 group-hover:opacity-100" />

                <a
                  href="/CV-Yusyfina.pdf"
                  download
                  className="relative flex items-center gap-2 rounded-full bg-transparent px-8 py-3.5 text-sm font-semibold tracking-wide text-primary transition-all group-hover:bg-transparent sm:px-10 sm:py-4 sm:text-base"
                >
                  <Download className="h-5 w-5 text-cyan-400" />
                  Download CV
                </a>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur transition duration-500 group-hover:opacity-100" />

                <a
                  href="https://linkedin.com/in/yusyfina-yuniarti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary transition-all group-hover:bg-transparent"
                >
                  <Linkedin className="h-6 w-6 text-blue-400" />
                </a>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur transition duration-500 group-hover:opacity-100" />

                <a
                  href="https://github.com/yusyfina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary transition-all group-hover:bg-transparent"
                >
                  <Github className="h-6 w-6 text-primary transition-colors duration-500" />
                </a>
              </div>

            </div>

          </motion.div>

          <ProfileImage />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {statsData.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
export default React.memo(AboutPage)