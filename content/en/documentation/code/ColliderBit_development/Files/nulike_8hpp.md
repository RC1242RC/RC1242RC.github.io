---
title: 'file backend_types/nulike.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/colliderbit_development/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |

## Detailed Description


**Author**: Pat Scott [p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)

**Date**: 2015 Aug

Helper types for nulike backend.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Helper types for nulike backend.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Pat Scott
///          p.scott@imperial.ac.uk
///  \date 2015 Aug
///
///  *************************

#ifndef __nulike_types_hpp__
#define __nulike_types_hpp__

namespace Gambit
{

  // Neutrino yield function signature
  typedef double(*nuyield_function_pointer)(const double&, const int&, void*&);

}

#endif /* defined __nulike_types_hpp__ */
```


-------------------------------

Updated on 2022-08-03 at 02:29:29 +0000
