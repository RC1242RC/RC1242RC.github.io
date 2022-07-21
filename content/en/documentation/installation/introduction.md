---
title: "Getting Started"
description: "General introduction to GAMBIT and guide for new users."
date: 2022-07-01T22:31:46+01:00
lastmod: 2022-07-01T22:31:46+01:00
draft: false
images: []
menu:
  documentation:
    parent: "installation"
weight: 5
---

### Introduction to GAMBIT

Evidence for new physics Beyond the Standard Model (BSM) could appear in any observable in particle, astroparticle or nuclear physics. This means that if a BSM model is to be proven or disproven it is necessary to analyse the data from many different experimental sources simultaneously. Global fits attempt to tackle this problem, combining theoretical observable predictions with targeted searches of experimental data.

GAMBIT, the Global And Modular BSM Inference Tool, is one of a number of global fitting software frameworks. However, GAMBIT is designed to offer a number of advantages over existing solutions including theory flexibility, straightforward extension to new observables and external interfaces, code availability, statistical secularism and computational speed.

Gambit consists of a number of 
modules or `Bits`, along with various Core components and utilities. GAMBIT's `Bits` are:

| Name | Description |
| --- | --- |
| `ColliderBit` | Calculates particle collider observables and likelihoods. Includes detailed implementations of LEP, ATLAS and CMS searches for new particle production, and measurements of the Higgs boson. |
| `FlavorBit` | Calculates observables and likelihoods from flavor physics, in particular B, D, and K meson decays as observed by LHCb, including angular observables and correlations. |
| `DarkBit` | Calculates Dark Matter observables and likelihoods, from the relic abundance to direct and indirect searches. |
| `SpecBit` | Interfaces to one of a number of possible external spectrum generators in order to determine pole masses and running parameters, and provides them to the rest of GAMBIT in a standardised spectrum container format. |
| `DecayBit` | Calculates decay rates of all relevant particles in the BSM theory under investigation, and contains decay data for all Standard Model particles. |
| `ScannerBit` | The sampling module for Gambit. Implements various scanners which are programmed as plugins. |

{{< alert icon="ⓘ" context="info">}}
A detailed discussion of the motivation, philosophy, and design of GAMBIT can be found in [the original paper](https://arxiv.org/abs/1705.07908)
{{< /alert >}}

### How do I run GAMBIT?

**To run a limited version of GAMBIT quickly and easily, use the Docker image.** A pre-built version of GAMBIT is available as a Docker image which can be downloaded and run locally. For detailed instructions please see the [Docker Usage](/documentation/docker_usage/) page.

**To access and use all features of GAMBIT, build from source.** GAMBIT builds and runs under Linux and macOS. For detailed instructions please see the [Installation for Linux](/documentation/installation_for_linux/) or [Installation for macOS](/documentation/installation_for_macos) pages. Although Windows is not directly supported, it is possible to run 