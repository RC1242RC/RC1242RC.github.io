---
title: 'file ScannerBit/scan.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/main/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::Scanner](/documentation/code/main/namespaces/namespacegambit_1_1scanner/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::Scanner::Scan_Manager](/documentation/code/main/classes/classgambit_1_1scanner_1_1scan__manager/)**  |

## Detailed Description


**Author**: Christoph Weniger ([c.weniger@uva.nl](mailto:c.weniger@uva.nl)) 

**Date**: 2013 May, June, July 

Scanner method implementations.



------------------

Authors (add name and date if you modify):




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************
///  \file
///
///  Scanner method implementations.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///   
///  \author Christoph Weniger
///          (c.weniger@uva.nl)
///  \date 2013 May, June, July
//
///  \author Gregory Martinez
///          (gregory.david.martinez@gmail.com)
///  \date 2013 July 2013/Feb 2014
///
///  \author Pat Scott
///          (patscott@physics.mcgill.ca)
///  \date 2013 Aug
///
///  *********************************************

#ifndef __scan_hpp__
#define __scan_hpp__

#include "gambit/ScannerBit/printer_interface.hpp"
#include "gambit/ScannerBit/factory_defs.hpp"
#include "gambit/ScannerBit/priors/composite.hpp"
#include "gambit/Utils/yaml_options.hpp"
#include "gambit/Utils/yaml_parser_base.hpp"

namespace Gambit
{
    namespace Scanner
    {       
        // Scan manager class that manages everything that is ScannerBit.
        class Scan_Manager
        {
        private:
            const Factory_Base *factory;
            Options options;
            Priors::CompositePrior *prior;
            printer_interface *printerInterface;
            // Flag to indicate whether or not the factory needs deleting in the destructor.  Do not reset!
            bool has_local_factory;

        public:
            Scan_Manager (const YAML::Node &node, printer_interface*, const Factory_Base* factory = 0);
            ~Scan_Manager();
            int Run();                       
        };             
    }
}

#endif
```


-------------------------------

Updated on 2022-08-03 at 12:57:57 +0000
