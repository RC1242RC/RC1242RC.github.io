---
title: 'file DarkBit/DarkBit_types.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/gambit_sphinx/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::DarkBit](/documentation/code/gambit_sphinx/namespaces/namespacegambit_1_1darkbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Gambit::DarkBit::Wstruct](/documentation/code/gambit_sphinx/classes/structgambit_1_1darkbit_1_1wstruct/)**  |
| struct | **[Gambit::DarkBit::RD_coannihilating_particle](/documentation/code/gambit_sphinx/classes/structgambit_1_1darkbit_1_1rd__coannihilating__particle/)**  |
| struct | **[Gambit::DarkBit::RD_spectrum_type](/documentation/code/gambit_sphinx/classes/structgambit_1_1darkbit_1_1rd__spectrum__type/)**  |
| struct | **[Gambit::DarkBit::nuyield_info](/documentation/code/gambit_sphinx/classes/structgambit_1_1darkbit_1_1nuyield__info/)** <br>Neutrino telescope yield info container.  |
| struct | **[Gambit::DarkBit::nudata](/documentation/code/gambit_sphinx/classes/structgambit_1_1darkbit_1_1nudata/)** <br>Neutrino telescope data container.  |
| struct | **[Gambit::DarkBit::SimYieldChannel](/documentation/code/gambit_sphinx/classes/structgambit_1_1darkbit_1_1simyieldchannel/)** <br>Annihilation/decay channel.  |
| class | **[Gambit::DarkBit::SimYieldTable](/documentation/code/gambit_sphinx/classes/classgambit_1_1darkbit_1_1simyieldtable/)** <br>Channel container Object containing tabularized yields for particle decay and two-body final states.  |

## Detailed Description


**Author**: 

  * Christoph Weniger ([c.weniger@uva.nl](mailto:c.weniger@uva.nl)) 
  * Torsten Bringmann ([torsten.bringmann@fys.uio.no](mailto:torsten.bringmann@fys.uio.no)) 
  * Pat Scott ([pat.scott@uq.edu.au](mailto:pat.scott@uq.edu.au)) 
  * Lars A. Dal ([l.a.dal@fys.uio.no](mailto:l.a.dal@fys.uio.no)) 
  * Christopher Savage ([chris@savage.name](mailto:chris@savage.name)) 
  * Jonathan Cornell ([jcornell@ucsc.edu](mailto:jcornell@ucsc.edu)) 
  * Sebastian Wild ([sebastian.wild@ph.tum.de](mailto:sebastian.wild@ph.tum.de)) 
  * Inigo Saez Casares ([inigo.saez_casares@ens-paris-saclay.fr](mailto:inigo.saez_casares@ens-paris-saclay.fr)) 
  * Ben Farmer ([benjamin.farmer@imperial.ac.uk](mailto:benjamin.farmer@imperial.ac.uk)) 


**Date**: 

  * 2012 Mar, 2014 Jan
  * 2013 Jun
  * 2013 Oct 
  * 2014 Jan, Apr 
  * 2015 Mar 
  * 2020 Dec
  * 2014 Mar, Jul, Sep, Oct, Dec 
  * 2015 Jan
  * 2015 Jan
  * 2014
  * 2016 Aug
  * 2020 March
  * 2019 Jul


Type definition header for module DarkBit.

Compile-time registration of type definitions required for the rest of the code to communicate with DarkBit.

Add to this if you want to define a new type for the functions in DarkBit to return, but you don't expect that type to be needed by any other modules.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Type definition header for module DarkBit.
///
///  Compile-time registration of type definitions
///  required for the rest of the code to
///  communicate with DarkBit.
///
///  Add to this if you want to define a new type
///  for the functions in DarkBit to return, but
///  you don't expect that type to be needed by
///  any other modules.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Christoph Weniger
///          (c.weniger@uva.nl)
///  \date 2012 Mar, 2014 Jan
///
///  \author Torsten Bringmann
///          (torsten.bringmann@fys.uio.no)
///  \date 2013 Jun
///
///  \author Pat Scott
///          (pat.scott@uq.edu.au)
///  \date 2013 Oct
///  \date 2014 Jan, Apr
///  \date 2015 Mar
///  \date 2020 Dec
///
///  \author Lars A. Dal
///          (l.a.dal@fys.uio.no)
///  \date 2014 Mar, Jul, Sep, Oct, Dec
///  \date 2015 Jan
///
///  \author Christopher Savage
///          (chris@savage.name)
///  \date 2015 Jan
///
///  \author Jonathan Cornell
///          (jcornell@ucsc.edu)
///  \date 2014
///
///  \author Sebastian Wild
///          (sebastian.wild@ph.tum.de)
///  \date 2016 Aug
///
///  \author Inigo Saez Casares
///          (inigo.saez_casares@ens-paris-saclay.fr)
///  \date 2020 March
///
///  \author Ben Farmer
///          (benjamin.farmer@imperial.ac.uk)
///  \date 2019 Jul
///
///  *********************************************


#ifndef __DarkBit_types_hpp__
#define __DarkBit_types_hpp__

