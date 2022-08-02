---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_36invfb'
description: 'ATLAS Run 2 0-lepton jet+MET SUSY analysis, with 36/fb of data. '

---








ATLAS Run 2 0-lepton jet+MET SUSY analysis, with 36/fb of data.  [More...](#detailed-description)

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_0LEP_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#function-analysis-atlas-13tev-0lep-36invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#function-run)**(const Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#function-collect-results)**()<br>Register results objects with the results for each SR; obs & bkg numbers from the CONF note.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#variable-detector)**  |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#variable--counters)**  |
| Cutflows | **[_flows](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#variable--flows)**  |
| string | **[analysisRunName](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#variable-analysisrunname)**  |

## Detailed Description

```
class Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_36invfb;
```

ATLAS Run 2 0-lepton jet+MET SUSY analysis, with 36/fb of data. 

Recursive jigsaw reconstruction signal regions are currently not included Boosted signal regions not currently used.

Yang Zhang Feb 2020: For SR-3j-1300, SR-5j-1600, SR-5j-1700 and SR-6j-1200, the cuts of signal regions are different to those of cut-flows. We use the cuts described in Tab.2 of the paper [https://arxiv.org/pdf/1712.02332.pdf](https://arxiv.org/pdf/1712.02332.pdf) for the signal regions, and use the cuts described in [https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/PAPERS/SUSY-2016-07/tabaux_006.png](https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/PAPERS/SUSY-2016-07/tabaux_006.png) for cut-flows. 

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_0LEP_36invfb

```
inline Analysis_ATLAS_13TeV_0LEP_36invfb()
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
        {"2j-1200", EventCounter("2j-1200")},
        {"2j-1600", EventCounter("2j-1600")},
        {"2j-2000", EventCounter("2j-2000")},
        {"2j-2400", EventCounter("2j-2400")},
        {"2j-2800", EventCounter("2j-2800")},
        {"2j-3600", EventCounter("2j-3600")},
        {"2j-2100", EventCounter("2j-2100")},
        {"3j-1300", EventCounter("3j-1300")},
        {"4j-1000", EventCounter("4j-1000")},
        {"4j-1400", EventCounter("4j-1400")},
        {"4j-1800", EventCounter("4j-1800")},
        {"4j-2200", EventCounter("4j-2200")},
        {"4j-2600", EventCounter("4j-2600")},
        {"4j-3000", EventCounter("4j-3000")},
        {"5j-1700", EventCounter("5j-1700")},
        {"5j-1600", EventCounter("5j-1600")},
        {"5j-2000", EventCounter("5j-2000")},
        {"5j-2600", EventCounter("5j-2600")},
        {"6j-1200", EventCounter("6j-1200")},
        {"6j-1800", EventCounter("6j-1800")},
        {"6j-2200", EventCounter("6j-2200")},
        {"6j-2600", EventCounter("6j-2600")},
      };
```


### variable _flows

```
Cutflows _flows;
```


### variable analysisRunName

```
string analysisRunName;
```


-------------------------------

Updated on 2022-08-02 at 23:34:47 +0000