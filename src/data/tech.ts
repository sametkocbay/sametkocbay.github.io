export type TechGroup = {
  path: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    path: '/skills/programming',
    items: ['Python', 'C++', 'Fortran', 'MATLAB', 'Bash', 'OpenMP', 'MPI', 'Linux']
  },
  {
    path: '/skills/ml-sciml',
    items: ['PyTorch', 'GPyTorch', 'PINNs', 'Neural Operators', 'Gaussian Processes']
  },
  {
    path: '/skills/cae-cfd',
    items: ['STAR-CCM+', 'OpenFOAM', 'RANS / k-ω SST', 'Meshing', 'FEM', 'FVM', 'Composite Optimization']
  },
  {
    path: '/skills/domains',
    items: [
      'Scientific Computing',
      'Scientific ML',
      'Computational Physics',
      'Fluid Dynamics',
      'Fusion / Plasma',
      'Numerical Methods'
    ]
  }
];
