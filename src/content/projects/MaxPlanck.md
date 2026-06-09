---
title: "No-Wall Boundary Condition for Stellarators"
description: "Master's thesis: deriving a free-boundary coupling between the non-linear MHD code JOREK and the electromagnetic solver CARIDDI."
date: 2025-10-01
featured: true
tags: ["Fusion Physics", "MHD", "JOREK", "Electromagnetics", "Finite Elements"]
image: "/images/projects/MaxPlanck.jpg"
links:
  #github: "https://github.com/..."
---

My Master's thesis at the **Max Planck Institute for Plasma Physics**, supervised by Prof. Dr. Sibylle Günter and Dr. Matthias Hölzl. The work develops a **no-wall boundary condition** for non-linear magnetohydrodynamic (MHD) simulations of stellarators in the code **JOREK**, by coupling it to the electromagnetic solver **CARIDDI**.

Stellarators confine a fusion plasma with fully three-dimensional external coils and carry essentially no driven plasma current, which makes them inherently steady-state and resistant to disruptions. Modelling their stability faithfully, however, requires letting the magnetic field evolve freely at the plasma boundary instead of trapping it behind an artificial perfectly conducting wall.

## Why a no-wall boundary?

A nearby perfectly conducting wall freezes the magnetic flux passing through it and can stabilise MHD modes that would otherwise grow, raising the achievable plasma pressure — the *with-wall limit*. Real walls are resistive, so on the slow resistive-wall timescale that stabilisation is lost, and the relevant stability boundary becomes the **no-wall limit**: the pressure (β) threshold beyond which the plasma is unstable *even with no conducting structure present*. It is the conservative, physically honest limit for reactor design, and capturing it in simulation means the boundary condition must represent a plasma sitting in vacuum — not one held in place by a fictitious conducting shell. The existing JOREK stellarator model assumed exactly such a perfectly conducting wall; this thesis removes that restriction by expressing the boundary constraint directly in terms of the magnetic field `B`.

## Deriving the boundary coupling

In JOREK the toroidal current density and the poloidal-flux function `Ψ` are linked by an elliptic operator, and the stellarator field is represented through `Ψ` and the toroidal coordinate `χ`:

```
j̃ = Δ*Ψ            B = ∇Ψ × ∇χ + ∇χ
```

**Step 1 — isolate the boundary term.** Multiplying the current equation by a test function `v` (scaled by `B_v² = ∇χ · ∇χ` for consistency with JOREK's existing weak form), integrating over the plasma volume `V`, then applying the product rule and the divergence theorem moves one derivative off `Ψ` and produces a boundary surface integral:

```
∫_V B_v² j̃ v dV  =  − ∫_V B_v² (∇⊥Ψ · ∇v) dV  +  ∮_∂V v B_v² (∇⊥Ψ · n) dS
```

The surface term carries the entire boundary information, written through the perpendicular gradient `∇⊥Ψ`.

**Step 2 — express the constraint in terms of `B`.** Crossing the field representation with `∇χ` and using the vector triple product gives a clean identity that turns the abstract `∇⊥Ψ` into a measurable field projection:

```
∇⊥Ψ  =  − B_v⁻² (B × ∇χ)
```

so the boundary condition is now stated directly through `(B × ∇χ) · n` — exactly the quantity an external electromagnetic solver can supply.

**Step 3 — couple to the exterior via virtual casing.** The **Virtual Casing Principle** replaces the plasma with an equivalent surface current `k_eq` on the boundary that reproduces, in the exterior region, precisely the field of the internal plasma sources. Its vector potential follows from the Biot–Savart law:

```
A_in(x)  =  (μ₀ / 4π) ∮_∂V  k_eq(x') / |x − x'|  dS'
```

Imposed in weak form on CARIDDI's 3D edge-element basis and combined with the stellarator ansatz `A = Ψ ∇χ`, this assembles into a geometric projection matrix `H_χ` and a self-inductance matrix `L_eq`, from which the shielding currents are recovered explicitly:

```
I_eq  =  L_eq⁻¹ (H_χ Ψ)
```

**Step 4 — assemble one response matrix.** CARIDDI projects the field of those currents back onto JOREK's required boundary direction (`B_eq,χ`). In the **no-wall limit** there are no external wall currents (`I_w = 0`), so the whole chain collapses into a single dense **plasma boundary response matrix**:

```
C_χ  =  B_eq,χ · L_eq⁻¹ · H_χ        ⇒        C_χ Ψ  =  (B × ∇χ) · n
```

This maps JOREK's unknown flux `Ψ` directly to its own self-consistent contribution to the boundary magnetic field, closing the free-boundary problem.

---

**Status:** Ongoing research since October 2025.
