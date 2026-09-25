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
import ScrollToTop from "./utlis/ScrollToTop.jsx";
import Hobies from "./pages/Hobies.jsx";

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
          <ScrollToTop />
          <Routes>
            <Route path="/PortfolioTube" element={<Home search={search} />} />
            <Route path="PortfolioTube/languages" element={<Languages />} />
            <Route path="PortfolioTube/about" element={<About />} />
            <Route path="PortfolioTube/history" element={<History />} />
            <Route path="PortfolioTube/build-later" element={<BuildLater />} />
            <Route
              path="PortfolioTube/projects/:id"
              element={<ProjectPage />}
            />
            <Route path="PortfolioTube/hobies" element={<Hobies />} />
          </Routes>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
