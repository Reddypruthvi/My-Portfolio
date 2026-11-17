const profileRepositories = 'https://github.com/Reddypruthvi?tab=repositories';

export const projects = [
  {
    id: 1,
    title: 'Real-Time Driver Monitoring using Multi-Modal Emotion Recognition',
    category: 'AI / Machine Learning',
    description:
      'A driver-safety application for real-time analysis of a driver’s emotional state and drowsiness using camera and microphone input.',
    technologies: ['Python', 'Machine Learning', 'OpenCV', 'Flask'],
    image: '/driver-monitoring-cover.svg',
    github: 'https://github.com/Reddypruthvi/emotion',
    features: [
      'Analyzes driver state from camera and microphone input.',
      'Monitors drowsiness, fatigue, distraction, and emotional state.',
      'Combines computer-vision signals with audio analysis.',
    ],
  },
  {
    id: 2,
    title: 'Hotel Management System',
    category: 'Full Stack Development',
    description:
      'A hotel operations platform for room reservations, customer management, check-in and check-out, and billing.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/hotel-project-cover.svg',
    github: 'https://github.com/Reddypruthvi/Hotel-management-system',
    features: [
      'Manages room availability and guest reservations.',
      'Supports customer records and check-in/check-out workflows.',
      'Includes billing and booking management.',
    ],
  },
  {
    id: 3,
    title: 'Weather Application',
    category: 'Web Development',
    description:
      'A weather application that displays current conditions and weather insights using live API data.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    image: '/weather-project-cover.svg',
    github: 'https://github.com/Reddypruthvi/weather-apps',
    features: [
      'Retrieves current weather from a REST API.',
      'Displays temperature, humidity, wind speed, and conditions.',
      'Provides AI-assisted weather insights.',
    ],
  },
  {
    id: 4,
    title: 'E-Commerce Sales and Customer Analytics Dashboard',
    category: 'Data Analytics',
    description:
      'An analytics project focused on exploring sales and customer data through interactive dashboards and business metrics.',
    technologies: ['SQL', 'Power BI', 'Excel', 'DAX'],
    image: '/analytics-project-cover.svg',
    github: profileRepositories,
    repositoryLabel: 'Browse GitHub',
    features: [
      'Explores sales and customer data.',
      'Uses DAX measures for business metrics.',
      'Presents findings in interactive dashboards.',
    ],
  },
  {
    id: 5,
    title: 'House Price Prediction',
    category: 'Machine Learning',
    description:
      'A machine-learning project that estimates house prices from property features.',
    technologies: ['Python', 'Machine Learning'],
    image: '/house-price-project-cover.svg',
    github: profileRepositories,
    repositoryLabel: 'Browse GitHub',
    features: [
      'Uses property features as model inputs.',
      'Applies a machine-learning approach to price estimation.',
      'Supports data-driven comparison of property values.',
    ],
  },
];
