---
title: 'class Gambit::ColliderBit::Analysis_Covariance'
description: 'Dummy analysis code with a hard-coded return including a SR covariance matrix. '

---








Dummy analysis code with a hard-coded return including a SR covariance matrix. 

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_Covariance](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__covariance/#function-analysis-covariance)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__covariance/#function-run)**(const HEPUtils::Event * ) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__covariance/#function-combine)**(const Analysis * )<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__covariance/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__covariance/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__covariance/#variable-detector)**  |

## Public Functions Documentation

### function Analysis_Covariance

```
inline Analysis_Covariance()
```


### function run

```
inline void run(
    const HEPUtils::Event * 
)
```


### function combine

```
inline void combine(
    const Analysis * 
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

Updated on 2022-08-03 at 02:29:26 +0000