import PageContainer from "../components/PageContainer.jsx";
import Timeline from "../components/Timeline.jsx";
import TimelineItem from "../components/TimelineItem.jsx";
import { history, futureDirection } from "../data/history.js";

export default function History() {
  return (
    <PageContainer
      title="History"
      description="How my technical focus has evolved, year by year."
    >
      <div className="max-w-2xl">
        <Timeline>
          {history.map((entry, i) => (
            <TimelineItem
              key={entry.year}
              entry={entry}
              highlight={i === history.length - 1}
            />
          ))}
          <li className="relative flex gap-5">
            <div className="relative flex w-8 shrink-0 justify-center">
              <span className="z-10 mt-1.5 h-3 w-3 rounded-full border-2 border-dashed border-zinc-400 bg-transparent dark:border-zinc-600" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-600">
                Future
              </p>
              <h3 className="mt-0.5 text-base font-semibold text-zinc-900 dark:text-white">
                {futureDirection.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {futureDirection.description}
              </p>
            </div>
          </li>
        </Timeline>
      </div>
    </PageContainer>
  );
}
