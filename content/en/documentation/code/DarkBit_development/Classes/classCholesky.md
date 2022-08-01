---
title: 'class Cholesky'

description: "[No description available]"

---








[No description available]

Inherited by [AdvanceDevs](/documentation/code/darkbit_developmentclasses/classadvancedevs/), [AdvanceDevs](/documentation/code/darkbit_developmentclasses/classadvancedevs/), [MultiNormDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/), [MultiNormDev](/documentation/code/darkbit_developmentclasses/classmultinormdev/), [MultiNormalDev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/), [MultiNormalDev](/documentation/code/darkbit_developmentclasses/classmultinormaldev/), [TransformRandomBasis](/documentation/code/darkbit_developmentclasses/classtransformrandombasis/), [TransformRandomBasis](/documentation/code/darkbit_developmentclasses/classtransformrandombasis/)

## Public Functions

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

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/darkbit_developmentclasses/classcholesky/#variable-num)**  |

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

Updated on 2022-08-01 at 17:31:41 +0000