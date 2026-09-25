import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MobileNav from "./components/MobileNav.jsx";
import Home from "./pages/Home.jsx";
import Languages from "./pages/Languages.jsx";
import About from "./pages/About.jsx";
import History from "./pages/History.jsx";
import BuildLater from "./pages/BuildLater.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

export default function App() {
  const [search, setSearch] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <Header
        search={search}
        onSearchChange={setSearch}
        onMenuClick={() => setMobileNavOpen(true)}
      />
      <div className="flex">
        <Sidebar
          mobileOpen={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />
        <main className="min-w-0 flex-1">
          <Routes>
            <Route path="/" element={<Home search={search} />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/build-later" element={<BuildLater />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
