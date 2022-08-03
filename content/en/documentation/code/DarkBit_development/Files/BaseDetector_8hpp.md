---
title: 'file detectors/BaseDetector.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/darkbit_development/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/darkbit_development/namespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::BaseDetector](/documentation/code/darkbit_development/classes/classgambit_1_1colliderbit_1_1basedetector/)** <br>An abstract base class for detector simulators within ColliderBit.  |

## Detailed Description


**Author**: 

  * Abram Krislock ([a.m.b.krislock@fys.uio.no](mailto:a.m.b.krislock@fys.uio.no))
  * Andy Buckley ([mostlikelytobefound@facebook.com](mailto:mostlikelytobefound@facebook.com))
  * Anders Kvellestad ([anders.kvellestad@fys.uio.no](mailto:anders.kvellestad@fys.uio.no)) 
  * Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 


**Date**: 

  * often
  * 2019 Feb


ColliderBit detector base class.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  ColliderBit detector base class.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Abram Krislock
///          (a.m.b.krislock@fys.uio.no)
///
///  \author Andy Buckley
///          (mostlikelytobefound@facebook.com)
///
///  \author Anders Kvellestad
///          (anders.kvellestad@fys.uio.no)
///  \date often
///
///  \author Pat Scott
///          (p.scott@imperial.ac.uk)
///  \date 2019 Feb
///
///  *********************************************

#pragma once

#include <string>
#include <vector>
#include <exception>
#include <memory>

#include "HEPUtils/Event.h"

#include "gambit/Elements/shared_types.hpp"

namespace Gambit
{

  namespace ColliderBit
  {

    /// An abstract base class for detector simulators within ColliderBit.
    class BaseDetector
    {

      public:

        /// Constructor
        BaseDetector() {}
        /// Destructor
        virtual ~BaseDetector() {}
        /// Reset this instance for reuse, avoiding the need for "new" or "delete".
        virtual void clear() {}

        /// Perform the actual simulation on the next collider event.
        virtual void processEvent(HEPUtils::Event&) const = 0;

        /// @name (Re-)Initialization functions
        ///@{
        /// Settings parsing and initialization for each sub-class.
        virtual void init(const std::vector<std::string>&) {}
        /// General init for any collider of this type - no settings version.
        virtual void init() {};
        ///@}

    };

  }
}
```


-------------------------------

Updated on 2022-08-03 at 02:29:19 +0000
