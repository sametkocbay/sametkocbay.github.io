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
    title: 'Modalities',
    items: ['Text', 'Vision', '4D Radar', '3D Vision', 'Lidar', 'IMU', 'Physics Signals', 'Graphs', 'Time Series']
  },
  {
    title: 'Tools / Systems',
    items: ['Git', 'Matlab', 'Slurm', 'Linux']
  },
];
