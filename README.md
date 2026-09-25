# BRG — Dev Channel Portfolio

A developer portfolio inspired by the YouTube desktop interface: projects presented as videos,
technologies organized like categories, and your development history shown as a timeline.

Built with React, React Router, Tailwind CSS, and lucide-react.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Where to edit content

Nothing is hardcoded in the page components — all content lives in `src/data/`:

- `src/data/projects.js` — every project card and its details page. Add a project by adding
  an object to the `projects` array (see the existing entries for the shape). Set `featured: true`
  to surface it in the "Featured projects" row on the home page.
- `src/data/languages.js` — the Languages page: programming languages and technology categories.
- `src/data/history.js` — the History page's timeline entries, plus `futureDirection`.
- `src/data/futureProjects.js` — the Build Later page's backlog cards and their statuses.

## Real thumbnails

Project cards currently use a gradient placeholder (`thumbnailGradient` in `projects.js`) styled
like a YouTube thumbnail. To use real images instead, drop compressed images (16:9, under ~300KB)
into `src/assets/images/projects/`, set each project's `thumbnail` field to the imported path, and
swap the gradient `<div>` in `src/components/ProjectCard.jsx` and `src/pages/ProjectPage.jsx` for
an `<img>` with `object-cover`.

## Structure

```
src/
├── components/   Reusable UI: Header, Sidebar, MobileNav, ProjectCard, Timeline, etc.
├── pages/        One file per route: Home, Languages, About, History, BuildLater, ProjectPage
├── data/         All portfolio content
├── context/      Theme (dark/light) provider, persisted to localStorage
└── index.css     Tailwind entry + small global styles
```

## Notes

- Dark mode is the default; the toggle in the header persists your choice to `localStorage` and
  respects a first-visit system preference.
- The header search filters projects by title, description, technologies, and category.
- Routing follows the spec: `/`, `/languages`, `/about`, `/history`, `/build-later`,
  `/projects/:id`.
- Update the placeholder GitHub/LinkedIn/email links in `Header.jsx`, `Footer.jsx`, and `Home.jsx`.
