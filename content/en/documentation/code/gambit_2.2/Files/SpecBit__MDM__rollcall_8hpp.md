---
title: 'file SpecBit/SpecBit_MDM_rollcall.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CAPABILITY](/documentation/code/gambit_2.2/files/specbit__mdm__rollcall_8hpp/#define-capability)**  |
|  | **[FUNCTION](/documentation/code/gambit_2.2/files/specbit__mdm__rollcall_8hpp/#define-function)**  |
|  | **[CAPABILITY](/documentation/code/gambit_2.2/files/specbit__mdm__rollcall_8hpp/#define-capability)**  |
|  | **[FUNCTION](/documentation/code/gambit_2.2/files/specbit__mdm__rollcall_8hpp/#define-function)**  |

## Detailed Description


**Author**: James McKay ([j.mckay14@imperial.ac.uk](mailto:j.mckay14@imperial.ac.uk)) 

**Date**: 2018 Mar

Rollcall declarations for module functions contained in [SpecBit_MDM.cpp](/documentation/code/gambit_2.2/files/specbit__mdm_8cpp/#file-specbit-mdm.cpp)



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define CAPABILITY

```
#define CAPABILITY MDM_spectrum
```


### define FUNCTION

```
#define FUNCTION get_MDM_spectrum_as_map
```


### define CAPABILITY

```
#define CAPABILITY MDM_spectrum
```


### define FUNCTION

```
#define FUNCTION get_MDM_spectrum_as_map
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Rollcall declarations for module functions
///  contained in SpecBit_MDM.cpp
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author James McKay
///          (j.mckay14@imperial.ac.uk)
///  \date 2018 Mar
///
///  *********************************************

#ifndef __SpecBit_MDM_hpp__
#define __SpecBit_MDM_hpp__

  #define CAPABILITY MDM_spectrum
  START_CAPABILITY
    #if(FS_MODEL_MDM_IS_BUILT)
    #define FUNCTION get_MDM_spectrum
    START_FUNCTION(Spectrum)
    DEPENDENCY(SMINPUTS, SMInputs)
    ALLOW_MODEL_DEPENDENCE(StandardModel_Higgs_running, MDM)
    MODEL_GROUP(higgs_running, (StandardModel_Higgs_running))
    MODEL_GROUP(mdm, (MDM))
    ALLOW_MODEL_COMBINATION(higgs_running, mdm)
    #undef FUNCTION
        #endif

    // Convert spectrum into a standard map so that it can be printed
    #define FUNCTION get_MDM_spectrum_as_map
    START_FUNCTION(map_str_dbl) // Just a string to double map. Can't have commas in macro input
    DEPENDENCY(MDM_spectrum, Spectrum)
    #undef FUNCTION

  #undef CAPABILITY

  // Find scale at which spectrum becomes non-perturbative
  #define CAPABILITY scale_of_nonperturbativity

    #define FUNCTION find_non_perturb_scale_MDM
    START_FUNCTION(double)
    DEPENDENCY(MDM_spectrum, Spectrum)
    ALLOW_MODELS(MDM)
    #undef FUNCTION

  #undef CAPABILITY


#endif
```


-------------------------------

Updated on 2022-08-03 at 07:19:44 +0000
