---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_8TeV_3LEPEW_20invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_8TeV_3LEPEW_20invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#function-analysis-atlas-8tev-3lepew-20invfb)**() |
| void | **[EleEleOverlapRemoval](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#function-eleeleoverlapremoval)**(vector< const HEPUtils::Particle * > & vec1, vector< const HEPUtils::Particle * > & vec2, double DeltaRMax) |
| void | **[LepLepOverlapRemoval](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#function-leplepoverlapremoval)**(vector< const HEPUtils::Particle * > & vec1, vector< const HEPUtils::Particle * > & vec2, double DeltaRMax) |
| void | **[JetLeptonOverlapRemoval](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#function-jetleptonoverlapremoval)**(vector< const HEPUtils::Jet * > & jetvec, vector< const HEPUtils::Particle * > & lepvec, double DeltaRMax) |
| void | **[LeptonJetOverlapRemoval](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#function-leptonjetoverlapremoval)**(vector< const HEPUtils::Particle * > & lepvec, vector< const HEPUtils::Jet * > & jetvec, double DeltaRMax) |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/#variable-detector)**  |

## Public Functions Documentation

### function Analysis_ATLAS_8TeV_3LEPEW_20invfb

```
inline Analysis_ATLAS_8TeV_3LEPEW_20invfb()
```


### function EleEleOverlapRemoval

```
inline void EleEleOverlapRemoval(
    vector< const HEPUtils::Particle * > & vec1,
    vector< const HEPUtils::Particle * > & vec2,
    double DeltaRMax
)
```


### function LepLepOverlapRemoval

```
inline void LepLepOverlapRemoval(
    vector< const HEPUtils::Particle * > & vec1,
    vector< const HEPUtils::Particle * > & vec2,
    double DeltaRMax
)
```


### function JetLeptonOverlapRemoval

```
inline void JetLeptonOverlapRemoval(
    vector< const HEPUtils::Jet * > & jetvec,
    vector< const HEPUtils::Particle * > & lepvec,
    double DeltaRMax
)
```


### function LeptonJetOverlapRemoval

```
inline void LeptonJetOverlapRemoval(
    vector< const HEPUtils::Particle * > & lepvec,
    vector< const HEPUtils::Jet * > & jetvec,
    double DeltaRMax
)
```


### function run

```
inline void run(
    const HEPUtils::Event * event
)
```


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

Updated on 2022-08-03 at 05:45:14 +0000