#include "gambit/DarkBit/decay_chain.hpp"
#include "gambit/DarkBit/SimpleHist.hpp"
#include "gambit/DarkBit/ProcessCatalog.hpp"
#include "gambit/Elements/daFunk.hpp"
#include "gambit/Models/safe_param_map.hpp"
#include "gambit/Utils/yaml_options.hpp"
#include "gambit/Backends/backend_types/nulike.hpp"

namespace Gambit
{
  namespace DarkBit
  {

    // Forward declaration of warnings and errors
    error& DarkBit_error();
    warning& DarkBit_warning();

    // Local preferred sources of tools.
    using boost::weak_ptr;
    using boost::shared_ptr;
    using boost::dynamic_pointer_cast;
    using boost::static_pointer_cast;
    using boost::enable_shared_from_this;

    // A simple example
    struct Wstruct
    {
      double valA;
      double valB;
    };

    //generalized capture cross section
    // struct genCapXsec
    // {
    //   std::map< std::pair < int, int >, double> sigma;
    //   // std::map<const char*,int> sigma;
    // };

    struct RD_coannihilating_particle
    {
      RD_coannihilating_particle() {}
      RD_coannihilating_particle(const unsigned int & index, const unsigned int & dof, const double & mass) : index(index), degreesOfFreedom(dof), mass(mass) {}

      unsigned int index;
      unsigned int degreesOfFreedom;
      double mass;
    };

    struct RD_spectrum_type
    {
      RD_spectrum_type() {}
      RD_spectrum_type(const std::vector<RD_coannihilating_particle> & coannPart, const std::vector<TH_Resonance> & resonances, const std::vector<double> & thresholds) : coannihilatingParticles(coannPart), resonances(resonances), threshold_energy(thresholds) {}

      std::vector<RD_coannihilating_particle> coannihilatingParticles;
      std::vector<TH_Resonance> resonances;
      std::vector<double> threshold_energy;
      std::string particle_index_type;
      bool isSelfConj;
    };

    //////////////////////////////////////////////
    // Neutrino telescope data structures
    //////////////////////////////////////////////

    /// Neutrino telescope yield info container
    struct nuyield_info
    {
      public:
        bool threadsafe;
        nuyield_function_pointer pointer;
    };

    /// Neutrino telescope data container
    struct nudata
    {
      public:
        int nobs;
        double signal;
        double bg;
        double loglike;
        double bgloglike;
        double pvalue;
    };

    /// Annihilation/decay channel
    struct SimYieldChannel
    {
        SimYieldChannel(daFunk::Funk dNdE, const std::string& p1, const std::string& p2,
            const std::string& finalState, double Ecm_min, double Ecm_max, safe_ptr<Options> runOptions);
        daFunk::Funk dNdE;
        daFunk::BoundFunk dNdE_bound;  // Pre-bound version for use in e.g. cascade decays
        std::string p1;
        std::string p2;
        std::string finalState;
        double finalStateMass;
        double Ecm_min;
        double Ecm_max;
    };

    /// Result of SimYieldTable::checkChannel
    enum class SimYieldChannelCheck
    {
      success,            // The check succeeded.
      duplication,        // The channel is already in the SimYieldTable
      monochromatic_line  // The channel is a monochromatic line (pi==finalState)
    };

    /// \brief Channel container
    /// Object containing tabularized yields for particle decay and two-body final states.
    class SimYieldTable
    {
        public:
            SimYieldTable();
            void addChannel(daFunk::Funk dNdE, const std::string& p1, const std::string& p2, const std::string& finalState, double Ecm_min, double Ecm_max, safe_ptr<Options> runOptions);
            void addChannel(daFunk::Funk dNdE, const std::string& p1, const std::string& finalState, double Ecm_min, double Ecm_max, safe_ptr<Options> runOptions);
            void addChannel(SimYieldChannel channel);
            void replaceFinalState(const std::string& oldFinalState, const std::string& newFinalState);
            void donateChannels(SimYieldTable& receiver) const;
            bool hasChannel(const std::string& p1, const std::string& p2, const std::string& finalState) const;
            bool hasChannel(const std::string& p1, const std::string& finalState) const;
            bool hasAnyChannel(const std::string& p1) const;
            bool hasAnyChannel(const std::string& p1, const std::string& p2) const;
            const SimYieldChannel& getChannel(const std::string& p1, const std::string& p2, const std::string& finalState) const;
            daFunk::Funk operator()(const std::string& p1, const std::string& p2, const std::string& finalState, double Ecm) const;
            daFunk::Funk operator()(const std::string& p1, const std::string& finalState, double Ecm) const;
            daFunk::Funk operator()(const std::string& p1, const std::string& p2, const std::string& finalState) const;
            daFunk::Funk operator()(const std::string& p1, const std::string& finalState) const;

        private:
            SimYieldChannel dummy_channel;
            std::vector<SimYieldChannel> channel_list;
            int findChannel(const std::string& p1, const std::string& p2, const std::string& finalState) const;
            SimYieldChannelCheck checkChannel(const std::string& p1, const std::string& p2, const std::string& finalState) const;
    };


 }
}

#endif // defined __DarkBit_types_hpp__
```


-------------------------------

Updated on 2022-08-03 at 12:58:07 +0000
