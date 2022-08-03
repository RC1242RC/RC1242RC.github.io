---
title: 'file frontends/nulike_1_0_7.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BACKENDNAME](/documentation/code/main/files/nulike__1__0__7_8hpp/#define-backendname)**  |
|  | **[BACKENDLANG](/documentation/code/main/files/nulike__1__0__7_8hpp/#define-backendlang)**  |
|  | **[VERSION](/documentation/code/main/files/nulike__1__0__7_8hpp/#define-version)**  |
|  | **[SAFE_VERSION](/documentation/code/main/files/nulike__1__0__7_8hpp/#define-safe-version)**  |
|  | **[REFERENCE](/documentation/code/main/files/nulike__1__0__7_8hpp/#define-reference)**  |

## Detailed Description


**Author**: Pat Scott ([patscott@physics.mcgill.ca](mailto:patscott@physics.mcgill.ca)) 

**Date**: 

  * 2013 May 
  * 2014 March 
  * 2015 Aug


Frontend header for the nulike backend.

Compile-time registration of available functions and variables from this backend.



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define BACKENDNAME

```
#define BACKENDNAME nulike
```


### define BACKENDLANG

```
#define BACKENDLANG Fortran
```


### define VERSION

```
#define VERSION 1.0.7
```


### define SAFE_VERSION

```
#define SAFE_VERSION 1_0_7
```


### define REFERENCE

```
#define REFERENCE IceCube:2012fvn,IceCube:2016yoy
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Frontend header for the nulike backend.
///
///  Compile-time registration of available
///  functions and variables from this backend.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Pat Scott
///          (patscott@physics.mcgill.ca)
///  \date 2013 May
///  \date 2014 March
///  \date 2015 Aug
///
///  *********************************************

#define BACKENDNAME nulike
#define BACKENDLANG Fortran
#define VERSION 1.0.7
#define SAFE_VERSION 1_0_7
#define REFERENCE IceCube:2012fvn,IceCube:2016yoy

// Load it
LOAD_LIBRARY

// Declare the relevant functions
#include "gambit/Backends/frontends/shared_includes/nulike_1_0.hpp"

// Undefine macros to avoid conflict with other backends
#include "gambit/Backends/backend_undefs.hpp"
```


-------------------------------

Updated on 2022-08-03 at 03:17:04 +0000
