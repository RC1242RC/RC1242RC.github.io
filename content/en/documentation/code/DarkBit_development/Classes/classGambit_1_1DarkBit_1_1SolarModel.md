---
title: 'class Gambit::DarkBit::SolarModel'

description: "[No description available]"

---








[No description available]

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SolarModel](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#function-solarmodel)**() |
| | **[SolarModel](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#function-solarmodel)**(std::string file) |
| | **[~SolarModel](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#function-~solarmodel)**() |
| [SolarModel](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/) & | **[operator=](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#function-operator=)**([SolarModel](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/) && model) |
| | **[SolarModel](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#function-solarmodel)**(const [SolarModel](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/) & ) =delete |
| [SolarModel](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/) | **[operator=](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#function-operator=)**(const [SolarModel](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/) & ) =delete |
| double | **[kappa_squared](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#function-kappa-squared)**(double r) |
| double | **[temperature_in_keV](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#function-temperature-in-kev)**(double r) |
| double | **[omega_pl_squared](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#function-omega-pl-squared)**(double r) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| double | **[r_lo](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#variable-r-lo)**  |
| double | **[r_hi](/documentation/code/darkbit_development/classes/classgambit_1_1darkbit_1_1solarmodel/#variable-r-hi)**  |

## Public Functions Documentation

### function SolarModel

```
SolarModel()
```


### function SolarModel

```
SolarModel(
    std::string file
)
```


### function ~SolarModel

```
~SolarModel()
```


### function operator=

```
SolarModel & operator=(
    SolarModel && model
)
```


### function SolarModel

```
SolarModel(
    const SolarModel & 
) =delete
```


### function operator=

```
SolarModel operator=(
    const SolarModel & 
) =delete
```


### function kappa_squared

```
double kappa_squared(
    double r
)
```


### function temperature_in_keV

```
double temperature_in_keV(
    double r
)
```


### function omega_pl_squared

```
double omega_pl_squared(
    double r
)
```


## Public Attributes Documentation

### variable r_lo

```
double r_lo;
```


### variable r_hi

```
double r_hi;
```


-------------------------------

Updated on 2022-08-03 at 02:29:17 +0000