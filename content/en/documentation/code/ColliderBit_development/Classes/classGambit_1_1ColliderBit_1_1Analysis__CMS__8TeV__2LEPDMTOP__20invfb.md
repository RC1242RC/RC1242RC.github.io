---
title: 'class Gambit::ColliderBit::Analysis_CMS_8TeV_2LEPDMTOP_20invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_8TeV_2LEPDMTOP_20invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#function-analysis-cms-8tev-2lepdmtop-20invfb)**() |
| double | **[SmallestdPhi](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#function-smallestdphi)**(std::vector< HEPUtils::Jet * > jets, double phi_met) |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| double | **[loglikelihood](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#function-loglikelihood)**() |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#variable-detector)**  |

## Public Functions Documentation

### function Analysis_CMS_8TeV_2LEPDMTOP_20invfb

```
inline Analysis_CMS_8TeV_2LEPDMTOP_20invfb()
```


### function SmallestdPhi

```
inline double SmallestdPhi(
    std::vector< HEPUtils::Jet * > jets,
    double phi_met
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

### function loglikelihood

```
inline double loglikelihood()
```


TodoImplement! 


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
static constexpr const char * detector = "CMS";
```


-------------------------------

Updated on 2022-08-03 at 00:01:09 +0000