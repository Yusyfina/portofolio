import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/Portofolio";
import { ArrowLeft, Star, Code, Github } from "lucide-react";

function GlowButton({ children, href }) {
  return (
    <div className="group relative w-fit">

      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 active:scale-95 group-hover:-translate-y-0.5 group-hover:bg-transparent"
      >
        {children}
      </a>

    </div>
  );
}

export default function ProjectDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return (
      <div className="mt-20 text-center text-primary transition-colors duration-500">
        Project not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-primary px-6 py-16 text-primary transition-colors duration-500">

      <div className="text-text-secondary mx-auto mb-10 flex max-w-6xl items-center gap-3 text-sm transition-colors duration-500">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 transition hover:bg-white/10"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <span>Projects</span>
        <span>›</span>

        <span className="font-medium text-primary transition-colors duration-500">
          {project.title}
        </span>

      </div>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

        <div>

          <h1 className="text-5xl font-bold leading-tight">
            {project.title}
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="text-text-secondary mt-6 leading-relaxed transition-colors duration-500">
            {project.longDescription}
          </p>


          <div className="mt-10 grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

              <div className="flex items-center gap-3">
                <Code className="text-cyan-400" size={20} />

                <span className="text-xl font-bold">
                  {project.technologies.length}
                </span>
              </div>

              <p className="text-text-secondary mt-1 text-sm transition-colors duration-500">
                Total Teknologi
              </p>

            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

              <div className="flex items-center gap-3">
                <Star className="text-purple-400" size={20} />

                <span className="text-xl font-bold">
                  {project.features.length}
                </span>
              </div>

              <p className="text-text-secondary mt-1 text-sm transition-colors duration-500">
                Fitur Utama
              </p>

            </div>

          </div>

          <div className="mt-8">

            <GlowButton href={project.github}>
              <Github size={18} />
              Github
            </GlowButton>

          </div>

          <div className="mt-12">

            <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-300">
              <Code size={18} />
              Technologies Used
            </h3>

            <div className="mt-4 flex flex-wrap gap-4">

              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:scale-105 hover:bg-cyan-500/20"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>

        <div>

          <img
            src={project.image}
            alt={project.title}
            className="rounded-2xl border border-white/10 shadow-lg"
          />


          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">

            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Star className="text-yellow-400" size={18} />
              Key Features
            </h3>


            <ul className="text-text-secondary mt-4 space-y-3 transition-colors duration-500">

              {project.features.map((feature, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  {feature}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}