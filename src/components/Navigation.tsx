import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollVisibility } from '../hooks/useScrollVisibility';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isVisible, isScrolled } = useScrollVisibility();

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(42, 42, 42, 0.8)' : '1px solid transparent',
        transition: 'background-color 300ms, border-color 300ms, backdrop-filter 300ms',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-lg">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '4rem',
            gap: '2rem',
          }}
        >
          {/* Logo stays on the LEFT */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#FFFFFF',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}
          >
            IH<span style={{ color: '#444444' }}>.</span>
          </a>

          {/* Spacer pushes everything else to the right */}
          <div style={{ flex: 1 }} />

          {/* Nav links + Contact CTA on the RIGHT side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                  style={{
                    padding: '0.375rem 0.875rem',
                    color: isActive ? '#FFFFFF' : '#888888',
                    textDecoration: 'none',
                    borderBottom: isActive ? '2px solid #F5F5F5' : '2px solid transparent',
                    borderRadius: '0.375rem 0.375rem 0 0',
                    transition: 'color 200ms, border-color 200ms',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
              className="btn-secondary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} color="#FFFFFF" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} color="#888888" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid #2A2A2A',
              background: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      padding: '0.75rem 0',
                      fontSize: '0.9375rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#FFFFFF' : '#888888',
                      textDecoration: 'none',
                      borderBottom: '1px solid #1A1A1A',
                      display: 'block',
                      transition: 'color 200ms',
                    }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
          }
        }
      `}</style>
    </motion.nav>
  );
}
