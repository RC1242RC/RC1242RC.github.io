---
title: 'class AdvanceDevs'

description: "[No description available]"

---








[No description available]

Inherits from [BasicDevs](/documentation/code/colliderbit/classes/classbasicdevs/), [Cholesky](/documentation/code/colliderbit/classes/classcholesky/), [BasicDevs](/documentation/code/colliderbit/classes/classbasicdevs/), [Cholesky](/documentation/code/colliderbit/classes/classcholesky/), [Ran](/documentation/code/colliderbit/classes/classran/)

Inherited by [RandomPlane](/documentation/code/colliderbit/classes/classrandomplane/), [RandomPlane](/documentation/code/colliderbit/classes/classrandomplane/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[AdvanceDevs](/documentation/code/colliderbit/classes/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/colliderbit/classes/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| void | **[MultiDev](/documentation/code/colliderbit/classes/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/colliderbit/classes/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/colliderbit/classes/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/colliderbit/classes/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |
| | **[AdvanceDevs](/documentation/code/colliderbit/classes/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/colliderbit/classes/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| double | **[MultiDevDist](/documentation/code/colliderbit/classes/classadvancedevs/#function-multidevdist)**() |
| double | **[MultiDevPDF](/documentation/code/colliderbit/classes/classadvancedevs/#function-multidevpdf)**(double r, int dim) |
| void | **[MultiDev](/documentation/code/colliderbit/classes/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/colliderbit/classes/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/colliderbit/classes/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/colliderbit/classes/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |

## Additional inherited members

**Public Functions inherited from [BasicDevs](/documentation/code/colliderbit/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/colliderbit/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/colliderbit/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/colliderbit/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/colliderbit/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/colliderbit/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/colliderbit/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Cholesky](/documentation/code/colliderbit/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/colliderbit/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/colliderbit/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/colliderbit/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/colliderbit/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/colliderbit/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/colliderbit/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/colliderbit/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/colliderbit/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/colliderbit/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/colliderbit/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/colliderbit/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/colliderbit/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/colliderbit/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/colliderbit/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/colliderbit/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/colliderbit/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-~cholesky)**() |

**Protected Attributes inherited from [Cholesky](/documentation/code/colliderbit/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/colliderbit/classes/classcholesky/#variable-num)**  |

**Public Functions inherited from [BasicDevs](/documentation/code/colliderbit/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/colliderbit/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/colliderbit/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/colliderbit/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/colliderbit/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/colliderbit/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/colliderbit/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Cholesky](/documentation/code/colliderbit/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/colliderbit/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/colliderbit/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/colliderbit/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/colliderbit/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/colliderbit/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/colliderbit/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/colliderbit/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/colliderbit/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/colliderbit/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/colliderbit/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/colliderbit/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/colliderbit/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/colliderbit/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/colliderbit/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/colliderbit/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/colliderbit/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/colliderbit/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/colliderbit/classes/classcholesky/#function-~cholesky)**() |

**Protected Attributes inherited from [Cholesky](/documentation/code/colliderbit/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/colliderbit/classes/classcholesky/#variable-num)**  |

**Public Functions inherited from [Ran](/documentation/code/colliderbit/classes/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/colliderbit/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/colliderbit/classes/classran/#function-doub)**() |
| | **[Ran](/documentation/code/colliderbit/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/colliderbit/classes/classran/#function-doub)**() |


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

Updated on 2022-08-03 at 12:58:16 +0000