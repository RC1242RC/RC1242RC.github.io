---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

Inherited by [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb_nocovar](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb__nocovar/), [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_stop_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__stop__36invfb/), [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_stop_36invfb_nocovar](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__stop__36invfb__nocovar/)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb_1_1ptcomparison/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2LEPsoft_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-analysis-cms-13tev-2lepsoft-36invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb::ptComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-comparept)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable--counters)**  |
| vector< double > | **[cutFlowVector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvector)**  |
| vector< string > | **[cutFlowVector_str](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvector-str)**  |
| size_t | **[NCUTS](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-ncuts)**  |
| vector< double > | **[cutFlowVectorCMS_150_130](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvectorcms-150-130)**  |
| vector< double > | **[cutFlowVectorCMS_150_143](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvectorcms-150-143)**  |
| vector< double > | **[cutFlowVectorCMS_350_330](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvectorcms-350-330)**  |
| vector< double > | **[cutFlowVectorCMS_350_340](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvectorcms-350-340)**  |

## Public Functions Documentation

### function Analysis_CMS_13TeV_2LEPsoft_36invfb

```
inline Analysis_CMS_13TeV_2LEPsoft_36invfb()
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


**Reimplemented by**: [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_stop_36invfb::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__stop__36invfb/#function-collect-results), [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb_nocovar::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb__nocovar/#function-collect-results), [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_stop_36invfb_nocovar::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__stop__36invfb__nocovar/#function-collect-results)


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


### variable comparePt

```
struct Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb::ptComparison comparePt;
```


## Protected Attributes Documentation

### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"SREW1", EventCounter("SREW1")},
        {"SREW2", EventCounter("SREW2")},
        {"SREW3", EventCounter("SREW3")},
        {"SREW4", EventCounter("SREW4")},
        {"SREW5", EventCounter("SREW5")},
        {"SREW6", EventCounter("SREW6")},
        {"SREW7", EventCounter("SREW7")},
        {"SREW8", EventCounter("SREW8")},
        {"SREW9", EventCounter("SREW9")},
        {"SREW10", EventCounter("SREW10")},
        {"SREW11", EventCounter("SREW11")},
        {"SREW12", EventCounter("SREW12")},
        {"SRST1", EventCounter("SRST1")},
        {"SRST2", EventCounter("SRST2")},
        {"SRST3", EventCounter("SRST3")},
        {"SRST4", EventCounter("SRST4")},
        {"SRST5", EventCounter("SRST5")},
        {"SRST6", EventCounter("SRST6")},
        {"SRST7", EventCounter("SRST7")},
        {"SRST8", EventCounter("SRST8")},
        {"SRST9", EventCounter("SRST9")},
      };
```


### variable cutFlowVector

```
vector< double > cutFlowVector;
```


### variable cutFlowVector_str

```
vector< string > cutFlowVector_str;
```


### variable NCUTS

```
size_t NCUTS;
```


### variable cutFlowVectorCMS_150_130

```
vector< double > cutFlowVectorCMS_150_130;
```


### variable cutFlowVectorCMS_150_143

```
vector< double > cutFlowVectorCMS_150_143;
```


### variable cutFlowVectorCMS_350_330

```
vector< double > cutFlowVectorCMS_350_330;
```


### variable cutFlowVectorCMS_350_340

```
vector< double > cutFlowVectorCMS_350_340;
```


-------------------------------

Updated on 2022-08-03 at 12:58:17 +0000