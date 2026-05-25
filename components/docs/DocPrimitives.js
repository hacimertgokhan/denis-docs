import { Card, CardContent } from "@/components/ui/card";

export function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="mb-10">
      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">{description}</p>
    </section>
  );
}

export function Section({ title, description, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">{description}</p> : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function InfoGrid({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-none">
          <CardContent className="p-5">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-400">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function CodeBlock({ code }) {
  return (
    <pre className="rounded-md border border-zinc-800 bg-black/40 p-4 text-sm leading-7 text-zinc-200">
      <code>{code}</code>
    </pre>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-zinc-300">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-3">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function KeyValueTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-md border border-zinc-800">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-zinc-900/80 text-zinc-300">
          <tr>
            <th className="px-4 py-3 font-medium">Item</th>
            <th className="px-4 py-3 font-medium">Details</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="border-t border-zinc-800 bg-zinc-950/50 text-zinc-300">
              <td className="px-4 py-3 align-top font-medium text-white">{row.key}</td>
              <td className="px-4 py-3 leading-7">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
