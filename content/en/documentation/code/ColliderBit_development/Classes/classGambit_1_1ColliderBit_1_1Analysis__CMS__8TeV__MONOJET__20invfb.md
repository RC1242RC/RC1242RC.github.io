---
title: 'class Gambit::ColliderBit::Analysis_CMS_8TeV_MONOJET_20invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_8TeV_MONOJET_20invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__monojet__20invfb/#function-analysis-cms-8tev-monojet-20invfb)**() |
| double | **[SmallestdPhi](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__monojet__20invfb/#function-smallestdphi)**(std::vector< HEPUtils::Jet * > jets, double phi_met) |
| void | **[run](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__monojet__20invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__monojet__20invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__monojet__20invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__monojet__20invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__monojet__20invfb/#variable-detector)**  |

## Public Functions Documentation

### function Analysis_CMS_8TeV_MONOJET_20invfb

```
inline Analysis_CMS_8TeV_MONOJET_20invfb()
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

Updated on 2022-08-01 at 12:13:23 +0000