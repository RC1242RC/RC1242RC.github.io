---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_4LEP_139invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_4LEP_139invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__4lep__139invfb/#function-analysis-atlas-13tev-4lep-139invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__4lep__139invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__4lep__139invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__4lep__139invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__4lep__139invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__4lep__139invfb/#variable-detector)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__4lep__139invfb/#variable--counters)**  |

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_4LEP_139invfb

```
inline Analysis_ATLAS_13TeV_4LEP_139invfb()
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
static constexpr const char * detector = "ATLAS";
```


## Protected Attributes Documentation

### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"SR0-ZZ-loose-bveto", EventCounter("SR0-ZZ-loose-bveto")},
        {"SR0-ZZ-tight-bveto", EventCounter("SR0-ZZ-tight-bveto")},
        {"SR0-ZZ-loose", EventCounter("SR0-ZZ-loose")},
        {"SR0-ZZ-tight", EventCounter("SR0-ZZ-tight")},
        {"SR0-loose-bveto", EventCounter("SR0-loose-bveto")},
        {"SR0-tight-bveto", EventCounter("SR0-tight-bveto")},
        {"SR0-breq", EventCounter("SR0-breq")},
        {"SR5L", EventCounter("SR5L")}
      };
```


-------------------------------

Updated on 2022-08-03 at 12:58:17 +0000