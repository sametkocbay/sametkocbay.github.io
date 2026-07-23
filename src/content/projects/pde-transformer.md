---
title: 'Review on PDE-Transformer'
year: '2025'
tagline: 'scientific-ml'
cardSlug: 'pde-transformer'
summary: 'Noise robustness of a PDE foundation model, judged by energy spectra & enstrophy.'
description: 'Review and experimental evaluation of a PDE foundation model: noise robustness judged by energy spectra & enstrophy on 2D Kolmogorov flow.'
tags: ['deep-learning', 'pdes', 'transformers', 'scientific-ml']
image: '/assets/energy-spectrum.png'
imageAlt: 'Energy spectrum analysis'
detailTitle: 'Review on PDE-Transformer'
metaLine: '[2025] scientific-ml · review + experiment'
dek: 'A review and experimental evaluation of the PDE-Transformer for scientific machine learning.'
detailTags: ['deep-learning', 'pdes', 'transformers', 'scientific-ml']
codeUrl: 'https://gitlab.lrz.de/SametKocbay/deeplearninginphysics_pdetransformer_experiment'
featuredOrder: 6
listOrder: 1
nextSlug: 'no-wall-bc-stellarators'
---

## What is the PDE-Transformer?

The **PDE-Transformer** (Holzschuh et al., 2025) is a transformer backbone designed as a _foundation model_ for physics simulations on regular 2D grids. It extends the Diffusion Transformer (DiT) with a U-shaped, multi-scale architecture and replaces global self-attention with **shifted-window attention**, cutting the prohibitive cost of high-resolution grids from

<div class="eq">O(N²)&nbsp;&nbsp;⟶&nbsp;&nbsp;O(N)</div>

A novel **Separate-Channel embedding** keeps per-token information capacity constant as the number of physical variables grows, while channel-wise axial attention lets those variables interact. The result outperforms baselines like FNO, scOT, and U-Net at a fraction of the training cost.

## The experiment

I ran an **independent experiment** probing robustness to the noisy, sparse measurements typical of real-world data: the pre-trained PDE-Transformer (MC-Small) on **2D Kolmogorov flow** — a chaotic system governed by the Navier–Stokes equations — with 5–50% Gaussian noise injected into the initial state, evaluated over 29-step autoregressive rollouts.

Because pixel-wise error is misleading in chaotic systems, I judged the model with **physics-informed diagnostics**: the energy spectrum in Fourier space and the enstrophy, a measure of turbulence intensity and dissipation:

<div class="eq">E(κ) = ½ |û(κ)|²&nbsp;&nbsp;&nbsp;&nbsp;ε(t) = ∫<sub>Ω</sub> |ω|² dΩ</div>

<figure>
  <div class="frame"><img src="/assets/energy-spectrum.png" alt="Energy spectrum analysis at 30% noise"></div>
  <figcaption>fig 1 — energy spectrum @ 30% noise: the noisy input carries unphysical energy at high wavenumbers; one model step restores the 2D energy-cascade slope of the ground truth.</figcaption>
</figure>

<figure>
  <div class="frame"><img src="/assets/enstrophy.png" alt="Enstrophy evolution over the rollout"></div>
  <figcaption>fig 2 — prediction error (left) and enstrophy evolution (right) across noise levels: bounded over the 29-step horizon even at 50% noise.</figcaption>
</figure>

## Results

- **Spectral filtering.** In a single inference step the model removes unphysical high-wavenumber noise and restores the characteristic slope of the 2D energy cascade.
- **Graceful error growth.** nRMSE scales with noise early (0.0385 at 50% vs 0.0115 clean at t = 1), but the gap nearly closes by t = 29 (0.1922 vs 0.1557) — a valid, shifted trajectory rather than divergence.
- **Bounded physical stability.** Enstrophy stays bounded across the training horizon even under 50% noise, reproducing the expected oscillatory decay of the vorticity field.
- **Open question.** Learned physical inductive bias, or spectral bias + MSE smoothing? The long-term enstrophy drift motivates physics-informed loss terms during fine-tuning.
