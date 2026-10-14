export default function PageContainer({ title, description, children }) {
  return (
    <div className="mx-auto w-full max-w-6xl animate-fadeIn px-4 py-6 pb-20 sm:px-6 sm:py-8 md:pb-8">
      {title && (
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-white sm:text-2xl">
            {title}
          </h1>
          {description && (
            <p className="mt-1 max-w-2xl text-sm text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
