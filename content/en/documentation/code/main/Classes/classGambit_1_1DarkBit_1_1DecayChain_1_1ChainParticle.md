---
title: 'class Gambit::DarkBit::DecayChain::ChainParticle'

description: "[No description available]"

---








[No description available]

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[ChainParticle](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-chainparticle)**([vec3](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1vec3/) ipLab, const [DecayTable](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1decaytable/) * dc, string pID) |
| void | **[generateDecayChainMC](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-generatedecaychainmc)**(int maxSteps, double Emin) |
| void | **[reDrawAngles](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-redrawangles)**() |
| void | **[cutChain](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-cutchain)**() |
| [vec4](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1vec4/) | **[p_to_Lab](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-p-to-lab)**(const [vec4](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1vec4/) & p) const |
| [vec4](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1vec4/) | **[p_Lab](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-p-lab)**() const |
| double | **[E_Lab](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-e-lab)**() const |
| void | **[collectEndpointStates](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-collectendpointstates)**(vector< const [ChainParticle](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/) * > & endpointStates, bool includeAborted, string ipID ="") const |
| int | **[getnChildren](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-getnchildren)**() const |
| const [ChainParticle](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/) * | **[operator[]](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-operator[])**(int i) const |
| const [ChainParticle](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/) * | **[getParent](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-getparent)**() const |
| double | **[E_parentFrame](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-e-parentframe)**() const |
| string | **[getpID](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-getpid)**() const |
| void | **[printChain](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-printchain)**() const |
| double | **[getWeight](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-getweight)**() const |
| void | **[getBoost](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-getboost)**(double & gamma, double & beta) const |
| const [DecayTable](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1decaytable/) * | **[getDecayTable](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-getdecaytable)**() const |
| | **[~ChainParticle](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#function-~chainparticle)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const double | **[m](/documentation/code/main/classes/classgambit_1_1darkbit_1_1decaychain_1_1chainparticle/#variable-m)**  |

## Public Functions Documentation

### function ChainParticle

```
ChainParticle(
    vec3 ipLab,
    const DecayTable * dc,
    string pID
)
```


### function generateDecayChainMC

```
void generateDecayChainMC(
    int maxSteps,
    double Emin
)
```


### function reDrawAngles

```
void reDrawAngles()
```


### function cutChain

```
void cutChain()
```


### function p_to_Lab

```
vec4 p_to_Lab(
    const vec4 & p
) const
```


### function p_Lab

```
vec4 p_Lab() const
```


### function E_Lab

```
double E_Lab() const
```


### function collectEndpointStates

```
void collectEndpointStates(
    vector< const ChainParticle * > & endpointStates,
    bool includeAborted,
    string ipID =""
) const
```


### function getnChildren

```
inline int getnChildren() const
```


### function operator[]

```
const ChainParticle * operator[](
    int i
) const
```


### function getParent

```
const ChainParticle * getParent() const
```


### function E_parentFrame

```
double E_parentFrame() const
```


### function getpID

```
inline string getpID() const
```


### function printChain

```
void printChain() const
```


### function getWeight

```
inline double getWeight() const
```


### function getBoost

```
void getBoost(
    double & gamma,
    double & beta
) const
```


### function getDecayTable

```
inline const DecayTable * getDecayTable() const
```


### function ~ChainParticle

```
~ChainParticle()
```


## Public Attributes Documentation

### variable m

```
const double m;
```


-------------------------------

Updated on 2022-08-03 at 12:57:56 +0000