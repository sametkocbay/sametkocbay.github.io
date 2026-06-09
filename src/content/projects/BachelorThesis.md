---
title: "Thermal Neural Network for Rotor Temperature"
description: "Bachelor thesis: developing and deploying a TNN to predict rotor temperature in the WRC car's electric motor."
date: 2024-09-01
featured: true
tags: ["Deep Learning", "RNN", "Electric Motors", "Motorsport", "Embedded"]
image: "/images/projects/bachelor_tnn.jpg"
links:
  #github: "https://github.com/..."
---

My Bachelor thesis at the **KIT Institute of Product Engineering (IPEK)**, carried out with **Compact Dynamics**: developing and implementing a **Thermal Neural Network (TNN)** to predict the rotor temperature of the permanent-magnet synchronous motor (PMSM) used in a **World Rally Championship (WRC)** car.

## Why rotor temperature matters

In a PMSM the rotor carries the permanent magnets, and a rising rotor temperature weakens the magnetic field — reducing the torque delivered at a given current. In motorsport, where fractions of a second decide a race, the motor must be pushed to its limit without risking failure. Yet the rotor spins inside a sealed housing where a temperature sensor is impractical, so the temperature has to be *estimated* from quantities that can be measured.

## What I built

The core is a **Thermal Neural Network**, a recurrent architecture that embeds the physics of heat conduction directly into its structure. Rather than predicting temperature as a black box, two sub-networks learn the **power losses** and the **thermal conductances** of an Euler-discretised lumped-parameter thermal network (LPTN), which are then assembled into the next-step rotor temperature.

- Inputs: current, torque, rotational speed, stator and coolant temperatures, plus the recurrently fed previous temperature estimate.
- Trained and optimised on data recorded at a **back-to-back test bench**, using truncated backpropagation through time (TBPTT) with tuned segment length and learning rate.
- The hybrid physics/ML structure keeps the model interpretable and data-efficient compared to a generic RNN.

## Stability and the back-EMF method

A detailed stability analysis showed the TNN is highly accurate but **sensitive to its initial value**. To address this, I developed an alternative method that derives the rotor temperature from the motor's **electromotive force (back-EMF)**, providing precise temperature approximations to initialise the network or re-synchronise it during operation.

## Deployment

Finally, the TNN was **implemented on the motor's control unit** as a Simulink block diagram and evaluated for fault-susceptibility and stability under real operating conditions — moving the model from an offline study to a deployable, real-time temperature estimator.

---

Although demonstrated on a WRC motor, the methods were developed to be **general** — applicable to rotor-temperature estimation in electric drivetrains across motorsport, automotive, and electric aviation.
