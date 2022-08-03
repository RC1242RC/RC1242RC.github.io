---
title: 'file vevacious_1_0/include/gambit/Backends/backend_types/vevacious_1_0/identification.hpp'

description: "[No description available]"

---






[No description available]

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BACKENDNAME](/documentation/code/main/files/include_2gambit_2backends_2backend__types_2vevacious__1__0_2identification_8hpp/#define-backendname)**  |
|  | **[BACKENDLANG](/documentation/code/main/files/include_2gambit_2backends_2backend__types_2vevacious__1__0_2identification_8hpp/#define-backendlang)**  |
|  | **[VERSION](/documentation/code/main/files/include_2gambit_2backends_2backend__types_2vevacious__1__0_2identification_8hpp/#define-version)**  |
|  | **[SAFE_VERSION](/documentation/code/main/files/include_2gambit_2backends_2backend__types_2vevacious__1__0_2identification_8hpp/#define-safe-version)**  |
|  | **[REFERENCE](/documentation/code/main/files/include_2gambit_2backends_2backend__types_2vevacious__1__0_2identification_8hpp/#define-reference)**  |
|  | **[DO_CLASSLOADING](/documentation/code/main/files/include_2gambit_2backends_2backend__types_2vevacious__1__0_2identification_8hpp/#define-do-classloading)**  |




## Macros Documentation

### define BACKENDNAME

```
#define BACKENDNAME vevacious
```


### define BACKENDLANG

```
#define BACKENDLANG CXX
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
#define REFERENCE Camargo-Molina:2013qva
```


### define DO_CLASSLOADING

```
#define DO_CLASSLOADING 1
```


## Source code

```
// Identify backend and set macro flags

#include "gambit/Utils/cats.hpp"

#define BACKENDNAME vevacious
#define BACKENDLANG CXX
#define VERSION 1.0
#define SAFE_VERSION 1_0
#define REFERENCE Camargo-Molina:2013qva

#undef DO_CLASSLOADING
#define DO_CLASSLOADING 1
```


-------------------------------

Updated on 2022-08-03 at 00:39:23 +0000
