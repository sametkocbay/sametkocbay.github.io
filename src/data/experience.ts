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
    role: 'Working Student/Thesis', // [cite: 5]
    company: 'Max Planck Institute for Plasma Physics', // [cite: 4]
    location: 'Garching bei München, Germany',
    start: 'Oct 2025', // [cite: 6]
    end: 'Present', // [cite: 6]
    bullets: [
      'Deriving a self-consistent coupling for electromagnetic interactions of a fusion reactor.' // [cite: 7]
    ],
    tech: ['Fusion Physics', 'Electromagnetics', 'Simulation']
  },
  {
    role: 'Working Student', // [cite: 10]
    company: 'BMW', // [cite: 8]
    location: 'Munich, Germany',
    start: 'Oct 2024', // [cite: 9]
    end: 'Sep 2025', // [cite: 9]
    bullets: [
      'Developed a Gaussian process surrogate model for acoustic analysis.', // [cite: 11]
      'Built and deployed a neural network to predict optimal solver settings.' // [cite: 12]
    ],
    tech: ['Gaussian Processes', 'Neural Networks', 'Surrogate Modeling', 'Python']
  },
  {
    role: 'Bachelor Thesis', // [cite: 15]
    company: 'Compact Dynamics', // [cite: 13]
    location: 'Munich, Germany',
    start: 'Mar 2024', // [cite: 14]
    end: 'Sep 2024', // [cite: 14]
    bullets: [
      'Developed an RNN for real-time rotor temperature prediction in electric motors.', // [cite: 16]
      'Validated the model on the test bench.' // [cite: 17]
    ],
    tech: ['RNN', 'Deep Learning', 'Electric Motors', 'Real-time Systems']
  },
  {
    role: 'Student Assistant', // [cite: 18]
    company: 'Institute of Fluid Mechanics (TUM)', // [cite: 18]
    location: 'Munich, Germany',
    start: 'Jul 2023', // [cite: 19]
    end: 'Dec 2023', // [cite: 19]
    bullets: [
      'Researched and implemented a physics-informed neural network for inverse Navier-Stokes problems.', // [cite: 20]
      'Analyzed the influence of additional loss function terms.' // [cite: 21]
    ],
    tech: ['PINNs', 'Fluid Dynamics', 'Navier-Stokes', 'Deep Learning']
  },
  {
    role: 'Head of Aerodynamics', // [cite: 39]
    company: 'Formula Student (KA RaceIng)', // [cite: 39]
    location: 'Karlsruhe, Germany',
    start: 'Sep 2022', // [cite: 40]
    end: 'Oct 2023', // [cite: 40]
    bullets: [
      'Led a team of 13 engineers, overseeing aerodynamic design, lightweight structures, and CFD analysis.', // [cite: 41]
      'Maintained team motivation and efficiency in a high-pressure environment.' // [cite: 42]
    ],
    tech: ['Leadership', 'Aerodynamics', 'CFD', 'Project Management']
  }
];