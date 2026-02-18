export type TechGroup = {
  title: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: 'AI / Research',
    items: ['AI in Vision & Physics', '3D Reconstruction', 'Robotics', 'Machine Learning', 'SLAM & Odometry', 'Surogote Models', 'LLM & LMM', 'Multimodal Learning', 'Model Merging', 'Foundation Models', 'MLOps']
  },
  {
    title: 'Programming',
    items: ['Python', 'Java', 'C++', 'Assembly', 'Swift', 'SQL']
  },
  {
    title: 'Tools / Systems',
    items: ['Git', 'Docker', 'ROS 2', 'Matlab', 'Hydra', 'Slurm', 'Wandb', 'AWS', 'Linux', 'Microcontrollers']
  },
  {
    title: 'Modalities',
    items: ['Text', 'Vision', '4D Radar', '3D Vision', 'Lidar', 'IMU', 'Physics Signals', 'Graphs', 'Time Series']
  }
];
