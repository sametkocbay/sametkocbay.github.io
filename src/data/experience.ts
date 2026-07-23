export type ExperienceEntry = {
  company: string;
  dates: string;
  roleLine: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Max Planck Institute for Plasma Physics',
    dates: 'oct 2025 — sep 2026',
    roleLine: 'working student / thesis · munich',
    bullets: [
      'Self-consistent boundary coupling for MHD and electromagnetic interactions in fusion plasmas.',
      'Implementing methods in the nonlinear MHD code JOREK to analyze magnetic-island behavior.'
    ]
  },
  {
    company: 'BMW Group',
    dates: 'oct 2024 — sep 2025',
    roleLine: 'working student · munich',
    bullets: [
      'Shipped features for the production FEM simulation pipeline while in active use.',
      'End-to-end automation assembling full chassis models — connections, meshing, part data.',
      'Surrogate model for structural parameters → frequency responses; >40% accuracy gain with multi-task GPs, ~80% cost reduction via latent representations.'
    ]
  },
  {
    company: 'Compact Dynamics',
    dates: 'mar 2024 — sep 2024',
    roleLine: 'bachelor thesis · starnberg',
    bullets: [
      'RNN-based thermal neural network for rotor-temperature estimation, 3–6 °C error.',
      'Real-time inference on an embedded control unit, with back-EMF corrections.'
    ]
  },
  {
    company: 'Institute of Fluid Mechanics (KIT)',
    dates: 'jul 2023 — dec 2023',
    roleLine: 'student assistant · karlsruhe',
    bullets: ['Reconstructed velocity/pressure fields from sparse PIV measurements using PINNs.']
  },
  {
    company: 'Formula Student (KA RaceIng)',
    dates: 'oct 2021 — sep 2023',
    roleLine: 'head of aerodynamics · karlsruhe',
    bullets: [
      'Led a 13-person team over a full aero development cycle, CFD to manufacturing.',
      '+14% downforce via RANS-based CFD (k-ω SST); meshing, y+ control, grid convergence.'
    ]
  }
];
