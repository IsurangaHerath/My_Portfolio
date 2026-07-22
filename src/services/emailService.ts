import { init, send } from '@emailjs/browser';

export function initEmailJS() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.warn('EmailJS public key not configured. Contact form will not send messages.');
    return;
  }
  init(publicKey);
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactForm(data: ContactFormData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'EmailJS environment variables are missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
    );
  }

  if (!data.name.trim() || !data.email.trim() || !data.subject.trim() || !data.message.trim()) {
    throw new Error('All fields are required.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error('Please enter a valid email address.');
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
  };

  await send(serviceId, templateId, templateParams, publicKey);
}