---
title: 'file frontends/Prospino_2_1.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BACKENDNAME](/documentation/code/files/prospino__2__1_8hpp/#define-backendname)**  |
|  | **[BACKENDLANG](/documentation/code/files/prospino__2__1_8hpp/#define-backendlang)**  |
|  | **[VERSION](/documentation/code/files/prospino__2__1_8hpp/#define-version)**  |
|  | **[SAFE_VERSION](/documentation/code/files/prospino__2__1_8hpp/#define-safe-version)**  |
|  | **[REFERENCE](/documentation/code/files/prospino__2__1_8hpp/#define-reference)**  |

## Detailed Description


**Author**: Anders Kvellestad ([a.kvellestad@imperial.ac.uk](mailto:a.kvellestad@imperial.ac.uk)) 

**Date**: 2019 March, Nov

Frontend header for the Prospino backend.

Compile-time registration of available functions and variables from this backend.



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define BACKENDNAME

```
#define BACKENDNAME Prospino
```


### define BACKENDLANG

```
#define BACKENDLANG Fortran
```


### define VERSION

```
#define VERSION 2.1
```


### define SAFE_VERSION

```
#define SAFE_VERSION 2_1
```


### define REFERENCE

```
#define REFERENCE Beenakker:1996ed
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#define BACKENDNAME Prospino
#define BACKENDLANG Fortran
#define VERSION 2.1
#define SAFE_VERSION 2_1
#define REFERENCE Beenakker:1996ed

// Load it
LOAD_LIBRARY

BE_ALLOW_MODELS(MSSM63atQ, MSSM63atMGUT, MSSM63atQ_mA, MSSM63atMGUT_mA)

// Import functions

// PROSPINO_GB(inlo,isq_ng_in,icoll_in,energy_in,i_error_in,final_state_in,ipart1_in,ipart2_in,isquark1_in,isquark2_in)
// __xx_prospino_subroutine_MOD_prospino_gb
BE_FUNCTION(prospino_gb_init, void, (Fstring<500>&), "C_prospino_gb_init", "prospino_gb_init")
BE_FUNCTION(prospino_gb, void, (Farray<Fdouble,0,6>&, Finteger&, Finteger&, Finteger&, Fdouble&, Finteger&, Fstring<2>&, Finteger&, Finteger&, Finteger&, Finteger&, Farray<Fdouble,1,20>&, Farray<Fdouble,0,99>&, Farray<Fdouble,1,2,1,2>&, Farray<Fdouble,1,2,1,2>&, Farray<Fdouble,1,4,1,4>&, Farray<Fdouble,1,2,1,2>&, Farray<Fdouble,1,2,1,2>&, Farray<Fdouble,1,2,1,2>&), "C_prospino_gb", "prospino_gb")

// A function pointer we have added to Prospino to point back to our function for error handling
BE_VARIABLE(ErrorHandler_cptr, fptr_void, "C_errorhandler_cptr", "prospino_errorhandler_cptr")

// Convenience functions (registration)
// BE_CONV_FUNCTION(run_prospino, map_str_dbl, (const SLHAstruct&, prospino_settings&), "prospino_LHC_xsec")
// BE_CONV_FUNCTION(run_prospino, map_str_dbl, (const SLHAstruct&, const PID_pair&, const Options&), "prospino_LHC_xsec")
BE_CONV_FUNCTION(prospino_run, map_str_dbl, (const PID_pair&, const Options&), "prospino_run")
BE_CONV_FUNCTION(prospino_run_alloptions, map_str_dbl, (const PID_pair&, const int&, const int&, const int&, const double&, const int&, const bool&), "prospino_run_alloptions")
BE_CONV_FUNCTION(prospino_read_slha1_input, void, (const SLHAstruct&), "prospino_read_slha1_input")




// Undefine macros to avoid conflict with other backends
#include "gambit/Backends/backend_undefs.hpp"
```


-------------------------------

Updated on 2022-08-01 at 12:13:35 +0000
