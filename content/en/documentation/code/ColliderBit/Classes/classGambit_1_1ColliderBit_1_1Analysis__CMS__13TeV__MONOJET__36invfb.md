---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_MONOJET_36invfb'
description: 'CMS Run 2 monojet analysis (no W/Z region) with 36/fb of data. '

---








CMS Run 2 monojet analysis (no W/Z region) with 36/fb of data.  [More...](#detailed-description)

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_MONOJET_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#function-analysis-cms-13tev-monojet-36invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#function-run)**(const Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#function-collect-results)**()<br>Register results objects with the results for each SR; obs & bkg numbers from the CONF note.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#variable-detector)**  |
| const size_t | **[NUMSR](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#variable-numsr)**  |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#variable--counters)**  |
| Cutflow | **[_cutflow](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#variable--cutflow)**  |

## Detailed Description

```
class Gambit::ColliderBit::Analysis_CMS_13TeV_MONOJET_36invfb;
```

CMS Run 2 monojet analysis (no W/Z region) with 36/fb of data. 

**Todo**: Add W/Z region with AKT8 jets and 2/1 n-subjettiness ratio cut 
## Public Functions Documentation

### function Analysis_CMS_13TeV_MONOJET_36invfb

```
inline Analysis_CMS_13TeV_MONOJET_36invfb()
```


### function run

```
inline void run(
    const Event * event
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

Register results objects with the results for each SR; obs & bkg numbers from the CONF note. 

## Protected Functions Documentation

### function analysis_specific_reset

```
inline void analysis_specific_reset()
```


TodoNeed to also clear/reset cutflow, but it currently has no method for that 


## Public Attributes Documentation

### variable detector

```
static constexpr const char * detector = "CMS";
```


### variable NUMSR

```
static const size_t NUMSR = 22;
```


### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"SR-0", EventCounter("SR-0")},
        {"SR-1", EventCounter("SR-1")},
        {"SR-2", EventCounter("SR-2")},
        {"SR-3", EventCounter("SR-3")},
        {"SR-4", EventCounter("SR-4")},
        {"SR-5", EventCounter("SR-5")},
        {"SR-6", EventCounter("SR-6")},
        {"SR-7", EventCounter("SR-7")},
        {"SR-8", EventCounter("SR-8")},
        {"SR-9", EventCounter("SR-9")},
        {"SR-10", EventCounter("SR-10")},
        {"SR-11", EventCounter("SR-11")},
        {"SR-12", EventCounter("SR-12")},
        {"SR-13", EventCounter("SR-13")},
        {"SR-14", EventCounter("SR-14")},
        {"SR-15", EventCounter("SR-15")},
        {"SR-16", EventCounter("SR-16")},
        {"SR-17", EventCounter("SR-17")},
        {"SR-18", EventCounter("SR-18")},
        {"SR-19", EventCounter("SR-19")},
        {"SR-20", EventCounter("SR-20")},
        {"SR-21", EventCounter("SR-21")},
      };
```


### variable _cutflow

```
Cutflow _cutflow;
```


-------------------------------

Updated on 2022-08-03 at 05:45:14 +0000