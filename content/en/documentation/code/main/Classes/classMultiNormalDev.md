---
title: 'class MultiNormalDev'

description: "[No description available]"

---








[No description available]

Inherits from [Ran](/documentation/code/main/classes/classran/), [Cholesky](/documentation/code/main/classes/classcholesky/), [Ran](/documentation/code/main/classes/classran/), [Cholesky](/documentation/code/main/classes/classcholesky/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MultiNormalDev](/documentation/code/main/classes/classmultinormaldev/#function-multinormaldev)**(double ** vvar, double fin, unsigned long long int j, int nin) |
| void | **[Dev](/documentation/code/main/classes/classmultinormaldev/#function-dev)**(double * pt, double * mean) |
| void | **[Dev](/documentation/code/main/classes/classmultinormaldev/#function-dev)**(double ** cvar, double * pt, double * mean) |
| | **[~MultiNormalDev](/documentation/code/main/classes/classmultinormaldev/#function-~multinormaldev)**() |
| | **[MultiNormalDev](/documentation/code/main/classes/classmultinormaldev/#function-multinormaldev)**(double ** vvar, double fin, unsigned long long int j, int nin) |
| void | **[Dev](/documentation/code/main/classes/classmultinormaldev/#function-dev)**(double * pt, double * mean) |
| void | **[Dev](/documentation/code/main/classes/classmultinormaldev/#function-dev)**(double ** cvar, double * pt, double * mean) |
| | **[~MultiNormalDev](/documentation/code/main/classes/classmultinormaldev/#function-~multinormaldev)**() |

## Additional inherited members

**Public Functions inherited from [Ran](/documentation/code/main/classes/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/main/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/main/classes/classran/#function-doub)**() |
| | **[Ran](/documentation/code/main/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/main/classes/classran/#function-doub)**() |

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


## Public Functions Documentation

### function MultiNormalDev

```
inline MultiNormalDev(
    double ** vvar,
    double fin,
    unsigned long long int j,
    int nin
)
```


### function Dev

```
inline void Dev(
    double * pt,
    double * mean
)
```


### function Dev

```
inline void Dev(
    double ** cvar,
    double * pt,
    double * mean
)
```


### function ~MultiNormalDev

```
inline ~MultiNormalDev()
```


### function MultiNormalDev

```
inline MultiNormalDev(
    double ** vvar,
    double fin,
    unsigned long long int j,
    int nin
)
```


### function Dev

```
inline void Dev(
    double * pt,
    double * mean
)
```


### function Dev

```
inline void Dev(
    double ** cvar,
    double * pt,
    double * mean
)
```


### function ~MultiNormalDev

```
inline ~MultiNormalDev()
```


-------------------------------

Updated on 2022-08-03 at 02:29:30 +0000