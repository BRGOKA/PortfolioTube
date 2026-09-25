import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowRight, Mail } from "lucide-react";
import ProjectGrid from "../components/ProjectGrid.jsx";
import Footer from "../components/Footer.jsx";
import {
  projects,
  categories,
  getFeaturedProjects,
  getLatestProjects,
} from "../data/projects.js";

function matchesSearch(project, query) {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  return (
    project.title.toLowerCase().includes(q) ||
    project.description.toLowerCase().includes(q) ||
    project.category.toLowerCase().includes(q) ||
    project.technologies.some((t) => t.toLowerCase().includes(q))
  );
}

export default function Home({ search }) {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        matchesSearch(p, search),
    );
  }, [category, search]);

  const isSearching = search.trim().length > 0;
  const featured = getFeaturedProjects();
  const latest = getLatestProjects(4);

  return (
    <div className="mx-auto w-full max-w-6xl animate-fadeIn px-4 py-6 pb-20 sm:px-6 sm:py-8 md:pb-8">
      {/* Channel header */}
      <section className="mb-8 flex flex-col gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ember-500 text-xl font-bold text-white sm:h-20 sm:w-20 sm:text-2xl">
          BRG
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-bold text-zinc-900 dark:text-white sm:text-xl">
            BRG
          </h1>
          <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
            Biomedical Engineering Student • AI Engineer • Developer
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Building software, AI systems, medical AI, and experimental tech
            projects.
          </p>
          <div className="mt-3 flex gap-2">
            <a
              href="https://github.com/BRGOKA"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brahim-goudjal-5ab9183b8/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-zinc-300 px-3.5 py-1.5 text-xs font-medium text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href="mailto:brahim.goudjal1@://gmail.com"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-zinc-300 px-3.5 py-1.5 text-xs font-medium text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300"
            >
              <Mail size={14} />
              brahim.goudjal1@gmail.com
            </a>
          </div>
        </div>
      </section>

      {isSearching ? (
        <section>
          <h2 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">
            Results for &ldquo;{search}&rdquo;
          </h2>
          <ProjectGrid projects={filtered} />
        </section>
      ) : (
        <>
          {/* Category filter */}
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={[
                  "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                  category === c
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>

          {category === "All" ? (
            <>
              <section className="mb-10">
                <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-white">
                  Featured projects
                </h2>
                <ProjectGrid projects={featured} />
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-white">
                  Latest uploads
                </h2>
                <ProjectGrid projects={latest} />
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-white">
                  All projects
                </h2>
                <ProjectGrid projects={projects} />
              </section>
            </>
          ) : (
            <section className="mb-10">
              <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-white">
                {category}
              </h2>
              <ProjectGrid projects={filtered} />
            </section>
          )}

          <section className="mb-2 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
              About this channel
            </h2>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              I'm a biomedical engineering student building at the intersection
              of software, AI, and healthcare. Every project here is something I
              actually built, not a tutorial follow-along.
            </p>
            <Link
              to="/about"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ember-500 hover:underline"
            >
              Read more about me <ArrowRight size={14} />
            </Link>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
