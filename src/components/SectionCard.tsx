import { PropsWithChildren, useState } from 'react';

interface SectionCardProps extends PropsWithChildren {
  title: string;
  description?: string;
  defaultOpen?: boolean;
}

export function SectionCard({ title, description, defaultOpen = true, children }: SectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={`section-card${open ? ' open' : ''}`}>
      <button type="button" className="section-header" onClick={() => setOpen((value) => !value)}>
        <div>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <span aria-hidden className="section-toggle">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && <div className="section-body">{children}</div>}
    </section>
  );
}
