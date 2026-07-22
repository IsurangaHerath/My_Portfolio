import { SectionHeader } from './ui/SectionHeader';
import { StaggerContainer, StaggerItem } from './ui/AnimatedSection';
import { CertificateCard } from './CertificateCard';
import { CERTIFICATES } from '../constants/data';

export function Certifications() {
  return (
    <section
      id="certifications"
      style={{ backgroundColor: '#050505' }}
      className="section-padding"
      aria-label="Certifications section"
    >
      <div className="container-lg">
        <SectionHeader
          eyebrow="Certifications"
          title="Verified Credentials"
          subtitle="Professional certifications that demonstrate my commitment to continuous learning and skill development."
        />

        <StaggerContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
          staggerDelay={0.08}
        >
          {CERTIFICATES.map((cert) => (
            <StaggerItem key={cert.id}>
              <CertificateCard cert={cert} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom callout */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2rem',
            background: '#0D0D0D',
            border: '1px solid #1E1E1E',
            borderRadius: '1rem',
            textAlign: 'center',
          }}
        >
          <p className="label-xs" style={{ marginBottom: '0.5rem' }}>Always Learning</p>
          <p className="body-base" style={{ color: '#666666', maxWidth: '38rem', margin: '0 auto' }}>
            Committed to staying current with the latest technologies and methodologies in computer science, data science, and artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
