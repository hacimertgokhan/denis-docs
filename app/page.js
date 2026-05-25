import { CodeBlock, InfoGrid, PageIntro, Section, BulletList } from "@/components/docs/DocPrimitives";
import { cliExamples, highlights, quickStartCommands } from "@/lib/docs-content";

export default function Page() {
  return (
    <div>
      <PageIntro
        eyebrow="Introduction"
        title="Denis Database documentation"
        description="Denis Database is a Java-based data engine positioned around Redis-like simplicity, temporary data access, and lightweight operational workflows. The upstream repository mixes product notes, runtime scripts, SQL examples, and action class snippets; this site reorganizes those pieces into a cleaner, practical manual."
      />

      <Section
        title="What Denis is"
        description="Based on the repository README and project structure, Denis is not just a library. It behaves more like a small runtime package with an embeddable Java core, command-line tools, and a server mode."
      >
        <InfoGrid items={highlights} />
      </Section>

      <Section
        title="Who this documentation is for"
        description="This documentation is designed for developers evaluating the project, running a release build, or trying to understand how Denis exposes data through CLI, runtime files, and SQL-like commands."
      >
        <BulletList
          items={[
            "Use Quick Start if you want to build and run Denis immediately from source.",
            "Use Installation if you plan to install a release bundle on Linux or Windows.",
            "Use CLI Commands if you need the operational entry points for version, server, and token commands.",
            "Use SQL Queries and Action Classes if you want the supported interaction surfaces documented in one place.",
          ]}
        />
      </Section>

      <Section
        title="Fastest way to validate the project"
        description="The repository README points to a local Maven build followed by direct jar execution."
      >
        <CodeBlock code={quickStartCommands} />
      </Section>

      <Section
        title="Most useful runtime commands"
        description="These are the CLI examples that matter first when you are validating a release install or a local build."
      >
        <CodeBlock code={cliExamples} />
      </Section>
    </div>
  );
}
