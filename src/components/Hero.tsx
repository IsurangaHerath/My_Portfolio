import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-blue-600">
            <img 
              src="/profile.jpg" 
              alt="Profile Photo" 
              className="w-full h-full object-cover"
            />
        </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-gray-900">
          Computer Science Student
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-6">
          Data Science • Machine Learning • Artificial Intelligence • Python • Database • SQL
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Undergraduate at University of Vavuniya, specializing in Computer Science with a focus on Data Science and AI
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
          >
            View Projects
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
