---
title: 'class AdvanceDevs'

description: "[No description available]"

---








[No description available]

Inherits from [BasicDevs](/documentation/code/main/classes/classbasicdevs/), [Cholesky](/documentation/code/main/classes/classcholesky/), [BasicDevs](/documentation/code/main/classes/classbasicdevs/), [Cholesky](/documentation/code/main/classes/classcholesky/), [Ran](/documentation/code/main/classes/classran/)

Inherited by [RandomPlane](/documentation/code/main/classes/classrandomplane/), [RandomPlane](/documentation/code/main/classes/classrandomplane/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[AdvanceDevs](/documentation/code/main/classes/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/main/classes/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| void | **[MultiDev](/documentation/code/main/classes/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/main/classes/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/main/classes/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/main/classes/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |
| | **[AdvanceDevs](/documentation/code/main/classes/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/main/classes/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| double | **[MultiDevDist](/documentation/code/main/classes/classadvancedevs/#function-multidevdist)**() |
| double | **[MultiDevPDF](/documentation/code/main/classes/classadvancedevs/#function-multidevpdf)**(double r, int dim) |
| void | **[MultiDev](/documentation/code/main/classes/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/main/classes/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/main/classes/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/main/classes/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |

## Additional inherited members

**Public Functions inherited from [BasicDevs](/documentation/code/main/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/main/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/main/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/main/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/main/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/main/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/main/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Cholesky](/documentation/code/main/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/main/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/main/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/main/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/main/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/main/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/main/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/main/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/main/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/main/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/main/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/main/classes/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/main/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/main/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/main/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/main/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/main/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/main/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/main/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/main/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/main/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/main/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/main/classes/classcholesky/#function-~cholesky)**() |

**Protected Attributes inherited from [Cholesky](/documentation/code/main/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/main/classes/classcholesky/#variable-num)**  |

**Public Functions inherited from [BasicDevs](/documentation/code/main/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/main/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/main/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/main/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/main/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/main/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/main/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Cholesky](/documentation/code/main/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/main/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/main/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/main/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/main/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/main/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/main/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/main/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/main/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/main/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/main/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/main/classes/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/main/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/main/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/main/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/main/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/main/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/main/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/main/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/main/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/main/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/main/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/main/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/main/classes/classcholesky/#function-~cholesky)**() |

**Protected Attributes inherited from [Cholesky](/documentation/code/main/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/main/classes/classcholesky/#variable-num)**  |

**Public Functions inherited from [Ran](/documentation/code/main/classes/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/main/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/main/classes/classran/#function-doub)**() |
| | **[Ran](/documentation/code/main/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/main/classes/classran/#function-doub)**() |


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

Updated on 2022-08-03 at 00:49:05 +0000