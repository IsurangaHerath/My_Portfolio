import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Calendar, Hash, Award } from 'lucide-react';
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
        }}
      >
        <Award size={28} color="#333333" />
        <span style={{ fontSize: '0.6875rem', color: '#444444', fontWeight: 600, letterSpacing: '0.05em' }}>
          {cert.category.toUpperCase()}
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

// ─── Modal Content ─────────────────────────────────────────────────────────────
function CertificateModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  return (
    <div style={{ padding: '2rem' }}>
      {/* Image */}
      <div
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
            <Hash size={12} color="#555555" />
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
    </div>
  );
}

// ─── Certificate Card ─────────────────────────────────────────────────────────
export function CertificateCard({ cert }: CertificateCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
        aria-label={`View ${cert.title} certificate details`}
        className="card-dark"
        style={{ cursor: 'pointer', overflow: 'hidden' }}
      >
        {/* Thumbnail */}
        <div
          style={{
            width: '100%',
            height: '140px',
            borderBottom: '1px solid #2A2A2A',
            overflow: 'hidden',
          }}
        >
          <CertThumbnail cert={cert} />
        </div>

        {/* Body */}
        <div style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.625rem' }}>
            <span className="badge-primary">{cert.category}</span>
            <span style={{ fontSize: '0.6875rem', color: '#555555' }}>{cert.completionDate}</span>
          </div>

          <h3 className="heading-card" style={{ marginBottom: '0.375rem' }}>
            {cert.title}
          </h3>
          <p className="body-sm" style={{ marginBottom: '1rem', color: '#555555' }}>
            {cert.institute}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
            {cert.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="badge" style={{ fontSize: '0.625rem', padding: '0.125rem 0.5rem' }}>
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="badge" style={{ fontSize: '0.625rem', padding: '0.125rem 0.5rem', color: '#555555' }}>
                +{cert.skills.length - 3}
              </span>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.75rem',
              color: '#555555',
              transition: 'color 200ms',
            }}
          >
            <ExternalLink size={12} />
            Click to view details
          </div>
        </div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="640px">
        <CertificateModal cert={cert} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
