import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Code2, Database, FolderGit2, Award, Layers, Calendar } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { AnimatedSection, StaggerContainer, StaggerItem } from './ui/AnimatedSection';
import { PERSONAL_INFO, STATS, SKILLS } from '../constants/data';

const statIcons: Record<string, React.ReactElement> = {
  'Projects Built': <FolderGit2 size={22} />,
  'Certifications': <Award size={22} />,
  'Technologies': <Layers size={22} />,
  'Years Learning': <Calendar size={22} />,
};

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
      style={{ backgroundColor: 'var(--bg-primary)' }}
      className="section-padding"
      aria-label="About section"
    >
      <div className="container-lg">
        <SectionHeader
          eyebrow="About Me"
          title="Turning Data into Impact"
          subtitle="A Computer Science undergraduate passionate about leveraging AI and data science to solve real-world problems."
        />

        {/* Stats - ONE large analytics container with 4 horizontal sections */}
        <StaggerContainer className="stats-grid" style={{
          background: 'var(--bg-secondary)',
          borderRadius: '1rem',
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }} staggerDelay={0.1}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="stat-item"
                whileHover={{ backgroundColor: 'var(--bg-hover)' }}
                transition={{ duration: 0.2 }}
                style={{ cursor: 'default' }}
              >
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '9999px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  flexShrink: 0,
                }}>
                  {statIcons[stat.label]}
                </div>
                <div>
                  <div style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.375rem',
                  }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <style>{`
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1px;
          }
          .stats-grid .stat-item {
            padding: 1.5rem 2rem;
            display: flex !important;
            align-items: center;
            gap: 1rem;
            background: var(--bg-secondary);
            transition: background-color 200ms;
          }
          .stats-grid .stat-item:hover {
            background-color: var(--bg-hover);
          }
          @media (min-width: 640px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .stats-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}</style>

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
                  color: 'var(--text-primary)',
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem',  paddingTop: '2rem' }}>
              {featureCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="card-dark" style={{ padding: '1.25rem' }}>
                    <div
                      style={{
                        width: '2.25rem',
                        height: '2.25rem',
                        borderRadius: '0.5rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.875rem',
                      }}
                    >
                      <Icon size={16} color="var(--text-muted)" />
                    </div>
                    <h4
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
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
              borderTop: '1px solid var(--bg-secondary)',
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
    </section>
  );
}
