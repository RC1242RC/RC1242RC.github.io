---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_RJ3L_lowmass_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

Inherited by [Gambit::ColliderBit::Analysis_ATLAS_13TeV_RJ3L_2Lep2Jets_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__2lep2jets__36invfb/), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_RJ3L_3Lep_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__3lep__36invfb/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_RJ3L_lowmass_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__lowmass__36invfb/#function-analysis-atlas-13tev-rj3l-lowmass-36invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__lowmass__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__lowmass__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__lowmass__36invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__lowmass__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__lowmass__36invfb/#variable-detector)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__lowmass__36invfb/#variable--counters)**  |

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_RJ3L_lowmass_36invfb

```
inline Analysis_ATLAS_13TeV_RJ3L_lowmass_36invfb()
```


### function run

```
inline void run(
    const HEPUtils::Event * event
)
```


We assume that b jets have previously been 100% tagged


Variables for the compressed/Intermediate tree

Defined in the PP-frame

Defined in the P-frame


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


**Reimplemented by**: [Gambit::ColliderBit::Analysis_ATLAS_13TeV_RJ3L_2Lep2Jets_36invfb::collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__2lep2jets__36invfb/#function-collect-results), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_RJ3L_3Lep_36invfb::collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__rj3l__3lep__36invfb/#function-collect-results)


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


## Protected Attributes Documentation

### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"2L2JHIGH", EventCounter("2L2JHIGH")},
        {"2L2JINT", EventCounter("2L2JINT")},
        {"2L2JLOW", EventCounter("2L2JLOW")},
        {"2L2JCOMP", EventCounter("2L2JCOMP")},
        {"3LHIGH", EventCounter("3LHIGH")},
        {"3LINT", EventCounter("3LINT")},
        {"3LLOW", EventCounter("3LLOW")},
        {"3LCOMP", EventCounter("3LCOMP")},
      };
```


-------------------------------

Updated on 2022-08-03 at 00:01:09 +0000