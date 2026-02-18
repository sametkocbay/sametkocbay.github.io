---
title: "ROS 2 on Apple Silicon using Lima"
date: 2025-06-10
featured: true
description: "Lightweight Ubuntu 22.04 VM for ROS 2 Humble on Apple Silicon, with GUI, Docker socket reuse, and amd64 support via Rosetta."
tags: ["ROS2", "Apple Silicon", "Lima", "Docker"]
image: "/images/projects/ros.svg"
links:
  github: "https://github.com/oscarbreiner/ros2-lima-apple-silicon.git"
---


Built a lightweight and practical ROS 2 Humble development environment on Apple Silicon using Lima, supporting GUI tools and cross-architecture Docker workflows without running a heavy VM stack.

## Highlights

- Ubuntu 22.04 Lima VM setup optimized for M1/M2/M3/M4.
- GUI access via RDP, compatible with rviz, PlotJuggler, and rqt.
- VS Code integration via Remote SSH for seamless dev workflows.
- Docker socket reuse (no Docker engine inside the VM).
- AMD64 container support via Rosetta emulation.