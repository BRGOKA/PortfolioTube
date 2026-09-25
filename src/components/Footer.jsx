import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-200 px-4 py-8 dark:border-zinc-800 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            BRG
          </p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Building software, AI, and biomedical technology.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-ember-500 dark:text-zinc-400"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-ember-500 dark:text-zinc-400"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-ember-500 dark:text-zinc-400"
          >
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl text-xs text-zinc-400 dark:text-zinc-600">
        © 2026 BRG
      </p>
    </footer>
  );
}
