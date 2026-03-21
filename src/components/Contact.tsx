import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipientEmail = 'navodyaisuranga10@gmail.com';
    const subject = encodeURIComponent('Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi, I would like to connect with you...\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-4 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:navodyaisuranga10@gmail.com" className="text-gray-700 hover:text-blue-600">navodyaisuranga10@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Phone className="text-indigo-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-700">+94 XX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-700">Vavuniya, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="font-semibold mb-4 text-gray-900">Connect with me:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/IsurangaHerath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/isuranga-herath-1765b72b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>© 2026 Isuranga Herath. All rights reserved.</p>
      </div>
    </section>
  );
}
