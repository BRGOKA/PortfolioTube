import PageContainer from "../components/PageContainer.jsx";
import LanguageCard from "../components/LanguageCard.jsx";
import { programmingLanguages, techCategories } from "../data/languages.js";

export default function Languages() {
  return (
    <PageContainer
      title="Languages & Technologies"
      description="What I use, organized by how I actually use it — not percentage bars."
    >
      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-white">
          Programming languages
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programmingLanguages.map((lang) => (
            <LanguageCard key={lang.name} language={lang} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-white">
          Additional technologies
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {techCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {cat.name}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
