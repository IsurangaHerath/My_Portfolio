import { BookOpen, Brain, Code2, Database } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { AnimatedSection, StaggerContainer, StaggerItem } from './ui/AnimatedSection';
import { PERSONAL_INFO, STATS, SKILLS } from '../constants/data';

const featureCards = [
  {
    icon: BookOpen,
    title: 'Education Focus',
    desc: 'Specialized in Computer Science with emphasis on Data Science, Machine Learning, and AI technologies.',
  },
  {
    icon: Brain,
    title: 'Problem Solver',
    desc: 'Passionate about using data-driven approaches and machine learning to tackle complex challenges.',
  },
  {
    icon: Code2,
    title: 'Developer',
    desc: 'Proficient in both front-end and back-end technologies, with a strong foundation in modern development.',
  },
  {
    icon: Database,
    title: 'Data Driven',
    desc: 'Experienced with databases, SQL, and data analysis pipelines for extracting meaningful insights.',
  },
];

const skillCategories = ['Language', 'Framework', 'AI/ML', 'Database', 'Design', 'Tools'];

export function About() {
  return (
    <section
      id="about"
      style={{ backgroundColor: '#050505' }}
      className="section-padding"
      aria-label="About section"
    >
      <div className="container-lg">
        <SectionHeader
          eyebrow="About Me"
          title="Turning Data into Impact"
          subtitle="A Computer Science undergraduate passionate about leveraging AI and data science to solve real-world problems."
        />

        {/* Stats */}
        <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '5rem' }} staggerDelay={0.1}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="stat-card">
                <div
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '0.375rem',
                  }}
                >
                  {stat.value}
                </div>
                <div className="label-xs">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bio + Feature cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            marginBottom: '5rem',
          }}
        >
          {/* Bio text */}
          <AnimatedSection direction="left">
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                My Journey
              </h3>
              {PERSONAL_INFO.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="body-lg"
                  style={{ marginBottom: i < PERSONAL_INFO.bio.length - 1 ? '1rem' : 0 }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Feature cards */}
          <AnimatedSection direction="right">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
              {featureCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="card-dark" style={{ padding: '1.25rem' }}>
                    <div
                      style={{
                        width: '2.25rem',
                        height: '2.25rem',
                        borderRadius: '0.5rem',
                        background: '#1A1A1A',
                        border: '1px solid #2A2A2A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.875rem',
                      }}
                    >
                      <Icon size={16} color="#888888" />
                    </div>
                    <h4
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        marginBottom: '0.375rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {card.title}
                    </h4>
                    <p className="body-sm">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Skills */}
        <AnimatedSection>
          <div
            style={{
              borderTop: '1px solid #1A1A1A',
              paddingTop: '3rem',
            }}
          >
            <p className="label-xs" style={{ marginBottom: '1.5rem' }}>Technologies & Skills</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {SKILLS.map((skill) => (
                <span key={skill.name} className="skill-pill">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
