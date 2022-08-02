---
title: 'class TransformRandomBasis'

description: "[No description available]"

---








[No description available]

Inherits from [RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/), [Cholesky](/documentation/code/darkbit_development/classes/classcholesky/), [RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/), [Cholesky](/documentation/code/darkbit_development/classes/classcholesky/), [BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/), [Ran](/documentation/code/darkbit_development/classes/classran/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[TransformRandomBasis](/documentation/code/darkbit_development/classes/classtransformrandombasis/#function-transformrandombasis)**(double ** vvar, int nin, unsigned long long iin) |
| virtual void | **[operator++](/documentation/code/darkbit_development/classes/classtransformrandombasis/#function-operator++)**(int ) |
| | **[TransformRandomBasis](/documentation/code/darkbit_development/classes/classtransformrandombasis/#function-transformrandombasis)**(double ** vvar, int nin, unsigned long long iin) |
| virtual void | **[operator++](/documentation/code/darkbit_development/classes/classtransformrandombasis/#function-operator++)**(int ) |

## Additional inherited members

**Public Functions inherited from [RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| | **[RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/darkbit_development/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/darkbit_development/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/darkbit_development/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/darkbit_development/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/#function-~randombasis)**() |
| | **[RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/darkbit_development/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/darkbit_development/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/darkbit_development/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/darkbit_development/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/#function-~randombasis)**() |

**Protected Attributes inherited from [RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| double ** | **[currentVec](/documentation/code/darkbit_development/classes/classrandombasis/#variable-currentvec)**  |
| double ** | **[endVec](/documentation/code/darkbit_development/classes/classrandombasis/#variable-endvec)**  |

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

**Public Functions inherited from [RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| | **[RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/darkbit_development/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/darkbit_development/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/darkbit_development/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/darkbit_development/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/#function-~randombasis)**() |
| | **[RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/#function-randombasis)**(int nin, unsigned long long iin) |
| void | **[ChangeDim](/documentation/code/darkbit_development/classes/classrandombasis/#function-changedim)**(const int nin) |
| void | **[RandRot](/documentation/code/darkbit_development/classes/classrandombasis/#function-randrot)**() |
| double | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(double ** cin) |
| void | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(const double in, double * out) |
| void | **[RanMult](/documentation/code/darkbit_development/classes/classrandombasis/#function-ranmult)**(double * in, const double w, double * out) |
| double | **[Mag](/documentation/code/darkbit_development/classes/classrandombasis/#function-mag)**(double * a, double * a0) |
| void | **[Adjust](/documentation/code/darkbit_development/classes/classrandombasis/#function-adjust)**(double * a, const double lim, const int iin) |
| virtual | **[~RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/#function-~randombasis)**() |

**Protected Attributes inherited from [RandomBasis](/documentation/code/darkbit_development/classes/classrandombasis/)**

|                | Name           |
| -------------- | -------------- |
| double ** | **[currentVec](/documentation/code/darkbit_development/classes/classrandombasis/#variable-currentvec)**  |
| double ** | **[endVec](/documentation/code/darkbit_development/classes/classrandombasis/#variable-endvec)**  |

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

**Public Functions inherited from [BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/darkbit_development/classes/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/darkbit_development/classes/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Ran](/documentation/code/darkbit_development/classes/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/darkbit_development/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_development/classes/classran/#function-doub)**() |
| | **[Ran](/documentation/code/darkbit_development/classes/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/darkbit_development/classes/classran/#function-doub)**() |


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


**Reimplements**: [RandomBasis::operator++](/documentation/code/darkbit_development/classes/classrandombasis/#function-operator++)


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


**Reimplements**: [RandomBasis::operator++](/documentation/code/darkbit_development/classes/classrandombasis/#function-operator++)


-------------------------------

Updated on 2022-08-02 at 23:34:53 +0000