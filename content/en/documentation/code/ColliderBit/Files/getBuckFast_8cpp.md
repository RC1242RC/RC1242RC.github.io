---
title: 'file src/getBuckFast.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/colliderbit/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |
| **[Gambit::ColliderBit](/documentation/code/colliderbit/namespaces/namespacegambit_1_1colliderbit/)**  |

## Detailed Description


**Author**: 

  * Abram Krislock ([a.m.b.krislock@fys.uio.no](mailto:a.m.b.krislock@fys.uio.no))
  * Aldo Saavedra
  * Andy Buckley
  * Chris Rogan ([crogan@cern.ch](mailto:crogan@cern.ch)) 
  * Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 
  * Anders Kvellestad ([anders.kvellestad@fys.uio.no](mailto:anders.kvellestad@fys.uio.no)) 


**Date**: 

  * 2014 Aug 
  * 2015 May
  * 2015 Jul 
  * 2018 Jan 
  * 2019 Jan
  * 2017 March 
  * 2018 Jan 
  * 2018 May


ColliderBit event loop functions returning detector simulations.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  ColliderBit event loop functions returning
///  detector simulations.
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
///  \author Andy Buckley
///
///  \author Chris Rogan
///          (crogan@cern.ch)
///  \date 2014 Aug
///  \date 2015 May
///
///  \author Pat Scott
///          (p.scott@imperial.ac.uk)
///  \date 2015 Jul
///  \date 2018 Jan
///  \date 2019 Jan
///
///  \author Anders Kvellestad
///          (anders.kvellestad@fys.uio.no)
///  \date   2017 March
///  \date   2018 Jan
///  \date   2018 May
///
///  *********************************************

#include <memory>

#include "gambit/ColliderBit/ColliderBit_eventloop.hpp"
#include "gambit/ColliderBit/ATLASEfficiencies.hpp"
#include "gambit/ColliderBit/CMSEfficiencies.hpp"
#include "gambit/ColliderBit/detectors/BuckFast.hpp"

#include "HEPUtils/FastJet.h"


namespace Gambit
{

  namespace ColliderBit
  {

    /// Retrieve a BuckFast sim of ATLAS
    void getBuckFastATLAS(BaseDetector* &result)
    {
      using namespace Pipes::getBuckFastATLAS;
      thread_local BuckFast bucky;
      if (*Loop::iteration == START_SUBPROCESS)
      {
        bucky.smearElectronEnergy = &ATLAS::smearElectronEnergy;
        bucky.smearMuonMomentum   = &ATLAS::smearMuonMomentum;
        bucky.smearTaus           = &ATLAS::smearTaus;
        bucky.smearJets           = &ATLAS::smearJets;
        result = &bucky;
      }
    }

    /// Retrieve a BuckFast sim of CMS
    void getBuckFastCMS(BaseDetector* &result)
    {
      using namespace Pipes::getBuckFastCMS;
      thread_local BuckFast bucky;
      if (*Loop::iteration == START_SUBPROCESS)
      {
        bucky.smearElectronEnergy = &CMS::smearElectronEnergy;
        bucky.smearMuonMomentum   = &CMS::smearMuonMomentum;
        bucky.smearTaus           = &CMS::smearTaus;
        bucky.smearJets           = &CMS::smearJets;
        result = &bucky;
      }
    }

    /// Retrieve an Identity BuckFast sim (no sim)
    void getBuckFastIdentity(BaseDetector* &result)
    {
      using namespace Pipes::getBuckFastIdentity;
      thread_local BuckFast bucky;
      result = &bucky;
    }

  }

}
```


-------------------------------

Updated on 2022-08-03 at 12:58:20 +0000
