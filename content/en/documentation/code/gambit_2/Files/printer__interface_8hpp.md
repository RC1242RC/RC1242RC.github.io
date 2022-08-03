---
title: 'file ScannerBit/printer_interface.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/gambit_2/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::Scanner](/documentation/code/gambit_2/namespaces/namespacegambit_1_1scanner/)**  |

## Detailed Description


declaration for scanner module



------------------

Authors (add name and date if you modify): 




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************
///  \file
///
///  declaration for scanner module
///
///  *********************************************
///
///  Authors (add name and date if you modify):
//
///  \author Gregory Martinez
///          (gregory.david.martinez@gmail.com)
///  \date 2013 August 2013 Feb 2014
///
///  *********************************************

#include "gambit/Printers/baseprintermanager.hpp"
#include "gambit/Printers/basebaseprinter.hpp"

#ifndef PRINTER_INTERFACE_HPP
#define PRINTER_INTERFACE_HPP

#include <string>
#include <vector>

namespace Gambit
{
    namespace Scanner
    { 
        /// typedef printer_interface_temp printer_interface;
        typedef Printers::BasePrinterManager printer_interface;
        
        /// Type of the printer objects
        typedef Printers::BaseBasePrinter printer;

        inline void assign_aux_numbers(){}
        
        template<typename... T>
        inline void assign_aux_numbers(const std::string &tag, const T&... params)
        {
            Gambit::Printers::get_aux_param_id(tag);
            assign_aux_numbers(params...);
        }
    }
}

#endif
```


-------------------------------

Updated on 2022-08-03 at 06:57:09 +0000
