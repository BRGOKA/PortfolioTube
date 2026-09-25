import {
  Brain,
  Code2,
  HeartPulse,
  ShieldCheck,
  Cpu,
  Scan,
  Globe,
  Server,
  Boxes,
  Wand2,
  Puzzle,
} from "lucide-react";
import PageContainer from "../components/PageContainer.jsx";
import SkillCard from "../components/SkillCard.jsx";

const whatIDo = [
  {
    title: "Artificial Intelligence",
    icon: Brain,
    body: "Machine learning, deep learning, computer vision, medical AI, RAG systems, and experimentation with local AI models.",
  },
  {
    title: "Software Development",
    icon: Code2,
    body: "React applications, APIs, full-stack systems, and developer tools built to actually get used.",
  },
  {
    title: "Biomedical Technology",
    icon: HeartPulse,
    body: "Medical imaging, healthcare software, biomedical systems, and clinical technology.",
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    body: "Web security, penetration testing, vulnerability research, and security experimentation.",
  },
];

const canBuild = [
  { title: "AI Systems", icon: Cpu, body: "End-to-end pipelines from data to a usable model." },
  { title: "Medical Imaging", icon: Scan, body: "Classification and analysis tools for scan data." },
  { title: "Web Applications", icon: Globe, body: "Responsive, production-ready frontends and flows." },
  { title: "REST APIs", icon: Server, body: "Backend services that are documented and testable." },
  { title: "RAG Applications", icon: Boxes, body: "Retrieval-augmented systems grounded in real sources." },
  { title: "Automation", icon: Wand2, body: "Scripts and tools that remove repetitive manual work." },
  { title: "Interactive Tools", icon: Puzzle, body: "Small, focused tools built around a single task." },
];

export default function About() {
  return (
    <PageContainer title="About">
      <section className="mb-10 max-w-2xl">
        <p className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
          I'm a biomedical engineering student interested in the intersection
          of software engineering, artificial intelligence, healthcare, and
          cybersecurity.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
          I enjoy turning technical ideas into working systems — most of what
          I build starts as a question I want to answer for myself, then
          becomes something worth sharing.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-white">
          What I do
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whatIDo.map((item) => (
            <SkillCard key={item.title} title={item.title} icon={item.icon}>
              {item.body}
            </SkillCard>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-white">
          What I can build
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {canBuild.map((item) => (
            <SkillCard key={item.title} title={item.title} icon={item.icon}>
              {item.body}
            </SkillCard>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
