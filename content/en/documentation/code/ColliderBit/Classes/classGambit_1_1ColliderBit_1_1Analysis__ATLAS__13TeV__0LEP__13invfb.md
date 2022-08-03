---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_13invfb'
description: 'ATLAS Run 2 0-lepton jet+MET SUSY analysis, with 13/fb of data. '

---








ATLAS Run 2 0-lepton jet+MET SUSY analysis, with 13/fb of data.  [More...](#detailed-description)

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_0LEP_13invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#function-analysis-atlas-13tev-0lep-13invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#function-run)**(const Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#function-collect-results)**()<br>Register results objects with the results for each SR; obs & bkg numbers from the CONF note.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#variable-detector)**  |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#variable--counters)**  |
| Cutflows | **[_flows](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#variable--flows)**  |

## Detailed Description

```
class Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_13invfb;
```

ATLAS Run 2 0-lepton jet+MET SUSY analysis, with 13/fb of data. 

Based on: [https://cds.cern.ch/record/2206252](https://cds.cern.ch/record/2206252)[https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/CONFNOTES/ATLAS-CONF-2016-078/](https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/CONFNOTES/ATLAS-CONF-2016-078/)

Recursive jigsaw reconstruction signal regions are currently not included 

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_0LEP_13invfb

```
inline Analysis_ATLAS_13TeV_0LEP_13invfb()
```


### function run

```
inline void run(
    const Event * event
)
```


TodoDrop b-tag if pT < 50 GeV or |eta| > 2.5? 

TodoUnless b-tagged (and pT > 50 && abseta < 2.5) 

TodoActually only within 0.2&ndash;0.4... 

TodoActually only within 0.2&ndash;0.4... 

Within 0.2, discard the _jet_ based on jet track vs. muon criteria... can't be done here


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
        {"2j-0800", EventCounter("2j-0800")},
        {"2j-1200", EventCounter("2j-1200")},
        {"2j-1600", EventCounter("2j-1600")},
        {"2j-2000", EventCounter("2j-2000")},
        {"3j-1200", EventCounter("3j-1200")},
        {"4j-1000", EventCounter("4j-1000")},
        {"4j-1400", EventCounter("4j-1400")},
        {"4j-1800", EventCounter("4j-1800")},
        {"4j-2200", EventCounter("4j-2200")},
        {"4j-2600", EventCounter("4j-2600")},
        {"5j-1400", EventCounter("5j-1400")},
        {"6j-1800", EventCounter("6j-1800")},
        {"6j-2200", EventCounter("6j-2200")},
      };
```


### variable _flows

```
Cutflows _flows;
```


-------------------------------

Updated on 2022-08-03 at 12:58:17 +0000