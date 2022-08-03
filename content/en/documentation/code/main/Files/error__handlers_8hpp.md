---
title: 'file Core/error_handlers.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/main/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::DRes](/documentation/code/main/namespaces/namespacegambit_1_1dres/)**  |

## Detailed Description


**Author**: Pat Scott ([patscott@physics.mcgill.ca](mailto:patscott@physics.mcgill.ca)) 

**Date**: 2014 Mar

Exception object declarations.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Exception object declarations.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///   
///  \author Pat Scott 
///          (patscott@physics.mcgill.ca)
///  \date 2014 Mar
///
///  *********************************************

#ifndef __error_handlers_hpp__
#define __error_handlers_hpp__

#include "gambit/Utils/standalone_error_handlers.hpp"
#include "gambit/Utils/local_info.hpp"

namespace Gambit
{

  /// Core errors
  error& core_error();
  /// Core warnings
  warning& core_warning();

  namespace DRes
  {
    /// Dependency resolver errors
    error& dependency_resolver_error();
    /// Dependency resolver warnings
    warning& dependency_resolver_warning();
  }
    
}

#endif //#ifndef error_handlers_hpp
```


-------------------------------

Updated on 2022-08-03 at 01:03:21 +0000
