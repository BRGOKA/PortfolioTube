export default function Timeline({ children }) {
  return (
    <div className="relative pl-2">
      <div
        className="absolute left-[15px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800"
        aria-hidden="true"
      />
      <ol className="flex flex-col gap-8">{children}</ol>
    </div>
  );
}
