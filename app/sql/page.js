import { BulletList, CodeBlock, PageIntro, Section } from "@/components/docs/DocPrimitives";
import { sqlExamples } from "@/lib/docs-content";

export default function Page() {
  return (
    <div>
      <PageIntro
        eyebrow="SQL Queries"
        title="Supported SQL-style query subset"
        description="After login and project token authentication, Denis accepts a documented subset of SQL-like commands over its TCP protocol. This is one of the clearest product capabilities exposed in the upstream README."
      />

      <Section title="Documented supported operations">
        <BulletList
          items={[
            "CREATE TABLE <table> (<column> <type>, ...)",
            "INSERT INTO <table> (<columns>) VALUES (<values>)",
            "SELECT <columns|*> FROM <table> [WHERE <column> = <value>]",
            "UPDATE <table> SET <column> = <value> [, ...] [WHERE <column> = <value>]",
            "DELETE FROM <table> [WHERE <column> = <value>]",
            "DROP TABLE <table>",
          ]}
        />
      </Section>

      <Section title="End-to-end example">
        <CodeBlock code={sqlExamples} />
      </Section>

      <Section
        title="Interpretation"
        description="The README describes this as a supported subset rather than a fully documented relational engine. Treat it as a pragmatic command interface on top of Denis rather than as a drop-in SQL database replacement."
      >
        <BulletList
          items={[
            "Prefer simple table and condition shapes first.",
            "Assume the documented subset is authoritative unless source code proves broader support.",
            "Use token-authenticated connections when exercising SQL commands over TCP.",
          ]}
        />
      </Section>
    </div>
  );
}
