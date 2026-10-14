export default function SkillCard({ title, children, icon: Icon }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-2.5">
        {Icon && <Icon size={18} className="text-ember-500" strokeWidth={2} />}
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
    </div>
  );
}
