import { NavLink } from "react-router-dom";
import { Home, Code2, UserRound, History, ListTodo } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/languages", label: "Languages", icon: Code2 },
  { to: "/about", label: "About", icon: UserRound },
  { to: "/history", label: "History", icon: History },
  { to: "/build-later", label: "Later", icon: ListTodo },
];

export default function MobileNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 flex border-t border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden"
      aria-label="Primary"
    >
      {navItems.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            [
              "flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-medium",
              isActive
                ? "text-ember-500"
                : "text-zinc-500 dark:text-zinc-400",
            ].join(" ")
          }
        >
          <Icon size={20} strokeWidth={2} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
