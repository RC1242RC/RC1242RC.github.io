---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_confnote_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb_1_1ptcomparison/)**  |
| struct | **[ptJetComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb_1_1ptjetcomparison/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2OSLEP_confnote_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#function-analysis-cms-13tev-2oslep-confnote-36invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#function-collect-results)**() |
| double | **[get_mjj](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#function-get-mjj)**(vector< const HEPUtils::Jet * > jets) |
| double | **[get_mT2](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#function-get-mt2)**(vector< const HEPUtils::Particle * > leptons, vector< const HEPUtils::Jet * > bjets, HEPUtils::P4 met) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_confnote_36invfb::ptComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#variable-comparept)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_confnote_36invfb::ptJetComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb_1_1ptjetcomparison/) | **[compareJetPt](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__confnote__36invfb/#variable-comparejetpt)**  |

## Public Functions Documentation

### function Analysis_CMS_13TeV_2OSLEP_confnote_36invfb

```
inline Analysis_CMS_13TeV_2OSLEP_confnote_36invfb()
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
struct Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_confnote_36invfb::ptComparison comparePt;
```


### variable compareJetPt

```
struct Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_confnote_36invfb::ptJetComparison compareJetPt;
```


-------------------------------

Updated on 2022-08-02 at 18:18:36 +0000