---
title: 'class Gambit::DarkBit::AxionInterpolator'

description: "[No description available]"

---








[No description available]

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-axioninterpolator)**() |
| | **[AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-axioninterpolator)**(const std::vector< double > x, const std::vector< double > y, [InterpolationOptions1D](/documentation/code/main/namespaces/namespacegambit_1_1darkbit/#enum-interpolationoptions1d) type =InterpolationOptions1D::linear) |
| | **[AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-axioninterpolator)**(std::string file, [InterpolationOptions1D](/documentation/code/main/namespaces/namespacegambit_1_1darkbit/#enum-interpolationoptions1d) type =InterpolationOptions1D::linear) |
| [AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/) & | **[operator=](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-operator=)**([AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/) && interp) |
| | **[~AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-~axioninterpolator)**() |
| | **[AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-axioninterpolator)**(const [AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/) & ) =delete |
| [AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/) | **[operator=](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-operator=)**(const [AxionInterpolator](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/) & ) =delete |
| double | **[interpolate](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-interpolate)**(double x) |
| double | **[lower](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-lower)**() |
| double | **[upper](/documentation/code/main/classes/classgambit_1_1darkbit_1_1axioninterpolator/#function-upper)**() |

## Public Functions Documentation

### function AxionInterpolator

```
AxionInterpolator()
```


### function AxionInterpolator

```
AxionInterpolator(
    const std::vector< double > x,
    const std::vector< double > y,
    InterpolationOptions1D type =InterpolationOptions1D::linear
)
```


### function AxionInterpolator

```
AxionInterpolator(
    std::string file,
    InterpolationOptions1D type =InterpolationOptions1D::linear
)
```


### function operator=

```
AxionInterpolator & operator=(
    AxionInterpolator && interp
)
```


### function ~AxionInterpolator

```
~AxionInterpolator()
```


### function AxionInterpolator

```
AxionInterpolator(
    const AxionInterpolator & 
) =delete
```


### function operator=

```
AxionInterpolator operator=(
    const AxionInterpolator & 
) =delete
```


### function interpolate

```
double interpolate(
    double x
)
```


### function lower

```
double lower()
```


### function upper

```
double upper()
```


-------------------------------

Updated on 2022-08-03 at 12:57:56 +0000