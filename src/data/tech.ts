export type TechGroup = {
  title: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: 'Programming',
    items: ['Python', 'C++', 'MATLAB', 'Bash', 'OpenMP', 'MPI', 'Linux']
  },
  {
    title: 'ML & SciML',
    items: ['PyTorch', 'GPyTorch', 'PINNs', 'Neural Operators', 'Gaussian Processes']
  },
  {
    title: 'CAE & CFD',
    items: ['STAR-CCM+', 'OpenFOAM', 'RANS / k-ω SST', 'Meshing', 'Turbulence Modeling', 'FEM', 'FVM', 'Composite Optimization']
  },
  {
    title: 'Scientific Domains',
    items: ['Scientific Computing', 'Scientific ML', 'Computational Physics', 'Fluid Dynamics', 'Fusion / Plasma', 'Numerical Methods']
  },
];
