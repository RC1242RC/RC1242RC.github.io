---
title: 'class MultiNormalDev'

description: "[No description available]"

---








[No description available]

Inherits from [Ran](/documentation/code/darkbit_developmentclasses/classran/), [Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/), [Ran](/documentation/code/darkbit_developmentclasses/classran/), [Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MultiNormalDev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/#function-multinormaldev)**(double ** vvar, double fin, unsigned long long int j, int nin) |
| void | **[Dev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/#function-dev)**(double * pt, double * mean) |
| void | **[Dev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/#function-dev)**(double ** cvar, double * pt, double * mean) |
| | **[~MultiNormalDev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/#function-~multinormaldev)**() |
| | **[MultiNormalDev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/#function-multinormaldev)**(double ** vvar, double fin, unsigned long long int j, int nin) |
| void | **[Dev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/#function-dev)**(double * pt, double * mean) |
| void | **[Dev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/#function-dev)**(double ** cvar, double * pt, double * mean) |
| | **[~MultiNormalDev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/#function-~multinormaldev)**() |

## Additional inherited members

**Public Functions inherited from [Ran](/documentation/code/darkbit_developmentclasses/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/darkbit_developmentclasses/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_developmentclasses/classran/#function-doub)**() |
| | **[Ran](/documentation/code/darkbit_developmentclasses/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_developmentclasses/classran/#function-doub)**() |

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

**Protected Attributes inherited from [Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/darkbit_developmentclasses/classcholesky/#variable-num)**  |

**Public Functions inherited from [Ran](/documentation/code/darkbit_developmentclasses/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/darkbit_developmentclasses/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_developmentclasses/classran/#function-doub)**() |
| | **[Ran](/documentation/code/darkbit_developmentclasses/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_developmentclasses/classran/#function-doub)**() |

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

**Protected Attributes inherited from [Cholesky](/documentation/code/darkbit_developmentclasses/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/darkbit_developmentclasses/classcholesky/#variable-num)**  |


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

Updated on 2022-08-01 at 17:31:41 +0000