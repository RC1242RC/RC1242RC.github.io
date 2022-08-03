---
title: 'file ColliderBit/lhef2heputils.hpp'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[LHEF](/documentation/code/darkbit_development/namespaces/namespacelhef/)** <br>Forward declaration to cut down on includes.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[get_HEPUtils_event](/documentation/code/darkbit_development/files/lhef2heputils_8hpp/#function-get-heputils-event)**(const LHEF::Reader & , HEPUtils::Event & , double )<br>Extract an LHE event as a HEPUtils::Event.  |


## Functions Documentation

### function get_HEPUtils_event

```
void get_HEPUtils_event(
    const LHEF::Reader & ,
    HEPUtils::Event & ,
    double 
)
```

Extract an LHE event as a HEPUtils::Event. 



## Source code

```
// -*- C++ -*-
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///
///  lhef2heputils: a Les Houches Event Format (LHEF)
///  -> HEPUtils::Event MC generator event file
///  converter, based on lhef2hepmc.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Andy Buckley
///  (andy.buckley@cern.ch)
///  \date May 2019
///
///  \author Pat Scott
///  (p.scott@imperial.ac.uk)
///  \date May 2019
///
///  Hat tip: Leif Lonnblad for writing the LHEF
///  parser that actually makes this possible!
///
///  *********************************************

#include "gambit/cmake/cmake_variables.hpp"

#ifndef EXCLUDE_HEPMC

#include "HEPUtils/Event.h"

/// Forward declaration to cut down on includes
namespace LHEF { class Reader; }

/// Extract an LHE event as a HEPUtils::Event
void get_HEPUtils_event(const LHEF::Reader&, HEPUtils::Event&, double);

#endif
```


-------------------------------

Updated on 2022-08-03 at 00:01:00 +0000
