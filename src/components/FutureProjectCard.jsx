const statusStyles = {
  Idea: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
  Planning: "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400",
  "In Progress": "bg-ember-500/10 text-ember-500",
  Researching:
    "bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400",
  Paused: "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
  "Coming Soon":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
};

export default function FutureProjectCard({ project }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
          {project.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${
            statusStyles[project.status] || statusStyles.Idea
          }`}
        >
          {project.status}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          {project.technologies.join(" • ")}
        </p>
        <span className="text-xs text-zinc-400 dark:text-zinc-600">
          Target: {project.expectedYear}
        </span>
      </div>
    </div>
  );
}
