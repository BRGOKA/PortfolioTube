export const statuses = [
  "All",
  "Idea",
  "Planning",
  "In Progress",
  "Researching",
  "Paused",
  "Coming Soon",
];

export const futureProjects = [
  {
    id: "ai-healthcare-assistant",
    title: "AI Healthcare Assistant",
    status: "Planning",
    description:
      "A future healthcare assistant that combines structured clinical data with AI to help triage routine questions.",
    technologies: ["AI", "Healthcare", "RAG"],
    expectedYear: 2027,
  },
  {
    id: "ecg-anomaly-detector",
    title: "Real-Time ECG Anomaly Detector",
    status: "Researching",
    description:
      "Exploring lightweight models that can flag irregular heart rhythms from streaming ECG data on low-power hardware.",
    technologies: ["Signal Processing", "Embedded ML", "Python"],
    expectedYear: 2027,
  },
  {
    id: "local-llm-lab-tools",
    title: "Local LLM Lab Tooling",
    status: "Idea",
    description:
      "A set of tools for running and evaluating open-weight models locally for biomedical text tasks, without sending data off-device.",
    technologies: ["Local AI", "Python", "Privacy"],
    expectedYear: 2026,
  },
  {
    id: "pentest-practice-range",
    title: "Personal Pentest Practice Range",
    status: "Idea",
    description:
      "A self-hosted set of deliberately vulnerable services to practice web security testing in a contained environment.",
    technologies: ["Cybersecurity", "Docker", "Linux"],
    expectedYear: 2027,
  },
  {
    id: "clinical-data-pipeline",
    title: "Clinical Data Extraction Pipeline",
    status: "Paused",
    description:
      "A pipeline for extracting structured fields from unstructured clinical notes, paused for now.",
    technologies: ["NLP", "Python", "Healthcare"],
    expectedYear: 2026,
  },
  {
    id: "portfolio-v2",
    title: "This Portfolio, v2",
    status: "Coming Soon",
    description:
      "An iteration on this site with a real projects API and content that updates without a redeploy.",
    technologies: ["React", "REST APIs"],
    expectedYear: 2026,
  },
  {
    id: "campus-security-scanner",
    title: "Campus Network Vulnerability Scanner",
    status: "Researching",
    description:
      "A lightweight scanner built to practice identifying common misconfigurations on a lab network.",
    technologies: ["Python", "Linux", "Docker"],
    expectedYear: 2027,
  },
];
