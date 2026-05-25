import Link from "next/link";
import { ArrowUpRight, Download, Github } from "lucide-react";

const links = [
  {
    href: "https://github.com/hacimertgokhan/denis",
    label: "GitHub Repo",
    icon: Github,
  },
  {
    href: "https://github.com/hacimertgokhan/denis/releases",
    label: "Releases",
    icon: Download,
  },
];

const Topbar = () => {
  return (
    <header className="mb-6 flex flex-col gap-4 rounded-md border border-zinc-800 bg-zinc-950/70 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Denis Database</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">A lightweight Java cache and data engine</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
          This site turns the project’s scattered README information into a clearer product-style documentation experience.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800"
          >
            <Icon size={16} />
            <span>{label}</span>
            <ArrowUpRight size={14} className="text-zinc-500" />
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Topbar;
