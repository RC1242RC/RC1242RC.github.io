---
title: 'class Gambit::ColliderBit::Analysis_CMS_8TeV_MultiLEP_20invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

Inherited by [Gambit::ColliderBit::Analysis_CMS_8TeV_MultiLEP_3Lep_20invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__3lep__20invfb/), [Gambit::ColliderBit::Analysis_CMS_8TeV_MultiLEP_4Lep_20invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__4lep__20invfb/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_8TeV_MultiLEP_20invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__20invfb/#function-analysis-cms-8tev-multilep-20invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__20invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__20invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__20invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__20invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__20invfb/#variable-detector)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, double > | **[_numSR](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__20invfb/#variable--numsr)**  |

## Public Functions Documentation

### function Analysis_CMS_8TeV_MultiLEP_20invfb

```
inline Analysis_CMS_8TeV_MultiLEP_20invfb()
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


**Reimplemented by**: [Gambit::ColliderBit::Analysis_CMS_8TeV_MultiLEP_3Lep_20invfb::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__3lep__20invfb/#function-collect-results), [Gambit::ColliderBit::Analysis_CMS_8TeV_MultiLEP_4Lep_20invfb::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__multilep__4lep__20invfb/#function-collect-results)


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


## Protected Attributes Documentation

### variable _numSR

```
std::map< string, double > _numSR;
```


-------------------------------

Updated on 2022-08-03 at 12:58:17 +0000