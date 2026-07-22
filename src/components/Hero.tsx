import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { PERSONAL_INFO, TYPING_ROLES } from '../constants/data';

export function Hero() {
  const typedText = useTypingAnimation(TYPING_ROLES, {
    typeSpeed: 75,
    deleteSpeed: 40,
    pauseDuration: 2200,
  });
  const [imgError, setImgError] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#050505',
        paddingTop: '5rem',
      }}
      aria-label="Hero section"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -24, 0],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          top: '-100px',
          right: '-100px',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 20, 0],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          bottom: '-80px',
          left: '-80px',
          pointerEvents: 'none',
        }}
      />

      <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '0',
          }}
        >
          {/* Profile image - fixed with radial glow and larger size */}
          <motion.div
            variants={itemVariants}
            style={{
              marginBottom: '2rem',
              position: 'relative',
              width: '10rem',
              height: '10rem',
              margin: '0 auto 2rem auto',
            }}
          >
            {/* Soft radial glow behind image */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '12rem',
                height: '12rem',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
            {/* Image circle */}
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid #1A1A1A',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 0 60px rgba(0, 0, 0, 0.5), 0 0 120px rgba(255, 255, 255, 0.02)',
              }}
            >
              {!imgError ? (
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={`${PERSONAL_INFO.name} profile photo`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="eager"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: '#111111',
                    color: '#555555',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 60px rgba(0, 0, 0, 0.5), 0 0 120px rgba(255, 255, 255, 0.02)',
                  }}
                >
                  {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            {/* Online indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: '8px',
                right: '8px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#4ade80',
                border: '2px solid #050505',
                zIndex: 2,
              }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Status badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 1rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: '#888888',
                letterSpacing: '0.05em',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }}
              />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="display-xl" style={{ marginBottom: '1rem', color: '#FFFFFF' }}>
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={itemVariants}
            style={{
              marginBottom: '1.5rem',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              fontWeight: 500,
              color: '#888888',
              letterSpacing: '-0.01em',
              minHeight: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#BDBDBD' }}>{typedText}</span>
            <span className="typing-cursor" aria-hidden="true" />
          </motion.div>

          {/* Bio short */}
          <motion.p
            variants={itemVariants}
            className="body-lg"
            style={{ maxWidth: '36rem', marginBottom: '2.5rem', color: '#666666' }}
          >
            Undergraduate at University of Vavuniya, specializing in Computer Science with a focus on Data Science and AI.
          </motion.p>

          {/* CTA buttons - Download CV removed as requested */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              marginBottom: '2.5rem',
            }}
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-secondary"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social icons - GitHub, LinkedIn, Contact (Mail) */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn-icon"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        aria-hidden="true"
      >
        <span className="label-xs" style={{ color: '#444444' }}>Scroll</span>
        <ArrowDown size={16} color="#444444" className="scroll-indicator" />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
