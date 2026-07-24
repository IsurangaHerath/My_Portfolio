// ============================================================
//  CENTRALIZED PORTFOLIO DATA
// ============================================================

export const PERSONAL_INFO = {
  name: 'Isuranga Herath',
  role: 'Computer Science Undergraduate',
  email: 'navodyaisuranga10@gmail.com',
  phone: '+94 76 110 0953',
  location: 'Nattandiya, Puttalam, Sri Lanka',
  github: 'https://github.com/IsurangaHerath',
  linkedin: 'https://www.linkedin.com/in/isuranga-herath-1765b72b9',
  profileImage: `${import.meta.env.BASE_URL}profile.jpg`,
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
      'Python Programming' ,
      'Data Structures',
      'Database Management Systems',
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
    institution: 'St. Joseph Vaz Collage, Wennappuwa',
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
    institution: 'President Collage, Nattandiya',
    degree: 'Ordinary Level (O/L)',
    duration: '2012 – 2018',
    status: 'Completed',
    highlights: [
      'Completed 9 subjects',
    ],
    achievements: [
      'Achieved eligibility for Advanced Level studies',
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
    id: 'python1',
    title: 'Python for Beginners',
    institute: 'University of Moratuwa',
    instituteShort: 'Online',
    completionDate: '2024',
    credentialId: 'MZSZYVHU3G',
    verificationUrl: 'https://open.uom.lk/verify',
    description: 'Introduces core programming principles, logic building, and standard Python syntax.',
    skills: ['Python (Programming Language)', 'Functional Programming', 'Problem Solving', 'Algorithms'],
    category: 'Programming',
    image: `${import.meta.env.BASE_URL}images/certifications/python_for_beginners.PNG`,
  },
  {
    id: 'ml',
    title: 'Machine Learning for Beginners',
    institute: 'Simplilearn',
    instituteShort: 'Online',
    completionDate: '2026',
    credentialId: '10478593',
    verificationUrl: 'https://simpli-web.app.link/e/elaf4YkPV4b',
    description: 'Self-paced online course that teaches you how to build computer programs that learn from data to make predictions and automated decisions—without needing a background in complex math.',
    skills: ['Machine Learning', 'Data Classification', 'Cluster', 'Model Evaluatio'],
    category: 'Machine Learning',
    image: `${import.meta.env.BASE_URL}images/certifications/ml_beginner.PNG`,
  },
  {
    id: 'python2',
    title: 'Python Programming',
    institute: 'University of Moratuwa',
    instituteShort: 'Online',
    completionDate: '2026',
    credentialId: 'GFifp8yLxK',
    verificationUrl: 'https://open.uom.lk/verify',
    description: 'Moves beyond basic scripts into real-world software development, object-oriented design, and external data handling.',
    skills: ['Procedural Programming', 'OOP', 'Data Structures', 'Data Manipulation'],
    category: 'Programming',
    image: `${import.meta.env.BASE_URL}images/certifications/python_programming.PNG`,
  },
  {
    id: 'js',
    title: 'JavaScript Master Course From Beginner to Expert Developer',
    institute: 'Udemy',
    instituteShort: 'Online',
    completionDate: '2025',
    credentialId: 'UC-6c8ac0f1-72a7-44cb-b0ef-217d04783017',
    verificationUrl: 'https://ude.my/UC-6c8ac0f1-72a7-44cb-b0ef-217d04783017',
    description: 'The curriculum is organized into step-by-step modules spanning core fundamentals to advanced server communication and modern standards',
    skills: ['Document Object Model (DOM)', 'Asynchronous Data Retrieval', 'Storage Management', 'User Interaction'],
    category: 'Web Development',
    image: `${import.meta.env.BASE_URL}images/certifications/java_script.PNG`,
  },
  {
    id: 'sql1',
    title: 'Introduction to SQL',
    institute: 'Sololearn ',
    instituteShort: 'Online',
    completionDate: '2024',
    credentialId: 'UOMSDHGJ',
    verificationUrl: 'https://www.sololearn.com/certificates/CC-UOMSDHGJ',
    description: 'Completed the Introduction to SQL certification from SoloLearn, gaining foundational knowledge of relational databases, SQL queries, and database management. Developed skills in writing SQL statements, retrieving and manipulating data, working with tables, filtering records, and understanding database structures. This certification strengthened my ability to manage and analyze data effectively for software development and data-driven applications.',
    skills: ['SQL', 'MySQL', 'Relational Databases', 'Database Management System (DBMS)', 'Database Management System (DBMS)'],
    category: 'Database',
    image: `${import.meta.env.BASE_URL}images/certifications/introduction_sql.PNG`,
  },
  {
    id: 'sql2',
    title: 'SQL Intermediate',
    institute: 'Sololearn',
    instituteShort: 'Online',
    completionDate: '2024',
    credentialId: 'RGT0DXFN',
    verificationUrl: 'https://www.sololearn.com/certificates/CC-RGT0DXFN',
    description: 'Completed the SQL Intermediate certification from SoloLearn, developing intermediate-level skills in database querying, data manipulation, and relational database management. Learned advanced SQL concepts including complex queries, joins, filtering, sorting, aggregation, and efficient data retrieval techniques. This certification strengthened my ability to work with structured data and build data-driven applications.',
    skills: ['SQL', 'Database Design', 'MySQL', 'Query Optimization', 'Stored Procedures'],
    category: 'Database',
    image: `${import.meta.env.BASE_URL}images/certifications/sql_intermediate.PNG`,
  },
  {
    id: 'git',
    title: 'GIT, GitLab, GitHub Fundamentals for Software Developers',
    institute: 'Udemy',
    instituteShort: 'Online',
    completionDate: '2026',
    credentialId: 'UC-0ec17e2f-535a-467c-8437-248332452e44',
    verificationUrl: 'https://ude.my/UC-0ec17e2f-535a-467c-8437-248332452e44',
    description: 'Completed the GIT, GitLab, and GitHub Fundamentals for Software Developers certification from Udemy, gaining practical knowledge of version control systems and collaborative software development workflows. Learned Git commands, repository management, branching, merging, version tracking, and using GitHub/GitLab for project collaboration.',
    skills: ['GIT', 'GitHub', 'Gitlab', 'Version Control', 'Source Code Management'],
    category: 'Version Control',
    image: `${import.meta.env.BASE_URL}images/certifications/version_control.PNG`,
  },
  {
    id: 'prompt',
    title: 'Prompt Engineering Application',
    institute: 'Simplilearn',
    instituteShort: 'Online',
    completionDate: '2026',
    credentialId: '10485456',
    verificationUrl: 'https://simpli-web.app.link/e/VQG4O9JoT4b',
    description: 'Completed the Prompt Engineering Application certification from Simplilearn, gaining practical knowledge of Generative AI, Large Language Models (LLMs), and effective prompt design techniques. Learned how to create, optimize, and evaluate prompts to improve AI-generated responses and build AI-powered solutions.',
    skills: ['Prompt Engineering', 'Generative AI', 'Large Language Models (LLM)', 'Artificial Intelligence (AI)', 'NLP'],
    category: 'Prompt Engineering',
    image: `${import.meta.env.BASE_URL}images/certifications/prompt_engineering.PNG`,
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
    shortDescription: 'A point of sale system for managing inventory, sales, and products',
    description: 'A comprehensive Point of Sale (POS) system built as a web application. It provides businesses with full inventory management, real-time sales tracking, transaction history, and reporting capabilities.',
    category: 'Web Application',
    status: 'Completed',
    role: 'Full Stack Developer',
    duration: '3 months',
    technologies: ['Node.js', 'Express', 'MySQL', 'React', 'Vite', 'Electron'],
    github: 'https://github.com/IsurangaHerath/POS_System',
    image: '/images/projects/pos-system.jpg',
    images: [`${import.meta.env.BASE_URL}images/projects/pos_system/signup.png`,`${import.meta.env.BASE_URL}images/projects/pos_system/login.png`,`${import.meta.env.BASE_URL}images/projects/pos_system/dashboard.png`,`${import.meta.env.BASE_URL}images/projects/pos_system/products.png`,`${import.meta.env.BASE_URL}images/projects/pos_system/settings.png`,`${import.meta.env.BASE_URL}images/projects/pos_system/user.png`],
    liveUrl: 'https://pos-system-1-aia1.onrender.com/',
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
      'Used TS for secure communication between main and renderer processes',
      'Implemented local MySQL with connection pooling for reliability',
      'Added transaction locking mechanisms to prevent data conflicts',
    ],
    lessonsLearned: [
      'Web app architecture.',
      'Importance of data integrity in financial applications',
      'How to structure React + Vite projects effectively',
    ],
    futureImprovements: [
      'Add cloud sync for multi-branch support',
      'Implement barcode scanner integration',
      'Add advanced analytics and custom report generation',
    ],
    architecture: 'TS main process handles system-level operations and database connections via MySQL. The renderer process runs a React/Vite SPA. Communication happens via IPC channels. Express API layer handles business logic.',
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
    liveUrl: '#',
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
    liveUrl: '#',
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
