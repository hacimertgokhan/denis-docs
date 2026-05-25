import { BulletList, CodeBlock, PageIntro, Section } from "@/components/docs/DocPrimitives";
import { releaseInstallCommands, windowsInstallCommands } from "@/lib/docs-content";

export default function Page() {
  return (
    <div>
      <PageIntro
        eyebrow="Installation"
        title="Install Denis from a release bundle"
        description="The repository README recommends installing Denis from GitHub release bundles. The archive contains wrapper scripts and runtime files so the app can be started without manually typing the full jar command each time."
      />

      <Section title="Release install flow">
        <BulletList
          items={[
            "Download a release archive such as denis-<version>-project-bundle.zip or denis-<version>-project-bundle.tar.gz.",
            "Extract the archive into the target installation directory.",
            "Run the platform-specific install script.",
            "Validate the wrapper command using --help before starting server or CLI mode.",
          ]}
        />
      </Section>

      <Section title="Linux or macOS-style shell flow">
        <CodeBlock code={releaseInstallCommands} />
      </Section>

      <Section title="Windows flow">
        <CodeBlock code={windowsInstallCommands} />
      </Section>

      <Section
        title="Runtime files created or expected near the app"
        description="The README explicitly mentions these files as part of the installed runtime layout."
      >
        <BulletList
          items={[
            "denis.properties",
            "denis.toml",
            "ddb.json",
            "pawd.dat",
            "logs/",
          ]}
        />
      </Section>
    </div>
  );
}
