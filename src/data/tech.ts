export type TechGroup = {
  title: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: 'Scientific Domains',
    items: ['Scientific Computing', 'Scientific Machine Learning', 'Physics', 'Fluid Dynamics', 'Fusion', 'Numerical Methods', 'Modelling']
  },
  {
    title: 'Programming',
    items: ['Python', 'C++', 'Jax', 'OpenMP', 'MPI', 'SYCL (GPU)']
  },
  {
    title: 'Tools / Systems',
    items: ['Git', 'Matlab', 'Slurm', 'Linux']
  },
];
