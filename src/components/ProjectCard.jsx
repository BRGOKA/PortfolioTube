import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const {
    id,
    title,
    description,
    technologies,
    category,
    year,
    duration,
    thumbnailGradient,
  } = project;

  return (
    <Link
      to={`/projects/${id}`}
      className="group hover:scale-105 transition ease-in-out block rounded-lg focus-visible:outline-none"
      aria-label={`View project: ${title}`}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-200 shadow-card transition-shadow duration-200 group-hover:shadow-cardHover dark:bg-zinc-800">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${thumbnailGradient} transition-transform duration-200 ease-out group-hover:scale-[1.05]`}
        />
        <div className="absolute inset-0 flex items-end p-4">
          <span className="text-lg font-bold leading-tight text-white drop-shadow-sm">
            {title}
          </span>
        </div>
        <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-[11px] font-medium text-white">
          {duration}
        </span>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 ring-2 ring-inset ring-white/40 rounded-xl" />
      </div>

      <div className="mt-3 flex gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold text-zinc-900 group-hover:text-ember-500 dark:text-white sm:text-[15px]">
            {title}
          </h3>
          <p className="mt-0.5 line-clamp-2 text-[13px] text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-1 gap-y-1 text-[12px] text-zinc-500 dark:text-zinc-500">
            <span>{technologies.slice(0, 3).join(" • ")}</span>
          </div>
          <p className="mt-0.5 text-[12px] text-zinc-400 dark:text-zinc-500">
            {year} • {category}
          </p>
        </div>
      </div>
    </Link>
  );
}
