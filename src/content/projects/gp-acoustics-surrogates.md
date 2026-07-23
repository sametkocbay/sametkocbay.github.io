---
title: 'Gaussian Process in Acoustics'
year: '2024'
tagline: 'surrogate-modeling'
cardSlug: 'gp-acoustics'
summary: 'GP surrogate for acoustic simulations at BMW — outperformed prior internal models.'
description: 'GP surrogate for acoustic simulations at BMW — feature engineering and kernel design; outperformed prior internal models.'
tags: ['gaussian-processes', 'surrogate-modeling', 'machine-learning']
image: '/assets/gp-posterior.png'
imageAlt: 'Gaussian process posterior plot'
detailTitle: 'Gaussian Process Surrogates for Structural Acoustics'
metaLine: '[2024–2025] surrogate-modeling · working student @ bmw group'
dek: 'Replacing expensive acoustic simulations with multi-task GP surrogates that map structural parameters to full frequency responses.'
detailTags: ['gaussian-processes', 'gpytorch', 'nvh', 'surrogate-modeling']
heroImage: '/assets/gp-posterior.png'
heroAlt: 'Gaussian process posterior: mean, ±2σ band, samples, and observations'
heroCaption: 'gp regression in one picture — posterior mean, ±2σ uncertainty band, and function samples conditioned on observations.'
featuredOrder: 3
listOrder: 3
prevSlug: 'ka-raceing-aero'
nextSlug: 'thermal-nn-rotor'
---

## The problem

Acoustic and vibration behavior of vehicle structures is evaluated through simulations that are too expensive to run inside design-exploration loops. The task is naturally **operator-valued**: a vector of structural parameters maps not to a scalar, but to an entire **frequency response function**,

<div class="eq">θ ∈ ℝ<sup>d</sup>&nbsp;&nbsp;⟼&nbsp;&nbsp;H(f; θ),&nbsp;&nbsp;f ∈ [f<sub>min</sub>, f<sub>max</sub>]</div>

## Approach

I built surrogate models around **multi-task Gaussian Processes**: correlated outputs across the frequency axis share statistical strength instead of being fit independently. To keep training tractable, the high-dimensional response is first compressed via **latent representation learning**, and the GP operates in that low-dimensional space.

## Results

- **>40% better prediction accuracy** over the single-task baseline, from exploiting cross-frequency correlation.
- **80% lower computational cost** via the latent-space formulation — fast enough for interactive parameter studies.
- **Calibrated uncertainty** for free: GP posteriors tell engineers where the surrogate can be trusted and where new simulations are worth running.
