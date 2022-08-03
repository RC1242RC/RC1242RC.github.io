---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_Photon_GMSB_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_Photon_GMSB_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__photon__gmsb__36invfb/#function-analysis-cms-13tev-photon-gmsb-36invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__photon__gmsb__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__photon__gmsb__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__photon__gmsb__36invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__photon__gmsb__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__photon__gmsb__36invfb/#variable-detector)**  |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__photon__gmsb__36invfb/#variable--counters)**  |
| Cutflow | **[_cutflow](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__photon__gmsb__36invfb/#variable--cutflow)**  |

## Public Functions Documentation

### function Analysis_CMS_13TeV_Photon_GMSB_36invfb

```
inline Analysis_CMS_13TeV_Photon_GMSB_36invfb()
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


### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"SR-600-800", EventCounter("SR-600-800")},
        {"SR-800-1000", EventCounter("SR-800-1000")},
        {"SR-1000-1300", EventCounter("SR-1000-1300")},
        {"SR-1300", EventCounter("SR-1300")},
      };
```


### variable _cutflow

```
Cutflow _cutflow;
```


-------------------------------

Updated on 2022-08-03 at 05:45:15 +0000