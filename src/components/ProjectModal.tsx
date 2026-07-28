import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../constants/data';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'lessons'>('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images && project.images.length > 0 ? project.images : [project.image];

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      {/* Banner thumbnail */}
      <div
        style={{
          width: '100%',
          height: '240px',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          position: 'relative',
        }}
      >
                <img
          src={images[currentImageIndex]}
          alt={`${project.title} screenshot`}
          onClick={() => setIsImageOpen(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.3s ease-in-out',
            cursor: 'zoom-in',
          }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '0.75rem',
                transform: 'translateY(-50%)',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              style={{
                position: 'absolute',
                top: '50%',
                right: '0.75rem',
                transform: 'translateY(-50%)',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
              }}
            >
              <ChevronRight size={20} />
            </button>
            <div
              style={{
                position: 'absolute',
                bottom: '0.75rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '0.375rem',
              }}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    border: 'none',
                    background: i === currentImageIndex ? 'var(--text-primary)' : 'color-mix(in srgb, var(--text-primary) 40%, transparent)',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span className="badge-primary">{project.category}</span>
          <span
            className="badge"
            style={{
              color:
                project.status === 'Completed'
                  ? '#4ade80'
                  : project.status === 'In Progress'
                    ? '#fbbf24'
                    : project.status === 'Planning'
                      ? '#60a5fa'
                      : undefined,
            }}
          >
            {project.status}
          </span>
        </div>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
          }}
        >
          {project.title}
        </h2>
        <p className="body-base" style={{ color: 'var(--text-muted)' }}>{project.description}</p>
      </div>

      {/* Navigation tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: '1px solid var(--border)',
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
        }}
      >
        {(['overview', 'architecture', 'lessons'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="btn-ghost"
            style={{
              padding: '0.375rem 0.875rem',
              fontSize: '0.8125rem',
              textTransform: 'capitalize',
              color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-muted)',
              borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
              borderRadius: 0,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Features */}
          <div>
            <h4 className="label-xs" style={{ marginBottom: '0.75rem' }}>Key Features</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="label-xs" style={{ marginBottom: '0.75rem' }}>Technologies Used</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {project.architecture ? (
            <div>
              <h4 className="label-xs" style={{ marginBottom: '0.5rem' }}>System Architecture</h4>
              <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{project.architecture}</p>
            </div>
          ) : (
            <p className="body-sm" style={{ color: 'var(--text-muted)' }}>Standard full-stack web application structure.</p>
          )}

          <div>
            <h4 className="label-xs" style={{ marginBottom: '0.75rem' }}>Challenges & Solutions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {project.challenges.map((challenge, i) => (
                <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '0.875rem', borderRadius: '0.5rem' }}>
                  <div style={{ color: 'var(--text-primary)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Challenge: {challenge}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                    Solution: {project.solutions[i] || 'Optimized code implementation and robust error handling.'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'lessons' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h4 className="label-xs" style={{ marginBottom: '0.75rem' }}>Lessons Learned</h4>
            <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {project.lessonsLearned.map((lesson, i) => (
                <li key={i} className="body-sm" style={{ color: 'var(--text-secondary)', marginBottom: '0.375rem' }}>{lesson}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-xs" style={{ marginBottom: '0.75rem' }}>Future Roadmap</h4>
            <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {project.futureImprovements.map((imp, i) => (
                <li key={i} className="body-sm" style={{ color: 'var(--text-muted)', marginBottom: '0.375rem' }}>{imp}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1 }}>
            <Github size={16} /> Source Code
          </a>
        )}
        {project.liveUrl && project.liveUrl !== '#' && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ flex: 1 }}>
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
        <button onClick={onClose} className="btn-ghost">Close</button>
      </div>

      <AnimatePresence>
  {isImageOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={() => setIsImageOpen(false)}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'color-mix(in srgb, var(--bg-primary) 75%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        cursor: 'zoom-out',
      }}
    >
      <motion.img
        src={images[currentImageIndex]}
        alt={project.title}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          borderRadius: '12px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      />
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
