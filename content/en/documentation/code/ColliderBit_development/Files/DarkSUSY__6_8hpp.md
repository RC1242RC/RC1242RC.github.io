---
title: 'file shared_includes/DarkSUSY_6.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| | **[BE_FUNCTION](/documentation/code/files/darksusy__6_8hpp/#function-be-function)**(dsrdstart , void , (int &, double(&)[1000], double(&)[1000], int &, double(&)[1000], double(&)[1000], int &, double(&)[1000]) , "dsrdstart_" , "dsrdstart" ) |
| double double double int int int dsrdens | **[BE_VARIABLE](/documentation/code/files/darksusy__6_8hpp/#function-be-variable)**(ddcomlegacy , DS_DDCOMLEGACY , "ddcomlegacy_" , "ddcomlegacy" ) |
| double double double int int int dsrdens rdtime | **[BE_VARIABLE](/documentation/code/files/darksusy__6_8hpp/#function-be-variable)**(rdpars , DS_RDPARS , "rdpars_" , "rdpars" ) |
| double double double int int int dsrdens rdtime const double(&const | **[double](/documentation/code/files/darksusy__6_8hpp/#function-double)**(& ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| | **[void](/documentation/code/files/darksusy__6_8hpp/#variable-void)**  |
| double | **[double](/documentation/code/files/darksusy__6_8hpp/#variable-double)**  |
| double double double int int int | **[dsrdens_](/documentation/code/files/darksusy__6_8hpp/#variable-dsrdens-)**  |
| double double double int int int dsrdens | **[DS_RDTIME](/documentation/code/files/darksusy__6_8hpp/#variable-ds-rdtime)**  |
| double double double int int int dsrdens | **[rdtime_](/documentation/code/files/darksusy__6_8hpp/#variable-rdtime-)**  |

## Detailed Description


**Author**: 

  * Torsten Bringmann ([torsten.bringmann@fys.uio.no](mailto:torsten.bringmann@fys.uio.no)) 
  * Joakim Edsjo ([edsjo@fysik.su.se](mailto:edsjo@fysik.su.se)) 
  * Pat Scott ([pat.scott@uq.edu.au](mailto:pat.scott@uq.edu.au)) 


**Date**: 

  * 2018 September, 2019
  * 2018 September
  * 2020 September


Compile-time registration of common available functions and variables in all versions of the DarkSUSY 6 backend.

If you need to make version-specific changes, you will need to make copies of this header differentiated by a more specific version number than just the major revision (6).



------------------

Authors (add name and date if you modify):



------------------


## Functions Documentation

### function BE_FUNCTION

```
BE_FUNCTION(
    dsrdstart ,
    void ,
    (int &, double(&)[1000], double(&)[1000], int &, double(&)[1000], double(&)[1000], int &, double(&)[1000]) ,
    "dsrdstart_" ,
    "dsrdstart" 
)
```


### function BE_VARIABLE

```
double double double int int int dsrdens BE_VARIABLE(
    ddcomlegacy ,
    DS_DDCOMLEGACY ,
    "ddcomlegacy_" ,
    "ddcomlegacy" 
)
```


### function BE_VARIABLE

```
double double double int int int dsrdens rdtime BE_VARIABLE(
    rdpars ,
    DS_RDPARS ,
    "rdpars_" ,
    "rdpars" 
)
```


### function double

```
double double double int int int dsrdens rdtime const double(&const double(
    & 
)
```



## Attributes Documentation

### variable void

```
void;
```


### variable double

```
double double;
```


### variable dsrdens_

```
double double double int int int dsrdens_;
```


### variable DS_RDTIME

```
double double double int int int dsrdens DS_RDTIME;
```


### variable rdtime_

```
double double double int int int dsrdens rdtime_;
```



## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

// Functions used in DS frontend
BE_FUNCTION(dsinit, void, (), "dsinit_", "dsinit")

// Functions used in RelicDensity.cpp
BE_FUNCTION(dsanwx, double, (double&), "dsanwx_", "dsanwx")
BE_FUNCTION(dsrdcom, void, (), "dsrdcom_", "dsrdcom")
BE_FUNCTION(dsrdstart, void, (int&, double(&)[1000], double(&)[1000], int&, double(&)[1000], double(&)[1000], int&, double(&)[1000]), "dsrdstart_", "dsrdstart")
BE_FUNCTION(dsrdens, void, (double(*)(double&),double&,double&,int&,int&,int&), "dsrdens_", "dsrdens")

// Functions used in IndirectDetectionYields.cpp
BE_FUNCTION(dsanyield_sim, double, (double&,double&,int&,char*,int&,int&,int&), "dsanyield_sim_", "dsanyield_sim")

// Functions used in SunNeutrinos.cpp
BE_FUNCTION(dssenu_capsuntab, double, (const double&, const double&, const double&, const double&), "dssenu_capsuntab_", "cap_Sun_v0q0_isoscalar")

// Functions used by convenience functions
BE_FUNCTION(dsseyield_sim_ls, double, (const double&, const double&, const double&, const int&, const int&, const int&, const int&, const int&, const int&, const char*, const int&, const int&, const int&), "dsseyield_sim_ls_", "raw_nuyield_sim")

// Halo model common blocks
BE_VARIABLE(dshmcom, DS_HMCOM, "dshmcom_", "dshmcom")
BE_VARIABLE(dshmframevelcom, DS_HMFRAMEVELCOM, "dshmframevelcom_", "dshmframevelcom")
BE_VARIABLE(dshmisodf, DS_HMISODF, "dshmisodf_", "dshmisodf")
BE_VARIABLE(dshmnoclue, DS_HMNOCLUE, "dshmnoclue_", "dshmnoclue")

// Common blocks in the DarkSUSY core library
BE_VARIABLE(ddcomlegacy, DS_DDCOMLEGACY, "ddcomlegacy_", "ddcomlegacy") //DD
BE_VARIABLE(rdtime, DS_RDTIME,     "rdtime_",    "rdtime")    // RD timeout
BE_VARIABLE(rdpars, DS_RDPARS,     "rdpars_",    "rdpars")    // gRD Parameters

// Convenience functions (registration)
BE_CONV_FUNCTION(DS_neutral_h_decay_channels, std::vector<std::vector<str>>, (), "get_DS_neutral_h_decay_channels")
BE_CONV_FUNCTION(DS_charged_h_decay_channels, std::vector<std::vector<str>>, (), "get_DS_charged_h_decay_channels")
BE_CONV_FUNCTION(neutrino_yield, double, (const double&, const int&, void*&), "nuyield")
BE_CONV_FUNCTION(dsgenericwimp_nusetup, void, (const double(&)[29], const double(&)[29][3], const double(&)[15], const double(&)[3], const double&, const double&), "DS_nuyield_setup")
```


-------------------------------

Updated on 2022-08-01 at 12:13:27 +0000
