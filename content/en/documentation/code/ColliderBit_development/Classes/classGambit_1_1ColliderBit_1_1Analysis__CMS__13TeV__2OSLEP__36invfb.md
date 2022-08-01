---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

Inherited by [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb_nocovar](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb__nocovar/)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb_1_1ptcomparison/)**  |
| struct | **[ptJetComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb_1_1ptjetcomparison/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2OSLEP_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-analysis-cms-13tev-2oslep-36invfb)**() |
| void | **[run](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-collect-results)**() |
| double | **[get_mjj](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-get-mjj)**(vector< const HEPUtils::Jet * > jets) |
| double | **[get_mT2](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-get-mt2)**(vector< const HEPUtils::Particle * > leptons, vector< const HEPUtils::Jet * > bjets, HEPUtils::P4 met) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb::ptComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#variable-comparept)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb::ptJetComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb_1_1ptjetcomparison/) | **[compareJetPt](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#variable-comparejetpt)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#variable--counters)**  |

## Public Functions Documentation

### function Analysis_CMS_13TeV_2OSLEP_36invfb

```
inline Analysis_CMS_13TeV_2OSLEP_36invfb()
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


**Reimplemented by**: [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb_nocovar::collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb__nocovar/#function-collect-results)


### function get_mjj

```
inline double get_mjj(
    vector< const HEPUtils::Jet * > jets
)
```


### function get_mT2

```
inline double get_mT2(
    vector< const HEPUtils::Particle * > leptons,
    vector< const HEPUtils::Jet * > bjets,
    HEPUtils::P4 met
)
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


### variable comparePt

```
struct Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb::ptComparison comparePt;
```


### variable compareJetPt

```
struct Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb::ptJetComparison compareJetPt;
```


## Protected Attributes Documentation

### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"SR1", EventCounter("SR1")},
        {"SR2", EventCounter("SR2")},
        {"SR3", EventCounter("SR3")},
        {"SR4", EventCounter("SR4")},
        {"SR5", EventCounter("SR5")},
        {"SR6", EventCounter("SR6")},
        {"SR7", EventCounter("SR7")},
      };
```


-------------------------------

Updated on 2022-08-01 at 12:13:23 +0000