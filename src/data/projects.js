// NOTES: Central project data. Add a new project by adding an object here —
// no UI code needs to change.
export const categories = [
  "All",
  "AI / ML",
  "Medical AI",
  "Computer Vision",
  "Web Development",
  "Full Stack",
  "Cybersecurity",
  "Automation",
  "Other",
];

export const projects = [
  {
    id: "medical-ai-platform",
    title: "Medical AI Imaging Platform",
    description:
      "A platform that analyzes medical scans and flags regions of interest for radiologists, built to cut review time without replacing clinical judgment.",
    thumbnail: "",
    thumbnailGradient: "from-rose-500 via-red-600 to-zinc-900",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    category: "Medical AI",
    year: 2025,
    duration: "03:42",
    featured: false,
    github: "#",
    demo: "#",
    problem:
      "Radiologists reviewing high volumes of scans face fatigue, and subtle anomalies are easy to miss in dense imaging studies.",
    solution:
      "A convolutional model trained on labeled scan data highlights likely regions of interest, presented alongside the original image for a human to confirm.",
    technical:
      "A TensorFlow model serves predictions through a FastAPI backend; the React frontend overlays heatmaps on the DICOM-derived images and lets a clinician accept, reject, or annotate each finding.",
    learned:
      "Working with medical imaging data taught me how much of the engineering effort goes into preprocessing, calibration, and building a UI that clinicians can actually trust.",
  },
  {
    id: "brain-mri-classifier",
    title: "Brain MRI Tumor Classifier",
    description:
      "A classifier that distinguishes tumor types from brain MRI slices, with a focus on interpretability.",
    thumbnail: "",
    thumbnailGradient: "from-violet-500 via-fuchsia-600 to-zinc-900",
    technologies: ["Python", "PyTorch", "OpenCV"],
    category: "Medical AI",
    year: 2025,
    duration: "02:18",
    featured: true,
    github: "#",
    demo: "#",
    problem:
      "Distinguishing tumor subtypes from MRI slices by eye takes years of training, and second opinions are not always available quickly.",
    solution:
      "A PyTorch classifier trained on a public MRI dataset predicts tumor subtype.",
    technical:
      "OpenCV handles slice preprocessing and normalization; a ResNet-based backbone was fine-tuned for the classification task.",
    learned:
      "This project pushed me to prioritize interpretability over raw accuracy a model that can't explain itself is much less useful in a medical context.",
  },
  {
    id: "skin-disease-classifier",
    title: "Skin Disease Classifier",
    description:
      "An image classifier for common dermatological conditions, built as a learning exercise in transfer learning.",
    thumbnail: "",
    thumbnailGradient: "from-amber-500 via-orange-600 to-zinc-900",
    technologies: ["Python", "TensorFlow", "Keras"],
    category: "Computer Vision",
    year: 2025,
    duration: "01:54",
    featured: false,
    github: "#",
    demo: "#",
    problem:
      "Recognizing skin conditions from photos requires broad visual experience that's hard to gain without clinical exposure.",
    solution:
      "A transfer-learning approach fine-tunes a pretrained convolutional network on a labeled dermatology image set.",
    technical:
      "Built with Keras on top of TensorFlow, using a pretrained EfficientNet backbone, data augmentation to handle class imbalance, and a simple Flask endpoint for inference.",
    learned:
      "I learned how far transfer learning stretches a small dataset, and how much class imbalance can distort a model's real-world performance.",
  },
  {
    id: "Quran-RAG",
    title: "A RAG system for Quran tafsir",
    description:
      "A retrieval-augmented assistant that answers questions from a predefined Quran tafsir (tfsir Ibn Kathir).",
    thumbnail: "",
    thumbnailGradient: "from-sky-500 via-blue-600 to-zinc-900",
    technologies: ["Python", "Hugging Face", "Google Colab"],
    category: "AI / ML",
    year: 2026,
    duration: "04:05",
    featured: true,
    github: "#",
    demo: "#",
    problem: "wanted to make an app for quran tafsir with RAG system.",
    solution:
      "A retrieval-augmented generation pipeline indexes Quran verses and tafsir locally, then answers natural-language questions with citations back to the source document.",
    technical:
      "verses are chunked and embedded locally, stored in a vector index, and retrieved at query time to ground a language model's answer; the React frontend wasnt implimented but will be.",
    learned:
      "Building this taught me how much retrieval quality not model size determines whether a RAG system actually feels reliable.",
  },
  {
    id: "Python-Backdoor",
    title: "Python Backdoor script",
    description:
      "A lightweight python script to gain a persistent root shell to a compremized computer.",
    thumbnail: "",
    thumbnailGradient: "from-emerald-500 via-teal-600 to-zinc-900",
    technologies: ["Python", "Linux"],
    category: "Cybersecurity",
    year: 2025,
    duration: "02:37",
    featured: false,
    github: "#",
    demo: "#",
    problem:
      "common scripts are easily detetcted by antiviruses, i wanted to build my own backdoor script.",
    solution:
      "i build my own python script with persistent execution and root shell access.",
    technical:
      "Written in Python, for repeatable runs, using reverse shell technices to gain root access to compremized devices.",
    learned:
      "this was a hobby project learned how to bypass antiviruses but still nt perfect.",
  },
  {
    id: "clinic-scheduling-app",
    title: "Clinic Scheduling Web App",
    description:
      "A full-stack scheduling tool for a small clinic, handling bookings, reminders, and staff calendars.",
    thumbnail: "",
    thumbnailGradient: "from-red-500 via-rose-600 to-zinc-900",
    technologies: ["React", "ASP.NET Core", "PostgreSQL"],
    category: "Full Stack",
    year: 2026,
    duration: "05:12",
    featured: true,
    github: "#",
    demo: "#",
    problem:
      "A small clinic was managing appointments through a shared spreadsheet, which caused double-bookings and missed reminders.",
    solution:
      "A scheduling application with role-based views for staff and patients, automated reminders, and a calendar that prevents conflicting bookings.",
    technical:
      "An ASP.NET Core API backs a PostgreSQL database, with a React frontend for both the patient-facing booking flow and the internal staff calendar.",
    learned:
      "This was my first project where the hardest problems were about people and process, not code the scheduling logic had to match how the clinic actually worked.",
  },
  {
    id: "automation-report-bot",
    title: "Automated Lab Report Generator",
    description:
      "A script-driven tool that turns raw experiment data into formatted lab reports automatically.",
    thumbnail: "",
    thumbnailGradient: "from-lime-500 via-green-600 to-zinc-900",
    technologies: ["Python", "SQL"],
    category: "Automation",
    year: 2024,
    duration: "01:20",
    featured: false,
    github: "#",
    demo: "#",
    problem:
      "Writing up lab reports by hand from raw instrument output was repetitive and error-prone.",
    solution:
      "A script that pulls experiment data from a database, applies the lab's formatting standards, and outputs a ready-to-review report.",
    technical:
      "Data is queried from a SQL database, processed with Python, and rendered into a templated report document with charts generated automatically from the results.",
    learned:
      "A small amount of automation removed a recurring source of tedious errors this project made me appreciate boring, reliable tooling.",
  },
  {
    id: "MV-Library",
    title: "Movies",
    description:
      "React serverless project, build when i was learning react powered by IMDB api to fetch movies data, and another api to watch movies :D.",
    thumbnail: "",
    thumbnailGradient: "from-orange-500 via-red-600 to-zinc-900",
    technologies: ["React", "APIs"],
    category: "Web Development",
    year: 2024,
    duration: "02:20",
    featured: true,
    github: "https://github.com/BRGOKA/MV-Library",
    demo: "https://brgoka.github.io/MV-Library/",
    problem: "wanted to make my own movies library.",
    solution:
      "A react serverless web app to save movies and watch them via external APIs.",
    technical:
      "A react web app that uses IMDB API to fetch movies data and ID then anther API is used to watch the movie via IFrame embedding though im facing a problemwith the IFrame it refuses to run on a sandbox attribute but removing it is a security hazard.",
    learned: "How to work with external APIs and iframes.",
  },
  {
    id: "dice",
    title: "dice Game",
    description: "Silly dice game i made with vanilla JS :D.",
    thumbnail: "",
    thumbnailGradient:
      "bg-gradient-to-br from-cyan-700 via-indigo-700 to-zinc-900",
    technologies: ["JS"],
    category: "Web Development",
    year: 2023,
    duration: "00:20",
    featured: false,
    github: "https://github.com/BRGOKA/diceRoll",
    demo: "https://brgoka.github.io/diceRoll/",
    problem: "felt bored, and i just leaned JS.",
    solution: "I made a Dice game for 2 players, funny thing im alone.",
    technical: "Vanilla JS game, and just go gambling.",
    learned: "Stastics i guess.",
  },
  {
    id: "blog",
    title: "Atomic Blog",
    description:
      "a blog i made with mock data to learn react memoization and optimization technics.",
    thumbnail: "",
    thumbnailGradient:
      "bg-gradient-to-br from-fuchsia-600 via-fuchsia-600 to-zinc-900",
    technologies: ["React"],
    category: "Web Development",
    year: 2024,
    duration: "01:00",
    featured: false,
    github: "https://github.com/BRGOKA/Atomic-Blog",
    demo: "https://brgoka.github.io/Atomic-Blog/",
    problem: "wanted to learn optimization technices with react.",
    solution:
      "whats better than loading +10k components when clicking a button to learn how to optimize?",
    technical:
      "user ract usememo to optimize the blog so when the user reclickes the button that loades the components it wont lag as the first click.",
    learned: "optimization.",
  },
  {
    id: "number-game",
    title: "Number Guessing game",
    description: "a fun game i made with vanilla JS.",
    thumbnail: "",
    thumbnailGradient:
      "bg-gradient-to-br from-cyan-700 via-blue-700 to-zinc-900",
    technologies: ["JS"],
    category: "Web Development",
    year: 2023,
    duration: "00:30",
    featured: false,
    github: "https://github.com/BRGOKA/Guess-the-number",
    demo: "https://brgoka.github.io/Guess-the-number/",
    problem: "i was challenged to make a game in under an hour.",
    solution: "so i build a number guessing game.",
    technical: "Vanilla JS game uses Math.random().",
    learned: "JS.",
  },
  {
    id: "travel",
    title: "WorldTour",
    description: "a react web app to track places you visited.",
    thumbnail: "",
    thumbnailGradient:
      "bg-gradient-to-br from-cyan-300 via-sky-500 to-zinc-900",
    technologies: ["React"],
    category: "Web Development",
    year: 2024,
    duration: "02:30",
    featured: true,
    github: "https://github.com/BRGOKA/WorldTour",
    demo: "https://brg-world-tour.netlify.app/",
    problem:
      "wanted an app to track places i visited, and experement with leaflet.",
    solution:
      "WorldTour a web app to track where you traveled with local storage even though it comes with my data as a bonus :D.",
    technical: "React web app with leaflet for the map and localStorage.",
    learned:
      "How to work with Leaflet, LocalStorage, and how to host on netlify",
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getLatestProjects(count = 4) {
  return [...projects].sort((a, b) => b.year - a.year).slice(0, count);
}
