---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_inclusive_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/), Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2SSLEP_Stop_inclusive_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__inclusive__36invfb/#function-analysis-cms-13tev-2sslep-stop-inclusive-36invfb)**() |
| virtual void | **[collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__inclusive__36invfb/#function-collect-results)**() |

## Additional inherited members

**Public Classes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb_1_1ptcomparison/)**  |

**Public Functions inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2SSLEP_Stop_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-analysis-cms-13tev-2sslep-stop-36invfb)**() |
| void | **[run](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |

**Protected Functions inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| void | **[JetLeptonOverlapRemoval](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-jetleptonoverlapremoval)**(vector< const HEPUtils::Jet * > & jetvec, vector< const HEPUtils::Particle * > & lepvec, double DeltaRMax) |
| void | **[LeptonJetOverlapRemoval](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-leptonjetoverlapremoval)**(vector< const HEPUtils::Particle * > & lepvec, vector< const HEPUtils::Jet * > & jetvec) |
| void | **[analysis_specific_reset](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#function-analysis-specific-reset)**() |

**Public Attributes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb::ptComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#variable-comparept)**  |

**Protected Attributes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2SSLEP_Stop_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#variable--counters)**  |
| Cutflow | **[_cutflow](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2sslep__stop__36invfb/#variable--cutflow)**  |


## Public Functions Documentation

### function Analysis_CMS_13TeV_2SSLEP_Stop_inclusive_36invfb

```
inline Analysis_CMS_13TeV_2SSLEP_Stop_inclusive_36invfb()
```


### function collect_results

```
inline virtual void collect_results()
```


-------------------------------

Updated on 2022-08-01 at 12:13:23 +0000