---
title: 'class AdvanceDevs'

description: "[No description available]"

---








[No description available]

Inherits from [BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/), [Cholesky](/documentation/code/darkbit_development/classes/classcholesky/), [BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/), [Cholesky](/documentation/code/darkbit_development/classes/classcholesky/), [Ran](/documentation/code/darkbit_development/classes/classran/)

Inherited by [RandomPlane](/documentation/code/darkbit_development/classes/classrandomplane/), [RandomPlane](/documentation/code/darkbit_development/classes/classrandomplane/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[AdvanceDevs](/documentation/code/darkbit_development/classes/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/darkbit_development/classes/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| void | **[MultiDev](/documentation/code/darkbit_development/classes/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/darkbit_development/classes/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/darkbit_development/classes/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/darkbit_development/classes/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |
| | **[AdvanceDevs](/documentation/code/darkbit_development/classes/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/darkbit_development/classes/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| double | **[MultiDevDist](/documentation/code/darkbit_development/classes/classadvancedevs/#function-multidevdist)**() |
| double | **[MultiDevPDF](/documentation/code/darkbit_development/classes/classadvancedevs/#function-multidevpdf)**(double r, int dim) |
| void | **[MultiDev](/documentation/code/darkbit_development/classes/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/darkbit_development/classes/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/darkbit_development/classes/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/darkbit_development/classes/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |

## Additional inherited members

**Public Functions inherited from [BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Cholesky](/documentation/code/darkbit_development/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/darkbit_development/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/darkbit_development/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/darkbit_development/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/darkbit_development/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/darkbit_development/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/darkbit_development/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/darkbit_development/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/darkbit_development/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/darkbit_development/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/darkbit_development/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/darkbit_development/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/darkbit_development/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/darkbit_development/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/darkbit_development/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/darkbit_development/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/darkbit_development/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-~cholesky)**() |

**Protected Attributes inherited from [Cholesky](/documentation/code/darkbit_development/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/darkbit_development/classes/classcholesky/#variable-num)**  |

**Public Functions inherited from [BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Cholesky](/documentation/code/darkbit_development/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/darkbit_development/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/darkbit_development/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/darkbit_development/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/darkbit_development/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/darkbit_development/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/darkbit_development/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/darkbit_development/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/darkbit_development/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/darkbit_development/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/darkbit_development/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/darkbit_development/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/darkbit_development/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/darkbit_development/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/darkbit_development/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/darkbit_development/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/darkbit_development/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/darkbit_development/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/darkbit_development/classes/classcholesky/#function-~cholesky)**() |

**Protected Attributes inherited from [Cholesky](/documentation/code/darkbit_development/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/darkbit_development/classes/classcholesky/#variable-num)**  |

**Public Functions inherited from [Ran](/documentation/code/darkbit_development/classes/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/darkbit_development/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_development/classes/classran/#function-doub)**() |
| | **[Ran](/documentation/code/darkbit_development/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_development/classes/classran/#function-doub)**() |


## Public Functions Documentation

### function AdvanceDevs

```
inline AdvanceDevs(
    int nin,
    double din,
    unsigned long long iin
)
```


### function AdvanceDevs

```
inline AdvanceDevs(
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


### function AdvanceDevs

```
inline AdvanceDevs(
    int nin,
    double din,
    unsigned long long iin
)
```


### function AdvanceDevs

```
inline AdvanceDevs(
    double ** vvar,
    const int nin,
    double din,
    unsigned long long iin
)
```


### function MultiDevDist

```
inline double MultiDevDist()
```


### function MultiDevPDF

```
inline double MultiDevPDF(
    double r,
    int dim
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

Updated on 2022-08-01 at 17:41:22 +0000