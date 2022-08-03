---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_80invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

Inherited by [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_binned_80invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__binned__80invfb/), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_inclusive_80invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__inclusive__80invfb/)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ptComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb_1_1ptcomparison/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Analysis_ATLAS_13TeV_2OSLEP_chargino_80invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#function-analysis-atlas-13tev-2oslep-chargino-80invfb)**() |
| void | **[JetLeptonOverlapRemoval](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#function-jetleptonoverlapremoval)**(vector< const HEPUtils::Jet * > & jetvec, vector< const HEPUtils::Particle * > & lepvec, double DeltaRMax) |
| void | **[LeptonJetOverlapRemoval](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#function-leptonjetoverlapremoval)**(vector< const HEPUtils::Particle * > & lepvec, vector< const HEPUtils::Jet * > & jetvec) |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| virtual void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#function-analysis-specific-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#variable-detector)**  |
| struct [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_80invfb::ptComparison](/documentation/code/colliderbit/classes/structgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb_1_1ptcomparison/) | **[comparePt](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#variable-comparept)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::map< string, EventCounter > | **[_counters](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#variable--counters)**  |
| std::map< string, EventCounter > | **[_counters_bin](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#variable--counters-bin)**  |
| Cutflow | **[_cutflow](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__80invfb/#variable--cutflow)**  |

## Public Functions Documentation

### function Analysis_ATLAS_13TeV_2OSLEP_chargino_80invfb

```
inline Analysis_ATLAS_13TeV_2OSLEP_chargino_80invfb()
```


### function JetLeptonOverlapRemoval

```
inline void JetLeptonOverlapRemoval(
    vector< const HEPUtils::Jet * > & jetvec,
    vector< const HEPUtils::Particle * > & lepvec,
    double DeltaRMax
)
```


### function LeptonJetOverlapRemoval

```
inline void LeptonJetOverlapRemoval(
    vector< const HEPUtils::Particle * > & lepvec,
    vector< const HEPUtils::Jet * > & jetvec
)
```


### function run

```
inline void run(
    const HEPUtils::Event * event
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
inline virtual void collect_results()
```


**Reimplemented by**: [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_inclusive_80invfb::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__inclusive__80invfb/#function-collect-results), [Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_binned_80invfb::collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__2oslep__chargino__binned__80invfb/#function-collect-results)


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


### variable comparePt

```
struct Gambit::ColliderBit::Analysis_ATLAS_13TeV_2OSLEP_chargino_80invfb::ptComparison comparePt;
```


## Protected Attributes Documentation

### variable _counters

```
std::map< string, EventCounter > _counters = {
        {"SR-DF-0J-100", EventCounter("SR-DF-0J-100")},
        {"SR-DF-0J-160", EventCounter("SR-DF-0J-160")},
        {"SR-DF-0J-100-120", EventCounter("SR-DF-0J-100-120")},
        {"SR-DF-0J-120-160", EventCounter("SR-DF-0J-120-160")},
        {"SR-DF-1J-100", EventCounter("SR-DF-1J-100")},
        {"SR-DF-1J-160", EventCounter("SR-DF-1J-160")},
        {"SR-DF-1J-100-120", EventCounter("SR-DF-1J-100-120")},
        {"SR-DF-1J-120-160", EventCounter("SR-DF-1J-120-160")},
        {"SR-SF-0J-100", EventCounter("SR-SF-0J-100")},
        {"SR-SF-0J-160", EventCounter("SR-SF-0J-160")},
        {"SR-SF-0J-100-120", EventCounter("SR-SF-0J-100-120")},
        {"SR-SF-0J-120-160", EventCounter("SR-SF-0J-120-160")},
        {"SR-SF-1J-100", EventCounter("SR-SF-1J-100")},
        {"SR-SF-1J-160", EventCounter("SR-SF-1J-160")},
        {"SR-SF-1J-100-120", EventCounter("SR-SF-1J-100-120")},
        {"SR-SF-1J-120-160", EventCounter("SR-SF-1J-120-160")},
      };
```


### variable _counters_bin

```
std::map< string, EventCounter > _counters_bin;
```


### variable _cutflow

```
Cutflow _cutflow;
```


-------------------------------

Updated on 2022-08-03 at 12:58:17 +0000