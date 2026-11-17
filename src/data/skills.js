import {
  FiBookOpen,
  FiCloud,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiTool,
} from 'react-icons/fi';

export const skills = [
  {
    category: 'Programming',
    icon: FiCode,
    items: [
      { name: 'Python', description: 'Programming language' },
      { name: 'Java', description: 'Object-oriented programming' },
    ],
  },
  {
    category: 'Frontend',
    icon: FiGlobe,
    items: [
      { name: 'HTML', description: 'Web structure' },
      { name: 'CSS', description: 'Web styling' },
      { name: 'JavaScript', description: 'Web development' },
      { name: 'React.js', description: 'Frontend library' },
    ],
  },
  {
    category: 'Backend',
    icon: FiCode,
    items: [
      { name: 'Node.js', description: 'JavaScript runtime' },
      { name: 'Express.js', description: 'Web application framework' },
    ],
  },
  {
    category: 'Databases',
    icon: FiDatabase,
    items: [
      { name: 'MySQL', description: 'Relational database' },
      { name: 'MongoDB', description: 'Document database' },
    ],
  },
  {
    category: 'Tools',
    icon: FiTool,
    items: [
      { name: 'Git', description: 'Version control' },
      { name: 'GitHub', description: 'Code hosting' },
      { name: 'VS Code', description: 'Code editor' },
      { name: 'Android Studio', description: 'Android development' },
      { name: 'Linux', description: 'Operating system' },
    ],
  },
  {
    category: 'Cloud',
    icon: FiCloud,
    items: [{ name: 'AWS Basics', description: 'Cloud fundamentals' }],
  },
  {
    category: 'Core Concepts',
    icon: FiBookOpen,
    items: [
      { name: 'Data Structures and Algorithms', description: 'Computer science fundamentals' },
      { name: 'OOP', description: 'Object-oriented programming' },
      { name: 'DBMS', description: 'Database systems' },
      { name: 'Operating Systems', description: 'Computer systems' },
      { name: 'Computer Networks', description: 'Network fundamentals' },
    ],
  },
];
