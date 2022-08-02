---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_2bMET_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[sortByPT](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-sortbypt)**(const HEPUtils::Jet * jet1, const HEPUtils::Jet * jet2) |
| | **[Analysis_ATLAS_13TeV_2bMET_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-analysis-atlas-13tev-2bmet-36invfb)**() |
| void | **[JetLeptonOverlapRemoval](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-jetleptonoverlapremoval)**(vector< const HEPUtils::Jet * > & jetvec, vector< const HEPUtils::Particle * > & lepvec, double DeltaRMax) |
| void | **[LeptonJetOverlapRemoval](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-leptonjetoverlapremoval)**(vector< const HEPUtils::Particle * > & lepvec, vector< const HEPUtils::Jet * > & jetvec) |
| void | **[SpecialLeptonJetOverlapRemoval](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-specialleptonjetoverlapremoval)**(vector< const HEPUtils::Particle * > & lepvec, vector< const HEPUtils::Jet * > & jetvec) |
| [MT2](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1mt2/) | **[MT2helper](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-mt2helper)**(vector< const HEPUtils::Jet * > jets, vector< const HEPUtils::Particle * > electrons, vector< const HEPUtils::Particle * > muons, HEPUtils::P4 metVec) |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-collect-results)**() |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2bmet__36invfb/#variable-detector)**  |

## Public Functions Documentation

### function sortByPT

```
static inline bool sortByPT(
    const HEPUtils::Jet * jet1,
    const HEPUtils::Jet * jet2
)
```


### function Analysis_ATLAS_13TeV_2bMET_36invfb

```
inline Analysis_ATLAS_13TeV_2bMET_36invfb()
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
    vector< const HEPUtils::Jet * > & jetvec
)
```


### function SpecialLeptonJetOverlapRemoval

```
inline void SpecialLeptonJetOverlapRemoval(
    vector< const HEPUtils::Particle * > & lepvec,
    vector< const HEPUtils::Jet * > & jetvec
)
```


### function MT2helper

```
inline MT2 MT2helper(
    vector< const HEPUtils::Jet * > jets,
    vector< const HEPUtils::Particle * > electrons,
    vector< const HEPUtils::Particle * > muons,
    HEPUtils::P4 metVec
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

Updated on 2022-08-02 at 23:34:47 +0000