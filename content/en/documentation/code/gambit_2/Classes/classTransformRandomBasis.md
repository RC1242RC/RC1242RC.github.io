---
title: 'class TransformRandomBasis'

description: "[No description available]"

---








[No description available]

Inherits from [RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/), [Cholesky](/documentation/code/gambit_2/classes/classcholesky/), [RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/), [Cholesky](/documentation/code/gambit_2/classes/classcholesky/), [BasicDevs](/documentation/code/gambit_2/classes/classbasicdevs/), [Ran](/documentation/code/gambit_2/classes/classran/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[TransformRandomBasis](/documentation/code/gambit_2/classes/classtransformrandombasis/#function-transformrandombasis)**(double ** vvar, int nin, unsigned long long iin) |
| virtual void | **[operator++](/documentation/code/gambit_2/classes/classtransformrandombasis/#function-operator++)**(int ) |
| | **[TransformRandomBasis](/documentation/code/gambit_2/classes/classtransformrandombasis/#function-transformrandombasis)**(double ** vvar, int nin, unsigned long long iin) |
| virtual void | **[operator++](/documentation/code/gambit_2/classes/classtransformrandombasis/#function-operator++)**(int ) |

## Additional inherited members

**Public Functions inherited from [RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| | **[RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/gambit_2/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/gambit_2/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/gambit_2/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/gambit_2/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/#function-~randombasis)**() |
| | **[RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/gambit_2/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/gambit_2/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/gambit_2/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/gambit_2/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/#function-~randombasis)**() |

**Protected Attributes inherited from [RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| double ** | **[currentVec](/documentation/code/gambit_2/classes/classrandombasis/#variable-currentvec)**  |
| double ** | **[endVec](/documentation/code/gambit_2/classes/classrandombasis/#variable-endvec)**  |

**Public Functions inherited from [Cholesky](/documentation/code/gambit_2/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/gambit_2/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/gambit_2/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/gambit_2/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/gambit_2/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/gambit_2/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/gambit_2/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/gambit_2/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/gambit_2/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/gambit_2/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/gambit_2/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/gambit_2/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/gambit_2/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/gambit_2/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/gambit_2/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/gambit_2/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/gambit_2/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-~cholesky)**() |

**Public Functions inherited from [RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| | **[RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/gambit_2/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/gambit_2/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/gambit_2/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/gambit_2/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/#function-~randombasis)**() |
| | **[RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/gambit_2/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/gambit_2/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/gambit_2/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/gambit_2/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/gambit_2/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/#function-~randombasis)**() |

**Protected Attributes inherited from [RandomBasis](/documentation/code/gambit_2/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| double ** | **[currentVec](/documentation/code/gambit_2/classes/classrandombasis/#variable-currentvec)**  |
| double ** | **[endVec](/documentation/code/gambit_2/classes/classrandombasis/#variable-endvec)**  |

**Public Functions inherited from [Cholesky](/documentation/code/gambit_2/classes/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/gambit_2/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/gambit_2/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/gambit_2/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/gambit_2/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/gambit_2/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/gambit_2/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/gambit_2/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/gambit_2/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/gambit_2/classes/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/gambit_2/classes/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/gambit_2/classes/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/gambit_2/classes/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/gambit_2/classes/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/gambit_2/classes/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/gambit_2/classes/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/gambit_2/classes/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/gambit_2/classes/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/gambit_2/classes/classcholesky/#function-~cholesky)**() |

**Public Functions inherited from [BasicDevs](/documentation/code/gambit_2/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/gambit_2/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/gambit_2/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/gambit_2/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/gambit_2/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/gambit_2/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/gambit_2/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Ran](/documentation/code/gambit_2/classes/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/gambit_2/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/gambit_2/classes/classran/#function-doub)**() |
| | **[Ran](/documentation/code/gambit_2/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/gambit_2/classes/classran/#function-doub)**() |


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


**Reimplements**: [RandomBasis::operator++](/documentation/code/gambit_2/classes/classrandombasis/#function-operator++)


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


**Reimplements**: [RandomBasis::operator++](/documentation/code/gambit_2/classes/classrandombasis/#function-operator++)


-------------------------------

Updated on 2022-08-03 at 06:57:09 +0000