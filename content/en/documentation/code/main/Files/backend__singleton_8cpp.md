---
title: 'file src/backend_singleton.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/main/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::Backends](/documentation/code/main/namespaces/namespacegambit_1_1backends/)**  |

## Detailed Description


**Author**: Pat Scott 

**Date**: 2014 Aug

GAMBIT backend info object accessor function.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  GAMBIT backend info object accessor function.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///   
///  \author Pat Scott
///  \date 2014 Aug
///
///  *********************************************

#include "gambit/Backends/backend_singleton.hpp"


namespace Gambit
{

  namespace Backends
  {

    /// Backend info accessor function
    backend_info& backendInfo()
    {
      static backend_info local;
      return local;
    }

  }

}
```


-------------------------------

Updated on 2022-08-03 at 05:45:28 +0000
