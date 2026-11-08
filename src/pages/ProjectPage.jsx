import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [id]);

  if (!project) return <Navigate to="/" replace />;

  const projectImages =
    project.images?.length > 0
      ? project.images
      : project.thumbnail
        ? [project.thumbnail]
        : [];
  const activeImage = projectImages[activeImageIndex];

  return (
    <PageContainer>
      <Link
        to="/PortfolioTube"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-ember-500 dark:text-zinc-400"
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div
        className={`relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-zinc-300/60 bg-gradient-to-br ${project.thumbnailGradient} shadow-[0_8px_24px_rgba(113,113,122,0.2)] dark:border-zinc-700/70 dark:shadow-[0_8px_24px_rgba(113,113,122,0.3)]`}
        style={
          activeImage
            ? {
                backgroundImage: `url("${activeImage}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        {projectImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() =>
                setActiveImageIndex(
                  (currentIndex) =>
                    (currentIndex - 1 + projectImages.length) %
                    projectImages.length,
                )
              }
              aria-label="Previous project image"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-zinc-950/65 p-2 text-white shadow-md transition-colors hover:bg-zinc-950/90 focus-visible:outline-white"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveImageIndex(
                  (currentIndex) => (currentIndex + 1) % projectImages.length,
                )
              }
              aria-label="Next project image"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-zinc-950/65 p-2 text-white shadow-md transition-colors hover:bg-zinc-950/90 focus-visible:outline-white"
            >
              <ChevronRight size={22} />
            </button>
            <div
              className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-zinc-950/65 px-2.5 py-1.5"
              role="group"
              aria-label="Choose project image"
            >
              {projectImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show project image ${index + 1}`}
                  aria-pressed={activeImageIndex === index}
                  className={`h-2 rounded-full transition-all ${
                    activeImageIndex === index
                      ? "w-5 bg-white"
                      : "w-2 bg-white/55 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 flex min-h-1/2 flex-col justify-end bg-gradient-to-t from-zinc-950/95 via-zinc-950/80 to-zinc-950/15 p-6">
          <h1 className="text-2xl font-bold text-white drop-shadow-sm sm:text-3xl">
            {project.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-100 drop-shadow-sm sm:text-base">
            {project.description}
          </p>
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
