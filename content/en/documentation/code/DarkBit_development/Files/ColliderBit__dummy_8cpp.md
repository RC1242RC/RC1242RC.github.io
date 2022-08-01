---
title: 'file src/ColliderBit_dummy.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/darkbit_developmentnamespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/darkbit_developmentnamespaces/namespacegambit_1_1colliderbit/)**  |

## Detailed Description


Dummy ColliderBit functions.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

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


    void getDummyColliderObservable(double& result)
    {
      result = 0.0;
    }


  }
}
```


-------------------------------

Updated on 2022-08-01 at 17:31:44 +0000
