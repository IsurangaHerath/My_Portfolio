import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Download, Send, CheckCircle2 } from 'lucide-react';
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
                className="card-dark"
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
                          backgroundColor: 'rgba(34, 197, 94, 0.08)',
                          border: '1px solid rgba(34, 197, 94, 0.25)',
                          color: '#22c55e',
                          flexShrink: 0,
                        }}
                      >
                        <Mail size={18} />
                      </div>
                      <div>
                        <span className="label-xs" style={{ display: 'block', marginBottom: '0.25rem', color: '#22c55e' }}>
                          Email
                        </span>
                        <span className="body-base" style={{ color: '#22c55e' }}>
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
                          backgroundColor: 'rgba(34, 197, 94, 0.08)',
                          border: '1px solid rgba(34, 197, 94, 0.25)',
                          color: '#22c55e',
                          flexShrink: 0,
                        }}
                      >
                        <MapPin size={18} />
                      </div>
                    
                    <div>
                      <span className="label-xs" style={{ display: 'block', marginBottom: '0.25rem', color: '#22c55e' }}>
                        Location
                      </span>
                      <span className="body-base" style={{ color: '#22c55e' }}>
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
                    className="btn-secondary"
                    style={{ display: 'inline-flex' }}
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </div>
              </div>
            </AnimatedSection>

          <AnimatedSection delay={0.2}>
              <div
                className="card-dark"
                style={{
                  padding: '2rem',
                  height: '100%',
                  maxWidth: '100%',
                  minWidth: 0,
                  overflow: 'hidden',
                }}
              >
                <h3 className="heading-card" style={{ marginBottom: '1.5rem' }}>
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '100%' }}>
                  <div style={{ width: '100%' }}>
                    <label
                      className="label-xs"
                      htmlFor="name"
                      style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="input-dark"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div style={{ width: '100%' }}>
                    <label
                      className="label-xs"
                      htmlFor="email"
                      style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="input-dark"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div style={{ width: '100%' }}>
                    <label
                      className="label-xs"
                      htmlFor="subject"
                      style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className="input-dark"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div style={{ width: '100%' }}>
                    <label
                      className="label-xs"
                      htmlFor="message"
                      style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="input-dark"
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ resize: 'vertical', minHeight: '120px', maxWidth: '100%', boxSizing: 'border-box' }}
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '1rem',
                          backgroundColor: 'rgba(239, 68, 68, 0.08)',
                          border: '1px solid rgba(239, 68, 68, 0.25)',
                          borderRadius: '0.75rem',
                          color: '#ef4444',
                          maxWidth: '100%',
                        }}
                      >
                        <CheckCircle2 size={20} />
                        <div>
                        <span className="body-base" style={{ color: '#ef4444' }}>
                          Message sending is not working at the moment.
                        </span>
                        <br />
                        <span className="body-sm" style={{ color: '#ef4444', marginTop: '0.25rem', display: 'inline-block' }}>
                          Please contact <strong>{PERSONAL_INFO.name}</strong> directly at <strong>{PERSONAL_INFO.phone}</strong>
                        </span>
                      </div>
                      </motion.div>
                    )}


                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          style={{
                            display: 'inline-block',
                            width: '1rem',
                            height: '1rem',
                            border: '2px solid #050505',
                            borderTopColor: 'transparent',
                            borderRadius: '9999px',
                            animation: 'spin 0.8s linear infinite',
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

          <style>{`
            @media (min-width: 768px) {
              .contact-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
