---
title: 'file Pythia8/SetHooksClass.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/main/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/main/namespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::SetHooks](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1sethooks/)** <br>A templated class specific for the UserHooks.  |

## Detailed Description


**Author**: Chris Chang 

**Date**: Sep 2020

The SetHooks.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  The SetHooks.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Chris Chang
///  \date Sep 2020
///
///  *********************************************

#pragma once

#include <ostream>
#include <stdexcept>
#include "gambit/Elements/shared_types.hpp"
#include "gambit/ColliderBit/colliders/BaseCollider.hpp"
#include "SLHAea/slhaea.h"


namespace Gambit
{

  namespace ColliderBit
  {

    /// A templated class specific for the UserHooks.
    template <typename PythiaT, typename EventT>
    class SetHooks
    {

      public:
        //Constructor and Destructor
        SetHooks() {}
        ~SetHooks() {}

        //Function to set the UserHook.
        bool SetupHook(PythiaT*)
        {
          return false;
        }
    };


  }
}
```


-------------------------------

Updated on 2022-08-03 at 01:58:24 +0000
