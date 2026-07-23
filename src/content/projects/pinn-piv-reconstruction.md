---
title: 'Physics-Informed Neural Networks'
year: '2023'
tagline: 'fluid-dynamics'
cardSlug: 'pinns'
summary: 'Inverse Navier–Stokes: reconstructing velocity/pressure fields from sparse PIV data.'
description: 'Inverse Navier–Stokes at KIT: reconstructing velocity/pressure fields from sparse PIV measurements with PINNs.'
tags: ['pinns', 'fluid-dynamics', 'machine-learning', 'cfd']
image: '/assets/pIV.jpg'
imageAlt: 'PIV measurement: laser sheet illuminating seeded flow'
detailTitle: 'PINNs for Sparse Flow Reconstruction'
metaLine: '[2023] fluid-dynamics · student assistant @ kit institute of fluid mechanics'
dek: 'Reconstructing full velocity and pressure fields from sparse PIV measurements by letting the Navier–Stokes equations fill in the gaps.'
detailTags: ['pinns', 'navier-stokes', 'piv', 'inverse-problems']
heroImage: '/assets/pIV.jpg'
heroAlt: 'PIV measurement: laser sheet illuminating seeded flow'
heroCaption: 'the PIV setup — a laser sheet illuminates seeded flow through the test-section window.'
featuredOrder: 5
listOrder: 6
prevSlug: 'thermal-nn-rotor'
nextSlug: 'pde-transformer'
---

## The problem

**Particle image velocimetry** gives velocity only where the laser sheet and seeding cooperate — sparse, noisy, and with no pressure information at all. Densifying the measurement grid is expensive; pressure probes disturb the flow. The inverse problem: recover the full velocity _and_ pressure field from what little the experiment provides.

## Approach

A **physics-informed neural network** represents the flow field as a continuous function and is trained on a composite loss: agreement with the sparse PIV data, plus the residuals of the incompressible Navier–Stokes equations evaluated by automatic differentiation,

<div class="eq">L = L<sub>data</sub> + λ₁ ‖u·∇u + ∇p − ν∇²u‖² + λ₂ ‖∇·u‖²</div>

Pressure enters the loss only through the momentum residual — so the network learns a physically consistent pressure field **without a single pressure measurement**.

## Outcome

The reconstruction recovered coherent velocity and pressure fields from sparse inputs, **reducing the experimental measurement requirements** — fewer PIV planes for the same insight. It was also my first encounter with scientific ML as a serious tool rather than a curiosity, and set the direction for everything since.
