---
title: 'file src/SpecBit_SM.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |
| **[Gambit::SpecBit](/documentation/code/namespaces/namespacegambit_1_1specbit/)**  |

## Detailed Description


**Author**: Ben Farmer ([benjamin.farmer@fysik.su.se](mailto:benjamin.farmer@fysik.su.se)) 

**Date**: 2014 Sep - Dec, 2015 Jan - Mar

Functions of module SpecBit

SpecBit module functions related to the Standard Model.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#include <string>
#include <sstream>

#include "gambit/Elements/gambit_module_headers.hpp"
#include "gambit/Elements/spectrum.hpp"
#include "gambit/Utils/stream_overloads.hpp" // Just for more convenient output to logger
#include "gambit/Utils/util_macros.hpp"
#include "gambit/SpecBit/SpecBit_rollcall.hpp"
#include "gambit/SpecBit/SpecBit_helpers.hpp"
#include "gambit/SpecBit/QedQcdWrapper.hpp"
#include "gambit/Models/SimpleSpectra/SMHiggsSimpleSpec.hpp"

// QedQcd header from SoftSUSY (via FlexibleSUSY)
#include "flexiblesusy/src/lowe.h"

// Switch for debug mode
//#define SpecBit_DBUG

namespace Gambit
{

  namespace SpecBit
  {
    using namespace LogTags;

    void get_QedQcd_spectrum(const SubSpectrum* &result)
    {
      // Access the pipes for this function to get model and parameter information, and dependencies
      namespace myPipe = Pipes::get_QedQcd_spectrum;

      // Get SLHA2 SMINPUTS values
      const SMInputs& sminputs = *myPipe::Dep::SMINPUTS;

      // SoftSUSY object used to set quark and lepton masses and gauge
      // couplings in QEDxQCD effective theory
      // Will be initialised by default using values in lowe.h, which we will
      // override next.
      softsusy::QedQcd oneset;

      // Fill QedQcd object with SMInputs values
      setup_QedQcd(oneset,sminputs);

      // Run everything to Mz
      oneset.toMz();

      // Create a Spectrum object to wrap the qedqcd object
      static QedQcdWrapper qedqcdspec(oneset,sminputs);
      // TODO: This probably doesn't work, and only gets us one copy of the object once.
      // Unfortunately we cannot copy SubSpectrum objects, so this is a little tricky to
      // solve...

      result = &qedqcdspec;
    }

    void get_SM_spectrum(Spectrum &result)
    {
      namespace myPipe = Pipes::get_SM_spectrum;
      const SMInputs& sminputs = *myPipe::Dep::SMINPUTS;

      // SoftSUSY object used to set quark and lepton masses and gauge
      // couplings in QEDxQCD effective theory
      softsusy::QedQcd oneset;

      // Fill QedQcd object with SMInputs values
      setup_QedQcd(oneset,sminputs);

      // Run everything to Mz
      oneset.toMz();

      // Create a SubSpectrum object to wrap the qedqcd object
      // Attach the sminputs object as well, so that SM pole masses can be passed on (these aren't easily
      // extracted from the QedQcd object, so use the values that we put into it.)
      QedQcdWrapper qedqcdspec(oneset,sminputs);

      // Initialise an object to carry Higgs sector information
      SMHiggsModel higgsmodel;
      higgsmodel.HiggsPoleMass = *myPipe::Param.at("mH");
      higgsmodel.HiggsVEV      = 1. / sqrt(sqrt(2.)*sminputs.GF);

      // Create a SubSpectrum object to wrap the EW sector information
      SMHiggsSimpleSpec higgsspec(higgsmodel);

      // Retrieve any mass cuts
      static const Spectrum::mc_info mass_cut = myPipe::runOptions->getValueOrDef<Spectrum::mc_info>(Spectrum::mc_info(), "mass_cut");
      static const Spectrum::mr_info mass_ratio_cut = myPipe::runOptions->getValueOrDef<Spectrum::mr_info>(Spectrum::mr_info(), "mass_ratio_cut");

      // Create full Spectrum object from components above (SubSpectrum objects will be "cloned" into the Spectrum object)
      result = Spectrum(qedqcdspec,higgsspec,sminputs,&myPipe::Param,mass_cut,mass_ratio_cut);
    }

    void SM_higgs_couplings(HiggsCouplingsTable &result)
    {
      using namespace Pipes::SM_higgs_couplings;
      // Set the number of Higgses
      result.set_n_neutral_higgs(1);
      result.set_n_charged_higgs(0);
      // Set the CP of the Higgs.
      result.CP[0] = 1;
      // Set the decays
      result.set_neutral_decays_SM(0, "h0_1", *Dep::Higgs_decay_rates);
      result.set_neutral_decays(0, "h0_1", *Dep::Higgs_decay_rates);
      // Leave all the effective couplings for all neutral higgses set to unity (done at construction).
    }


  } // end namespace SpecBit
} // end namespace Gambit
```


-------------------------------

Updated on 2022-08-01 at 12:13:24 +0000
