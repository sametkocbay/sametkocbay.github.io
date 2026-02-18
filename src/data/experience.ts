export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Machine Learning Engineer',
    company: 'BMW Group',
    location: 'Munich, Germany',
    start: 'Sep 2024',
    end: 'Present',
    bullets: [
      'Built multimodal machine learning models that improved prior AI performance.',
      'Designed MLOps infrastructure to boost engineering productivity and reduce costs.',
      'Worked under real-world system constraints with a strong research-to-production loop.'
    ],
    tech: ['Multimodal', 'MLOps', 'Deep Learning', 'Data Engineering']
  },
  {
    role: 'AI Team Lead',
    company: 'WARR Student Club at TUM',
    location: 'Munich, Germany',
    start: '2023',
    end: '2024',
    bullets: [
      'Contributed to a satellite mission launched in 2024.',
      'Led a team of 5 developing ML models for space debris impact prediction.',
      'Drove research execution under strict mission and system constraints.'
    ],
    tech: ['Deep Learning', 'Leadership', 'Embedded Systems']
  },
  {
    role: "Deep Learning Engineer",
    company: 'Space Debris Radar Detection Startup - ActLabs',
    location: 'Munich, Germany',
    start: 'Oct 2023',
    end: 'Mar 2024',
    bullets: [
      'Demonstrated deep learning detection of space debris using simulated radar sequences.',
      'Built sequences based on I/Q signals derived from radar cross-sections.',
      'Validated feasibility of radar-based space debris detection for satellite-mounted sensing.'
    ],
    tech: ['Radar', 'Deep Learning', 'Signal Processing']
  },
  {
    role: 'iOS Software Engineer',
    company: 'Bosch Siemens Home Appliances (BSH)',
    location: 'Munich, Germany',
    start: 'Oct 2022',
    end: 'Feb 2023',
    bullets: [
      'Developed an iOS application from scratch using Swift and Google Firebase.',
      'Implemented 3D scanning, mapping, and augmented reality features.',
      'Shipped user-facing functionality with end-to-end app engineering ownership.'
    ],
    tech: ['Swift', 'Firebase', '3D Scanning', 'AR']
  },
  {
    role: 'Teaching Assistant',
    company: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2021',
    end: 'Aug 2022',
    bullets: [
      'Supported teaching activities in computer science and engineering coursework.',
      'Guided students in problem-solving and technical implementation.',
      'Contributed to structured technical instruction and mentoring.'
    ],
    tech: ['Teaching', 'Computer Science', 'Mentoring']
  }
];
