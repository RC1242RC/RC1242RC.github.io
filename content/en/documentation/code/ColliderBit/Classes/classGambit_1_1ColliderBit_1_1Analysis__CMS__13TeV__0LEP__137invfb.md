---
title: 'class Gambit::ColliderBit::Analysis_CMS_13TeV_0LEP_137invfb'
description: 'CMS Run 2 0-lepton jet+MET SUSY analysis, with 137/fb of data. '

---








CMS Run 2 0-lepton jet+MET SUSY analysis, with 137/fb of data.  [More...](#detailed-description)

Inherits from Analysis

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_CMS_13TeV_0LEP_137invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#function-analysis-cms-13tev-0lep-137invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#function-run)**(const Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#function-collect-results)**()<br>Register results objects with the results for each SR; obs & bkg numbers from the CONF note.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#variable-detector)**  |
| const size_t | **[NUMSR](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#variable-numsr)**  |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#variable--counters)**  |
| Cutflow | **[_cutflow](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#variable--cutflow)**  |

## Detailed Description

```
class Gambit::ColliderBit::Analysis_CMS_13TeV_0LEP_137invfb;
```

CMS Run 2 0-lepton jet+MET SUSY analysis, with 137/fb of data. 

Based on: [http://cms-results.web.cern.ch/cms-results/public-results/publications/SUS-19-006/index.html](http://cms-results.web.cern.ch/cms-results/public-results/publications/SUS-19-006/index.html)

## Public Functions Documentation

### function Analysis_CMS_13TeV_0LEP_137invfb

```
inline Analysis_CMS_13TeV_0LEP_137invfb()
```


### function run

```
inline void run(
    const Event * event
)
```


TodoSum should actually be over all calo particles 

TodoSum should actually be over all non-e/mu calo particles 

TodoSum should actually be over all non-e/mu calo particles 


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
static constexpr const char * detector = "CMS";
```


### variable NUMSR

```
static const size_t NUMSR = 12;
```


### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"SR1", EventCounter("SR1")},
        {"SR2", EventCounter("SR2")},
        {"SR3", EventCounter("SR3")},
        {"SR4", EventCounter("SR4")},
        {"SR5", EventCounter("SR5")},
        {"SR6", EventCounter("SR6")},
        {"SR7", EventCounter("SR7")},
        {"SR8", EventCounter("SR8")},
        {"SR9", EventCounter("SR9")},
        {"SR10", EventCounter("SR10")},
        {"SR11", EventCounter("SR11")},
        {"SR12", EventCounter("SR12")},
      };
```


### variable _cutflow

```
Cutflow _cutflow;
```


-------------------------------

Updated on 2022-08-03 at 12:58:17 +0000