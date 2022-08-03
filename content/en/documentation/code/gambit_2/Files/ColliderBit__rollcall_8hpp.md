---
title: 'file ColliderBit/ColliderBit_rollcall.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MODULE](/documentation/code/gambit_2/files/colliderbit__rollcall_8hpp/#define-module)**  |
|  | **[REFERENCE](/documentation/code/gambit_2/files/colliderbit__rollcall_8hpp/#define-reference)**  |

## Detailed Description


**Author**: 

  * Abram Krislock ([a.m.b.krislock@fys.uio.no](mailto:a.m.b.krislock@fys.uio.no))
  * Aldo Saavedra
  * Christopher Rogan ([christophersrogan@gmail.com](mailto:christophersrogan@gmail.com)) 
  * Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 
  * Andy Buckley ([andy.buckley@cern.ch](mailto:andy.buckley@cern.ch)) 


**Date**: 

  * 2015 Apr
  * 2015 Jul 
  * 2018 Jan 
  * 2019 Jan
  * 2017 Jun


Rollcall header for ColliderBit module.



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define MODULE

```
#define MODULE ColliderBit
```


### define REFERENCE

```
#define REFERENCE GAMBIT:2017qxg
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Rollcall header for ColliderBit module.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Abram Krislock
///          (a.m.b.krislock@fys.uio.no)
///
///  \author Aldo Saavedra
///
///  \author Christopher Rogan
///          (christophersrogan@gmail.com)
///  \date 2015 Apr
///
///  \author Pat Scott
///          (p.scott@imperial.ac.uk)
///  \date 2015 Jul
///  \date 2018 Jan
///  \date 2019 Jan
///
///  \author Andy Buckley
///          (andy.buckley@cern.ch)
///  \date 2017 Jun
///
///  *********************************************

#pragma once

#define MODULE ColliderBit
#define REFERENCE GAMBIT:2017qxg
START_MODULE
#undef REFERENCE
#undef MODULE

#include "gambit/Elements/shared_types.hpp"
#include "gambit/ColliderBit/ColliderBit_types.hpp"
#include "gambit/ColliderBit/ColliderBit_Higgs_rollcall.hpp"
#include "gambit/ColliderBit/ColliderBit_LEP_rollcall.hpp"
#include "gambit/ColliderBit/ColliderBit_MC_rollcall.hpp"
#include "gambit/ColliderBit/ColliderBit_models_rollcall.hpp"
```


-------------------------------

Updated on 2022-08-03 at 06:57:10 +0000
