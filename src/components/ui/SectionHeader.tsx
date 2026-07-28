import { ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  children,
}: SectionHeaderProps) {
  return (
    <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', marginBottom: '4rem', textAlign: align === 'center' ? 'center' : 'left' }}>
      {eyebrow && (
        <span className="section-eyebrow">{eyebrow}</span>
      )}
      <h2 className="heading-section" style={{ marginBottom: subtitle || children ? '1rem' : 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p
          className="body-lg"
          style={{
            maxWidth: '42rem',
            marginTop: '0.5rem',
            color: 'var(--text-muted)',
            ...(align === 'center' ? { textAlign: 'center' } : {}),
          }}
        >
          {subtitle}
        </p>
      )}
      {children}
    </AnimatedSection>
  );
}
