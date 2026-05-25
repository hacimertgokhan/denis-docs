import { BulletList, CodeBlock, InfoGrid, PageIntro, Section } from "@/components/docs/DocPrimitives";
import { actListrigExample, actStringExample, actStristExample } from "@/lib/docs-content";

const actionCards = [
  {
    title: "actString",
    description: "Stores a String key and String value pair for basic CRUD-style operations and existence checks.",
  },
  {
    title: "actListrig",
    description: "Associates a List<String> key with a String value using a concurrent map-oriented structure.",
  },
  {
    title: "actStrist",
    description: "Associates a String key with a List<String> value when one key needs to bind to multiple values.",
  },
];

export default function Page() {
  return (
    <div>
      <PageIntro
        eyebrow="Action Classes"
        title="Typed data actions documented by the project"
        description="The Denis README includes a DAPI-style section focused on three action classes. They model different key and value shapes on top of concurrent in-memory storage patterns."
      />

      <Section title="Available classes">
        <InfoGrid items={actionCards} />
      </Section>

      <Section title="actString example">
        <CodeBlock code={actStringExample} />
      </Section>

      <Section title="actListrig example">
        <CodeBlock code={actListrigExample} />
      </Section>

      <Section title="actStrist example">
        <CodeBlock code={actStristExample} />
      </Section>

      <Section title="When to use which one">
        <BulletList
          items={[
            "Use actString for the simplest single key to single value mapping.",
            "Use actListrig when a composite list key identifies a single value.",
            "Use actStrist when a single named key owns multiple related string values.",
          ]}
        />
      </Section>
    </div>
  );
}
