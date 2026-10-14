import { Link } from "react-router-dom";
import { getProjectById } from "../data/projects.js";

export default function TimelineItem({ entry, highlight }) {
  const linkedProjects = (entry.projects || [])
    .map((id) => getProjectById(id))
    .filter(Boolean);

  return (
    <li className="relative flex gap-5 pl-0">
      <div className="relative flex w-8 shrink-0 justify-center">
        <span
          className={[
            "z-10 mt-1.5 h-3 w-3 rounded-full ring-4",
            highlight
              ? "bg-ember-500 ring-ember-500/15"
              : "bg-zinc-400 ring-zinc-400/10 dark:bg-zinc-600",
          ].join(" ")}
        />
      </div>
      <div className="flex-1 pb-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-ember-500">
          {entry.year}
        </p>
        <h3 className="mt-0.5 text-base font-semibold text-zinc-900 dark:text-white">
          {entry.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {entry.description}
        </p>
        {entry.technologies?.length > 0 && (
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
            {entry.technologies.join(" • ")}
          </p>
        )}
        {linkedProjects.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {linkedProjects.map((p) => (
              <Link
                key={p.id}
                to={`/portfoliotube/projects/${p.id}`}
                className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 hover:border-ember-500 hover:text-ember-500 dark:border-zinc-700 dark:text-zinc-400"
              >
                {p.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
