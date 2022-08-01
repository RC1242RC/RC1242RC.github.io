---
title: 'file Pythia8/SetHooksClass.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/darkbit_developmentnamespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/darkbit_developmentnamespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::SetHooks](/documentation/code/darkbit_developmentclasses/classgambit_1_1colliderbit_1_1sethooks/)** <br>A templated class specific for the UserHooks.  |

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

Updated on 2022-08-01 at 17:31:44 +0000
