---
title: 'file backend_types/plc.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/colliderbit/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Gambit::_err](/documentation/code/colliderbit/classes/structgambit_1_1__err/)**  |
| struct | **[Gambit::clik_lensing_object](/documentation/code/colliderbit/classes/structgambit_1_1clik__lensing__object/)**  |

## Detailed Description


**Author**: Selim C. Hotinli [selim.hotinli14@imperial.ac.uk](mailto:selim.hotinli14@imperial.ac.uk)

**Date**: 

  * 2017 Jul 
  * 2017 Oct 

------------------


Helper types for plc backend.



------------------

Authors (add name and date if you modify):




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Helper types for plc backend.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Selim C. Hotinli
///          selim.hotinli14@imperial.ac.uk
///  \date 2017 Jul
///  \date 2017 Oct
///  *************************

#ifndef __plc_types_hpp__
#define __plc_types_hpp__

#include "gambit/Utils/util_types.hpp"

namespace Gambit
{

  // Types needed for using the Planck likelihoods
  struct clik_object;

  typedef struct _err {
    char errWhere[2048];
    char errText[4192];
    int errValue;
    struct _err* next;
  } clik_error;

  typedef struct {
    void *plens_payload;
    int lmax[7];
    int type;
    int renorm;
    int ren1;
    double check;
    int has_check;
    double *cl_fid;
  } clik_lensing_object;

}

#endif // defined __plc_types_hpp__
```


-------------------------------

Updated on 2022-08-03 at 12:58:21 +0000
