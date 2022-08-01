---
title: 'file src/getActiveProcessCodes.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/darkbit_developmentnamespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/darkbit_developmentnamespaces/namespacegambit_1_1colliderbit/)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DEBUG_PREFIX](/documentation/code/darkbit_developmentfiles/getactiveprocesscodes_8cpp/#define-debug-prefix)**  |

## Detailed Description


**Author**: Anders Kvellestad ([a.kvellestad@imperial.ac.uk](mailto:a.kvellestad@imperial.ac.uk)) 

**Date**: 2019 Sep

ColliderBit module function for obtaining the list of the active collider processes



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define DEBUG_PREFIX

```
#define DEBUG_PREFIX "DEBUG: OMP thread " << omp_get_thread_num() << ":  "
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#include "gambit/ColliderBit/ColliderBit_eventloop.hpp"

// #define COLLIDERBIT_DEBUG
#define DEBUG_PREFIX "DEBUG: OMP thread " << omp_get_thread_num() << ":  "

namespace Gambit
{

  namespace ColliderBit
  {

    void getActiveProcessCodes(std::vector<int>& result)
    {
      using namespace Pipes::getActiveProcessCodes;

      if (*Loop::iteration == COLLIDER_INIT)
      {
        result.clear();
      }

      if (*Loop::iteration == XSEC_CALCULATION)
      {
        result = (*Dep::HardScatteringSim)->all_active_process_codes();

        #ifdef COLLIDERBIT_DEBUG
          for (int pcode : result)
          {
            cout << DEBUG_PREFIX << "getActiveProcessCodes: - active process: " << pcode << endl;
          }
        #endif
      }
    }

  } 
} 
```


-------------------------------

Updated on 2022-08-01 at 17:31:44 +0000
