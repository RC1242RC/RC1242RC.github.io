---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_inclusive_139invfb'

description: "[No description available]"

---








[No description available]

Inherits from [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_139invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/), Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_2OSLEP_chargino_inclusive_139invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__inclusive__139invfb/#function-analysis-atlas-13tev-2oslep-chargino-inclusive-139invfb)**() |
| virtual void | **[collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__inclusive__139invfb/#function-collect-results)**() |

## Additional inherited members

**Public Classes inherited from [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_139invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/)**

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb_1_1ptcomparison/)**  |

**Public Functions inherited from [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_139invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/)**

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_2OSLEP_chargino_139invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#function-analysis-atlas-13tev-2oslep-chargino-139invfb)**() |
| void | **[JetLeptonOverlapRemoval](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#function-jetleptonoverlapremoval)**(vector< const HEPUtils::Jet * > & jetvec, vector< const HEPUtils::Particle * > & lepvec, double DeltaRMax) |
| void | **[LeptonJetOverlapRemoval](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#function-leptonjetoverlapremoval)**(vector< const HEPUtils::Particle * > & lepvec, vector< const HEPUtils::Jet * > & jetvec) |
| void | **[run](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |

**Protected Functions inherited from [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_139invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/)**

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#function-analysis-specific-reset)**() |

**Public Attributes inherited from [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_139invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/)**

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_139invfb::ptComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#variable-comparept)**  |

**Protected Attributes inherited from [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_139invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/)**

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#variable--counters)**  |
| std::map< string, EventCounter > | **[_counters_bin](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#variable--counters-bin)**  |
| Cutflow | **[_cutflow](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#variable--cutflow)**  |


## Public Functions Documentation

### function Analysis_ATLAS_13TeV_2OSLEP_chargino_inclusive_139invfb

```
inline Analysis_ATLAS_13TeV_2OSLEP_chargino_inclusive_139invfb()
```


### function collect_results

```
inline virtual void collect_results()
```


**Reimplements**: [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_139invfb::collect_results](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__139invfb/#function-collect-results)


-------------------------------

Updated on 2022-08-01 at 12:13:23 +0000