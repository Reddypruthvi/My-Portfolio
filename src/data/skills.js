import { Code2, Globe, Database, Brain, Cloud, Settings, BookOpen, Users } from 'lucide-react';
import { FiCode, FiGlobe, FiDatabase, FiCpu, FiCloud, FiTool, FiBook, FiUsers } from 'react-icons/fi';

export const skills = [
  {
    category: "Programming Languages",
    icon: FiCode,
    items: [
      { name: "Python", description: "General & ML", level: "Advanced" },
      { name: "Java", description: "Object-oriented", level: "Advanced" },
      { name: "JavaScript", description: "Web interactivity", level: "Advanced" },
      { name: "Kotlin", description: "Android Development", level: "Intermediate" },
      { name: "SQL", description: "Database querying", level: "Advanced" }
    ]
  },
  {
    category: "Web Technologies",
    icon: FiGlobe,
    items: [
      { name: "HTML/CSS", description: "Web structure & styling", level: "Advanced" },
      { name: "React.js", description: "Frontend Library", level: "Advanced" },
      { name: "Node.js", description: "Backend Runtime", level: "Advanced" },
      { name: "Next.js", description: "React Framework", level: "Intermediate" },
      { name: "REST APIs", description: "Web services", level: "Advanced" }
    ]
  },
  {
    category: "Databases",
    icon: FiDatabase,
    items: [
      { name: "MySQL", description: "Relational DB", level: "Advanced" },
      { name: "MongoDB", description: "NoSQL DB", level: "Advanced" },
      { name: "Firebase", description: "Backend-as-a-Service", level: "Intermediate" }
    ]
  },
  {
    category: "Core Concepts",
    icon: FiCpu,
    items: [
      { name: "Data Structures & Algorithms", description: "Problem Solving", level: "Advanced" },
      { name: "OOP", description: "Object-oriented paradigm", level: "Advanced" },
      { name: "DBMS", description: "Database Management", level: "Advanced" },
      { name: "OS & Networks", description: "Computer Systems", level: "Intermediate" },
      { name: "Machine Learning & NLP", description: "AI Concepts", level: "Intermediate" }
    ]
  },
  {
    category: "Cloud & Tools",
    icon: FiCloud,
    items: [
      { name: "AWS & GCP", description: "Cloud Platforms", level: "Intermediate" },
      { name: "Git & GitHub", description: "Version Control", level: "Advanced" },
      { name: "VS Code & Android Studio", description: "IDEs", level: "Advanced" },
      { name: "Linux", description: "Operating System", level: "Intermediate" }
    ]
  },
  {
    category: "Libraries",
    icon: FiBook,
    items: [
      { name: "Pandas & NumPy", description: "Data Manipulation", level: "Advanced" },
      { name: "Matplotlib", description: "Data Visualization", level: "Advanced" },
      { name: "TensorFlow", description: "Deep Learning", level: "Intermediate" },
      { name: "Transformers", description: "NLP Models", level: "Intermediate" }
    ]
  },
  {
    category: "Soft Skills",
    icon: FiUsers,
    items: [
      { name: "Problem Solving", description: "Analytical Thinking", level: "Advanced" },
      { name: "Teamwork", description: "Collaboration", level: "Advanced" },
      { name: "Adaptability", description: "Quick Learner", level: "Advanced" },
      { name: "Time Management", description: "Efficiency", level: "Advanced" }
    ]
  }
];
