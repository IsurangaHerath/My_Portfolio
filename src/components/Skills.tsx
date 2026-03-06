import { Database, Brain, Code2, Palette } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'indigo',
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'blue',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Technical Skills',
      icon: Brain,
      color: 'purple',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Data Structures', level: 85 },
        { name: 'System Architecture', level: 80 },
        { name: 'Version Control', level: 85 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      icon: Palette,
      color: 'pink',
      skills: [
        { name: 'Flask', level: 75 },
        { name: 'Electron', level: 70 },
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', bar: 'bg-blue-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', bar: 'bg-indigo-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', bar: 'bg-purple-600' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', bar: 'bg-pink-600' },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 text-gray-900">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div
                key={category.title}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 ${colors.bg} rounded-lg`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${colors.bar} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
