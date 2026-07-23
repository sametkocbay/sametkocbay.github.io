---
title: 'Barnes–Hut in C++: OpenMP/AVX-512 vs MPI'
date: '2026-05-02'
tag: 'hpc'
summary: 'Two parallelization strategies for the same N-body solver: task-based octree construction with vectorized force kernels vs Morton-curve domain decomposition.'
dek: 'Two parallelization strategies for the same N-body solver — what shared memory buys you, where it stops scaling, and what distribution actually costs.'
---

## The algorithm

Barnes–Hut reduces the O(N²) pairwise force sum to O(N log N) by clustering distant bodies: an octree partitions space, and any cell whose angular size falls below the opening criterion is treated as a single pseudo-particle at its center of mass,

<div class="eq">s / d &lt; θ&nbsp;&nbsp;⟹&nbsp;&nbsp;accept cell as pseudo-particle</div>

Every implementation decision downstream is about one thing: the tree traversal has terrible memory-access patterns, and the force kernel is where all the flops are.

## Shared memory: OpenMP + AVX-512

The shared-memory version builds the octree with **OpenMP tasks** — each subtree beyond a cutoff depth becomes a task, which load-balances irregular particle distributions for free. The force kernel gathers accepted interaction partners into a flat buffer and evaluates them with **AVX-512 intrinsics**: 8 doubles per lane, one rsqrt approximation plus a Newton iteration instead of a division and a square root.

Two details mattered more than the vectorization itself:

- **Interaction-list batching.** Traversing the tree per particle kills SIMD utilization; collecting the interaction list first and then sweeping it vectorized keeps the lanes full.
- **Morton-order sorting.** Sorting bodies along a space-filling curve before the sweep makes neighboring particles hit the same cache lines — worth more than any intrinsic.

## Distributed memory: MPI

The MPI version decomposes the domain along the same **Morton curve**: cut the sorted body array into P contiguous chunks and each rank owns a spatially compact region. Each rank builds its local tree, then exchanges only the **locally essential tree** — the coarse cells other ranks need to satisfy the opening criterion from outside.

The cost model flips: flops are cheap, the ghost-cell exchange is not. Overlapping the halo exchange with force evaluation on interior bodies (nonblocking <code>MPI_Isend/Irecv</code>, compute, then finish the boundary) recovered most of the communication time.

## What actually won

- On a single node, the OpenMP/AVX-512 version is the clear winner — no communication, and the vectorized kernel keeps the cores fed.
- MPI earns its complexity only past the node boundary; below it, domain decomposition is pure overhead.
- The same Morton ordering serves both worlds: cache locality in shared memory, compact domains in distributed memory. If you take one thing from this post: sort your bodies.
