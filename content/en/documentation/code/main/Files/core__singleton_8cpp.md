---
title: 'file src/core_singleton.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/main/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |

## Detailed Description


**Author**: Pat Scott 

**Date**: 2014 Aug

GAMBIT Core object accessor function.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  GAMBIT Core object accessor function.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///   
///  \author Pat Scott
///  \date 2014 Aug
///
///  *********************************************

#include "gambit/Core/core_singleton.hpp"
#include "gambit/Models/claw_singleton.hpp"
#include "gambit/Backends/backend_singleton.hpp"

namespace Gambit
{

  /// Core accessor function
  gambit_core& Core()
  {
    static gambit_core local(Models::ModelDB(), Backends::backendInfo());
    return local;
  }

}
```


-------------------------------

Updated on 2022-08-03 at 00:49:08 +0000
