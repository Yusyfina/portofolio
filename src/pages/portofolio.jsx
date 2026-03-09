/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Award, Boxes, ChevronDown, ChevronUp, Github, ExternalLink, Scan } from "lucide-react";
import { AppBar, Tabs, Tab } from "@mui/material";
import { projects, certificates, techStack } from "../data/Portofolio";
import { useNavigate } from "react-router-dom";
import GlowButton from "../components/GlowButton";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0
    }
  }
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -60 : 60,
    y: 40,
    scale: 0.95
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function TabPanel({ children, value, index }) {
  return (
    <AnimatePresence mode="wait">
      {value === index && (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pt-10"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ShowToggle({ showAll, setShowAll }) {
  return (
    <div className="mt-8 flex justify-center">
      <GlowButton onClick={() => setShowAll(!showAll)}>
        {showAll ? (
          <>
            Show Less <ChevronUp size={16} />
          </>
        ) : (
          <>
            Show More <ChevronDown size={16} />
          </>
        )}
      </GlowButton>
    </div>
  );
}

export default function Portfolio() {

  const [value, setValue] = useState(0);
  const [showProjects, setShowProjects] = useState(false);
  const [showCerts, setShowCerts] = useState(false);
  const [showStack, setShowStack] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const navigate = useNavigate();

  const visibleProjects = showProjects ? projects : projects.slice(0, 4);
  const visibleCerts = showCerts ? certificates : certificates.slice(0, 6);
  const visibleStack = showStack ? techStack : techStack.slice(0, 12);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-transparent pb-32 pt-20 text-primary transition-colors duration-500"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-full max-w-6xl px-6 lg:px-20"
      >

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h2>
        </div>

        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "var(--card-bg)",
            border: "1px solid var(--border-primary)",
            borderRadius: "20px",
            backdropFilter: "blur(12px)",
          }}
        >

          <Tabs
            value={value}
            onChange={(e, v) => setValue(v)}
            variant="fullWidth"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                color: "var(--text-secondary)",
                fontWeight: 600,
                borderRadius: "14px",
                "&.Mui-selected": {
                  color: "var(--text-primary)",
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(99,102,241,0.15))",
                },
              },
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >

            <Tab icon={<Code />} label="Projects" />
            <Tab icon={<Award />} label="Certificates" />
            <Tab icon={<Boxes />} label="Tech Stack" />

          </Tabs>

        </AppBar>

        <TabPanel value={value} index={0}>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {visibleProjects.map((project, index) => (

              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-card-bg shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]"              >

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="flex flex-1 flex-col p-6">

                  <h3 className="mb-3 text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      <Github size={16} />
                      GitHub
                      <ExternalLink size={14} />
                    </button>

                    <GlowButton onClick={() => navigate(`/project/${project.id}`)}>
                      Details
                    </GlowButton>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

          {projects.length > 4 && (
            <ShowToggle showAll={showProjects} setShowAll={setShowProjects} />
          )}

        </TabPanel>

        <TabPanel value={value} index={1}>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {visibleCerts.map((cert) => (

              <motion.div
                key={cert.id}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedCert(cert.image)}
                className="group flex flex-col overflow-hidden rounded-3xl bg-card-bg shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]"
              >

                <img
                  src={cert.image}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">

                  <Scan size={40} className="text-white opacity-90" />

                  <span className="text-lg font-semibold tracking-wide text-white">
                    View Certificate
                  </span>

                </div>
              </motion.div>

            ))}

          </div>

          {certificates.length > 6 && (
            <ShowToggle showAll={showCerts} setShowAll={setShowCerts} />
          )}

        </TabPanel>

        <TabPanel value={value} index={2}>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">

            {visibleStack.map((stack) => (

              <motion.div
                key={stack.name}
                whileHover={{ y: -6 }}
                className="flex aspect-square flex-col items-center justify-center rounded-2xl border-transparent bg-card-bg shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]"
              >

                <img
                  src={stack.icon}
                  alt={stack.name}
                  loading="lazy"
                  className="mb-4 h-14 w-14 object-contain"
                />

                <p className="text-text-secondary group-hover:text-text-primary text-sm font-semibold transition-colors">
                  {stack.name}
                </p>

              </motion.div>

            ))}

          </div>

          {techStack.length > 12 && (
            <ShowToggle showAll={showStack} setShowAll={setShowStack} />
          )}

        </TabPanel>

      </motion.div>

      <AnimatePresence>

        {selectedCert && (

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >

            <motion.div
              className="relative w-[90vw] max-w-[860px]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black"
              >
                ✕
              </button>

              <img
                src={selectedCert}
                className="h-auto w-full rounded-lg shadow-2xl"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}