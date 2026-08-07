import { Reveal } from './reveal';

export function SectionHeader({
  index,
  title,
  lead,
}: {
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="mb-3 font-mono text-small tracking-widest text-slate">
        {index}
      </p>
      <h2 className="text-h1 text-ink">{title}</h2>
      {lead ? (
        <p className="prose-measure mt-4 text-body text-slate">{lead}</p>
      ) : null}
    </Reveal>
  );
}
