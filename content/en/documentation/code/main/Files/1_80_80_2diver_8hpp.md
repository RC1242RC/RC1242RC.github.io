---
title: 'file 1.0.0/1.0.0/diver.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::Diver_1_0_0](/documentation/code/namespaces/namespacegambit_1_1diver__1__0__0/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Gambit::Diver_1_0_0::diverScanData](/documentation/code/classes/structgambit_1_1diver__1__0__0_1_1diverscandata/)** <br>Structure for passing likelihood and printer data through Diver to the objective function.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[cdiver](/documentation/code/files/1_80_80_2diver_8hpp/#function-cdiver)**(double(*)(double[], const int, int &, bool &, const bool, void *&) , int , const double [], const double [], const char [], int , int , const int [], bool , const int , const int , int , int , const double [], double , double , bool , bool , int , bool , bool , double , int , bool , bool , double(*)(const double[], const int, void *&) , double , double , int , bool , bool , int , int , double , void *& , int ) |

## Detailed Description


**Author**: Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 

**Date**: 2015 June

ScannerBit interface to Diver 1.0.0

Header file



------------------

Authors (add name and date if you modify):



------------------


## Functions Documentation

### function cdiver

```
void cdiver(
    double(*)(double[], const int, int &, bool &, const bool, void *&) ,
    int ,
    const double [],
    const double [],
    const char [],
    int ,
    int ,
    const int [],
    bool ,
    const int ,
    const int ,
    int ,
    int ,
    const double [],
    double ,
    double ,
    bool ,
    bool ,
    int ,
    bool ,
    bool ,
    double ,
    int ,
    bool ,
    bool ,
    double(*)(const double[], const int, void *&) ,
    double ,
    double ,
    int ,
    bool ,
    bool ,
    int ,
    int ,
    double ,
    void *& ,
    int 
)
```




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************

#ifndef __diver_hpp__
#define __diver_hpp__

#include "gambit/ScannerBit/scanner_plugin.hpp"

// C++ prototype of the main run_de function for Diver.
extern "C" void cdiver(double (*)(double[], const int, int&, bool&, const bool, void*&), int, const double[], const double[],
                       const char[], int, int, const int[], bool, const int, const int, int, int, const double[], double,
                       double, bool, bool, int, bool, bool, double, int, bool, bool, double(*)(const double[], const int, void*&),
                       double, double, int, bool, bool, int, int, double, void*&, int);

namespace Gambit
{

  namespace Diver_1_0_0
  {

    struct diverScanData
    {
      Scanner::like_ptr likelihood_function;
      Scanner::printer_interface* printer;
    };

    double objective(double params[], const int param_dim, int &fcall, bool &quit, const bool validvector, void*& context);

  }

}

#endif // #defined __diver_hpp__
```


-------------------------------

Updated on 2022-08-01 at 12:13:18 +0000
