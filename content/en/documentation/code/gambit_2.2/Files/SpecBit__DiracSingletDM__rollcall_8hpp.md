---
title: 'file SpecBit/SpecBit_DiracSingletDM_rollcall.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CAPABILITY](/documentation/code/gambit_2.2/files/specbit__diracsingletdm__rollcall_8hpp/#define-capability)**  |
|  | **[FUNCTION](/documentation/code/gambit_2.2/files/specbit__diracsingletdm__rollcall_8hpp/#define-function)**  |
|  | **[FUNCTION](/documentation/code/gambit_2.2/files/specbit__diracsingletdm__rollcall_8hpp/#define-function)**  |

## Detailed Description


**Author**: Ankit Beniwal ([ankit.beniwal@adelaide.edu.au](mailto:ankit.beniwal@adelaide.edu.au)) 

**Date**: 

  * 2016 Aug, Nov 
  * 2017 Jun


Rollcall declarations for module functions contained in [SpecBit_DiracSingletDM.cpp](/documentation/code/gambit_2.2/files/specbit__diracsingletdm_8cpp/#file-specbit-diracsingletdm.cpp)



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define CAPABILITY

```
#define CAPABILITY DiracSingletDM_Z2_spectrum
```


### define FUNCTION

```
#define FUNCTION get_DiracSingletDM_Z2_spectrum
```


### define FUNCTION

```
#define FUNCTION get_DiracSingletDM_Z2_spectrum
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Rollcall declarations for module functions
///  contained in SpecBit_DiracSingletDM.cpp
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Ankit Beniwal
///          (ankit.beniwal@adelaide.edu.au)
///    \date 2016 Aug, Nov
///    \date 2017 Jun
///
///  *********************************************

#ifndef __SpecBit_DiracSingletDM_Z2_hpp__
#define __SpecBit_DiracSingletDM_Z2_hpp__

  // Spectrum object for DiracSingletDM_Z2 model  (tree-level masses)
  #define CAPABILITY DiracSingletDM_Z2_spectrum
  START_CAPABILITY

    // Create Spectrum object from SMInputs structs, SM Higgs parameters,
    // and the DiracSingletDM_Z2 parameters
    #define FUNCTION get_DiracSingletDM_Z2_spectrum
    START_FUNCTION(Spectrum)
    DEPENDENCY(SMINPUTS, SMInputs)
    ALLOW_MODEL_DEPENDENCE(StandardModel_Higgs, DiracSingletDM_Z2)
    MODEL_GROUP(higgs,   (StandardModel_Higgs))
    MODEL_GROUP(dirac,   (DiracSingletDM_Z2))
    MODEL_GROUP(dirac_sps,   (DiracSingletDM_Z2_sps))
    ALLOW_MODEL_COMBINATION(higgs, dirac)
    ALLOW_MODEL_COMBINATION(higgs, dirac_sps)
    #undef FUNCTION

    // Convert spectrum into a standard map so that it can be printed
    #define FUNCTION get_DiracSingletDM_Z2_spectrum_as_map
    START_FUNCTION(map_str_dbl) // Just a string to double map. Can't have commas in macro input
    DEPENDENCY(DiracSingletDM_Z2_spectrum, Spectrum)
    #undef FUNCTION

  #undef CAPABILITY

#endif
```


-------------------------------

Updated on 2022-08-03 at 07:19:44 +0000
