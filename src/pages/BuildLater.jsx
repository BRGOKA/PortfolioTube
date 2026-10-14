import { useMemo, useState } from "react";
import PageContainer from "../components/PageContainer.jsx";
import FutureProjectCard from "../components/FutureProjectCard.jsx";
import { futureProjects, statuses } from "../data/futureProjects.js";

export default function BuildLater() {
  const [status, setStatus] = useState("All");

  const filtered = useMemo(
    () =>
      status === "All"
        ? futureProjects
        : futureProjects.filter((p) => p.status === status),
    [status]
  );

  return (
    <PageContainer
      title="Build Later"
      description="A public backlog of ideas, experiments, and things I haven't gotten to yet."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {statuses.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            className={[
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
              status === s
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800",
            ].join(" ")}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Nothing in this status yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <FutureProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </PageContainer>
  );
}
