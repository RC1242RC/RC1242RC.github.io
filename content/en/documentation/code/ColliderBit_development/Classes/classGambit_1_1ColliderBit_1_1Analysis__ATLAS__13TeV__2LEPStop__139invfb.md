---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_2LEPStop_139invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

Inherited by [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2LEPStop_exclusive_139invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__exclusive__139invfb/), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2LEPStop_inclusive_139invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__inclusive__139invfb/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_2LEPStop_139invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__139invfb/#function-analysis-atlas-13tev-2lepstop-139invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__139invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__139invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__139invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__139invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__139invfb/#variable--counters)**  |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__139invfb/#variable-detector)**  |

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_2LEPStop_139invfb

```
inline Analysis_ATLAS_13TeV_2LEPStop_139invfb()
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


**Reimplemented by**: [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2LEPStop_inclusive_139invfb::collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__inclusive__139invfb/#function-collect-results), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2LEPStop_exclusive_139invfb::collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2lepstop__exclusive__139invfb/#function-collect-results)


## Protected Functions Documentation

### function analysis_specific_reset

```
inline void analysis_specific_reset()
```


## Public Attributes Documentation

### variable _counters

```
std::map< string, EventCounter > _counters = {
            {"SR2bSF110", EventCounter("SR2bSF110")},
            {"SR2bSF120", EventCounter("SR2bSF120")},
            {"SR2bSF140", EventCounter("SR2bSF140")},
            {"SR2bSF160", EventCounter("SR2bSF160")},
            {"SR2bSF180", EventCounter("SR2bSF180")},
            {"SR2bSF220", EventCounter("SR2bSF220")},
            
            {"SR2bDF110", EventCounter("SR2bDF110")},
            {"SR2bDF120", EventCounter("SR2bDF120")},
            {"SR2bDF140", EventCounter("SR2bDF140")},
            {"SR2bDF160", EventCounter("SR2bDF160")},
            {"SR2bDF180", EventCounter("SR2bDF180")},
            {"SR2bDF220", EventCounter("SR2bDF220")},
            
            {"SR2bInc110", EventCounter("SR2bInc110")},
            {"SR2bInc120", EventCounter("SR2bInc120")},
            {"SR2bInc140", EventCounter("SR2bInc140")},
            {"SR2bInc160", EventCounter("SR2bInc160")},
            {"SR2bInc180", EventCounter("SR2bInc180")},
            {"SR2bInc200", EventCounter("SR2bInc200")},
            {"SR2bInc220", EventCounter("SR2bInc220")},
        };
```


### variable detector

```
static constexpr const char * detector = "ATLAS";
```


-------------------------------

Updated on 2022-08-03 at 00:01:09 +0000