---
title: 'file src/scanner_utils.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/main/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::Scanner](/documentation/code/main/namespaces/namespacegambit_1_1scanner/)**  |

## Detailed Description


Utility functions definitions for ScannerBit



------------------


# Authors

(add name and date if you modify)

Pat Scott ([patscott@physics.mcgill.ca](mailto:patscott@physics.mcgill.ca)) 

2014 Mar



------------------




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************
/// \file
///  Utility functions definitions for ScannerBit
///
///  *********************************************
///
///  Authors
///  =======
///
///  (add name and date if you modify)
///
///  \author Pat Scott 
///          (patscott@physics.mcgill.ca)
///  \date 2014 Mar
///
///  *********************************************

#include "gambit/ScannerBit/scanner_utils.hpp"

namespace Gambit
{

        namespace Scanner
        { 

                /// Scanner errors
                error& scan_error()
                {
                        static error local("A problem has been raised by ScannerBit.","scan_error", LogTags::scanner);
                        return local;
                }

                /// Scanner warnings
                warning& scan_warning()
                {
                        static warning local("A problem has been raised by ScannerBit.","scan_warning", LogTags::scanner);
                        return local;
                }

        }

}
```


-------------------------------

Updated on 2022-08-03 at 01:16:44 +0000
