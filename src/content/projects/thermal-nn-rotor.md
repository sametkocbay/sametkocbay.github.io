---
title: 'Thermal NN for Rotor Temperature'
year: '2024'
tagline: 'deep-learning'
cardSlug: 'thermal-nn'
summary: 'Physics-structured RNN estimating rotor temperature in a WRC motor, deployed on the ECU.'
description: 'Bachelor thesis: physics-structured RNN estimating rotor temperature in a WRC motor, deployed in real time on the ECU.'
tags: ['deep-learning', 'rnn', 'embedded', 'motorsport']
image: '/assets/wrc-car.jpg'
imageAlt: 'WRC rally hybrid car'
detailTitle: 'Thermal Neural Network for Rotor Temperature'
metaLine: '[2024] deep-learning · bachelor thesis @ compact dynamics'
dek: 'A physics-structured RNN estimating rotor temperature in a WRC electric motor — deployed for real-time inference on the control unit.'
detailTags: ['rnn', 'pytorch', 'embedded', 'e-motors']
heroImage: '/assets/wrc-car.jpg'
heroAlt: 'WRC rally hybrid car'
heroCaption: "the WRC rally hybrid — the drive unit's rotor cannot be instrumented in operation."
featuredOrder: 4
listOrder: 4
prevSlug: 'gp-acoustics-surrogates'
nextSlug: 'pinn-piv-reconstruction'
---

## The problem

The rotor of an electric motor is the one component whose temperature you most want to know — magnets demagnetize, ratings derate — and the one you cannot measure: it spins. In a **WRC rally hybrid**, load transients are extreme and thermal margins thin, so the control unit needs a live rotor-temperature estimate it can trust.

## Architecture

I developed a **thermal neural network**: an RNN whose recurrence mirrors a lumped-parameter thermal network, so the hidden state is a vector of physically meaningful node temperatures rather than an opaque embedding. The **cold-start problem** — an unknown initial rotor temperature after standstill — was resolved by using **back-EMF** as a physics-based correction to the recurrent state.

<figure>
  <div class="frame white"><img src="/assets/tnn-schema.png" alt="Thermal neural network architecture schema"></div>
  <figcaption>fig 1 — thermal network structure: conductances and power losses parameterized by small MLPs, temperatures propagated as recurrent state.</figcaption>
</figure>

## Results

- **3–6 °C prediction error** across drive cycles — accurate enough for thermal protection logic.
- **Real-time on the ECU.** The model was deployed for embedded inference on the motor control unit, not just evaluated offline.
- **Physics beats capacity.** The structured recurrence generalizes from limited test-bench data where black-box RNNs overfit.
