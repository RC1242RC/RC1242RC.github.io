---
title: 'file great/great.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/colliderbit_development/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |
| **[Gambit::GreAT](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1great/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Gambit::GreAT::greatScanData](/documentation/code/colliderbit_development/classes/structgambit_1_1great_1_1greatscandata/)** <br>Structure for passing likelihood and printer data through GreAT to the objective function.  |

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

#ifndef __great_hpp__
#define __great_hpp__

#include "gambit/ScannerBit/scanner_plugin.hpp"

class TGreatPoint;

namespace Gambit
{
  namespace GreAT
  {
    struct greatScanData
    {
      Scanner::like_ptr likelihood_function;
      Scanner::printer_interface* printer;
      double min_logLike;
    };

    double LogLikelihoodFunction(TGreatPoint& point);
  }
}

#endif // #defined __great_hpp__
```


-------------------------------

Updated on 2022-08-02 at 18:18:37 +0000
