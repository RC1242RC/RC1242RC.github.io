---
title: 'file detectors/BuckFast.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/main/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/main/namespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::BuckFast](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1buckfast/)** <br>A base class for [BuckFast]() simple smearing simulations within ColliderBit.  |

## Detailed Description


**Author**: 

  * Andy Buckley 
  * Anders Kvellestad 
  * Pat Scott 
  * Martin White


BuckFast simple smearing detector sim.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************
///  \file
///
///  BuckFast simple smearing detector sim.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Andy Buckley
///  \author Anders Kvellestad
///  \author Pat Scott
///  \author Martin White
///
///  *********************************************

#pragma once

#include "gambit/ColliderBit/detectors/BaseDetector.hpp"

#include "HEPUtils/Event.h"
#include "HEPUtils/Particle.h"
#include "HEPUtils/Jet.h"

namespace Gambit
{

  namespace ColliderBit
  {

    /// A base class for BuckFast simple smearing simulations within ColliderBit.
    class BuckFast : public BaseDetector
    {

      public:

        /// Pointers to actual detector response functions
        /// @{
        void(*smearElectronEnergy)(std::vector<HEPUtils::Particle*>&);
        void(*smearMuonMomentum)(std::vector<HEPUtils::Particle*>&);
        void(*smearTaus)(std::vector<HEPUtils::Particle*>&);
        void(*smearJets)(std::vector<HEPUtils::Jet*>&);
        /// @}

        /// Process an event with BuckFast
        void processEvent(HEPUtils::Event&) const;

        ///@}

        /// Constructor
        BuckFast() : smearElectronEnergy(NULL)
                   , smearMuonMomentum(NULL)
                   , smearTaus(NULL)
                   , smearJets(NULL)
        {}

        /// Destructor
        virtual ~BuckFast() {}

        /// @name (Re-)Initialization functions
        ///@{

        /// Settings parsing and initialization for any sub-class.
        virtual void init(const std::vector<std::string>&) {};

        /// General init for any collider of this type.
        virtual void init() {};

        ///@}

    };

  }
}
```


-------------------------------

Updated on 2022-08-03 at 00:39:22 +0000
