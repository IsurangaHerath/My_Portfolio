import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'POS System',
      description: 'A point of sale system for managing inventory, sales, and transactions',
      technologies: ['Node.js', 'Express', 'MySQL', 'React', 'Vite', 'Electron'],
      category: 'Desktop Application',
      github: 'https://github.com/IsurangaHerath/POS_System',
    },
    {
      title: 'Task Scheduler',
      description: 'Application to manage and schedule daily tasks and reminders',
      technologies: ['React 18', 'Node.js', 'Express', 'JavaScript', 'SQLite'],
      category: 'Web Application',
      github: 'https://github.com/IsurangaHerath/Task_Scheduler',
    },
    {
      title: 'Online Voting System',
      description: 'Digital platform for conducting secure online elections and voting',
      technologies: ['Python', 'Flask', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      category: 'Web Application',
      github: 'https://github.com/IsurangaHerath/Online_Voting_System',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-4 text-gray-900">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of academic and personal projects demonstrating my skills in data science, machine learning, and web development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-6xl opacity-20">
                  {project.category === 'Data Science' && '📊'}
                  {project.category === 'Web Development' && '💻'}
                  {project.category === 'Artificial Intelligence' && '🤖'}
                  {project.category === 'Database' && '🗄️'}
                  {project.category === 'Design' && '🎨'}
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 cursor-not-allowed"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
