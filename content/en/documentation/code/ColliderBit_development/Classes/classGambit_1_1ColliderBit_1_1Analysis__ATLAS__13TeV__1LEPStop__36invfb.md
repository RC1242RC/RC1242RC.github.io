---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_1LEPStop_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ClusteringHistory](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb_1_1clusteringhistory/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_1LEPStop_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-analysis-atlas-13tev-1lepstop-36invfb)**() |
| [ClusteringHistory](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb_1_1clusteringhistory/) & | **[GetHistory](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-gethistory)**(const FJNS::PseudoJet & jet) |
| double | **[optimalRadius](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-optimalradius)**(const double pT, const double m) |
| double | **[minRadius](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-minradius)**(const double pT, const double m) |
| double | **[maxRadius](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-maxradius)**(const double pT, const double m) |
| std::pair< bool, FJNS::PseudoJet > | **[RecursiveRecluster](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-recursiverecluster)**(const FJNS::PseudoJet & candidate, double candRadius, const double mass, size_t step) |
| HEPUtils::P4 | **[reclusteredParticle](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-reclusteredparticle)**(vector< const HEPUtils::Jet * > jets, vector< const HEPUtils::Jet * > bjets, const double mass, const bool useBJets) |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-collect-results)**() |
| std::vector< FJNS::PseudoJet > | **[SortedByNConstit](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-sortedbynconstit)**(std::vector< FJNS::PseudoJet > jets) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__1lepstop__36invfb/#variable-detector)**  |

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_1LEPStop_36invfb

```
inline Analysis_ATLAS_13TeV_1LEPStop_36invfb()
```


### function GetHistory

```
inline ClusteringHistory & GetHistory(
    const FJNS::PseudoJet & jet
)
```


### function optimalRadius

```
inline double optimalRadius(
    const double pT,
    const double m
)
```


### function minRadius

```
inline double minRadius(
    const double pT,
    const double m
)
```


### function maxRadius

```
inline double maxRadius(
    const double pT,
    const double m
)
```


### function RecursiveRecluster

```
inline std::pair< bool, FJNS::PseudoJet > RecursiveRecluster(
    const FJNS::PseudoJet & candidate,
    double candRadius,
    const double mass,
    size_t step
)
```


### function reclusteredParticle

```
inline HEPUtils::P4 reclusteredParticle(
    vector< const HEPUtils::Jet * > jets,
    vector< const HEPUtils::Jet * > bjets,
    const double mass,
    const bool useBJets
)
```


### function run

```
inline void run(
    const HEPUtils::Event * event
)
```


We assume that b jets have previously been 100% tagged


### function combine

```
inline void combine(
    const Analysis * other
)
```

Combine the variables of another copy of this analysis (typically on another thread) into this one. 

### function collect_results

```
inline void collect_results()
```


Register results objects with the results for each SR; obs & bkg numbers from the paper


### function SortedByNConstit

```
static inline std::vector< FJNS::PseudoJet > SortedByNConstit(
    std::vector< FJNS::PseudoJet > jets
)
```


## Protected Functions Documentation

### function analysis_specific_reset

```
inline void analysis_specific_reset()
```


## Public Attributes Documentation

### variable detector

```
static constexpr const char * detector = "ATLAS";
```


-------------------------------

Updated on 2022-08-03 at 03:17:01 +0000