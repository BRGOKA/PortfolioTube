// import { Link } from "react-router-dom";
// import { getProjectById } from "../data/projects.js";

export default function HobbyCard({ hobby }) {
  // const linkedProjects = (hobby.relatedProjects || [])
  //   .map((id) => getProjectById(id))
  //   .filter(Boolean);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
        {hobby.title}
      </h3>

      <p className="mt-1 text-sm font-medium text-ember-500">{hobby.tagline}</p>

      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {hobby.description}
      </p>

      {hobby.tools?.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
            Tools
          </p>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {hobby.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* 
      {linkedProjects.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
            Related projects
          </p>
          <div className="mt-1.5 flex flex-wrap gap-2">
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
        </div>
      )} */}
    </div>
  );
}
