---
title: 'file great/great.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/darkbit/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::GreAT](/documentation/code/darkbit/namespaces/namespacegambit_1_1great/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Gambit::GreAT::greatScanData](/documentation/code/darkbit/classes/structgambit_1_1great_1_1greatscandata/)** <br>Structure for passing likelihood and printer data through GreAT to the objective function.  |

## Detailed Description


**Author**: Antje Putze ([putze@lapth.cnrs.fr](mailto:putze@lapth.cnrs.fr)) 

**Date**: 

  * 2015 Nov 
  * 2016 Apr


ScannerBit interface to GreAT 1.0.0

Header file



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************
///  \file
///
///  ScannerBit interface to GreAT 1.0.0
///
///  Header file
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Antje Putze
///          (putze@lapth.cnrs.fr)
///  \date 2015 Nov
///  \date 2016 Apr
///
///  *********************************************

#ifndef __great_hpp__
#define __great_hpp__

#include "gambit/ScannerBit/scanner_plugin.hpp"

class TGreatPoint;

namespace Gambit
{
  namespace GreAT
  {
    /// Structure for passing likelihood and printer data through GreAT to the objective function.
    struct greatScanData
    {
      Scanner::like_ptr likelihood_function;
      Scanner::printer_interface* printer;
      double min_logLike;
    };

    /// Function to be minimised by GreAT
    double LogLikelihoodFunction(TGreatPoint& point);
  }
}

#endif // #defined __great_hpp__
```


-------------------------------

Updated on 2022-08-03 at 12:58:03 +0000
