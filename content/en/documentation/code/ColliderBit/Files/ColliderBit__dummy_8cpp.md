---
title: 'file src/ColliderBit_dummy.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/colliderbit/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |
| **[Gambit::ColliderBit](/documentation/code/colliderbit/namespaces/namespacegambit_1_1colliderbit/)**  |

## Detailed Description


Dummy ColliderBit functions.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Dummy ColliderBit functions.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///
///  *********************************************

#include <cmath>
#include <string>
#include <iostream>
#include <fstream>
#include <memory>
#include <numeric>
#include <sstream>
#include <vector>

#include "gambit/Elements/gambit_module_headers.hpp"
#include "gambit/ColliderBit/ColliderBit_rollcall.hpp"

namespace Gambit
{
  namespace ColliderBit
  {


    /// @brief Dummy observable that creates a dependency on TestModel1D
    ///
    /// This is used to satisfy the normal GAMBIT model requrements in a minimal
    /// way. This is useful in the case where we just want to run ColliderBit on
    /// a single point with a custom Pythia version, using Pythia's SLHA
    /// interface.
    void getDummyColliderObservable(double& result)
    {
      result = 0.0;
    }


  }
}
```


-------------------------------

Updated on 2022-08-03 at 05:45:17 +0000
