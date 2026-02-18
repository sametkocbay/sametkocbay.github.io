export type EducationEntry = {
  degree: string;
  university: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'M.Sc. Computational Science and Engineering',
    university: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'October 2024',
    end: 'Present',
    highlights: [
      'Research focus: Machine Learning for Physics and Numerical Methods.',
    ]
  },
  {
    degree: 'B.Sc. Mechanical Engineering',
    university: 'Karlsruhe Institute of Technology (KIT)',
    location: 'Karlsruhe, Germany',
    start: 'Oct 2019',
    end: 'September 2024',
    highlights: [
      'Head of Aerodynamics in the Formula Stundent Team KA-RaceIng',
    ]
  },

];
