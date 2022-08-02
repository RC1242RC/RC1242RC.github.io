---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

Inherited by [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_exclusive_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__exclusive__36invfb/), [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_inclusive_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__inclusive__36invfb/)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb_1_1ptcomparison/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2SSLEP_Stop_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-analysis-cms-13tev-2sslep-stop-36invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[JetLeptonOverlapRemoval](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-jetleptonoverlapremoval)**(vector< const HEPUtils::Jet * > & jetvec, vector< const HEPUtils::Particle * > & lepvec, double DeltaRMax) |
| void | **[LeptonJetOverlapRemoval](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-leptonjetoverlapremoval)**(vector< const HEPUtils::Particle * > & lepvec, vector< const HEPUtils::Jet * > & jetvec) |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb::ptComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#variable-comparept)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#variable--counters)**  |
| Cutflow | **[_cutflow](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#variable--cutflow)**  |

## Public Functions Documentation

### function Analysis_CMS_13TeV_2SSLEP_Stop_36invfb

```
inline Analysis_CMS_13TeV_2SSLEP_Stop_36invfb()
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


### function analysis_specific_reset

```
inline void analysis_specific_reset()
```


## Public Attributes Documentation

### variable detector

```
static constexpr const char * detector = "CMS";
```


### variable comparePt

```
struct Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb::ptComparison comparePt;
```


## Protected Attributes Documentation

### variable _counters

```
std::map< string, EventCounter > _counters;
```


### variable _cutflow

```
Cutflow _cutflow;
```


-------------------------------

Updated on 2022-08-02 at 23:34:47 +0000