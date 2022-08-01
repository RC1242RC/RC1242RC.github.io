---
title: 'class Gambit::ColliderBit::Analysis_Minimum'
description: 'Basic analysis code for copying. '

---








Basic analysis code for copying. 

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_Minimum](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__minimum/#function-analysis-minimum)**() |
| void | **[run](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__minimum/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__minimum/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__minimum/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__minimum/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__minimum/#variable-detector)**  |

## Public Functions Documentation

### function Analysis_Minimum

```
inline Analysis_Minimum()
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
static constexpr const char * detector = "ATLAS";
```


-------------------------------

Updated on 2022-08-01 at 12:13:23 +0000