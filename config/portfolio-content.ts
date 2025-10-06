// ============================================================================
// PORTFOLIO CONTENT CONFIGURATION
// ============================================================================
// Fill in this file with your actual information from your resume.
// Once completed, the portfolio will automatically use this data.
// ============================================================================

export const portfolioContent = {
  // ========== PERSONAL INFORMATION ==========
  personal: {
    name: 'Surendar Kumar H P',
    firstName: 'Surendar',
    lastName: 'Kumar H P',
    title: 'Computer Science Engineering Student | Full Stack Developer',
    email: 'ksuru127@gmail.com',
    phone: '+91-8971291369',
    location: 'Chikmagalur, Karnataka, India',
    dateOfBirth: '', // Not provided in resume
    zipCode: '', // Not provided in resume
  },

  // ========== SOCIAL MEDIA LINKS ==========
  social: {
    github: 'https://github.com/SurendarKumar3',
    linkedin: 'https://linkedin.com/in/surendar-kumar03',
    instagram: 'https://www.instagram.com/k.suru_03/',
    twitter: '',
    portfolio: '',
  },

  // ========== BIO / ABOUT ME ==========
  bio: {
    short: 'Computer Science Engineering student with strong skills in programming, full-stack development, and emerging technologies. Passionate about innovation with hands-on experience in AI, Cloud, and practical problem-solving.',

    detailed: `I'm Surendar Kumar H P, a Computer Science Engineering student with a passion for innovation and problem-solving. With strong skills in programming, full-stack development, and emerging technologies, I bring a unique blend of academic excellence and practical experience.

    Certified in AI and Cloud technologies, I have hands-on experience in projects spanning trading algorithms, e-learning platforms, cybersecurity tools, and computer vision applications. My work demonstrates the ability to apply technical knowledge through hackathons, research-driven projects, and real-world problem-solving.

    With a strong academic record (CGPA: 9.05/10.0) and active participation in national-level hackathons, I strive to create efficient, scalable, and user-friendly applications that make a real impact.`,
  },

  // ========== TYPED TEXT ROLES (for hero section) ==========
  roles: [
    'Prompt Engineer',
    'AI & ML Enthusiast',
    'Problem Solver',
  ],

  // ========== EDUCATION ==========
  education: [
    {
      year: 'Dec. 2022 - Apr. 2026',
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Adichunchanagiri Institute Of Technology',
      location: 'Chikmagalur, India',
      cgpa: '9.05/10.0',
      description: 'Strong academic record with focus on programming, algorithms, and emerging technologies',
    },
    {
      year: 'Jun. 2020 - Apr. 2022',
      degree: 'Pre-University Course (PCM, Computer Science)',
      institution: "St. Mary's PU College",
      location: 'Chikmagalur, Karnataka',
      percentage: '96.8%',
      description: 'Completed with distinction in Physics, Chemistry, Mathematics, and Computer Science',
    },
    {
      year: 'Jun. 2019 - Apr. 2020',
      degree: 'Secondary School Certificate (10th Grade)',
      institution: "St. Mary's International School",
      location: 'Chikmagalur, Karnataka',
      percentage: '92.6%',
      description: 'Completed with honors',
    },
  ],

  // ========== WORK EXPERIENCE ==========
  // Note: Resume shows hackathons and projects instead of traditional work experience
  // Using hackathons as experience to showcase practical skills
  experience: [
    {
      year: 'Apr. 2025',
      title: 'Hackathon Participant - Tech Tank 2025',
      company: 'RV College of Engineering',
      location: 'Bengaluru, India',
      description: 'Advanced to Round 2 in a competitive national-level hackathon, demonstrating strong problem-solving and technical skills.',
      responsibilities: [
        'Developed innovative solutions under time constraints',
        'Collaborated with team members on technical challenges',
        'Presented project to judges and technical panel',
      ],
    },
    {
      year: 'Apr. 2025',
      title: 'Hackathon Participant - IGNITEX 2025',
      company: 'Adichunchanagiri University',
      location: 'Chikmagalur, India',
      description: 'Participated in National Software/Hardware Hackathon, showcasing full-stack development and innovation skills.',
      responsibilities: [
        'Built software/hardware integrated solutions',
        'Applied full-stack development skills',
        'Worked on real-world problem statements',
      ],
    },
    {
      year: 'Nov. 2024',
      title: 'Hackathon Participant - State-Level Hackathon',
      company: 'Malnad College of Engineering',
      location: 'Hassan, Karnataka',
      description: 'Received innovation recognition at state-level hackathon for creative problem-solving approach.',
      responsibilities: [
        'Developed innovative technical solutions',
        'Demonstrated creativity in problem-solving',
        'Received recognition for innovation',
      ],
    },
  ],

  // ========== SKILLS ==========
  skills: {
    languages: ['C++', 'C', 'Python', 'Java', 'JavaScript'],
    webTech: ['React.js', 'Node.js', 'Flask', 'HTML', 'CSS', 'TailwindCSS'],
    databases: ['MySQL', 'MongoDB'],
    frameworks: ['React.js', 'Node.js', 'Flask', 'OpenCV'],
    tools: ['Git', 'OpenCV', 'Dialogflow', 'TradingView API'],
    cloudPlatforms: ['AWS', 'Oracle Cloud Infrastructure'],
    specialized: ['Machine Learning', 'Cybersecurity', 'Trading Algorithms', 'AI/ML', 'Data Analysis', 'Computer Vision'],
  },

  // ========== SKILLS WITH PROFICIENCY (for tabbed resume) ==========
  skillsWithProficiency: [
    { name: 'C/C++', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js/Node.js', level: 70 },
    { name: 'Flask', level: 85 },
    { name: 'MySQL/MongoDB', level: 80 },
    { name: 'AWS/Oracle Cloud', level: 75 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Git/Version Control', level: 90 },
    { name: 'OpenCV/Computer Vision', level: 70 },
  ],

  // ========== PROJECTS ==========
  projects: [
    {
      name: 'Binary Bot',
      description: 'Real-time binary trading signal generator supporting 10+ currency pairs using Smart Money Concepts, RSI, and volume-based strategies. Implemented automated notification system with pop-up alerts and 6-month backtesting engine for strategy validation.',
      technologies: ['Python', 'Flask', 'JavaScript', 'TradingView API'],
      github: 'https://github.com/SurendarKumar3/binary-bot',
      demo: '',
      image: '/projects/binary-bot.jpg',
      date: 'May 2025',
    },
    {
      name: 'E-Shiksha',
      description: 'Interactive e-learning platform with quizzes, mock tests, progress tracking, and study material access. Integrated user authentication, leaderboard rankings, and AI-based recommendation system for personalized learning.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
      github: 'https://github.com/SurendarKumar3/E-siksha',
      demo: '',
      image: '/projects/e-shiksha.jpg',
      date: 'Mar. 2025',
    },
    {
      name: 'InstaScan',
      description: 'Mobile/web app using computer vision to scan food labels and extract nutritional information. Implemented conversational chatbot using Dialogflow API for health tips and meal tracking.',
      technologies: ['Python', 'OpenCV', 'Flask', 'React.js', 'Dialogflow'],
      github: 'https://github.com/SurendarKumar3/InstaScan',
      demo: '',
      image: '/projects/instascan.jpg',
      date: 'Feb. 2025',
    },
    {
      name: 'PhishShield',
      description: 'Cybersecurity tool detecting phishing domains via DNS permutation and SSL validation. Built web interface for live URL security checks with similarity scoring and blacklist integration.',
      technologies: ['Python', 'Flask', 'DnsTwist', 'OpenSSL', 'React.js'],
      github: 'https://github.com/SurendarKumar3/PhishShield',
      demo: '',
      image: '/projects/phishshield.jpg',
      date: 'Nov. 2024',
    },
  ],

  // ========== CERTIFICATIONS ==========
  certifications: [
    {
      name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: 'Aug. 2025',
      credentialId: '',
      credentialUrl: 'https://drive.google.com/file/d/1cUsvtuL7TV6G04XKIw4aHPUxb3L1Jek-/view?usp=drive_link',
    },
    {
      name: 'AWS Academy Graduate - Cloud Architecting',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Jul. 2025',
      credentialId: '',
      credentialUrl: 'https://drive.google.com/file/d/1nULkAa_Wrm4_lL4RnoPO-ZWKQ_eghwZu/view?usp=drive_link',
    },
    {
      name: 'NPTEL Programming in Java - Elite Silver Grade',
      issuer: 'NPTEL',
      date: 'Jan. - Apr. 2025',
      credentialId: '',
      credentialUrl: 'https://drive.google.com/file/d/19hWi6cLeD7CyF-QIdZESc4CmOs7O0B97/view?usp=drive_link',
    },
    {
      name: 'NPTEL Machine Learning - Elite Grade',
      issuer: 'NPTEL',
      date: 'Jan. - Mar. 2025',
      credentialId: '',
      credentialUrl: 'https://drive.google.com/file/d/1zSBdjSn-NgUjEPCevnQbsKp4lCn-Fg48/view?usp=drive_link',
    },
    {
      name: 'Academic Process Mining Fundamentals',
      issuer: 'Celonis',
      date: 'Apr. 2025',
      credentialId: '',
      credentialUrl: 'https://drive.google.com/file/d/1x9LnNhtInzmq5O0IOXIp0vm-U58ga2_j/view?usp=drive_link',
    },
    {
      name: 'NPTEL Python for Data Science - Elite Grade',
      issuer: 'NPTEL',
      date: 'Jul. - Aug. 2025',
      credentialId: '',
      credentialUrl: 'https://drive.google.com/file/d/14WWrL_3JtICxOQny8xWWRjr1caqq_wGm/view?usp=drive_link',
    },
  ],

  // ========== ACHIEVEMENTS & AWARDS ==========
  achievements: [
    {
      year: 'Apr. 2025',
      title: 'Tech Tank 2025 - Advanced to Round 2',
      organization: 'RV College of Engineering, Bengaluru',
      description: 'Advanced to Round 2 in a competitive national-level hackathon, demonstrating strong problem-solving and technical skills',
    },
    {
      year: 'Apr. 2025',
      title: 'Sentinel Hack 5.0 - AI & Cybersecurity Focus',
      organization: 'K.S. Institute of Technology',
      description: 'Participated in AI and Cybersecurity focused hackathon, showcasing expertise in emerging technologies',
    },
    {
      year: 'Apr. 2025',
      title: 'IGNITEX 2025 - National Software/Hardware Hackathon',
      organization: 'Adichunchanagiri University',
      description: 'Participated in national-level software/hardware hackathon, demonstrating full-stack development skills',
    },
    {
      year: 'Nov. 2024',
      title: 'hackCSE-erate - National-level Competition',
      organization: 'Adichunchanagiri Institute of Technology',
      description: 'Participated in national-level hackathon competition, showcasing innovative problem-solving',
    },
    {
      year: 'Nov. 2024',
      title: 'State-Level Hackathon - Innovation Recognition',
      organization: 'Malnad College of Engineering',
      description: 'Received innovation recognition at state-level hackathon for creative technical solutions',
    },
    {
      year: '2022-2026',
      title: 'Academic Excellence - CGPA 9.05/10.0',
      organization: 'Adichunchanagiri Institute Of Technology',
      description: 'Maintaining excellent academic performance throughout Bachelor of Engineering program',
    },
  ],

  // ========== STATISTICS (for counter section) ==========
  stats: {
    awards: 6, // 6 certifications (updated from 5)
    projects: 4, // 4 major projects (Binary Bot, E-Shiksha, InstaScan, PhishShield)
    hackathons: 5, // 5 hackathons participated
    cgpa: 9, // CGPA rounded (can be displayed as 9.05)
  },

  // ========== HIRE ME SECTION ==========
  hireMe: {
    available: true,
    description: 'Skilled in creating efficient, high-quality code with strong expertise in full-stack development, AI/ML, and cybersecurity. Proven ability to deliver innovative solutions through hackathons and real-world projects.',
  },

  // ========== CONTACT FORM ==========
  contact: {
    formEnabled: true, // Set to false to disable contact form
    formAction: '', // TODO: Add form submission endpoint (e.g., Formspree, EmailJS)
  },
}

// Export individual sections for easy access
export const {
  personal,
  social,
  bio,
  roles,
  education,
  experience,
  skills,
  skillsWithProficiency,
  projects,
  certifications,
  achievements,
  stats,
  hireMe,
  contact,
} = portfolioContent

