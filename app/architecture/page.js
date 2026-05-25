import { KeyValueTable, PageIntro, Section, BulletList } from "@/components/docs/DocPrimitives";
import { architectureRows } from "@/lib/docs-content";

export default function Page() {
  return (
    <div>
      <PageIntro
        eyebrow="Architecture"
        title="How the Denis project is organized"
        description="The upstream repository structure shows Denis as a runtime-oriented Java project with packaging, setup scripts, driver experiments, and a server path. This page summarizes the practical architecture visible from the repo and README."
      />

      <Section title="Observed structure">
        <KeyValueTable rows={architectureRows} />
      </Section>

      <Section
        title="Practical interpretation"
        description="The repo is best understood as a small deployable data system rather than a single Java package."
      >
        <BulletList
          items={[
            "The install scripts suggest the project wants to be used from release bundles, not only from source checkouts.",
            "The server and CLI modes mean operators and developers have separate runtime entry points.",
            "The action classes cover in-process data manipulation patterns, while SQL-like commands cover remote or protocol-driven usage.",
            "Configuration and generated files living beside the app indicates a filesystem-aware operational model.",
          ]}
        />
      </Section>
    </div>
  );
}
