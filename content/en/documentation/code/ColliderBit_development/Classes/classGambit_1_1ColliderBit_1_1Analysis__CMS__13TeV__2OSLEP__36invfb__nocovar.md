---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb_nocovar'

description: "[No description available]"

---








[No description available]

Inherits from [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/), Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2OSLEP_36invfb_nocovar](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb__nocovar/#function-analysis-cms-13tev-2oslep-36invfb-nocovar)**() |
| virtual void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb__nocovar/#function-collect-results)**() |

## Additional inherited members

**Public Classes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb_1_1ptcomparison/)**  |
| struct | **[ptJetComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb_1_1ptjetcomparison/)**  |

**Public Functions inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2OSLEP_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-analysis-cms-13tev-2oslep-36invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| double | **[get_mjj](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-get-mjj)**(vector< const HEPUtils::Jet * > jets) |
| double | **[get_mT2](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-get-mt2)**(vector< const HEPUtils::Particle * > leptons, vector< const HEPUtils::Jet * > bjets, HEPUtils::P4 met) |

**Protected Functions inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-analysis-specific-reset)**() |

**Public Attributes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb::ptComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#variable-comparept)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb::ptJetComparison](/documentation/code/colliderbit_development/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb_1_1ptjetcomparison/) | **[compareJetPt](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#variable-comparejetpt)**  |

**Protected Attributes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#variable--counters)**  |


## Public Functions Documentation

### function Analysis_CMS_13TeV_2OSLEP_36invfb_nocovar

```
inline Analysis_CMS_13TeV_2OSLEP_36invfb_nocovar()
```


### function collect_results

```
inline virtual void collect_results()
```


**Reimplements**: [Gambit::ColliderBit::Analysis_CMS_13TeV_2OSLEP_36invfb::collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2oslep__36invfb/#function-collect-results)


-------------------------------

Updated on 2022-08-02 at 23:34:47 +0000