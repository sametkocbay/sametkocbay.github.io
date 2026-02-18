---
title: "GNN Uncertainty Estimation"
description: "Researched uncertainty quantification for graph neural networks under distribution shift."
date: 2024-08-01
featured: true
tags: ["Graph Neural Networks", "Uncertainty", "Deep Learning"]
image: "/images/projects/gnn.png"
links:
  github: "https://github.com/oscarbreiner/Uncertainty-Quantification-on-GNN-using-Stochastic-Centering.git"
---

Research project at the DAML (Data Analytics and Machine Learning) Lab of Prof. Stephan Günnemann, investigating scalable uncertainty estimation for GNNs with a focus on robustness under realistic distribution shifts and comparisons against standard baselines.

## Highlights

- Replicated and evaluated G-ΔUQ (stochastic centering) on node classification tasks.
- Benchmarked against dropout and explicit ensemble baselines under test-time shifts.
- Studied feature perturbation and leave-out-class distribution shift scenarios.
- Found competitive uncertainty quality close to ensembles while using a single model.
