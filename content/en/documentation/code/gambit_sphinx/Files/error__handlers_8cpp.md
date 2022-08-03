---
title: 'file src/error_handlers.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/gambit_sphinx/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::DRes](/documentation/code/gambit_sphinx/namespaces/namespacegambit_1_1dres/)**  |

## Detailed Description


**Author**: Pat Scott ([patscott@physics.mcgill.ca](mailto:patscott@physics.mcgill.ca)) 

**Date**: 2014 Mar

Exception object definitions.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Exception object definitions.
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

#include "gambit/Core/error_handlers.hpp"
#include "gambit/Logs/log_tags.hpp"

namespace Gambit
{
  using namespace LogTags;

  /// Core errors
  error& core_error()
  { 
    static error local("The Core has encountered a problem.","core_error", core); 
    return local;
  }

  /// Core warnings
  warning& core_warning()
  {
    static warning local("The Core has encountered a problem.","core_warning", core);
    return local;
  }

  namespace DRes
  {

    /// Dependency resolver errors
    error& dependency_resolver_error()
    {
      static error local("A problem has been raised by the dependency resolver subsystem.","dependency_resolver_error", dependency_resolver);
      return local;
    }

    /// Dependency resolver warnings
    warning& dependency_resolver_warning()
    {
      static warning local("A problem has been raised by the dependency resolver subsystem.","dependency_resolver_warning", dependency_resolver);
      return local;
    }

  }

}
```


-------------------------------

Updated on 2022-08-03 at 12:58:07 +0000
