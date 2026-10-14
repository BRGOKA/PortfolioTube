export default function LanguageCard({ language }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
        {language.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {language.description}
      </p>
      {language.usedIn?.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
            Used in
          </p>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {language.usedIn.map((item) => (
              <li
                key={item}
                className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
