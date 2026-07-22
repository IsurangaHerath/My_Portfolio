// ============================================================
//  CENTRALIZED PORTFOLIO DATA
// ============================================================

export const PERSONAL_INFO = {
  name: 'Isuranga Herath',
  role: 'Computer Science Undergraduate',
  email: 'navodyaisuranga10@gmail.com',
  phone: '+94 XX XXX XXXX',
  location: 'Vavuniya, Sri Lanka',
  github: 'https://github.com/IsurangaHerath',
  linkedin: 'https://www.linkedin.com/in/isuranga-herath-1765b72b9',
  profileImage: '/profile.jpg',
  cvUrl: '#', // Replace with actual CV URL when available
  bio: [
    "I'm a passionate Computer Science undergraduate at the University of Vavuniya, pursuing a special degree with a focus on Data Science and Machine Learning. My academic journey is driven by a deep interest in leveraging technology to solve real-world problems.",
    "Beyond my degree, I've expanded my expertise through diplomas in Computer Hardware and Graphic Design, along with multiple online certifications in cutting-edge technologies. I'm committed to continuous learning and staying updated with the latest developments in AI and data science.",
    "My goal is to contribute to innovative projects that harness the power of data and artificial intelligence to create meaningful impact.",
  ],
};

export const TYPING_ROLES = [
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Python Developer',
  'SQL & Databases',
  'Full Stack Dev',
];

export const STATS = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Certifications', value: '5+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Years Learning', value: '3+' },
];

