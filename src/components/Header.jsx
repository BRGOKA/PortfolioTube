import { Link } from "react-router-dom";
import {
  Search,
  Sun,
  Moon,
  Github,
  Linkedin,
  Menu,
  PlaySquare,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Header({ search, onSearchChange, onMenuClick }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-zinc-200 bg-white/95 px-3 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95 sm:px-4">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 md:hidden"
        aria-label="Open navigation menu"
      >
        <Menu size={20} />
      </button>

      <Link
        to="/portfoliotube"
        className="flex shrink-0 items-center gap-2 rounded-md px-1 py-1 text-zinc-900 dark:text-white"
      >
        <PlaySquare className="text-ember-500" size={24} strokeWidth={2.2} />
        <span className="hidden text-[17px] font-semibold tracking-tight sm:inline">
          BRG<span className="text-zinc-400 dark:text-zinc-500">/dev</span>
        </span>
      </Link>

      <div className="ml-2 flex-1 max-w-xl">
        <label htmlFor="project-search" className="sr-only">
          Search projects
        </label>
        <div className="flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-50 px-3.5 py-2 focus-within:border-ember-500 dark:border-zinc-700 dark:bg-zinc-900">
          <Search size={16} className="shrink-0 text-zinc-500" />
          <input
            id="project-search"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects, tech, category..."
            className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none dark:text-white"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <a
          href="https://github.com/BRGOKA"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="hidden rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 sm:inline-flex"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/brahim-goudjal-5ab9183b8/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="hidden rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 sm:inline-flex"
        >
          <Linkedin size={18} />
        </a>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div
          className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-ember-500 text-sm font-semibold text-white"
          aria-hidden="true"
        >
          B
        </div>
      </div>
    </header>
  );
}
