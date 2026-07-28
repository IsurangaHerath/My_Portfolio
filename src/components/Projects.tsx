import { SectionHeader } from './ui/SectionHeader';
import { StaggerContainer, StaggerItem } from './ui/AnimatedSection';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../constants/data';

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '7rem',
        paddingBottom: '7rem',
      }}
    >
      <div className="container-lg">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Works"
          subtitle="A curated collection of projects showcasing my skills in full-stack development, data engineering, and building impactful applications."
        />

        <StaggerContainer staggerDelay={0.1}>
          <div
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '1.25rem',
            }}
          >
            {PROJECTS.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div
          style={{
            marginTop: '4rem',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '1rem',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
            }}
          >
            Always Building
          </p>
          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              maxWidth: '40rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            I'm deeply committed to continuous learning and refining my craft. Every project teaches something new, and I'm passionate about creating applications that make a meaningful impact—always exploring new technologies and pushing boundaries.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          #projects .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          #projects .projects-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
