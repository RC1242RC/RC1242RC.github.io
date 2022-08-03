---
title: 'file ScannerBit/scannerbit.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/gambit_sphinx/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::Scanner](/documentation/code/gambit_sphinx/namespaces/namespacegambit_1_1scanner/)**  |

## Detailed Description


**Author**: Pat Scott ([patscott@physics.mcgill.ca](mailto:patscott@physics.mcgill.ca)) 

**Date**: 2014 Mar

ScannerBit executable-level header file. Include this in your main program that calls ScannerBit.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************
///  \file
///
///  ScannerBit executable-level header file.
///  Include this in your main program that calls
///  ScannerBit.
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

#ifndef __ScannerBit_hpp__
#define __ScannerBit_hpp__

#include "gambit/ScannerBit/scan.hpp"
#include "gambit/ScannerBit/scanner_utils.hpp"
#include "gambit/Utils/static_members.hpp"

namespace Gambit
{

  namespace Scanner
  {

    int register_ScannerBit_handlers()
    {
      try
      {
        error e = scan_error();
        warning w = scan_warning();
      }
      catch (std::exception& e)
      {
        std::cout << "ScannerBit has failed to initialise due to a fatal exception: " << e.what() << std::endl;
        throw(e);
      }
      return 0;
    }

    int ScannerBit_handlers = register_ScannerBit_handlers();

  }

}

#endif //#ifndef __ScannerBit_hpp__
```


-------------------------------

Updated on 2022-08-03 at 03:16:56 +0000
