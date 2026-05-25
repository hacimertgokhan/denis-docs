const quickFacts = [
  ["Language", "Java 17+"],
  ["Distribution", "Jar, shell wrappers, Windows batch wrappers"],
  ["Runtime model", "CLI plus TCP server"],
  ["Data model", "Cache-like key-value storage and SQL-style commands"],
  ["Latest release", "0.0.2.9 alpha"],
];

const sections = [
  { href: "/getting-started", label: "Quick start" },
  { href: "/installation", label: "Installation" },
  { href: "/cli", label: "CLI commands" },
  { href: "/sql", label: "SQL queries" },
  { href: "/actions", label: "Action classes" },
];

const Rightcontent = () => {
  return (
    <aside className="w-full rounded-md border border-zinc-800 bg-zinc-950/70 p-4 xl:sticky xl:top-6 xl:h-[calc(100vh-3rem)] xl:w-[280px] xl:overflow-y-auto">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Quick Facts</p>
        <div className="mt-4 space-y-3">
          {quickFacts.map(([label, value]) => (
            <div key={label} className="rounded-md border border-zinc-800 bg-zinc-900/60 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-800 pt-6">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Reading Path</p>
        <div className="mt-4 space-y-2">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="block rounded-md border border-transparent px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-800 hover:bg-zinc-900/80 hover:text-white"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Rightcontent;
