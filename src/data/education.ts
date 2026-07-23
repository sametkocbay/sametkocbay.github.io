export type EducationEntry = {
  degree: string;
  dates: string;
  school: string;
  highlights: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'M.Sc. Computational Science and Engineering',
    dates: 'oct 2024 — apr 2027',
    school: 'Technical University of Munich (TUM)',
    highlights: ['Focus: machine learning for physics and numerical methods.', 'Current grade: 1.5 (German scale).']
  },
  {
    degree: 'B.Sc. Mechanical Engineering',
    dates: 'oct 2019 — sep 2024',
    school: 'Karlsruhe Institute of Technology (KIT)',
    highlights: ['Head of Aerodynamics, Formula Student team KA-RaceIng.', 'Tutor for technical mechanics II, III & IV']
  }
];
