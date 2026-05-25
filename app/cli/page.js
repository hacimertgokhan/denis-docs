import { BulletList, CodeBlock, PageIntro, Section } from "@/components/docs/DocPrimitives";
import { cliExamples } from "@/lib/docs-content";

export default function Page() {
  return (
    <div>
      <PageIntro
        eyebrow="CLI"
        title="Command-line entry points"
        description="Denis ships with wrapper commands in release bundles and exposes a small but important CLI surface. The repo README emphasizes version checks, server startup, CLI mode, and token management commands."
      />

      <Section title="Documented commands">
        <CodeBlock code={cliExamples} />
      </Section>

      <Section title="What these commands cover">
        <BulletList
          items={[
            "Version validation for installed builds.",
            "Direct server startup without manually passing the full Java jar command.",
            "CLI entry into Denis tooling.",
            "Token listing and token creation helpers referenced by the README examples.",
          ]}
        />
      </Section>

      <Section
        title="Operational advice"
        description="Because Denis relies on local runtime files and wrappers, verify the installation directory and generated configuration files before treating a wrapper command failure as an application failure."
      >
        <BulletList
          items={[
            "Run --help first to validate the wrapper and installation path.",
            "Keep the runtime files near the installed binary wrappers unless the project docs explicitly document moving them.",
            "Use server and cli as separate operating modes rather than assuming cli automatically starts the network service.",
          ]}
        />
      </Section>
    </div>
  );
}
