---
title: 'class RandomBasis'

description: "[No description available]"

---








[No description available]

Inherits from [BasicDevs](/documentation/code/gambit_sphinx/classes/classbasicdevs/), [BasicDevs](/documentation/code/gambit_sphinx/classes/classbasicdevs/), [Ran](/documentation/code/gambit_sphinx/classes/classran/)

Inherited by [MultiNormDev](/documentation/code/gambit_sphinx/classes/classmultinormdev/), [MultiNormDev](/documentation/code/gambit_sphinx/classes/classmultinormdev/), [TransformRandomBasis](/documentation/code/gambit_sphinx/classes/classtransformrandombasis/), [TransformRandomBasis](/documentation/code/gambit_sphinx/classes/classtransformrandombasis/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[RandomBasis](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual void | **[operator++](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-operator++)**(int ) |
| virtual | **[~RandomBasis](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-~randombasis)**() |
| | **[RandomBasis](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual void | **[operator++](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-operator++)**(int ) |
| virtual | **[~RandomBasis](/documentation/code/gambit_sphinx/classes/classrandombasis/#function-~randombasis)**() |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/gambit_sphinx/classes/classrandombasis/#variable-num)**  |
| double ** | **[currentVec](/documentation/code/gambit_sphinx/classes/classrandombasis/#variable-currentvec)**  |
| double ** | **[endVec](/documentation/code/gambit_sphinx/classes/classrandombasis/#variable-endvec)**  |

## Additional inherited members

**Public Functions inherited from [BasicDevs](/documentation/code/gambit_sphinx/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [BasicDevs](/documentation/code/gambit_sphinx/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/gambit_sphinx/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Ran](/documentation/code/gambit_sphinx/classes/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/gambit_sphinx/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/gambit_sphinx/classes/classran/#function-doub)**() |
| | **[Ran](/documentation/code/gambit_sphinx/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/gambit_sphinx/classes/classran/#function-doub)**() |


## Public Functions Documentation

### function RandomBasis

```
inline RandomBasis(
    int nin,
    unsigned long long iin
)
```


### function ChangeDim

```
inline void ChangeDim(
    const int nin
)
```


### function RandRot

```
inline void RandRot()
```


### function RanMult

```
inline double RanMult(
    double ** cin
)
```


### function RanMult

```
inline void RanMult(
    const double in,
    double * out
)
```


### function RanMult

```
inline void RanMult(
    double * in,
    const double w,
    double * out
)
```


### function Mag

```
inline double Mag(
    double * a,
    double * a0
)
```


### function Adjust

```
inline void Adjust(
    double * a,
    const double lim,
    const int iin
)
```


### function operator++

```
inline virtual void operator++(
    int 
)
```


**Reimplemented by**: [TransformRandomBasis::operator++](/documentation/code/gambit_sphinx/classes/classtransformrandombasis/#function-operator++), [TransformRandomBasis::operator++](/documentation/code/gambit_sphinx/classes/classtransformrandombasis/#function-operator++)


### function ~RandomBasis

```
inline virtual ~RandomBasis()
```


### function RandomBasis

```
inline RandomBasis(
    int nin,
    unsigned long long iin
)
```


### function ChangeDim

```
inline void ChangeDim(
    const int nin
)
```


### function RandRot

```
inline void RandRot()
```


### function RanMult

```
inline double RanMult(
    double ** cin
)
```


### function RanMult

```
inline void RanMult(
    const double in,
    double * out
)
```


### function RanMult

```
inline void RanMult(
    double * in,
    const double w,
    double * out
)
```


### function Mag

```
inline double Mag(
    double * a,
    double * a0
)
```


### function Adjust

```
inline void Adjust(
    double * a,
    const double lim,
    const int iin
)
```


### function operator++

```
inline virtual void operator++(
    int 
)
```


**Reimplemented by**: [TransformRandomBasis::operator++](/documentation/code/gambit_sphinx/classes/classtransformrandombasis/#function-operator++), [TransformRandomBasis::operator++](/documentation/code/gambit_sphinx/classes/classtransformrandombasis/#function-operator++)


### function ~RandomBasis

```
inline virtual ~RandomBasis()
```


## Protected Attributes Documentation

### variable num

```
int num;
```


### variable currentVec

```
double ** currentVec;
```


### variable endVec

```
double ** endVec;
```


-------------------------------

Updated on 2022-08-02 at 18:18:37 +0000