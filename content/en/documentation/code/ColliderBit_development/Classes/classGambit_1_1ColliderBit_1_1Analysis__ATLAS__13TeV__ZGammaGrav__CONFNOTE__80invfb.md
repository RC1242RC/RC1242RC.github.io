---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_ZGammaGrav_CONFNOTE_80invfb'
description: 'ATLAS ZH(->photon+gravitino) (79.8 fb^-1) '

---








ATLAS ZH(->photon+gravitino) (79.8 fb^-1)  [More...](#detailed-description)

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_ZGammaGrav_CONFNOTE_80invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__zgammagrav__confnote__80invfb/#function-analysis-atlas-13tev-zgammagrav-confnote-80invfb)**() |
| void | **[run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__zgammagrav__confnote__80invfb/#function-run)**(const Event * event) |
| void | **[combine](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__zgammagrav__confnote__80invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__zgammagrav__confnote__80invfb/#function-collect-results)**() |
| void | **[analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__zgammagrav__confnote__80invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__zgammagrav__confnote__80invfb/#variable-detector)**  |

## Detailed Description

```
class Gambit::ColliderBit::Analysis_ATLAS_13TeV_ZGammaGrav_CONFNOTE_80invfb;
```

ATLAS ZH(->photon+gravitino) (79.8 fb^-1) 

**Author**: Andy Buckley

**Note**: Conservative underestimate of yield in benchmark point cutflow 5.2 vs 8.7 passing all cuts: underestimation of MET and satisfaction of angular/balance cuts. Adding MET smearing doesn't appear to have helped. 

Based on:

* [https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/CONFNOTES/ATLAS-CONF-2018-019/](https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/CONFNOTES/ATLAS-CONF-2018-019/)
* [https://cds.cern.ch/record/2621481/files/ATLAS-CONF-2018-019.pdf](https://cds.cern.ch/record/2621481/files/ATLAS-CONF-2018-019.pdf)

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_ZGammaGrav_CONFNOTE_80invfb

```
inline Analysis_ATLAS_13TeV_ZGammaGrav_CONFNOTE_80invfb()
```


### function run

```
inline void run(
    const Event * event
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
inline void collect_results()
```


### function analysis_specific_reset

```
inline void analysis_specific_reset()
```


## Public Attributes Documentation

### variable detector

```
static constexpr const char * detector = "ATLAS";
```


-------------------------------

Updated on 2022-08-02 at 23:34:47 +0000