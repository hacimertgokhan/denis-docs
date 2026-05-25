import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PageIntro, Section, BulletList } from "@/components/docs/DocPrimitives";
import { maintainers } from "@/lib/docs-content";

export default function Page() {
  return (
    <div>
      <PageIntro
        eyebrow="Maintainers"
        title="Project ownership and contribution context"
        description="The original site included a developer list, while the GitHub repository clearly points to the main maintainer account. This page keeps that context but frames it as project maintenance information."
      />

      <Section title="Known maintainers and contributors">
        <div className="grid gap-4 md:grid-cols-2">
          {maintainers.map((person) => (
            <Card key={person.href} className="border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-none">
              <CardContent className="p-5">
                <h2 className="text-lg font-semibold text-white">{person.name}</h2>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{person.role}</p>
                <Link href={person.href} className="mt-4 inline-block text-sm text-zinc-200 underline underline-offset-4">
                  View GitHub profile
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Contribution guidance inferred from the repo">
        <BulletList
          items={[
            "Use the GitHub repository as the source of truth for releases, issues, and upstream code changes.",
            "Treat the README as the starting point, but validate behavior against the current release or source tree when integrating Denis seriously.",
            "Keep local documentation aligned with actual packaged commands and runtime files, because those are central to the project’s user experience.",
          ]}
        />
      </Section>
    </div>
  );
}