export const SKILLS = [
  // Languages
  { name: 'Python', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'HTML & CSS', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  // Frameworks
  { name: 'React', category: 'Framework' },
  { name: 'Node.js', category: 'Framework' },
  { name: 'Express.js', category: 'Framework' },
  { name: 'Flask', category: 'Framework' },
  { name: 'Vite', category: 'Framework' },
  // Data & AI
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'Data Analysis', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
  // Tools
  { name: 'MySQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'Git & GitHub', category: 'Tools' },
  { name: 'Electron', category: 'Tools' },
  { name: 'Figma', category: 'Design' },
];

// ============================================================
//  EDUCATION
// ============================================================

export interface EducationItem {
  id: string;
  type: 'university' | 'alevel' | 'olevel' | 'diploma';
  institution: string;
  degree: string;
  department?: string;
  faculty?: string;
  duration: string;
  status: string;
  cgpa?: string;
  description?: string;
  highlights: string[];
  achievements?: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    id: 'uov',
    type: 'university',
    institution: 'University of Vavuniya',
    degree: 'BSc (Hons) in Computer Science',
    department: 'Department of Physical Sciences',
    faculty: 'Faculty of Science',
    duration: '2022 – Present',
    status: 'Undergraduate (Special Degree)',
    cgpa: 'In Progress',
    description: 'Currently pursuing a special degree in Computer Science with a strong focus on Data Science, Machine Learning, and Artificial Intelligence.',
    highlights: [
      'Data Science and Analytics',
      'Machine Learning and Artificial Intelligence',
      'Python Programming and Data Structures',
      'Database Management and SQL',
      'Software Engineering',
      'Computer Networks',
    ],
    achievements: [
      'Actively engaged in research-oriented coursework',
    ],
  },
  {
    id: 'alevel',
    type: 'alevel',
    institution: 'Your AL School Name',
    degree: 'Advanced Level (A/L)',
    duration: '2018 – 2020',
    status: 'Completed',
    highlights: [
      'Stream: Physical Science',
      'Subjects: Physics, Chemistry, Combined Mathematics',
    ],
    achievements: [
      'Achieved eligibility for university entrance',
    ],
  },
  {
    id: 'olevel',
    type: 'olevel',
    institution: 'Your OL School Name',
    degree: 'Ordinary Level (O/L)',
    duration: '2012 – 2018',
    status: 'Completed',
    highlights: [
      'Completed 9 subjects',
    ],
    achievements: [
      'Strong academic foundation in sciences and mathematics',
    ],
  },
];

// ============================================================
//  CERTIFICATIONS
// ============================================================

export interface Certificate {
  id: string;
  title: string;
  institute: string;
  instituteShort: string;
  completionDate: string;
  credentialId: string;
  verificationUrl: string;
  description: string;
  skills: string[];
  category: string;
  image?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 'python',
    title: 'Python Programming',
    institute: 'Online Certification',
    instituteShort: 'Online',
    completionDate: '2023',
    credentialId: 'CERT-PY-001',
    verificationUrl: '#',
    description: 'Comprehensive coverage of Python programming from fundamentals to advanced concepts including OOP, data structures, file handling, and best practices.',
    skills: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
    category: 'Programming',
    image: '/images/certifications/python-cert.jpg',
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    institute: 'Online Certification',
    instituteShort: 'Online',
    completionDate: '2023',
    credentialId: 'CERT-AI-001',
    verificationUrl: '#',
    description: 'Fundamentals of Artificial Intelligence including neural networks, deep learning architectures, and practical AI applications.',
    skills: ['AI', 'Neural Networks', 'Deep Learning', 'TensorFlow'],
    category: 'AI/ML',
    image: '/images/certifications/ai-cert.jpg',
  },
  {
    id: 'html-css',
    title: 'HTML & CSS',
    institute: 'Online Certification',
    instituteShort: 'Online',
    completionDate: '2022',
    credentialId: 'CERT-WEB-001',
    verificationUrl: '#',
    description: 'Modern web development with HTML5 semantic markup, CSS3 advanced styling, responsive design, and CSS animations.',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'Grid'],
    category: 'Web Development',
    image: '/images/certifications/html-css-cert.jpg',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    institute: 'Online Certification',
    instituteShort: 'Online',
    completionDate: '2022',
    credentialId: 'CERT-JS-001',
    verificationUrl: '#',
    description: 'JavaScript fundamentals through modern ES6+ features, asynchronous programming, DOM manipulation, and modern development patterns.',
    skills: ['JavaScript', 'ES6+', 'Async/Await', 'DOM', 'API Integration'],
    category: 'Web Development',
    image: '/images/certifications/javascript-cert.jpg',
  },
  {
    id: 'sql',
    title: 'SQL Database Management',
    institute: 'Online Certification',
    instituteShort: 'Online',
    completionDate: '2023',
    credentialId: 'CERT-SQL-001',
    verificationUrl: '#',
    description: 'Database design principles, advanced SQL queries, joins, subqueries, stored procedures, indexing, and performance optimization.',
    skills: ['SQL', 'Database Design', 'MySQL', 'Query Optimization', 'Stored Procedures'],
    category: 'Database',
    image: '/images/certifications/sql-cert.jpg',
  },
];

