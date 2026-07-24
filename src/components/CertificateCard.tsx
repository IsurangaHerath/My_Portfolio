import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Calendar, Award, ChevronRight } from 'lucide-react';
import { Modal } from './ui/Modal';
import type { Certificate } from '../constants/data';

interface CertificateCardProps {
  cert: Certificate;
}

// ─── Gradient thumbnail (fallback when image doesn't load) ────────────────────
function CertThumbnail({ cert }: { cert: Certificate }) {
  const [imgError, setImgError] = useState(false);

  if (!cert.image || imgError) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1A1A1A 0%, #111111 100%)',
          gap: '0.5rem',
          paddingRight: '10rem'
        }}
      >
        <Award size={28} color="#333333" />
        <span style={{ fontSize: '0.6875rem', color: '#444444', fontWeight: 600, letterSpacing: '0.05em' }}>
          {(cert.category || '').toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={cert.image}
      alt={`${cert.title} certificate`}
      onError={() => setImgError(true)}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      loading="lazy"
    />
  );
}
function CertificateCardThumbnail({ cert }: { cert: Certificate }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #111111 100%)',
      }}
    >
      <h2
        style={{
          color: '#FFFFFF',
          fontSize: '1rem',
          fontWeight: 700,
        }}
      >
        {cert.title}
      </h2>
    </div>
  );
}

// ─── Modal Content ─────────────────────────────────────────────────────────────
function CertificateModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  const [showImageViewer, setShowImageViewer] = useState(false);
  
  return (
    <div style={{ padding: '2rem' }}>
      {/* Image */}
      <div
        onClick={() => setShowImageViewer(true)}
        style={{
          width: '100%',
          height: '220px',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          background: '#111111',
          border: '1px solid #2A2A2A',
        }}
      >
        <CertThumbnail cert={cert} />
      </div>

      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <span className="badge-primary" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
          {cert.category}
        </span>
        <h2
          style={{
            fontSize: '1.375rem',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '0.25rem',
          }}
        >
          {cert.title}
        </h2>
        <p className="body-sm" style={{ color: '#888888' }}>{cert.institute}</p>
      </div>

      {/* Meta info */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.875rem',
          marginBottom: '1.5rem',
        }}
      >
        <div style={{ background: '#171717', border: '1px solid #2A2A2A', borderRadius: '0.75rem', padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
            <Calendar size={12} color="#555555" />
            <span className="label-xs">Issue Date</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#BDBDBD', fontWeight: 500 }}>{cert.completionDate}</p>
        </div>
        <div style={{ background: '#171717', border: '1px solid #2A2A2A', borderRadius: '0.75rem', padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
            <span className="label-xs">Credential ID</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#BDBDBD', fontWeight: 500, fontFamily: 'monospace' }}>
            {cert.credentialId}
          </p>
        </div>
      </div>

      {/* Description */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p className="label-xs" style={{ marginBottom: '0.5rem' }}>Description</p>
        <p className="body-base" style={{ color: '#888888' }}>{cert.description}</p>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: '2rem' }}>
        <p className="label-xs" style={{ marginBottom: '0.75rem' }}>Skills Learned</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {cert.skills.map((skill) => (
            <span key={skill} className="badge">{skill}</span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        <a
          href={cert.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ flex: 1, minWidth: '140px' }}
        >
          <ExternalLink size={15} />
          Verify Certificate
        </a>
        <button
          onClick={() => alert('Download feature: Link your certificate PDF here.')}
          className="btn-secondary"
          style={{ flex: 1, minWidth: '140px' }}
        >
          <Download size={15} />
          Download
        </button>
        <button onClick={onClose} className="btn-ghost">
          Close
        </button>
      </div>
      {showImageViewer && (
  <div
    onClick={() => setShowImageViewer(false)}
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.65)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      cursor: 'zoom-out',
      padding: '2rem',
    }}
  >
    <img
      src={cert.image}
      alt={cert.title}
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: '95vw',
        maxHeight: '95vh',
        objectFit: 'contain',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
      }}
    />
  </div>
)}
    </div>
  );
}

// ─── Certificate Card ─────────────────────────────────────────────────────────
export function CertificateCard({ cert }: CertificateCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardBorder = isHovered ? '1px solid #3A3A3A' : '1px solid rgba(255, 255, 255, 0.06)';
  const cardShadow = isHovered ? '0 8px 32px rgba(0,0,0,0.5)' : '0 4px 16px rgba(0,0,0,0.3)';

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="card-glass"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
        aria-label={`View ${cert.title} certificate details`}
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
        <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ width: '100%', height: '100%' }}
          >
            <CertificateCardThumbnail cert={cert} />  
          </motion.div>
        </div>

        {/* Card Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span className="badge-primary">{cert.category}</span>
            <span className="badge">{cert.completionDate}</span>
          </div>

          <h3 className="heading-card" style={{ marginBottom: '0.375rem' }}>
            {cert.title}
          </h3>
          <p className="body-sm" style={{ marginBottom: '1rem', flex: 1 }}>
            {cert.institute}
          </p>

          {/* Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
            {cert.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="badge" style={{ fontSize: '0.6875rem' }}>
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="badge" style={{ fontSize: '0.6875rem', color: '#555555' }}>
                +{cert.skills.length - 3}
              </span>
            )}
          </div>

          {/* Footer actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid #222222' }}>
            <span className="body-sm" style={{ color: '#555555', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <ExternalLink size={12} />
              View details
            </span>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <button
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="btn-ghost"
                style={{ fontSize: '0.8125rem', gap: '0.25rem', padding: '0.25rem 0.5rem' }}
              >
                View Certificate <ChevronRight size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="640px">
        <CertificateModal cert={cert} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
