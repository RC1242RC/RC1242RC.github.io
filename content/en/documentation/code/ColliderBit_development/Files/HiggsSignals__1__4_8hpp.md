---
title: 'file frontends/HiggsSignals_1_4.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) | **[BE_FUNCTION](/documentation/code/files/higgssignals__1__4_8hpp/#function-be-function)**(HiggsBounds_neutral_input_part_HS , void , (double *, double *, int *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *) , "higgsbounds_neutral_input_part_" , "HiggsBounds_neutral_input_part_HS" ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) | **[void](/documentation/code/files/higgssignals__1__4_8hpp/#variable-void)**  |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) double double double double double double double double | **[higgsbounds_charged_input_](/documentation/code/files/higgssignals__1__4_8hpp/#variable-higgsbounds-charged-input-)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BACKENDNAME](/documentation/code/files/higgssignals__1__4_8hpp/#define-backendname)**  |
|  | **[BACKENDLANG](/documentation/code/files/higgssignals__1__4_8hpp/#define-backendlang)**  |
|  | **[VERSION](/documentation/code/files/higgssignals__1__4_8hpp/#define-version)**  |
|  | **[SAFE_VERSION](/documentation/code/files/higgssignals__1__4_8hpp/#define-safe-version)**  |
|  | **[REFERENCE](/documentation/code/files/higgssignals__1__4_8hpp/#define-reference)**  |

## Detailed Description


**Author**: 

  * Christopher Rogan 
  * Pat Scott


**Date**: Aug 2014

Frontend for HiggsSignals backend



------------------

Authors (add name and date if you modify):



------------------


## Functions Documentation

### function BE_FUNCTION

```
LOAD_LIBRARY BE_FUNCTION(
    HiggsBounds_neutral_input_part_HS ,
    void ,
    (double *, double *, int *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *, double *) ,
    "higgsbounds_neutral_input_part_" ,
    "HiggsBounds_neutral_input_part_HS" 
)
```



## Attributes Documentation

### variable void

```
LOAD_LIBRARY void;
```


### variable higgsbounds_charged_input_

```
LOAD_LIBRARY double double double double double double double double higgsbounds_charged_input_;
```



## Macros Documentation

### define BACKENDNAME

```
#define BACKENDNAME HiggsSignals
```


### define BACKENDLANG

```
#define BACKENDLANG FORTRAN
```


### define VERSION

```
#define VERSION 1.4
```


### define SAFE_VERSION

```
#define SAFE_VERSION 1_4
```


### define REFERENCE

```
#define REFERENCE Bechtle:2013xfa
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************


#define BACKENDNAME HiggsSignals
#define BACKENDLANG FORTRAN
#define VERSION 1.4
#define SAFE_VERSION 1_4
#define REFERENCE Bechtle:2013xfa

/* The following macro loads the library using dlopen
 * when this header file is included somewhere. */

LOAD_LIBRARY

/* Next we use macros BE_VARIABLE and BE_FUNCTION to load pointers
 * (using dlsym) to the variables and functions within the library.
 *
 * The macros also set up a minimal interface providing 'get/set'
 * functions for the library variables and function pointers
 * for the library functions.
 *
 * These functions are then wrapped in functors that the core can connect
 * to the modules via the rollcall system */

/* Syntax for BE_FUNCTION:
 * BE_FUNCTION([choose function name], [type], [arguement types], "[exact symbol name]", "[choose capability name]") */

BE_FUNCTION(initialize_HiggsSignals, void, (int&, int&, const char*), "initialize_higgssignals_", "initialize_HiggsSignals")
BE_FUNCTION(initialize_HiggsSignals_latestresults, void, (int&, int&), "initialize_higgssignals_latestresults_", "initialize_HiggsSignals_latestresults")
BE_FUNCTION(initialize_HiggsBounds_int_HS, void, (int&, int&, int&), "initialize_higgsbounds_int_", "initialize_HiggsBounds_int_HS")
BE_FUNCTION(setup_pdf, void, (int&), "setup_pdf_", "setup_pdf")
BE_FUNCTION(run_HiggsSignals, void, (int&, double&, double&, double&, int&, double&), "run_higgssignals_", "run_HiggsSignals")
BE_FUNCTION(HiggsSignals_neutral_input_MassUncertainty, void, (double*), "higgssignals_neutral_input_massuncertainty_", "HiggsSignals_neutral_input_MassUncertainty")
BE_FUNCTION(setup_rate_uncertainties, void, (double*, double*), "setup_rate_uncertainties_", "setup_rate_uncertainties")
BE_FUNCTION(finish_HiggsSignals, void, (), "finish_higgssignals_", "finish_HiggsSignals")
BE_FUNCTION(finish_HiggsBounds_HS, void, (), "finish_higgsbounds_", "finish_HiggsBounds_HS")

// input parameter functions
BE_FUNCTION(HiggsBounds_input_SLHA_HS, void, (const char*), "higgsbounds_input_slha_", "HiggsBounds_input_SLHA_HS")
BE_FUNCTION(HiggsBounds_neutral_input_part_HS, void, (double*, double*, int*, double*, double*, double*, double*,
                  double*, double*, double*, double*, double*, double*, double*,
                  double*, double*, double*, double*, double*, double*, double*,
                  double*, double*, double*, double*, double*, double*, double*,
                  double*, double*, double*, double*, double*, double*, double*,
                  double*, double*, double*), "higgsbounds_neutral_input_part_", "HiggsBounds_neutral_input_part_HS")
BE_FUNCTION(HiggsBounds_charged_input_HS, void, (double*, double*, double*, double*,
             double*, double*, double*, double*), "higgsbounds_charged_input_", "HiggsBounds_charged_input_HS")

// Undefine macros to avoid conflict with other backends
#include "gambit/Backends/backend_undefs.hpp"
```


-------------------------------

Updated on 2022-08-01 at 12:13:27 +0000
