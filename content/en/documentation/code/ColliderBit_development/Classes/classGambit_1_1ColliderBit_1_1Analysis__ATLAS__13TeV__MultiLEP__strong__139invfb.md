---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_strong_139invfb'
description: 'ATLAS Run 2 search for same-sign leptons and jets, with 139/fb of data. '

---








ATLAS Run 2 search for same-sign leptons and jets, with 139/fb of data.  [More...](#detailed-description)

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_MultiLEP_strong_139invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__strong__139invfb/#function-analysis-atlas-13tev-multilep-strong-139invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__strong__139invfb/#function-run)**(const Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__strong__139invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__strong__139invfb/#function-collect-results)**()<br>Register results objects with the results for each SR; obs & bkg numbers from the paper.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__strong__139invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__strong__139invfb/#variable-detector)**  |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__strong__139invfb/#variable--counters)**  |

## Detailed Description

```
class Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_strong_139invfb;
```

ATLAS Run 2 search for same-sign leptons and jets, with 139/fb of data. 

Based on:

* [https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/PAPERS/SUSY-2018-09/](https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/PAPERS/SUSY-2018-09/)
* [https://arxiv.org/pdf/1909.08457](https://arxiv.org/pdf/1909.08457)
* [https://www.hepdata.net/record/ins1754675](https://www.hepdata.net/record/ins1754675)
* C++ code example and SLHA benchmark files available on HEPData (link above)
Cross-sections for cutflows taken from [https://twiki.cern.ch/twiki/bin/view/LHCPhysics/SUSYCrossSections#Cross_sections_for_various_subpr](https://twiki.cern.ch/twiki/bin/view/LHCPhysics/SUSYCrossSections#Cross_sections_for_various_subpr)

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_MultiLEP_strong_139invfb

```
inline Analysis_ATLAS_13TeV_MultiLEP_strong_139invfb()
```


### function run

```
inline void run(
    const Event * event
)
```


TodoCompute from hard objects instead? 

TodoUse applyElectronIsolationEfficiency2019 or something similar? 

TodoDrop b-tag if |eta| > 2.5? 


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

Register results objects with the results for each SR; obs & bkg numbers from the paper. 

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


### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"Rpv2L", EventCounter("Rpv2L")},
        {"Rpc2L0b", EventCounter("Rpc2L0b")},
        {"Rpc2L1b", EventCounter("Rpc2L1b")},
        {"Rpc2L2b", EventCounter("Rpc2L2b")},
        {"Rpc3LSS1b", EventCounter("Rpc3LSS1b")},
      };
```


-------------------------------

Updated on 2022-08-03 at 03:17:01 +0000