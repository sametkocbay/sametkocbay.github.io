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
    role: 'Working Student / Thesis',
    company: 'Max Planck Institute for Plasma Physics',
    location: 'Munich, Germany',
    start: 'Oct 2025',
    end: 'Sep 2026',
    bullets: [
      'Developing a self-consistent boundary coupling for MHD and electromagnetic interactions in fusion plasmas.',
      'Implementing methods in the large-scale nonlinear MHD code JOREK to analyze magnetic-island behavior.'
    ],
    tech: ['Fusion Physics', 'MHD', 'JOREK', 'Electromagnetics']
  },
  {
    role: 'Working Student',
    company: 'BMW Group',
    location: 'Munich, Germany',
    start: 'Oct 2024',
    end: 'Sep 2025',
    bullets: [
      'Built a surrogate model for the operator-valued mapping from structural parameters to frequency responses.',
      'Improved prediction accuracy by >40% using multi-task Gaussian Processes.',
      'Reduced computational cost by ~80% via latent representation learning.'
    ],
    tech: ['Gaussian Processes', 'Surrogate Modeling', 'GPyTorch', 'Python']
  },
  {
    role: 'Bachelor Thesis',
    company: 'Compact Dynamics',
    location: 'Starnberg, Germany',
    start: 'Mar 2024',
    end: 'Sep 2024',
    bullets: [
      'Developed an RNN-based thermal neural network for rotor-temperature estimation in electric motors, achieving 3–6 °C prediction error.',
      'Deployed the model for real-time inference on an embedded control unit, improving accuracy with EMF corrections.'
    ],
    tech: ['RNN', 'Deep Learning', 'Electric Motors', 'Embedded / Real-time']
  },
  {
    role: 'Student Assistant',
    company: 'Institute of Fluid Mechanics (KIT)',
    location: 'Karlsruhe, Germany',
    start: 'Jul 2023',
    end: 'Dec 2023',
    bullets: [
      'Reconstructed velocity and pressure fields from sparse PIV measurements using physics-informed neural networks.',
      'Reduced experimental measurement requirements by leaning on the learned physics constraints.'
    ],
    tech: ['PINNs', 'Fluid Dynamics', 'Navier-Stokes', 'Deep Learning']
  },
  {
    role: 'Head of Aerodynamics',
    company: 'Formula Student (KA RaceIng)',
    location: 'Karlsruhe, Germany',
    start: 'Oct 2021',
    end: 'Sep 2023',
    bullets: [
      'Led a 13-person team over a full aerodynamic development cycle, from CFD to in-house manufacturing.',
      'Designed and optimized the aero package (+14% downforce) using RANS-based CFD (k-ω SST).',
      'Performed mesh generation, boundary-layer resolution (y+ control), and grid-convergence studies.'
    ],
    tech: ['Leadership', 'Aerodynamics', 'CFD', 'Project Management']
  }
];