import { KeyValueTable, PageIntro, Section, BulletList } from "@/components/docs/DocPrimitives";
import { versionRows } from "@/lib/docs-content";

export default function Page() {
  return (
    <div>
      <PageIntro
        eyebrow="Versions"
        title="Release and upgrade notes"
        description="The repository shows a release-driven distribution model. Even though upstream documentation is still brief, the release page and README give enough information to define a safer upgrade path."
      />

      <Section title="Release snapshot">
        <KeyValueTable rows={versionRows} />
      </Section>

      <Section title="Recommended upgrade checklist">
        <BulletList
          items={[
            "Back up runtime files before replacing an existing install directory.",
            "Re-run the platform install script after unpacking a new release bundle.",
            "Verify denis --help and denis --version before promoting the new build to active use.",
            "Check whether denis.toml, ddb.json, or token-related files require migration in your environment.",
          ]}
        />
      </Section>
    </div>
  );
}
