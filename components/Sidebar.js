import Link from "next/link";
import { BookOpenText, Database, Download, GitBranch, Layers3, TerminalSquare, Users, Wrench } from "lucide-react";

const navigationGroups = [
  {
    title: "Overview",
    items: [
      { href: "/", label: "Introduction", icon: BookOpenText },
      { href: "/getting-started", label: "Quick Start", icon: Download },
      { href: "/architecture", label: "Architecture", icon: Layers3 },
    ],
  },
  {
    title: "Usage",
    items: [
      { href: "/installation", label: "Installation", icon: Wrench },
      { href: "/cli", label: "CLI Commands", icon: TerminalSquare },
      { href: "/sql", label: "SQL Queries", icon: Database },
      { href: "/actions", label: "Action Classes", icon: Database },
    ],
  },
  {
    title: "Project",
    items: [
      { href: "/versions", label: "Versions", icon: GitBranch },
      { href: "/developers", label: "Maintainers", icon: Users },
    ],
  },
];

function NavLink({ href, label, icon: Icon }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-md border border-transparent px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-800 hover:bg-zinc-900/80 hover:text-white"
    >
      <Icon size={16} className="text-zinc-500" />
      <span>{label}</span>
    </Link>
  );
}

const Sidebar = () => {
  return (
    <aside className="w-full rounded-md border border-zinc-800 bg-zinc-950/70 p-4 xl:sticky xl:top-6 xl:h-[calc(100vh-3rem)] xl:w-[280px] xl:overflow-y-auto">
      <div className="mb-6 border-b border-zinc-800 pb-4">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Denis Docs</p>
        <h1 className="mt-2 text-xl font-semibold text-white">Documentation</h1>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          A cleaner documentation structure built from the real Denis repository surface area: install, CLI, SQL, runtime, and action APIs.
        </p>
      </div>

      <nav className="space-y-6">
        {navigationGroups.map((group) => (
          <div key={group.title} className="space-y-2">
            <p className="px-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">{group.title}</p>
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
