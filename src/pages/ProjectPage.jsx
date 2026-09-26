import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import PageContainer from "../components/PageContainer.jsx";
import { getProjectById } from "../data/projects.js";

function Section({ title, children }) {
  if (!children) return null;
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
    </div>
  );
}

export default function ProjectPage() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) return <Navigate to="/" replace />;

  return (
    <PageContainer>
      <Link
        to="/portfoliotube"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-ember-500 dark:text-zinc-400"
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div
        className={`relative mb-6 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br ${project.thumbnailGradient} shadow-card`}
      >
        <div className="absolute inset-0 flex items-end p-6">
          <span className="text-2xl font-bold text-white drop-shadow-sm sm:text-3xl">
            {project.title}
          </span>
        </div>
      </div>

      <div className="max-w-2xl">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
          <span>{project.year}</span>
          <span aria-hidden="true">•</span>
          <span>{project.category}</span>
        </div>

        <p className="mb-5 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </p>

        <Section title="Description">{project.description}</Section>
        <Section title="Problem">{project.problem}</Section>
        <Section title="Solution">{project.solution}</Section>
        <Section title="Technical implementation">{project.technical}</Section>
        <Section title="What I learned">{project.learned}</Section>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <Github size={16} /> View code
            </a>
          )}
          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-ember-500 hover:text-ember-500 dark:border-zinc-700 dark:text-zinc-300"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
