---
title: 'file common_headers/scripts/BOSS/common_headers/identification.hpp'

description: "[No description available]"

---






[No description available]

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BACKENDNAME](/documentation/code/main/files/scripts_2boss_2common__headers_2identification_8hpp/#define-backendname)**  |
|  | **[BACKENDLANG](/documentation/code/main/files/scripts_2boss_2common__headers_2identification_8hpp/#define-backendlang)**  |
|  | **[VERSION](/documentation/code/main/files/scripts_2boss_2common__headers_2identification_8hpp/#define-version)**  |
|  | **[SAFE_VERSION](/documentation/code/main/files/scripts_2boss_2common__headers_2identification_8hpp/#define-safe-version)**  |
|  | **[REFERENCE](/documentation/code/main/files/scripts_2boss_2common__headers_2identification_8hpp/#define-reference)**  |
|  | **[DO_CLASSLOADING](/documentation/code/main/files/scripts_2boss_2common__headers_2identification_8hpp/#define-do-classloading)**  |




## Macros Documentation

### define BACKENDNAME

```
#define BACKENDNAME __BACKEND_NAME__
```


### define BACKENDLANG

```
#define BACKENDLANG CXX
```


### define VERSION

```
#define VERSION __BACKEND_VERSION__
```


### define SAFE_VERSION

```
#define SAFE_VERSION __BACKEND_SAFE_VERSION__
```


### define REFERENCE

```
#define REFERENCE __BACKEND_REFERENCE__
```


### define DO_CLASSLOADING

```
#define DO_CLASSLOADING 1
```


## Source code

```
// Identify backend and set macro flags

#include "gambit/Utils/cats.hpp"

#define BACKENDNAME __BACKEND_NAME__
#define BACKENDLANG CXX
#define VERSION __BACKEND_VERSION__
#define SAFE_VERSION __BACKEND_SAFE_VERSION__
#define REFERENCE __BACKEND_REFERENCE__

#undef DO_CLASSLOADING
#define DO_CLASSLOADING 1
```


-------------------------------

Updated on 2022-08-03 at 05:45:27 +0000
