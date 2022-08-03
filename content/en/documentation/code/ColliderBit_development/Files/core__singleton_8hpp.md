---
title: 'file Core/core_singleton.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/colliderbit_development/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |

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

#ifndef __core_singleton_hpp__
#define __core_singleton_hpp__

#include "gambit/Core/core.hpp"


namespace Gambit
{

  /// Core accessor function
  gambit_core& Core();

}


#endif // defined __core_singleton_hpp__
```


-------------------------------

Updated on 2022-08-03 at 00:01:11 +0000
