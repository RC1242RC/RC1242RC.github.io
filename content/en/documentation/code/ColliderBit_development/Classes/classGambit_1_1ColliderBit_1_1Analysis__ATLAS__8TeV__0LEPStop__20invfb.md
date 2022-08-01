---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_8TeV_0LEPStop_20invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_8TeV_0LEPStop_20invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__0lepstop__20invfb/#function-analysis-atlas-8tev-0lepstop-20invfb)**() |
| void | **[run](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__0lepstop__20invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__0lepstop__20invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__0lepstop__20invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__0lepstop__20invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__0lepstop__20invfb/#variable-detector)**  |

## Public Functions Documentation

### function Analysis_ATLAS_8TeV_0LEPStop_20invfb

```
inline Analysis_ATLAS_8TeV_0LEPStop_20invfb()
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

Updated on 2022-08-01 at 12:13:23 +0000