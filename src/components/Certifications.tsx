import { CheckCircle } from 'lucide-react';

export function Certifications() {
  const certs = [
    {
      title: 'Python Programming',
      provider: 'Online Certification',
      description: 'Advanced Python programming concepts and best practices',
      category: 'Programming',
      image: '/images/certifications/python-cert.jpg',
    },
    {
      title: 'Artificial Intelligence',
      provider: 'Online Certification',
      description: 'Fundamentals of AI, neural networks, and deep learning',
      category: 'AI/ML',
      image: '/images/certifications/ai-cert.jpg',
    },
    {
      title: 'HTML & CSS',
      provider: 'Online Certification',
      description: 'Modern web development with HTML5 and CSS3',
      category: 'Web Development',
      image: '/images/certifications/html-css-cert.jpg',
    },
    {
      title: 'JavaScript',
      provider: 'Online Certification',
      description: 'JavaScript fundamentals and modern ES6+ features',
      category: 'Web Development',
      image: '/images/certifications/javascript-cert.jpg',
    },
    {
      title: 'SQL Database Management',
      provider: 'Online Certification',
      description: 'Database design, queries, and optimization techniques',
      category: 'Database',
      image: '/images/certifications/sql-cert.jpg',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 text-gray-900">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="cert-image-container flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="cert-img w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-2">
                    {cert.category}
                  </span>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {cert.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">{cert.provider}</p>
              <p className="text-gray-700">{cert.description}</p>
              <div className="flex items-center gap-2 mt-4 text-green-600">
                <CheckCircle size={18} />
                <span className="text-sm">Certified</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Continuous Learner
          </h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Committed to staying current with the latest technologies and methodologies in computer science, data science, and artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
