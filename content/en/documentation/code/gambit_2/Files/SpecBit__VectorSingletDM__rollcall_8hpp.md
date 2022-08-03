---
title: 'file SpecBit/SpecBit_VectorSingletDM_rollcall.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CAPABILITY](/documentation/code/gambit_2/files/specbit__vectorsingletdm__rollcall_8hpp/#define-capability)**  |
|  | **[FUNCTION](/documentation/code/gambit_2/files/specbit__vectorsingletdm__rollcall_8hpp/#define-function)**  |
|  | **[FUNCTION](/documentation/code/gambit_2/files/specbit__vectorsingletdm__rollcall_8hpp/#define-function)**  |

## Detailed Description


**Author**: Ankit Beniwal ([ankit.beniwal@adelaide.edu.au](mailto:ankit.beniwal@adelaide.edu.au)) 

**Date**: 2016 Aug, 2017 Jun

Rollcall declarations for module functions contained in [SpecBit_VectorSingletDM.cpp](/documentation/code/gambit_2/files/specbit__vectorsingletdm_8cpp/#file-specbit-vectorsingletdm.cpp)



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define CAPABILITY

```
#define CAPABILITY VectorSingletDM_Z2_spectrum
```


### define FUNCTION

```
#define FUNCTION get_VectorSingletDM_Z2_spectrum
```


### define FUNCTION

```
#define FUNCTION get_VectorSingletDM_Z2_spectrum
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Rollcall declarations for module functions
///  contained in SpecBit_VectorSingletDM.cpp
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Ankit Beniwal
///          (ankit.beniwal@adelaide.edu.au)
///    \date 2016 Aug, 2017 Jun
///
///  *********************************************

#ifndef __SpecBit_VectorSingletDM_Z2_hpp__
#define __SpecBit_VectorSingletDM_Z2_hpp__

  // Spectrum object for VectorSingletDM_Z2 model  (tree-level masses)
  #define CAPABILITY VectorSingletDM_Z2_spectrum
  START_CAPABILITY

    // Create Spectrum object from SMInputs structs, SM Higgs parameters,
    // and the VectorSingletDM_Z2 parameters
    #define FUNCTION get_VectorSingletDM_Z2_spectrum
    START_FUNCTION(Spectrum)
    DEPENDENCY(SMINPUTS, SMInputs)
    ALLOW_MODEL_DEPENDENCE(StandardModel_Higgs, VectorSingletDM_Z2)
    MODEL_GROUP(higgs,   (StandardModel_Higgs))
    MODEL_GROUP(vector, (VectorSingletDM_Z2))
    ALLOW_MODEL_COMBINATION(higgs, vector)
    #undef FUNCTION

    // Convert spectrum into a standard map so that it can be printed
    #define FUNCTION get_VectorSingletDM_Z2_spectrum_as_map
    START_FUNCTION(map_str_dbl) // Just a string to double map. Can't have commas in macro input
    DEPENDENCY(VectorSingletDM_Z2_spectrum, Spectrum)
    #undef FUNCTION

  #undef CAPABILITY

#endif
```


-------------------------------

Updated on 2022-08-03 at 06:57:09 +0000
