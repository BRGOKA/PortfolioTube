import { NavLink } from "react-router-dom";
import { Home, Code2, UserRound, History, ListTodo, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/languages", label: "Languages", icon: Code2 },
  { to: "/about", label: "About", icon: UserRound },
  { to: "/history", label: "History", icon: History },
  { to: "/build-later", label: "Build Later", icon: ListTodo },
];

function NavItems({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-1 p-3" aria-label="Primary">
      {navItems.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            [
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-ember-500/10 text-ember-500"
                : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900",
            ].join(" ")
          }
        >
          <Icon size={19} strokeWidth={2} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 border-r border-zinc-200 dark:border-zinc-800 md:block">
        <NavItems />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Close navigation menu"
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
          />
          <div className="relative h-full w-64 animate-fadeIn bg-white dark:bg-zinc-950">
            <div className="flex h-14 items-center justify-between border-b border-zinc-200 px-4 dark:border-zinc-800">
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                Menu
              </span>
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                <X size={18} />
              </button>
            </div>
            <NavItems onNavigate={onClose} />
          </div>
        </div>
      )}
    </>
  );
}
