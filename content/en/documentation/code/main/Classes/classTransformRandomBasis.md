---
title: 'class TransformRandomBasis'

description: "[No description available]"

---








[No description available]

Inherits from [RandomBasis](/documentation/code/main/classes/classrandombasis/), [Cholesky](/documentation/code/main/classes/classcholesky/), [RandomBasis](/documentation/code/main/classes/classrandombasis/), [Cholesky](/documentation/code/main/classes/classcholesky/), [BasicDevs](/documentation/code/main/classes/classbasicdevs/), [Ran](/documentation/code/main/classes/classran/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[TransformRandomBasis](/documentation/code/main/classes/classtransformrandombasis/#function-transformrandombasis)**(double ** vvar, int nin, unsigned long long iin) |
| virtual void | **[operator++](/documentation/code/main/classes/classtransformrandombasis/#function-operator++)**(int ) |
| | **[TransformRandomBasis](/documentation/code/main/classes/classtransformrandombasis/#function-transformrandombasis)**(double ** vvar, int nin, unsigned long long iin) |
| virtual void | **[operator++](/documentation/code/main/classes/classtransformrandombasis/#function-operator++)**(int ) |

## Additional inherited members

**Public Functions inherited from [RandomBasis](/documentation/code/main/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| | **[RandomBasis](/documentation/code/main/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/main/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/main/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/main/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/main/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/main/classes/classrandombasis/#function-~randombasis)**() |
| | **[RandomBasis](/documentation/code/main/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/main/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/main/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/main/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/main/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/main/classes/classrandombasis/#function-~randombasis)**() |

**Protected Attributes inherited from [RandomBasis](/documentation/code/main/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| double ** | **[currentVec](/documentation/code/main/classes/classrandombasis/#variable-currentvec)**  |
| double ** | **[endVec](/documentation/code/main/classes/classrandombasis/#variable-endvec)**  |

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

**Public Functions inherited from [RandomBasis](/documentation/code/main/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| | **[RandomBasis](/documentation/code/main/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/main/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/main/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/main/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/main/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/main/classes/classrandombasis/#function-~randombasis)**() |
| | **[RandomBasis](/documentation/code/main/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/main/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/main/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/main/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/main/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/main/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/main/classes/classrandombasis/#function-~randombasis)**() |

**Protected Attributes inherited from [RandomBasis](/documentation/code/main/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| double ** | **[currentVec](/documentation/code/main/classes/classrandombasis/#variable-currentvec)**  |
| double ** | **[endVec](/documentation/code/main/classes/classrandombasis/#variable-endvec)**  |

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

**Public Functions inherited from [BasicDevs](/documentation/code/main/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/main/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/main/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/main/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/main/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/main/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/main/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Ran](/documentation/code/main/classes/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/main/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/main/classes/classran/#function-doub)**() |
| | **[Ran](/documentation/code/main/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/main/classes/classran/#function-doub)**() |


## Public Functions Documentation

### function TransformRandomBasis

```
inline TransformRandomBasis(
    double ** vvar,
    int nin,
    unsigned long long iin
)
```


### function operator++

```
inline virtual void operator++(
    int 
)
```


**Reimplements**: [RandomBasis::operator++](/documentation/code/main/classes/classrandombasis/#function-operator++)


### function TransformRandomBasis

```
inline TransformRandomBasis(
    double ** vvar,
    int nin,
    unsigned long long iin
)
```


### function operator++

```
inline virtual void operator++(
    int 
)
```


**Reimplements**: [RandomBasis::operator++](/documentation/code/main/classes/classrandombasis/#function-operator++)


-------------------------------

Updated on 2022-08-03 at 02:29:30 +0000