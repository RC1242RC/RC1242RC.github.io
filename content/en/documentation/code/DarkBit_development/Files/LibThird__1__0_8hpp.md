---
title: 'file frontends/LibThird_1_0.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BACKENDNAME](/documentation/code/files/libthird__1__0_8hpp/#define-backendname)**  |
|  | **[BACKENDLANG](/documentation/code/files/libthird__1__0_8hpp/#define-backendlang)**  |
|  | **[VERSION](/documentation/code/files/libthird__1__0_8hpp/#define-version)**  |
|  | **[SAFE_VERSION](/documentation/code/files/libthird__1__0_8hpp/#define-safe-version)**  |
|  | **[REFERENCE](/documentation/code/files/libthird__1__0_8hpp/#define-reference)**  |

## Detailed Description


**Author**: Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 

**Date**: 2017 Dec

Example of how to use the macros in '[backend_macros.hpp](/documentation/code/files/backend__macros_8hpp/#file-backend-macros.hpp)' to set up a frontend for a Python library.



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define BACKENDNAME

```
#define BACKENDNAME LibThird
```


### define BACKENDLANG

```
#define BACKENDLANG Python2
```


### define VERSION

```
#define VERSION 1.0
```


### define SAFE_VERSION

```
#define SAFE_VERSION 1_0
```


### define REFERENCE

```
#define REFERENCE GAMBIT:2017yxo
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************


#define BACKENDNAME LibThird
#define BACKENDLANG Python2
#define VERSION 1.0
#define SAFE_VERSION 1_0
#define REFERENCE GAMBIT:2017yxo

/* The following macro imports the module in the Python interpreter
 * when this header file is included somewhere. */

LOAD_LIBRARY

/* Next we use macros BE_VARIABLE and BE_FUNCTION to extract pointers
 * to the variables and functions within the Python module.
 *
 * The macros create functors that wrap the library variables and functions.
 * These are used by the Core for dependency resolution and to set up a suitable
 * interface to the library functions/variables at module level. */

/* Syntax for BE_FUNCTION (same as for any other backend):
 * BE_FUNCTION([choose function name], [type], [arguement types], "[exact symbol name]", "[choose capability name]")
 */

BE_FUNCTION(initialize, void, (int), "initialize", "initialize_capability")
BE_FUNCTION(someFunction, void, (), "someFunction", "someFunction")
BE_FUNCTION(returnResult, double, (), "returnResult", "returnResult_capability")
BE_FUNCTION(someOtherFunction, double, (double), "sub_module.someOtherFunction", "someOtherFunction")

/* We have now created the following:
 *
 * - Function pointers
 * Gambit::Backends::LibThird::initialize       type: void (*)(int)
 * Gambit::Backends::LibThird::someFunction     type: void (*)()
 * Gambit::Backends::LibThird::returnResult     type: double (*)()
 *
 * - Functors
 * Gambit::Backends::LibThird::Functown::initialize       type: Gambit::backend_functor<void,int>
 * Gambit::Backends::LibThird::Functown::someFunction     type: Gambit::backend_functor<void>
 * Gambit::Backends::LibThird::Functown::returnResult     type: Gambit::backend_functor<double>  */


/* Syntax for BE_VARIABLE:
 * BE_VARIABLE([name], [type], "[exact symbol name]", "[choose capability name]")
 * */

BE_VARIABLE(SomeInt, int, "someInt", "SomeInt")
BE_VARIABLE(SomeDouble, double, "someDouble", "SomeDouble")
BE_VARIABLE(SomeOtherInt, int, "sub_module.someOtherInt", "SomeOtherInt")

/* We have now created the following:
 *
 * - Pointers
 * Gambit::Backends::LibFirst::SomeInt      type: int*
 * Gambit::Backends::LibFirst::SomeDouble   type: double*
 *
 * - Functors
 * Gambit::Backends::LibFirst::Functown::SomeInt      type: Gambit::backend_functor<int>
 * Gambit::Backends::LibFirst::Functown::SomeDouble   type: Gambit::backend_functor<double> */


/* At this point we have a minimal interface to the loaded library.
 * Any additional convenience functions could be constructed below
 * using the available pointers. All convenience functions must be
 * registred/wrapped via the macro BE_CONV_FUNCTION Implementation
 * of convenience functions can be found in LibThird_1.1.cpp. */

/* Now register any convenience functions and wrap them in functors.
 *
 * Syntax for BE_CONV_FUNCTION:
 * BE_CONV_FUNCTION([function name], type, (arguments), "[choose capability name]") */

BE_CONV_FUNCTION(awesomenessNotByAnders, double, (int), "awesomeness")

// Undefine macros to avoid conflict with other backends
#include "gambit/Backends/backend_undefs.hpp"
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
