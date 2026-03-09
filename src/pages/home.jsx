/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

export default function HomeHero() {
  return (
    <section id="home" className="relative flex items-center justify-center px-4 py-32 text-center sm:px-6">

      <div className="relative max-w-3xl">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="group relative">

            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-xl transition duration-700 group-hover:opacity-70 group-hover:blur-2xl" />

            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur-md transition duration-500 group-hover:opacity-100" />

            <div className="relative h-36 w-36 overflow-hidden rounded-full border-[3px] border-white/20 shadow-[0_0_60px_rgba(56,189,248,.4)]">

              <img
                src="/Akunobg.png"
                alt="profile"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:rotate-3 group-hover:scale-110"
              />

            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500"></span>
          </span>
          Available for Work
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-primary transition-colors duration-500">I'm </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              Yusyfina
            </span>
          </h2>
          <h3 className="text-text-secondary mb-6 text-2xl font-bold transition-colors duration-500 sm:text-3xl md:text-4xl">
            Flutter Mobile App & Fullstack Developer
          </h3>

          <p className="text-text-secondary mx-auto max-w-2xl px-2 text-sm leading-relaxed transition-colors duration-500 sm:text-lg md:text-xl">
            Building cross-platform mobile apps with Flutter and scalable fullstack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <div className="group relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur transition duration-500 group-hover:opacity-100" />
            <button
              onClick={() => {
                const section = document.querySelector("#contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary transition-all group-hover:bg-transparent sm:px-10 sm:py-4 sm:text-base"
            >
              Let's Talk
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>

          <button
            onClick={() => {
              const section = document.getElementById("portfolio");
              section?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
            className="group rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold tracking-wide backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] sm:px-10 sm:py-4 sm:text-base"
          >
            View Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}