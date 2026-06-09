---
title: "Review on PDE-Transformer"
description: "A review and experimental evaluation of the PDE-Transformer for scientific machine learning."
date: 2025-10-01
featured: true
tags: ["Deep Learning", "PDEs", "Transformers", "Scientific ML"]
image: "/images/projects/PDE_Transformer.jpg"
links:
  github: "https://gitlab.lrz.de/SametKocbay/deeplearninginphysics_pdetransformer_experiment"
---

## What is the PDE-Transformer?

The **PDE-Transformer** (Holzschuh et al., 2025) is a transformer backbone designed as a *foundation model* for physics simulations on regular 2D grids. It extends the Diffusion Transformer (DiT) with a U-shaped, multi-scale architecture and replaces global self-attention with **shifted-window attention**, cutting the prohibitive *O(N²)* cost of high-resolution grids down to *O(N)*. A novel **Separate-Channel embedding** keeps the per-token information capacity constant as the number of physical variables grows, while channel-wise axial attention lets those variables interact. The result is a single model that scales efficiently and generalizes across diverse PDEs, supporting both deterministic surrogate modeling and probabilistic generation via flow matching — and outperforming baselines like FNO, scOT, and U-Net at a fraction of the training cost.

## The experiment

As part of my review I ran an **independent experiment** probing how robust the model is to the noisy, sparse measurements typical of real-world data. Using the pre-trained PDE-Transformer (MC-Small) on **2D Kolmogorov Flow** — a chaotic system governed by the Navier–Stokes equations — I injected Gaussian noise of 5–50% into the initial state and evaluated 29-step autoregressive rollouts. Because pixel-wise error is misleading in chaotic systems (trajectories naturally diverge), I judged the model with **physics-informed diagnostics**: the energy spectrum *E(κ)* in Fourier space and the enstrophy *ε(t)*, a measure of turbulence intensity and dissipation. The central question was whether the model behaves as a *physical filter* that restores the characteristic 2D energy cascade and preserves stable dynamics under perturbation.

![Energy spectrum analysis at 30% noise](/images/projects/pde_energy_spectrum.png)
*Energy spectrum at 30% noise: the noisy input (red) carries unphysical energy at high wavenumbers, while the model's one-step prediction (cyan) restores the 2D energy-cascade slope of the ground-truth physics (white).*

![Enstrophy evolution over the rollout for varying noise levels](/images/projects/pde_enstrophy.png)
*Prediction error (left) and enstrophy evolution (right) across noise levels. Enstrophy stays bounded over the 29-step horizon even at 50% noise, tracking the ground-truth oscillatory decay.*

## Results

- **Spectral filtering.** In a single inference step the model removes unphysical high-wavenumber noise and restores the characteristic slope of the 2D energy cascade, closely matching the ground-truth physics.
- **Graceful error growth.** nRMSE scales with noise early on (0.0385 at 50% vs 0.0115 clean at *t = 1*), but the gap nearly closes by *t = 29* (0.1922 vs 0.1557) — the model settles into a valid, shifted trajectory rather than diverging.
- **Bounded physical stability.** Enstrophy remains bounded across the 29-step training horizon even under 50% noise, reproducing the expected oscillatory decay of the vorticity field; divergence only appears on extended rollouts beyond the training horizon.
- **Open question & next steps.** This filtering may reflect a learned physical inductive bias, or simply the spectral bias of neural networks combined with MSE smoothing. The long-term enstrophy drift motivates adding physics-informed loss terms (e.g. explicit enstrophy conservation) during fine-tuning.
