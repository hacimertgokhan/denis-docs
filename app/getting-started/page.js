import { BulletList, CodeBlock, PageIntro, Section } from "@/components/docs/DocPrimitives";
import { quickStartCommands } from "@/lib/docs-content";

export default function Page() {
  return (
    <div>
      <PageIntro
        eyebrow="Quick Start"
        title="Build and run Denis locally"
        description="The source repository expects Java 17 or newer. The fastest validation path is a local Maven package build followed by direct jar execution in help, server, or CLI mode."
      />

      <Section title="Requirements">
        <BulletList
          items={[
            "Java 17 or newer is required by the upstream README.",
            "Maven is required if you want to build from source instead of downloading a release bundle.",
            "A terminal environment is enough for initial evaluation; no IDE is required for the first run.",
          ]}
        />
      </Section>

      <Section title="Build and launch commands">
        <CodeBlock code={quickStartCommands} />
      </Section>

      <Section
        title="What each command does"
        description="The jar exposes multiple operational modes, so you can quickly test whether the packaging and argument parsing work in your environment."
      >
        <BulletList
          items={[
            "mvn package builds the project and creates the runnable jar in target/.",
            "--help confirms the jar boots and exposes command help correctly.",
            "server starts Denis in server mode.",
            "cli starts the interactive command-line surface provided by the project.",
          ]}
        />
      </Section>
    </div>
  );
}
