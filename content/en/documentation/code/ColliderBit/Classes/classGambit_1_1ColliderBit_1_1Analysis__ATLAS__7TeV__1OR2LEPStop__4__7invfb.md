---
title: 'class Gambit::ColliderBit::Analysis_ATLAS_7TeV_1OR2LEPStop_4_7invfb'

description: "[No description available]"

---








[No description available]

Inherits from Analysis

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[cutflowEnum](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#enum-cutflowenum)** { CUTFLOWMAP =(f)} |
| enum| **[varEnum](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#enum-varenum)** { VARMAP =(f)} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| std::vector< double > | **[calcNuPz](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-calcnupz)**(double Mw, P4 metMom, P4 lepMom) |
| P4 | **[getBestHadronicTop](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-getbesthadronictop)**(std::vector< const Jet * > bJets, std::vector< const Jet * > lightJets, const P4 & leptonMom, const P4 & metMom, double width, double mean) |
| double | **[calcMt](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-calcmt)**(P4 metVec, P4 lepVec) |
| double | **[calcSqrtSSubMin](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-calcsqrtssubmin)**(P4 visibleSubsystem, P4 invisbleSubsystem) |
| void | **[getBJets](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-getbjets)**(std::vector< const Jet * > & jets, std::vector< const Jet * > * bJets, std::vector< const Jet * > * lightJets) |
| | **[Analysis_ATLAS_7TeV_1OR2LEPStop_4_7invfb](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-analysis-atlas-7tev-1or2lepstop-4-7invfb)**() |
| void | **[run](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-run)**(const HEPUtils::Event * event) |
| void | **[combine](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-combine)**(const Analysis * other)<br>Combine the variables of another copy of this analysis (typically on another thread) into this one.  |
| void | **[collect_results](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-collect-results)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[analysis_specific_reset](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-analysis-specific-reset)**() |
| void | **[incrementCut](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-incrementcut)**(int cutIndex) |
| void | **[saveCutFlow](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#function-savecutflow)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[detector](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#variable-detector)**  |
| const std::vector< std::string > | **[cutflowNames](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#variable-cutflownames)**  |
| const std::vector< std::string > | **[varNames](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#variable-varnames)**  |
| std::map< std::string, std::vector< double > > | **[varResults](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#variable-varresults)**  |
| std::map< std::string, int > | **[cutflows](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#variable-cutflows)**  |
| double | **[num1LSR](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#variable-num1lsr)**  |
| double | **[num2LSR1](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#variable-num2lsr1)**  |
| double | **[num2LSR2](/documentation/code/colliderbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__7tev__1or2lepstop__4__7invfb/#variable-num2lsr2)**  |

## Public Types Documentation

### enum cutflowEnum

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CUTFLOWMAP | =(f)|   |




### enum varEnum

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| VARMAP | =(f)|   |




## Public Functions Documentation

### function calcNuPz

```
inline std::vector< double > calcNuPz(
    double Mw,
    P4 metMom,
    P4 lepMom
)
```


### function getBestHadronicTop

```
inline P4 getBestHadronicTop(
    std::vector< const Jet * > bJets,
    std::vector< const Jet * > lightJets,
    const P4 & leptonMom,
    const P4 & metMom,
    double width,
    double mean
)
```


### function calcMt

```
inline double calcMt(
    P4 metVec,
    P4 lepVec
)
```


### function calcSqrtSSubMin

```
inline double calcSqrtSSubMin(
    P4 visibleSubsystem,
    P4 invisbleSubsystem
)
```


### function getBJets

```
inline void getBJets(
    std::vector< const Jet * > & jets,
    std::vector< const Jet * > * bJets,
    std::vector< const Jet * > * lightJets
)
```


We assume that b jets have previously been 100% tagged


### function Analysis_ATLAS_7TeV_1OR2LEPStop_4_7invfb

```
inline Analysis_ATLAS_7TeV_1OR2LEPStop_4_7invfb()
```


The constructor that should initialize some variables 


### function run

```
inline void run(
    const HEPUtils::Event * event
)
```


**Parameters**: 

  * **event** an event contain particle and jet information 


Performs the main part of the analysis 


### function combine

```
inline void combine(
    const Analysis * other
)
```

Combine the variables of another copy of this analysis (typically on another thread) into this one. 

**Parameters**: 

  * **other** results from another thread 


Adds results from other threads if OMP_NUM_THREAD != 1 


### function collect_results

```
inline void collect_results()
```


## Protected Functions Documentation

### function analysis_specific_reset

```
inline void analysis_specific_reset()
```


### function incrementCut

```
inline void incrementCut(
    int cutIndex
)
```


### function saveCutFlow

```
inline void saveCutFlow()
```


## Public Attributes Documentation

### variable detector

```
static constexpr const char * detector = "ATLAS";
```


### variable cutflowNames

```
const std::vector< std::string > cutflowNames = {CUTFLOWMAP(g)};
```


### variable varNames

```
const std::vector< std::string > varNames = {VARMAP(g)};
```


### variable varResults

```
std::map< std::string, std::vector< double > > varResults;
```


### variable cutflows

```
std::map< std::string, int > cutflows;
```


### variable num1LSR

```
double num1LSR =0;
```


### variable num2LSR1

```
double num2LSR1 =0;
```


### variable num2LSR2

```
double num2LSR2 =0;
```


-------------------------------

Updated on 2022-08-03 at 05:45:14 +0000