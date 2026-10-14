// NOTES: Hobbies content for the Hobbies page. Add a new hobby by adding an
// object here  no UI code needs to change.
export const hobbies = [
  {
    id: "3d",
    title: "3D",
    tagline: "Modeling, sculpting, and rendering for fun and for projects.",
    description:
      "I build 3D models and scenes outside of work  sometimes to visualize a project idea, sometimes just to get better at spatial thinking.",
    tools: ["Blender"],
    relatedProjects: [],
  },
  {
    id: "coding",
    title: "Coding",
    tagline: "Side projects, experiments, and things I build just to learn.",
    description:
      "Beyond schoolwork and portfolio projects, I write small scripts and tools to explore new languages, libraries, and ideas I'm curious about.",
    tools: ["Python", ".NET", "React", "JavaScript", "Git"],
    relatedProjects: [],
  },
  {
    id: "bugbounty",
    title: "Bug Bounty",
    tagline:
      "Practicing web security by hunting for real vulnerabilities sometimes on real servers and sometimes on controlled labs.",
    description:
      "I dig into web apps and lab environments to find and responsibly report security issues, it keeps my security instincts sharp and feeds directly back into how I write code.",
    tools: ["Burp Suite", "OWASP ZAP", "KaliLinux"],
    relatedProjects: [],
  },
  {
    id: "gamedev",
    title: "Game Dev",
    tagline: "Small game prototypes built for fun, not for shipping.",
    description:
      "I prototype small games like 2D platform games to experiment with logic, physics, and interaction design in a lower-stakes setting than my other projects.",
    tools: ["Unity", "UE5", "C#"],
    relatedProjects: [],
  },
  {
    id: "ai",
    title: "AI",
    tagline: "Tinkering with models beyond what my projects need.",
    description:
      "Outside of formal projects, I experiment with local models, new architectures, and papers I come across, mostly to satisfy curiosity about how things work under the hood.",
    tools: ["PyTorch", "Kaggle", "google colab", "Hugging Face", "Local LLMs"],
    relatedProjects: ["brain-mri-classifier", "medical-ai-platform"],
  },
];

export function getHobbyById(id) {
  return hobbies.find((h) => h.id === id);
}
