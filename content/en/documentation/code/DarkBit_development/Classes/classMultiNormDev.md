---
title: 'class MultiNormDev'

description: "[No description available]"

---








[No description available]

Inherits from [RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/), [Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/), [RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/), [Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/), [BasicDevs](/documentation/code/darkbit_developmentclasses/classbasicdevs/), [Ran](/documentation/code/darkbit_developmentclasses/classran/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MultiNormDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multinormdev)**(int nin, double din, unsigned long long iin) |
| | **[MultiNormDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multinormdev)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| void | **[MultiDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[MultiDevGauss](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multidevgauss)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |
| | **[MultiNormDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multinormdev)**(int nin, double din, unsigned long long iin) |
| | **[MultiNormDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multinormdev)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| void | **[MultiDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[MultiDevGauss](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-multidevgauss)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |

## Additional inherited members

**Public Functions inherited from [RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| | **[RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual void | **[operator++](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-operator++)**(int ) |
| virtual | **[~RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-~randombasis)**() |
| | **[RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual void | **[operator++](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-operator++)**(int ) |
| virtual | **[~RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-~randombasis)**() |

**Protected Attributes inherited from [RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| double ** | **[currentVec](/documentation/code/darkbit_developmentclasses/classrandombasis/#variable-currentvec)**  |
| double ** | **[endVec](/documentation/code/darkbit_developmentclasses/classrandombasis/#variable-endvec)**  |

**Public Functions inherited from [Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/darkbit_developmentclasses/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/darkbit_developmentclasses/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/darkbit_developmentclasses/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/darkbit_developmentclasses/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/darkbit_developmentclasses/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/darkbit_developmentclasses/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/darkbit_developmentclasses/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/darkbit_developmentclasses/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/darkbit_developmentclasses/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/darkbit_developmentclasses/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/darkbit_developmentclasses/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/darkbit_developmentclasses/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/darkbit_developmentclasses/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/darkbit_developmentclasses/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-~cholesky)**() |

**Public Functions inherited from [RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| | **[RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual void | **[operator++](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-operator++)**(int ) |
| virtual | **[~RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-~randombasis)**() |
| | **[RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual void | **[operator++](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-operator++)**(int ) |
| virtual | **[~RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/#function-~randombasis)**() |

**Protected Attributes inherited from [RandomBasis](/documentation/code/darkbit_developmentclasses/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| double ** | **[currentVec](/documentation/code/darkbit_developmentclasses/classrandombasis/#variable-currentvec)**  |
| double ** | **[endVec](/documentation/code/darkbit_developmentclasses/classrandombasis/#variable-endvec)**  |

**Public Functions inherited from [Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/darkbit_developmentclasses/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/darkbit_developmentclasses/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/darkbit_developmentclasses/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/darkbit_developmentclasses/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/darkbit_developmentclasses/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/darkbit_developmentclasses/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/darkbit_developmentclasses/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/darkbit_developmentclasses/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/darkbit_developmentclasses/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/darkbit_developmentclasses/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/darkbit_developmentclasses/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/darkbit_developmentclasses/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/darkbit_developmentclasses/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/darkbit_developmentclasses/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/darkbit_developmentclasses/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/#function-~cholesky)**() |

**Public Functions inherited from [BasicDevs](/documentation/code/darkbit_developmentclasses/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/darkbit_developmentclasses/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/darkbit_developmentclasses/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/darkbit_developmentclasses/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/darkbit_developmentclasses/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/darkbit_developmentclasses/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/darkbit_developmentclasses/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Ran](/documentation/code/darkbit_developmentclasses/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/darkbit_developmentclasses/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_developmentclasses/classran/#function-doub)**() |
| | **[Ran](/documentation/code/darkbit_developmentclasses/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_developmentclasses/classran/#function-doub)**() |


## Public Functions Documentation

### function MultiNormDev

```
inline MultiNormDev(
    int nin,
    double din,
    unsigned long long iin
)
```


### function MultiNormDev

```
inline MultiNormDev(
    double ** vvar,
    const int nin,
    double din,
    unsigned long long iin
)
```


### function MultiDev

```
inline void MultiDev(
    double * pin,
    double * p0
)
```


### function MultiDev

```
inline void MultiDev(
    double ** cvar,
    double * pin,
    double * p0
)
```


### function MultiDevGauss

```
inline void MultiDevGauss(
    double ** cvar,
    double * pin,
    double * p0
)
```


### function EllipseDev

```
inline void EllipseDev(
    double * pin,
    double * p0,
    double fin
)
```


### function EllipseDev

```
inline void EllipseDev(
    double ** cvar,
    double * pin,
    double * p0,
    double fin
)
```


### function MultiNormDev

```
inline MultiNormDev(
    int nin,
    double din,
    unsigned long long iin
)
```


### function MultiNormDev

```
inline MultiNormDev(
    double ** vvar,
    const int nin,
    double din,
    unsigned long long iin
)
```


### function MultiDev

```
inline void MultiDev(
    double * pin,
    double * p0
)
```


### function MultiDev

```
inline void MultiDev(
    double ** cvar,
    double * pin,
    double * p0
)
```


### function MultiDevGauss

```
inline void MultiDevGauss(
    double ** cvar,
    double * pin,
    double * p0
)
```


### function EllipseDev

```
inline void EllipseDev(
    double * pin,
    double * p0,
    double fin
)
```


### function EllipseDev

```
inline void EllipseDev(
    double ** cvar,
    double * pin,
    double * p0,
    double fin
)
```


-------------------------------

Updated on 2022-08-01 at 17:31:41 +0000