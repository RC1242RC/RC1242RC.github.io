---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_confnote_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb_1_1ptcomparison/)**  |
| struct | **[ptJetComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb_1_1ptjetcomparison/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_MultiLEP_confnote_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb/#function-analysis-atlas-13tev-multilep-confnote-36invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb/#function-collect-results)**() |
| vector< HEPUtils::P4 > | **[get_W_ISR](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb/#function-get-w-isr)**(vector< const HEPUtils::Jet * > jets, HEPUtils::P4 Z, HEPUtils::P4 met) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_confnote_36invfb::ptComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb/#variable-comparept)**  |
| struct [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_confnote_36invfb::ptJetComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb_1_1ptjetcomparison/) | **[compareJetPt](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__confnote__36invfb/#variable-comparejetpt)**  |

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_MultiLEP_confnote_36invfb

```
inline Analysis_ATLAS_13TeV_MultiLEP_confnote_36invfb()
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


### function get_W_ISR

```
inline vector< HEPUtils::P4 > get_W_ISR(
    vector< const HEPUtils::Jet * > jets,
    HEPUtils::P4 Z,
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
static constexpr const char * detector = "ATLAS";
```


### variable comparePt

```
struct Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_confnote_36invfb::ptComparison comparePt;
```


### variable compareJetPt

```
struct Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_confnote_36invfb::ptJetComparison compareJetPt;
```


-------------------------------

Updated on 2022-08-03 at 03:17:01 +0000