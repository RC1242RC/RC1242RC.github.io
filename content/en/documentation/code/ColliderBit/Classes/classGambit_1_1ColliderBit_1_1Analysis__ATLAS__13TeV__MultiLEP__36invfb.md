---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

Inherited by [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_2Lep0Jets_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__2lep0jets__36invfb/), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_2LepPlusJets_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__2lepplusjets__36invfb/), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_3Lep_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__3lep__36invfb/)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb_1_1ptcomparison/)**  |
| struct | **[ptJetComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb_1_1ptjetcomparison/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_MultiLEP_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#function-analysis-atlas-13tev-multilep-36invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#function-collect-results)**() |
| vector< HEPUtils::P4 > | **[get_W_ISR](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#function-get-w-isr)**(vector< const HEPUtils::Jet * > jets, HEPUtils::P4 Z, HEPUtils::P4 met) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_36invfb::ptComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#variable-comparept)**  |
| struct [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_36invfb::ptJetComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb_1_1ptjetcomparison/) | **[compareJetPt](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#variable-comparejetpt)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__36invfb/#variable--counters)**  |

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_MultiLEP_36invfb

```
inline Analysis_ATLAS_13TeV_MultiLEP_36invfb()
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


**Reimplemented by**: [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_2Lep0Jets_36invfb::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__2lep0jets__36invfb/#function-collect-results), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_2LepPlusJets_36invfb::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__2lepplusjets__36invfb/#function-collect-results), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_3Lep_36invfb::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__3lep__36invfb/#function-collect-results)


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
struct Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_36invfb::ptComparison comparePt;
```


### variable compareJetPt

```
struct Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_36invfb::ptJetComparison compareJetPt;
```


## Protected Attributes Documentation

### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"SR2_SF_loose", EventCounter("SR2_SF_loose")},
        {"SR2_SF_tight", EventCounter("SR2_SF_tight")},
        {"SR2_DF_100", EventCounter("SR2_DF_100")},
        {"SR2_DF_150", EventCounter("SR2_DF_150")},
        {"SR2_DF_200", EventCounter("SR2_DF_200")},
        {"SR2_DF_300", EventCounter("SR2_DF_300")},
        {"SR2_int", EventCounter("SR2_int")},
        {"SR2_high", EventCounter("SR2_high")},
        {"SR2_low", EventCounter("SR2_low")},
        {"SR3_slep_a", EventCounter("SR3_slep_a")},
        {"SR3_slep_b", EventCounter("SR3_slep_b")},
        {"SR3_slep_c", EventCounter("SR3_slep_c")},
        {"SR3_slep_d", EventCounter("SR3_slep_d")},
        {"SR3_slep_e", EventCounter("SR3_slep_e")},
        {"SR3_WZ_0Ja", EventCounter("SR3_WZ_0Ja")},
        {"SR3_WZ_0Jb", EventCounter("SR3_WZ_0Jb")},
        {"SR3_WZ_0Jc", EventCounter("SR3_WZ_0Jc")},
        {"SR3_WZ_1Ja", EventCounter("SR3_WZ_1Ja")},
        {"SR3_WZ_1Jb", EventCounter("SR3_WZ_1Jb")},
        {"SR3_WZ_1Jc", EventCounter("SR3_WZ_1Jc")},
      };
```


-------------------------------

Updated on 2022-08-03 at 05:45:14 +0000