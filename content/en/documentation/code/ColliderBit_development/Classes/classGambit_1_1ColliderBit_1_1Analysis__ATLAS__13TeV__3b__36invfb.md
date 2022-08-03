---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_3b_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

Inherited by [Gambit::ColliderBit::Analysis_ATLAS_13TeV_3b_discoverySR_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__discoverysr__36invfb/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[sortByPT](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#function-sortbypt)**(const HEPUtils::Jet * jet1, const HEPUtils::Jet * jet2) |
| | **[Analysis_ATLAS_13TeV_3b_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#function-analysis-atlas-13tev-3b-36invfb)**() |
| void | **[JetLeptonOverlapRemoval](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#function-jetleptonoverlapremoval)**(vector< const HEPUtils::Jet * > & jetvec, vector< const HEPUtils::Particle * > & lepvec, double DeltaRMax) |
| void | **[LeptonJetOverlapRemoval](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#function-leptonjetoverlapremoval)**(vector< const HEPUtils::Particle * > & lepvec, vector< const HEPUtils::Jet * > & jetvec) |
| double | **[mTrans](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#function-mtrans)**(HEPUtils::P4 pmiss, HEPUtils::P4 jet) |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#function-collect-results)**() |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#variable-detector)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__36invfb/#variable--counters)**  |

## Public Functions Documentation

### function sortByPT

```
static inline bool sortByPT(
    const HEPUtils::Jet * jet1,
    const HEPUtils::Jet * jet2
)
```


### function Analysis_ATLAS_13TeV_3b_36invfb

```
inline Analysis_ATLAS_13TeV_3b_36invfb()
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


### function mTrans

```
inline double mTrans(
    HEPUtils::P4 pmiss,
    HEPUtils::P4 jet
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
inline virtual void collect_results()
```


**Reimplemented by**: [Gambit::ColliderBit::Analysis_ATLAS_13TeV_3b_discoverySR_36invfb::collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__3b__discoverysr__36invfb/#function-collect-results)


### function analysis_specific_reset

```
inline void analysis_specific_reset()
```


## Public Attributes Documentation

### variable detector

```
static constexpr const char * detector = "ATLAS";
```


## Protected Attributes Documentation

### variable _counters

```
std::map< string, EventCounter > _counters = {
        
        {"SR-3b-meff1-A", EventCounter("SR-3b-meff1-A")},
        {"SR-3b-meff2-A", EventCounter("SR-3b-meff2-A")},
        {"SR-3b-meff3-A", EventCounter("SR-3b-meff3-A")},
        {"SR-4b-meff1-A", EventCounter("SR-4b-meff1-A")},
        {"SR-4b-meff1-B", EventCounter("SR-4b-meff1-B")},
        {"SR-4b-meff2-A", EventCounter("SR-4b-meff2-A")},
        {"SR-4b-meff2-B", EventCounter("SR-4b-meff2-B")},
        
        {"SR-4b-meff1-A-disc", EventCounter("SR-4b-meff1-A-disc")},
      };
```


-------------------------------

Updated on 2022-08-03 at 02:29:25 +0000