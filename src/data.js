export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', cls: 'python', icon: 'fab fa-python' },
      { name: 'Java', cls: 'java', icon: 'fab fa-java' },
      { name: 'C#', cls: 'csharp', icon: 'fas fa-code' },
      { name: 'C', cls: 'c-lang', icon: 'fas fa-code' },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Xamarin', cls: 'xamarin', icon: 'fas fa-mobile-alt' },
      { name: 'Android Studio', cls: 'android', icon: 'fab fa-android' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', cls: 'react', icon: 'fab fa-react' },
      { name: 'JavaScript', cls: 'javascript', icon: 'fab fa-js-square' },
    ],
  },
  {
    title: 'Database Technologies',
    skills: [
      { name: 'PostgreSQL', cls: 'postgresql', icon: 'fas fa-database' },
      { name: 'Firebase', cls: 'firebase', icon: 'fas fa-fire' },
      { name: 'Google Cloud', cls: 'googlecloud', icon: 'fas fa-cloud' },
    ],
  },
]

export const experiences = [
  {
    logo: '/resources/g4s.png',
    title: 'Software Development Placement',
    company: 'G4S',
    period: 'March 2022 - March 2022',
    points: [
      'Created a mathematics quiz application with leaderboard functionality using Xamarin and C#.',
      'Developed foundational programming skills and gained experience in mobile app development.',
    ],
    tags: ['C#', 'Xamarin'],
  },
  {
    logo: '/resources/atex-supplies.png',
    title: 'SEO Manager',
    company: 'Atex-Supplies',
    period: '2022 - Present',
    points: [
      'Manage website content and implement SEO strategies to improve search rankings.',
      'Developed WordPress expertise through website management and optimization efforts.',
    ],
    tags: ['WordPress', 'Ecommerce'],
  },
  {
    logo: '/resources/nottingham.jpg',
    title: 'Subject Ambassador',
    company: 'University of Nottingham',
    period: 'May 2023 - Present',
    points: [
      'Representing the Computer Science department at open days, answering queries from prospective students and parents.',
      'Assisting with campus tours to showcase facilities, labs, and learning resources.',
    ],
    tags: [],
  },
  {
    logo: '/resources/infosys.png',
    title: 'Software Engineer Intern',
    company: 'Infosys',
    period: 'June 2025 - August 2025',
    points: [
      'Participated in Agile sprints to enhance the SAP Commerce platform, contributing to cross-functional team deliverables.',
      'Optimised existing codebase for performance and readability, reducing load times and improving maintainability.',
    ],
    tags: ['Java', 'Jira', 'Git', 'Agile'],
  },
  {
    logo: '/resources/honeywell_aerospace.jpg',
    title: 'Software Engineer Intern',
    company: 'Honeywell Aerospace',
    period: 'August 2026 - August 2027',
    points: [],
  }
]

export const projects = [
  {
    img: '/resources/playlistCurator.png',
    title: 'Playlist Curator',
    description:
      'Transform your chaotic music library into genre-based playlists in minutes. Available soon on Play Store.',
    href: 'https://play.google.com/store/apps/details?id=com.aryan.playlistcurator&hl=en_GB',
  },
  {
    img: '/resources/drawing.png',
    title: 'Video To Album Cover',
    description:
      'Video To Album Cover is an extension for Youtube Music that removes pesky videos and shows the music cover instead to provide less distractions.',
    href: 'https://chromewebstore.google.com/detail/video-to-album-cover-for/hpdfnknolcfbimcnngknidjgpddjfhgl?authuser=1&hl=en-GB',
  },
  {
    img: '/resources/jam_pal.png',
    title: 'Jam Pal',
    description:'drum and bass partners to guide and support your jam session.',
    href: 'https://1102aryan.github.io/jam-pal/',
  },
  {
    title: 'Enteral Support Tool',
    description:
      'Managing enteral feeding for inpatients with diabetes, strictly adhering to University Hospitals of Leicester (UHL) protocols and Joint British Diabetes Societies (JBDS) guidelines.',
    href: 'https://enteral-feeding.onrender.com/',
  }
]
