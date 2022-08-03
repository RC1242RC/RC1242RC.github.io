---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_8TeV_1LEPbb_20invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[jetComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb_1_1jetcomparison/)**  |
| struct | **[particleComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb_1_1particlecomparison/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_8TeV_1LEPbb_20invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/#function-analysis-atlas-8tev-1lepbb-20invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/#function-collect-results)**() |
| bool | **[isLeadingBJets](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/#function-isleadingbjets)**(vector< const HEPUtils::Jet * > jets, vector< const HEPUtils::Jet * > bjets) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_ATLAS_8TeV_1LEPbb_20invfb::particleComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb_1_1particlecomparison/) | **[compareParticlePt](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/#variable-compareparticlept)**  |
| struct [Gambit::ColliderBit::Analysis_ATLAS_8TeV_1LEPbb_20invfb::jetComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb_1_1jetcomparison/) | **[compareJetPt](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/#variable-comparejetpt)**  |

## Public Functions Documentation

### function Analysis_ATLAS_8TeV_1LEPbb_20invfb

```
inline Analysis_ATLAS_8TeV_1LEPbb_20invfb()
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


### function isLeadingBJets

```
inline bool isLeadingBJets(
    vector< const HEPUtils::Jet * > jets,
    vector< const HEPUtils::Jet * > bjets
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


### variable compareParticlePt

```
struct Gambit::ColliderBit::Analysis_ATLAS_8TeV_1LEPbb_20invfb::particleComparison compareParticlePt;
```


### variable compareJetPt

```
struct Gambit::ColliderBit::Analysis_ATLAS_8TeV_1LEPbb_20invfb::jetComparison compareJetPt;
```


-------------------------------

Updated on 2022-08-03 at 00:01:09 +0000