import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Download } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { AnimatedSection } from './ui/AnimatedSection';
import { PERSONAL_INFO } from '../constants/data';
import type { ContactFormData } from '../services/emailService';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => setSubmitStatus('idle'), 8000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setSubmitStatus('success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '7rem',
        paddingBottom: '7rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you. Let's build something great together."
        />

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '3rem' }}>
          <AnimatedSection delay={0.1}>
              <div
                className="card-dark contact-info-card"
                style={{
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '100%',
                  minWidth: 0,
                }}
              >
                <span className="label-xs" style={{ marginBottom: '0.75rem' }}>
                  Contact Information
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '9999px',
                          backgroundColor: 'color-mix(in srgb, var(--text-primary) 12%, transparent)',
                          border: '1px solid color-mix(in srgb, var(--text-primary) 40%, transparent)',
                          color: 'var(--text-primary)',
                          flexShrink: 0,
                        }}
                      >
                        <Mail size={18} />
                      </div>
                      <div>
                        <span className="label-xs" style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                          Email
                        </span>
                        <span className="body-base" style={{ color: 'var(--text-primary)' }}>
                          {PERSONAL_INFO.email}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '9999px',
                          backgroundColor: 'color-mix(in srgb, var(--text-primary) 12%, transparent)',
                          border: '1px solid color-mix(in srgb, var(--text-primary) 40%, transparent)',
                          color: 'var(--text-primary)',
                          flexShrink: 0,
                        }}
                      >
                        <Phone size={18} />
                      </div>
                      <div>
                        <span className="label-xs" style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                          Mobile
                        </span>
                        <span className="body-base" style={{ color: 'var(--text-primary)' }}>
                          {PERSONAL_INFO.phone}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '9999px',
                          backgroundColor: 'color-mix(in srgb, var(--text-primary) 12%, transparent)',
                          border: '1px solid color-mix(in srgb, var(--text-primary) 40%, transparent)',
                          color: 'var(--text-primary)',
                          flexShrink: 0,
                        }}
                      >
                        <MapPin size={18} />
                      </div>
                    
                    <div>
                      <span className="label-xs" style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                        Location
                      </span>
                      <span className="body-base" style={{ color: 'var(--text-primary)' }}>
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="divider" style={{ margin: '2rem 0' }} />

                <div>
                  <span className="label-xs" style={{ display: 'block', marginBottom: '1rem' }}>
                    Connect with me
                  </span>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <a
                    href={PERSONAL_INFO.cvUrl}
                    download="Isuranga Herath - CV.pdf"
                    className="btn-secondary"
                    style={{ display: 'inline-flex' }}
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </div>
              </div>
            </AnimatedSection>


          <style>{`
            @media (min-width: 768px) {
              .contact-grid {
                grid-template-columns: minmax(0, 1fr) !important;
              }
              .contact-info-card {
                width: calc(50% - 1.5rem);
                margin: 0 auto;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
