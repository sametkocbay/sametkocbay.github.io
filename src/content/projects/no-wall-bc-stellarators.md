---
title: 'Fusion Research'
year: '2025'
tagline: 'fusion / mhd'
cardSlug: 'fusion-research'
summary: "Master's thesis: JOREK ⇄ CARIDDI free-boundary coupling for stellarator MHD."
description: "Master's thesis at Max Planck IPP: free-boundary coupling between the MHD code JOREK and the EM solver CARIDDI."
tags: ['fusion', 'mhd', 'electromagnetics', 'fem']
image: '/assets/Reactor_wendelstein_greifswald.jpeg'
imageAlt: 'Wendelstein 7-X stellarator hall in Greifswald'
detailTitle: 'Free-Boundary MHD for Stellarators'
metaLine: "[2025–2026] fusion / mhd · master's thesis @ max planck institute for plasma physics"
dek: 'A no-wall boundary condition for the nonlinear MHD code JOREK, verified on tokamaks and extended to stellarator configurations.'
detailTags: ['mhd', 'plasma-physics', 'fortran', 'hpc']
heroImage: '/assets/Reactor_wendelstein_greifswald.jpeg'
heroAlt: 'Wendelstein 7-X stellarator hall in Greifswald'
heroCaption: "the Wendelstein 7-X stellarator in Greifswald — taken during our visit to IPP's second site."
featuredOrder: 1
listOrder: 2
nextSlug: 'ka-raceing-aero'
---

## Context

**JOREK** is a nonlinear extended-MHD code used to simulate large-scale plasma instabilities in fusion devices. How the plasma boundary is treated matters: with an ideally conducting wall close to the plasma, many external instabilities are artificially stabilized. A **no-wall boundary condition** — the wall pushed to infinity — is the opposite limit, and a prerequisite for studying how external modes behave in realistic geometries.

## What I built

I derived and implemented the no-wall extension of JOREK's free-boundary coupling: the vacuum region outside the plasma is treated as current-free, with continuity of the field across the plasma–vacuum interface,

<div class="eq">∇ × B = 0,&nbsp;&nbsp;∇ · B = 0&nbsp;&nbsp;in Ω<sub>vac</sub>&nbsp;&nbsp;·&nbsp;&nbsp;⟦B · n⟧ = 0&nbsp;&nbsp;on ∂Ω<sub>p</sub></div>

The implementation was first verified against **validated tokamak cases**, then extended to **stellarator configurations** using three-dimensional equilibria from **GVEC** — verifying the novel coupling in fully 3D geometry.

## Status

Ongoing through September 2026 as my master's thesis at **IPP Garching** — current work focuses on verification of the stellarator coupling against reference equilibria.

## Publication

This work is part of the JOREK team effort reviewed in:

<a class="pub-card" href="https://doi.org/10.1088/1741-4326/ae6790">
  <p class="pub-meta">[2026] Nuclear Fusion 66 116006 · doi:10.1088/1741-4326/ae6790</p>
  <p class="pub-title">Advances in 3D transient plasma dynamics and control through MHD and hybrid fluid-kinetic simulations with JOREK</p>
  <p class="pub-authors">Hoelzl, M., Schwarz, N., Huijsmans, G.T.A., … <strong>Kocbay, S.</strong>, … et al.</p>
</a>
