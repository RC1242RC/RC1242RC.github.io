---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_139invfb'
description: 'ATLAS Run 2 0-lepton jet+MET SUSY analysis, with 139/fb of data. '

---








ATLAS Run 2 0-lepton jet+MET SUSY analysis, with 139/fb of data.  [More...](#detailed-description)

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_0LEP_139invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#function-analysis-atlas-13tev-0lep-139invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#function-run)**(const Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#function-collect-results)**()<br>Register results objects with the results for each SR; obs & bkg numbers from the CONF note.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#variable-detector)**  |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#variable--counters)**  |
| Cutflows | **[_cutflows](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#variable--cutflows)**  |

## Detailed Description

```
class Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_139invfb;
```

ATLAS Run 2 0-lepton jet+MET SUSY analysis, with 139/fb of data. 

Based on: [https://cds.cern.ch/record/2686254](https://cds.cern.ch/record/2686254)[https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/CONFNOTES/ATLAS-CONF-2019-040/](https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/CONFNOTES/ATLAS-CONF-2019-040/)

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_0LEP_139invfb

```
inline Analysis_ATLAS_13TeV_0LEP_139invfb()
```


### function run

```
inline void run(
    const Event * event
)
```


TodoCompute from hard objects instead? 

TodoDrop b-tag if pT < 50 GeV or |eta| > 2.5? 

TodoApply a random 9% loss / 0.91 reweight for jet quality criteria? 

TodoAnd tight ID for high purity... used where? 

Within 0.2, discard the _jet_ based on jet track vs. muon criteria... can't be done yet

TodoAnd tight ID for high purity... used where? 

TodoUse weighting instead 


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

Register results objects with the results for each SR; obs & bkg numbers from the CONF note. 

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
        {"2j-1600", EventCounter("2j-1600")},
        {"2j-2200", EventCounter("2j-2200")},
        {"2j-2800", EventCounter("2j-2800")},
        {"4j-1000", EventCounter("4j-1000")},
        {"4j-2200", EventCounter("4j-2200")},
        {"4j-3400", EventCounter("4j-3400")},
        {"5j-1600", EventCounter("5j-1600")},
        {"6j-1000", EventCounter("6j-1000")},
        {"6j-2200", EventCounter("6j-2200")},
        {"6j-3400", EventCounter("6j-3400")},
      };
```


### variable _cutflows

```
Cutflows _cutflows;
```


-------------------------------

Updated on 2022-08-03 at 03:17:01 +0000