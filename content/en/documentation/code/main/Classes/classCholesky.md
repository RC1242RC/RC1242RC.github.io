---
title: 'class Cholesky'

description: "[No description available]"

---








[No description available]

Inherited by [AdvanceDevs](/documentation/code/main/classes/classadvancedevs/), [AdvanceDevs](/documentation/code/main/classes/classadvancedevs/), [MultiNormDev](/documentation/code/main/classes/classmultinormdev/), [MultiNormDev](/documentation/code/main/classes/classmultinormdev/), [MultiNormalDev](/documentation/code/main/classes/classmultinormaldev/), [MultiNormalDev](/documentation/code/main/classes/classmultinormaldev/), [TransformRandomBasis](/documentation/code/main/classes/classtransformrandombasis/), [TransformRandomBasis](/documentation/code/main/classes/classtransformrandombasis/)

## Public Functions

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

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/main/classes/classcholesky/#variable-num)**  |

## Public Functions Documentation

### function Cholesky

```
inline Cholesky(
    const int nin
)
```


### function Cholesky

```
inline Cholesky(
    double ** a,
    const int nin
)
```


### function EnterMatM

```
inline bool EnterMatM(
    double ** a,
    const int min
)
```


### function EnterMat

```
inline bool EnterMat(
    double ** a
)
```


### function EnterMat

```
inline void EnterMat(
    double ** a,
    int nin
)
```


### function ElMult

```
inline void ElMult(
    double * y,
    double * b
)
```


### function ElMult

```
inline void ElMult(
    double * y
)
```


### function Solve

```
inline void Solve(
    double * b,
    double * x
)
```


### function Square

```
inline double Square(
    double * y,
    double * y0
)
```


### function Square

```
inline double Square(
    double * y,
    double * y0,
    int * map
)
```


### function Inverse

```
inline void Inverse(
    double ** ainv
)
```


### function DetSqrt

```
inline double DetSqrt()
```


### function ~Cholesky

```
inline ~Cholesky()
```


### function Cholesky

```
inline Cholesky(
    const int nin
)
```


### function Cholesky

```
inline Cholesky(
    double ** a,
    const int nin
)
```


### function EnterMatM

```
inline bool EnterMatM(
    double ** a,
    const int min
)
```


### function EnterMat

```
inline bool EnterMat(
    double ** a
)
```


### function EnterMat

```
inline bool EnterMat(
    const std::vector< std::vector< double > > & a
)
```


### function EnterMat

```
inline void EnterMat(
    double ** a,
    int nin
)
```


### function ElMult

```
inline void ElMult(
    double * y,
    double * b
)
```


### function ElMult

```
inline void ElMult(
    double * y
)
```


### function Solve

```
inline void Solve(
    double * b,
    double * x
)
```


### function Square

```
inline double Square(
    double * y,
    double * y0
)
```


### function Square

```
inline double Square(
    double * y,
    double * y0,
    int * map
)
```


### function Inverse

```
inline void Inverse(
    double ** ainv
)
```


### function DetSqrt

```
inline double DetSqrt()
```


### function ~Cholesky

```
inline ~Cholesky()
```


## Protected Attributes Documentation

### variable num

```
int num;
```


-------------------------------

Updated on 2022-08-03 at 05:45:23 +0000