// ============================================================
//  PROJECTS
// ============================================================

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  role: string;
  duration: string;
  technologies: string[];
  github: string;
  liveUrl?: string;
  image: string;
  images?: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  architecture?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'pos-system',
    title: 'POS System',
    shortDescription: 'A point of sale system for managing inventory, sales, and transactions',
    description: 'A comprehensive Point of Sale (POS) system built as a desktop application using Electron. It provides businesses with full inventory management, real-time sales tracking, transaction history, and reporting capabilities.',
    category: 'Desktop Application',
    status: 'Completed',
    role: 'Full Stack Developer',
    duration: '3 months',
    technologies: ['Node.js', 'Express', 'MySQL', 'React', 'Vite', 'Electron'],
    github: 'https://github.com/IsurangaHerath/POS_System',
    image: '/images/projects/pos-system.jpg',
    images: ['/images/projects/pos-system.jpg'],
    features: [
      'Inventory management with real-time stock tracking',
      'Sales processing and transaction management',
      'Customer and supplier management',
      'Sales reports and analytics dashboard',
      'Offline-capable desktop application',
      'Secure user authentication and role management',
    ],
    challenges: [
      'Integrating Electron with React and Vite for desktop packaging',
      'Managing local MySQL database with offline-first architecture',
      'Ensuring data consistency across concurrent operations',
    ],
    solutions: [
      'Used Electron IPC for secure communication between main and renderer processes',
      'Implemented local MySQL with connection pooling for reliability',
      'Added transaction locking mechanisms to prevent data conflicts',
    ],
    lessonsLearned: [
      'Desktop app architecture differs significantly from web apps',
      'Importance of data integrity in financial applications',
      'How to structure Electron + React + Vite projects effectively',
    ],
    futureImprovements: [
      'Add cloud sync for multi-branch support',
      'Implement barcode scanner integration',
      'Add advanced analytics and custom report generation',
    ],
    architecture: 'Electron main process handles system-level operations and database connections via MySQL. The renderer process runs a React/Vite SPA. Communication happens via IPC channels. Express API layer handles business logic.',
  },
  {
    id: 'task-scheduler',
    title: 'Task Scheduler',
    shortDescription: 'Application to manage and schedule daily tasks and reminders',
    description: 'A full-stack web application for personal productivity that allows users to create, organize, and track daily tasks with scheduling, priority management, and reminder notifications.',
    category: 'Web Application',
    status: 'Completed',
    role: 'Full Stack Developer',
    duration: '2 months',
    technologies: ['React 18', 'Node.js', 'Express', 'JavaScript', 'SQLite'],
    github: 'https://github.com/IsurangaHerath/Task_Scheduler',
    image: '/images/projects/task-scheduler.jpg',
    images: ['/images/projects/task-scheduler.jpg'],
    features: [
      'Create, edit, and delete tasks with due dates',
      'Priority levels (High, Medium, Low)',
      'Task categories and filtering',
      'Progress tracking and completion status',
      'Reminder notifications system',
      'Clean and intuitive UI',
    ],
    challenges: [
      'Implementing an efficient scheduling system for notifications',
      'Building a responsive UI that works across devices',
      'Managing state across complex task filtering operations',
    ],
    solutions: [
      'Used cron-like scheduling via node-cron for server-side reminders',
      'Implemented responsive CSS with mobile-first approach',
      'Used React Context API for efficient global state management',
    ],
    lessonsLearned: [
      'How to design intuitive CRUD interfaces',
      'Importance of UX in productivity applications',
      'SQLite is excellent for lightweight, single-user applications',
    ],
    futureImprovements: [
      'Add user authentication for multi-user support',
      'Implement drag-and-drop task reordering',
      'Add calendar view and Google Calendar sync',
    ],
  },
  {
    id: 'voting-system',
    title: 'Online Voting System',
    shortDescription: 'Digital platform for conducting secure online elections and voting',
    description: 'A secure web-based voting platform designed to facilitate transparent and tamper-resistant online elections. Built with Python Flask and MySQL, it ensures vote integrity through secure authentication and prevents double voting.',
    category: 'Web Application',
    status: 'Completed',
    role: 'Full Stack Developer',
    duration: '2 months',
    technologies: ['Python', 'Flask', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/IsurangaHerath/Online_Voting_System',
    image: '/images/projects/voting-system.jpg',
    images: ['/images/projects/voting-system.jpg'],
    features: [
      'Secure voter registration and authentication',
      'One vote per user enforcement',
      'Real-time vote counting and results',
      'Admin panel for election management',
      'Candidate and party management',
      'Audit trail for transparency',
    ],
    challenges: [
      'Ensuring vote integrity and preventing manipulation',
      'Implementing secure session management',
      'Building a system that scales for many concurrent voters',
    ],
    solutions: [
      'Database-level constraints and transaction isolation to prevent double voting',
      'Flask-Login with secure session tokens',
      'Optimized MySQL queries with proper indexing',
    ],
    lessonsLearned: [
      'Security is paramount in civic applications',
      'Database transactions are critical for vote integrity',
      'Python Flask is excellent for rapid full-stack development',
    ],
    futureImprovements: [
      'Add blockchain-based vote verification',
      'Implement two-factor authentication',
      'Add support for ranked-choice voting',
    ],
    architecture: 'Flask application with Jinja2 templating and RESTful API endpoints. MySQL handles vote storage with transaction-level locking. Session-based authentication ensures one vote per verified user.',
  },
];
