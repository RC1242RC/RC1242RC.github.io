---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_MultiLEP_Full_3Lep_rebinned_36invfb'

description: "[No description available]"

---








[No description available]

Inherits from [Gambit::ColliderBit::Analysis_CMS_13TeV_MultiLEP_Full_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/), Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_MultiLEP_Full_3Lep_rebinned_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__3lep__rebinned__36invfb/#function-analysis-cms-13tev-multilep-full-3lep-rebinned-36invfb)**() |
| virtual void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__3lep__rebinned__36invfb/#function-collect-results)**() |

## Additional inherited members

**Public Classes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_MultiLEP_Full_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb_1_1ptcomparison/)**  |

**Public Functions inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_MultiLEP_Full_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_MultiLEP_Full_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#function-analysis-cms-13tev-multilep-full-36invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| vector< double > | **[get_mll_mT](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#function-get-mll-mt)**(vector< vector< const HEPUtils::Particle * > > pair_cont, vector< const HEPUtils::Particle * > leptons, HEPUtils::P4 met, int type) |
| double | **[get_mTmin](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#function-get-mtmin)**(vector< const HEPUtils::Particle * > leptons, HEPUtils::P4 met) |

**Protected Functions inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_MultiLEP_Full_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#function-analysis-specific-reset)**() |

**Public Attributes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_MultiLEP_Full_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_MultiLEP_Full_36invfb::ptComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#variable-comparept)**  |

**Protected Attributes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_MultiLEP_Full_36invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#variable--counters)**  |


## Public Functions Documentation

### function Analysis_CMS_13TeV_MultiLEP_Full_3Lep_rebinned_36invfb

```
inline Analysis_CMS_13TeV_MultiLEP_Full_3Lep_rebinned_36invfb()
```


### function collect_results

```
inline virtual void collect_results()
```


**Reimplements**: [Gambit::ColliderBit::Analysis_CMS_13TeV_MultiLEP_Full_36invfb::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__multilep__full__36invfb/#function-collect-results)


-------------------------------

Updated on 2022-08-03 at 12:58:17 +0000