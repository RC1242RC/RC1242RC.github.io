---
title: 'file Backends/backend_singleton.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/colliderbit_development/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |
| **[Gambit::Backends](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1backends/)**  |

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

#ifndef __backend_singleton_hpp__
#define __backend_singleton_hpp__

#include "gambit/Backends/backend_info.hpp"


namespace Gambit
{

  namespace Backends
  {

    backend_info& backendInfo();

  }

}


#endif // defined __backend_singleton_hpp__
```


-------------------------------

Updated on 2022-08-02 at 18:18:39 +0000
