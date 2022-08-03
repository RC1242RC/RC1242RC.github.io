---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEPStop_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_0LEPStop_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lepstop__36invfb/#function-analysis-atlas-13tev-0lepstop-36invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lepstop__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lepstop__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lepstop__36invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lepstop__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lepstop__36invfb/#variable-detector)**  |

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_0LEPStop_36invfb

```
inline Analysis_ATLAS_13TeV_0LEPStop_36invfb()
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

Updated on 2022-08-03 at 12:58:17 +0000