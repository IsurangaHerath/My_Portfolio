import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, CheckCircle } from 'lucide-react';
import { Modal } from './ui/Modal';
import type { Project } from '../constants/data';
import { ProjectModal } from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

function ProjectThumbnail({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  if (!project.image || (imgError && !project.images?.length)) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-secondary) 100%)',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>
          {(project.category || '').toUpperCase()}
        </span>
      </div>
    );
  }

  const imgSrc = project.images && project.images.length > 0 ? project.images[0] : project.image;

  return (
    <img
      src={imgSrc}
      alt={`${project.title} screenshot`}
      onError={() => setImgError(true)}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      loading="lazy"
    />
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardBorder = isHovered ? '1px solid var(--bg-hover)' : '1px solid var(--border)';
  const cardShadow = isHovered ? 'var(--shadow-lg)' : 'var(--shadow-md)';

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="card-glass"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          border: cardBorder,
          boxShadow: cardShadow,
          transition: 'border-color 250ms ease, box-shadow 250ms ease',
        }}
      >
        {/* Card Thumbnail */}
        <div
  style={{
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, var(--bg-secondary)100%)',
    borderBottom: '1px solid var(--border)',
    padding: '2rem',
    textAlign: 'center',
  }}
>
  <h2
    style={{
      fontSize: '1rem',
      color: 'var(--text-primary)',
      marginBottom: '0.5rem',
      letterSpacing: '-0.03em',
    }}
  >
    {project.title}
  </h2>

</div>

        {/* Card Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span className="badge-primary">{project.category}</span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.6875rem',
                color:
                  project.status === 'Completed'
                    ? '#4ade80'
                    : project.status === 'In Progress'
                      ? '#fbbf24'
                      : project.status === 'Planning'
                        ? '#60a5fa'
                        : 'var(--text-muted)',
                fontWeight: 500,
              }}
            >
              <CheckCircle size={11} />
              {project.status}
            </span>
          </div>

          <h3 className="heading-card" style={{ marginBottom: '0.5rem' }}>
            {project.title}
          </h3>

          <p className="body-sm" style={{ marginBottom: '1.25rem', flex: 1 }}>
            {project.shortDescription}
          </p>

          {/* Role & Duration */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <span className="body-sm" style={{ color: 'var(--text-muted)' }}>{project.role}</span>
            <span className="body-sm" style={{ color: 'var(--text-muted)' }}>{project.duration}</span>
          </div>

          {/* Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="badge" style={{ fontSize: '0.6875rem' }}>
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="badge" style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Footer actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {project.github && (
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    style={{ width: '2rem', height: '2rem' }}
                    aria-label="GitHub Repository"
                  >
                    <Github size={14} />
                  </a>
                </motion.div>
              )}
              {project.liveUrl && project.liveUrl !== '#' && (
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    style={{ width: '2rem', height: '2rem' }}
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={14} />
                  </a>
                </motion.div>
              )}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-ghost"
                style={{ fontSize: '0.8125rem', gap: '0.25rem', padding: '0.25rem 0.5rem' }}
              >
                Details <ChevronRight size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="720px">
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
