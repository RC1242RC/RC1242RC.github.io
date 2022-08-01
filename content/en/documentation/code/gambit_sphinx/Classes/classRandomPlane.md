---
title: 'class RandomPlane'

description: "[No description available]"

---








[No description available]

Inherits from [AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/), [AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/), [BasicDevs](/documentation/code/gambit_sphinxclasses/classbasicdevs/), [Cholesky](/documentation/code/gambit_sphinxclasses/classcholesky/), [Ran](/documentation/code/gambit_sphinxclasses/classran/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[RandomPlane](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-randomplane)**(const int projin, const int nin, const double din, const double alim, const double alimt, unsigned long long iin) |
| double | **[WalkDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-walkdev)**() |
| double | **[TransDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-transdev)**() |
| double | **[KWalkDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-kwalkdev)**() |
| bool | **[KWalkDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-kwalkdev)**(double & Z) |
| double | **[WalkDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-walkdev)**(double * ptrOut, double * ptr, double * ptr0) |
| double | **[TransDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-transdev)**(double * ptrOut, double * ptr, double * ptr0) |
| void | **[Mult](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-mult)**(double * ptrOut, double * ptr, double * ptr0, const double Z) |
| void | **[Mult2](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-mult2)**(double * ptrOut, double * ptr, double * ptr0, const double Z) |
| void | **[RandRot](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-randrot)**(const int start =0) |
| void | **[RandRot](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-randrot)**(const int start, const int end) |
| int | **[Dim](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-dim)**() const |
| | **[~RandomPlane](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-~randomplane)**() |
| | **[RandomPlane](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-randomplane)**(const int projin, const int nin, const double din, const double alim, const double alimt, unsigned long long iin) |
| double | **[WalkDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-walkdev)**() |
| double | **[TransDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-transdev)**() |
| double | **[KWalkDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-kwalkdev)**() |
| bool | **[KWalkDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-kwalkdev)**(double & Z) |
| double | **[WalkDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-walkdev)**(double * ptrOut, double * ptr, double * ptr0) |
| double | **[TransDev](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-transdev)**(double * ptrOut, double * ptr, double * ptr0) |
| void | **[Mult2](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-mult2)**(double * ptrOut, double * ptr, double * ptr0, const double Z) |
| void | **[Mult](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-mult)**(double * ptrOut, double * ptr, double * ptr0, const double Z) |
| void | **[HopBlow](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-hopblow)**(double * ptrOut, double * ptrIn, double * ptr, double * ptr0) |
| void | **[RandRot](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-randrot)**(const int start =0) |
| void | **[RandRot](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-randrot)**(const int start, const int end) |
| int | **[Dim](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-dim)**() const |
| | **[~RandomPlane](/documentation/code/gambit_sphinxclasses/classrandomplane/#function-~randomplane)**() |

## Additional inherited members

**Public Functions inherited from [AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| void | **[MultiDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |
| | **[AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| double | **[MultiDevDist](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidevdist)**() |
| double | **[MultiDevPDF](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidevpdf)**(double r, int dim) |
| void | **[MultiDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |

**Public Functions inherited from [AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| void | **[MultiDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |
| | **[AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-advancedevs)**(int nin, double din, unsigned long long iin) |
| | **[AdvanceDevs](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-advancedevs)**(double ** vvar, const int nin, double din, unsigned long long iin) |
| double | **[MultiDevDist](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidevdist)**() |
| double | **[MultiDevPDF](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidevpdf)**(double r, int dim) |
| void | **[MultiDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidev)**(double * pin, double * p0) |
| void | **[MultiDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-multidev)**(double ** cvar, double * pin, double * p0) |
| void | **[EllipseDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-ellipsedev)**(double * pin, double * p0, double fin) |
| void | **[EllipseDev](/documentation/code/gambit_sphinxclasses/classadvancedevs/#function-ellipsedev)**(double ** cvar, double * pin, double * p0, double fin) |

**Public Functions inherited from [BasicDevs](/documentation/code/gambit_sphinxclasses/classbasicdevs/)**

|                | Name           |
| -------------- | -------------- |
| | **[BasicDevs](/documentation/code/gambit_sphinxclasses/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/gambit_sphinxclasses/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/gambit_sphinxclasses/classbasicdevs/#function-expdev)**() |
| | **[BasicDevs](/documentation/code/gambit_sphinxclasses/classbasicdevs/#function-basicdevs)**(unsigned long long i) |
| double | **[Dev](/documentation/code/gambit_sphinxclasses/classbasicdevs/#function-dev)**() |
| double | **[ExpDev](/documentation/code/gambit_sphinxclasses/classbasicdevs/#function-expdev)**() |

**Public Functions inherited from [Cholesky](/documentation/code/gambit_sphinxclasses/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| | **[Cholesky](/documentation/code/gambit_sphinxclasses/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/gambit_sphinxclasses/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/gambit_sphinxclasses/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/gambit_sphinxclasses/classcholesky/#function-entermat)**(double ** a) |
| void | **[EnterMat](/documentation/code/gambit_sphinxclasses/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/gambit_sphinxclasses/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/gambit_sphinxclasses/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/gambit_sphinxclasses/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/gambit_sphinxclasses/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/gambit_sphinxclasses/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/gambit_sphinxclasses/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/gambit_sphinxclasses/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/gambit_sphinxclasses/classcholesky/#function-~cholesky)**() |
| | **[Cholesky](/documentation/code/gambit_sphinxclasses/classcholesky/#function-cholesky)**(const int nin) |
| | **[Cholesky](/documentation/code/gambit_sphinxclasses/classcholesky/#function-cholesky)**(double ** a, const int nin) |
| bool | **[EnterMatM](/documentation/code/gambit_sphinxclasses/classcholesky/#function-entermatm)**(double ** a, const int min) |
| bool | **[EnterMat](/documentation/code/gambit_sphinxclasses/classcholesky/#function-entermat)**(double ** a) |
| bool | **[EnterMat](/documentation/code/gambit_sphinxclasses/classcholesky/#function-entermat)**(const std::vector< std::vector< double > > & a) |
| void | **[EnterMat](/documentation/code/gambit_sphinxclasses/classcholesky/#function-entermat)**(double ** a, int nin) |
| void | **[ElMult](/documentation/code/gambit_sphinxclasses/classcholesky/#function-elmult)**(double * y, double * b) |
| void | **[ElMult](/documentation/code/gambit_sphinxclasses/classcholesky/#function-elmult)**(double * y) |
| void | **[Solve](/documentation/code/gambit_sphinxclasses/classcholesky/#function-solve)**(double * b, double * x) |
| double | **[Square](/documentation/code/gambit_sphinxclasses/classcholesky/#function-square)**(double * y, double * y0) |
| double | **[Square](/documentation/code/gambit_sphinxclasses/classcholesky/#function-square)**(double * y, double * y0, int * map) |
| void | **[Inverse](/documentation/code/gambit_sphinxclasses/classcholesky/#function-inverse)**(double ** ainv) |
| double | **[DetSqrt](/documentation/code/gambit_sphinxclasses/classcholesky/#function-detsqrt)**() |
| | **[~Cholesky](/documentation/code/gambit_sphinxclasses/classcholesky/#function-~cholesky)**() |

**Protected Attributes inherited from [Cholesky](/documentation/code/gambit_sphinxclasses/classcholesky/)**

|                | Name           |
| -------------- | -------------- |
| int | **[num](/documentation/code/gambit_sphinxclasses/classcholesky/#variable-num)**  |

**Public Functions inherited from [Ran](/documentation/code/gambit_sphinxclasses/classran/)**

|                | Name           |
| -------------- | -------------- |
| | **[Ran](/documentation/code/gambit_sphinxclasses/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/gambit_sphinxclasses/classran/#function-doub)**() |
| | **[Ran](/documentation/code/gambit_sphinxclasses/classran/#function-ran)**(unsigned long long int ) |
| double | **[Doub](/documentation/code/gambit_sphinxclasses/classran/#function-doub)**() |


## Public Functions Documentation

### function RandomPlane

```
inline RandomPlane(
    const int projin,
    const int nin,
    const double din,
    const double alim,
    const double alimt,
    unsigned long long iin
)
```


### function WalkDev

```
inline double WalkDev()
```


### function TransDev

```
inline double TransDev()
```


### function KWalkDev

```
inline double KWalkDev()
```


### function KWalkDev

```
inline bool KWalkDev(
    double & Z
)
```


### function WalkDev

```
inline double WalkDev(
    double * ptrOut,
    double * ptr,
    double * ptr0
)
```


### function TransDev

```
inline double TransDev(
    double * ptrOut,
    double * ptr,
    double * ptr0
)
```


### function Mult

```
inline void Mult(
    double * ptrOut,
    double * ptr,
    double * ptr0,
    const double Z
)
```


### function Mult2

```
inline void Mult2(
    double * ptrOut,
    double * ptr,
    double * ptr0,
    const double Z
)
```


### function RandRot

```
inline void RandRot(
    const int start =0
)
```


### function RandRot

```
inline void RandRot(
    const int start,
    const int end
)
```


### function Dim

```
inline int Dim() const
```


### function ~RandomPlane

```
inline ~RandomPlane()
```


### function RandomPlane

```
inline RandomPlane(
    const int projin,
    const int nin,
    const double din,
    const double alim,
    const double alimt,
    unsigned long long iin
)
```


### function WalkDev

```
inline double WalkDev()
```


### function TransDev

```
inline double TransDev()
```


### function KWalkDev

```
inline double KWalkDev()
```


### function KWalkDev

```
inline bool KWalkDev(
    double & Z
)
```


### function WalkDev

```
inline double WalkDev(
    double * ptrOut,
    double * ptr,
    double * ptr0
)
```


### function TransDev

```
inline double TransDev(
    double * ptrOut,
    double * ptr,
    double * ptr0
)
```


### function Mult2

```
inline void Mult2(
    double * ptrOut,
    double * ptr,
    double * ptr0,
    const double Z
)
```


### function Mult

```
inline void Mult(
    double * ptrOut,
    double * ptr,
    double * ptr0,
    const double Z
)
```


### function HopBlow

```
inline void HopBlow(
    double * ptrOut,
    double * ptrIn,
    double * ptr,
    double * ptr0
)
```


### function RandRot

```
inline void RandRot(
    const int start =0
)
```


### function RandRot

```
inline void RandRot(
    const int start,
    const int end
)
```


### function Dim

```
inline int Dim() const
```


### function ~RandomPlane

```
inline ~RandomPlane()
```


-------------------------------

Updated on 2022-08-01 at 17:31:46 +0000