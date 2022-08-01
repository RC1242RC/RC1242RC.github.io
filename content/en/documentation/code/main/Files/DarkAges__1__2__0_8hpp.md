---
title: 'file frontends/DarkAges_1_2_0.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BACKENDNAME](/documentation/code/files/darkages__1__2__0_8hpp/#define-backendname)**  |
|  | **[BACKENDLANG](/documentation/code/files/darkages__1__2__0_8hpp/#define-backendlang)**  |
|  | **[VERSION](/documentation/code/files/darkages__1__2__0_8hpp/#define-version)**  |
|  | **[SAFE_VERSION](/documentation/code/files/darkages__1__2__0_8hpp/#define-safe-version)**  |
|  | **[REFERENCE](/documentation/code/files/darkages__1__2__0_8hpp/#define-reference)**  |

## Detailed Description


**Author**: Patrick Stoecker ([stoecker@physik.rwth-aachen.de](mailto:stoecker@physik.rwth-aachen.de)) 

**Date**: 2019 Oct

Frontend header for the DarkAges backend

Compile-time registration of available functions and variables from this backend.



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define BACKENDNAME

```
#define BACKENDNAME DarkAges
```


### define BACKENDLANG

```
#define BACKENDLANG Python
```


### define VERSION

```
#define VERSION 1.2.0
```


### define SAFE_VERSION

```
#define SAFE_VERSION 1_2_0
```


### define REFERENCE

```
#define REFERENCE Stocker:2018avm
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************


#define BACKENDNAME DarkAges
#define BACKENDLANG Python
#define VERSION 1.2.0
#define SAFE_VERSION 1_2_0
#define REFERENCE Stocker:2018avm

LOAD_LIBRARY

BE_ALLOW_MODELS(AnnihilatingDM_general, DecayingDM_general)

/* Syntax for BE_FUNCTION (same as for any other backend):
 * BE_FUNCTION([choose function name], [type], [arguement types], "[exact symbol name]", "[choose capability name]")
 */

/* --- NONE --- */

/* Syntax for BE_VARIABLE:
 * BE_VARIABLE([name], [type], "[exact symbol name]", "[choose capability name]")
 * */

 /* --- NONE --- */

/* We use BE_INI_DEPENDENCY, since DarkAges needs the spectra of injected electrons, positrons and photons
 * to calculate f(z)
 * */

#ifdef HAVE_PYBIND11

  BE_INI_DEPENDENCY(energy_injection_spectrum, DarkAges::Energy_injection_spectrum)

  /* Now register any convenience functions and wrap them in functors.
   *
   * Syntax for BE_CONV_FUNCTION:
   * BE_CONV_FUNCTION([function name], type, (arguments), "[choose capability name]") */

  BE_CONV_FUNCTION(get_energy_injection_efficiency_table, DarkAges::Energy_injection_efficiency_table, (), "get_energy_injection_efficiency_table")

#endif

// Undefine macros to avoid conflict with other backends
#include "gambit/Backends/backend_undefs.hpp"
```


-------------------------------

Updated on 2022-08-01 at 12:13:20 +0000
