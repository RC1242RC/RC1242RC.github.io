---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb_nocovar'

description: "[No description available]"

---








[No description available]

Inherits from [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/), Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2LEPsoft_36invfb_nocovar](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb__nocovar/#function-analysis-cms-13tev-2lepsoft-36invfb-nocovar)**() |
| virtual void | **[collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb__nocovar/#function-collect-results)**() |

## Additional inherited members

**Public Classes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb_1_1ptcomparison/)**  |

**Public Functions inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_2LEPsoft_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-analysis-cms-13tev-2lepsoft-36invfb)**() |
| void | **[run](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |

**Protected Functions inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-analysis-specific-reset)**() |

**Public Attributes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb::ptComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-comparept)**  |

**Protected Attributes inherited from [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/)**

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable--counters)**  |
| vector< double > | **[cutFlowVector](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvector)**  |
| vector< string > | **[cutFlowVector_str](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvector-str)**  |
| size_t | **[NCUTS](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-ncuts)**  |
| vector< double > | **[cutFlowVectorCMS_150_130](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvectorcms-150-130)**  |
| vector< double > | **[cutFlowVectorCMS_150_143](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvectorcms-150-143)**  |
| vector< double > | **[cutFlowVectorCMS_350_330](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvectorcms-350-330)**  |
| vector< double > | **[cutFlowVectorCMS_350_340](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#variable-cutflowvectorcms-350-340)**  |


## Public Functions Documentation

### function Analysis_CMS_13TeV_2LEPsoft_36invfb_nocovar

```
inline Analysis_CMS_13TeV_2LEPsoft_36invfb_nocovar()
```


### function collect_results

```
inline virtual void collect_results()
```


**Reimplements**: [Gambit::ColliderBit::Analysis_CMS_13TeV_2LEPsoft_36invfb::collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__2lepsoft__36invfb/#function-collect-results)


-------------------------------

Updated on 2022-08-01 at 12:13:23 +0000