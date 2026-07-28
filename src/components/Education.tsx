import { GraduationCap, BookOpen, Award, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { StaggerContainer, StaggerItem } from './ui/AnimatedSection';
import { EDUCATION } from '../constants/data';

const typeConfig = {
  university: { icon: GraduationCap, label: 'University' },
  alevel: { icon: BookOpen, label: 'Advanced Level' },
  olevel: { icon: Award, label: 'Ordinary Level' },
  diploma: { icon: Award, label: 'Diploma' },
};

export function Education() {
  return (
    <section
      id="education"
      style={{ backgroundColor: 'var(--bg-primary)' }}
      className="section-padding"
      aria-label="Education section"
    >
      <div className="container-lg">
        <SectionHeader
          eyebrow="Education"
          title="Academic Background"
          subtitle="My educational journey that shaped my passion for computer science and data science."
        />

        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <StaggerContainer style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '1.625rem',
                top: '2.5rem',
                bottom: '2.5rem',
                width: '1px',
                backgroundColor: 'var(--border)',
              }}
            />

            {EDUCATION.map((edu, index) => {
              const config = typeConfig[edu.type];
              const Icon = config.icon;

              return (
                <StaggerItem key={edu.id}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      marginBottom: index < EDUCATION.length - 1 ? '2rem' : 0,
                    }}
                  >
                    {/* Timeline icon */}
                    <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                      <div
                        style={{
                          width: '3.25rem',
                          height: '3.25rem',
                          borderRadius: '50%',
                          background: index === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                          border: `1px solid ${index === 0 ? 'var(--border)' : 'var(--border)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon
                          size={18}
                          color={index === 0 ? 'var(--text-secondary)' : 'var(--text-muted)'}
                        />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="card-dark"
                      style={{
                        flex: 1,
                        padding: '1.75rem',
                        opacity: index === 0 ? 1 : 0.85,
                      }}
                    >
                      {/* Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span className="label-xs" style={{ color: index === 0 ? 'var(--text-muted)' : 'var(--text-muted)' }}>
                          {config.label}
                        </span>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontSize: '0.6875rem',
                            color: edu.status === 'Completed' ? '#4ade80' : 'var(--text-muted)',
                            fontWeight: 500,
                          }}
                        >
                          <CheckCircle size={11} />
                          {edu.status}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '1.0625rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.01em',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {edu.degree}
                      </h3>

                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.75rem',
                          marginBottom: '1rem',
                        }}
                      >
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontSize: '0.8125rem',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <MapPin size={12} />
                          {edu.institution}
                        </span>
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontSize: '0.8125rem',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <Calendar size={12} />
                          {edu.duration}
                        </span>
                      </div>

                      {edu.faculty && (
                        <p className="body-sm" style={{ marginBottom: '0.5rem' }}>
                          {edu.faculty} · {edu.department}
                        </p>
                      )}

                      {edu.description && (
                        <p className="body-sm" style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                          {edu.description}
                        </p>
                      )}

                      {/* CGPA */}
                      {edu.cgpa && (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.375rem',
                            padding: '0.25rem 0.75rem',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border)',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            color: 'var(--text-secondary)',
                            marginBottom: '1rem',
                          }}
                        >
                          CGPA: {edu.cgpa}
                        </div>
                      )}

                      {/* Highlights */}
                      {edu.highlights.length > 0 && (
                        <div>
                            <p className="label-xs" style={{ marginBottom: '0.625rem', color: 'var(--text-muted)' }}>
                            {edu.type === 'university' ? 'Relevant Coursework' : 'Details'}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {edu.highlights.map((item) => (
                              <span key={item} className="badge">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div style={{ marginTop: '1rem' }}>
                          {edu.achievements.map((ach) => (
                            <div
                              key={ach}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.5rem',
                                fontSize: '0.8125rem',
                                color: 'var(--text-muted)',
                              }}
                            >
                              <span style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: '2px' }}>—</span>
                              {ach}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
