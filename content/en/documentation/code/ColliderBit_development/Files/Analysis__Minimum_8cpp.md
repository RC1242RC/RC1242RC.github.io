---
title: 'file analyses/Analysis_Minimum.cpp'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |
| **[Gambit::ColliderBit](/documentation/code/namespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::Analysis_Minimum](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__minimum/)** <br>Basic analysis code for copying.  |




## Source code

```
#include "gambit/ColliderBit/analyses/Analysis.hpp"
#include "gambit/ColliderBit/ATLASEfficiencies.hpp"

namespace Gambit {
  namespace ColliderBit {
    using namespace std;


    class Analysis_Minimum : public Analysis {
    private:

      // Variables to hold the number of events passing signal region cuts
      double _numSR;

    public:

      // Required detector sim
      static constexpr const char* detector = "ATLAS";

      Analysis_Minimum() {

        // Set the analysis name
        set_analysis_name("Minimum");

        // Set the LHC luminosity
        set_luminosity(20.3);

        // Set number of events passing cuts to zero upon initialisation
        _numSR = 0;


      }


      void run(const HEPUtils::Event* event){

        // Get the missing energy in the event
        double met = event->met();

        // Now define vectors of baseline objects,  including:
        // - retrieval of electron, muon and jets from the event)
        // - application of basic pT and eta cuts

        // Baseline electrons
        vector<const HEPUtils::Particle*> baselineElectrons;
        for (const HEPUtils::Particle* electron : event->electrons()) {
          if (electron->pT() > 10. && fabs(electron->eta()) < 2.47) baselineElectrons.push_back(electron);
        }

        // Baseline muons
        vector<const HEPUtils::Particle*> baselineMuons;
        for (const HEPUtils::Particle* muon : event->muons()) {
          if (muon->pT() > 10. && fabs(muon->eta()) < 2.4) baselineMuons.push_back(muon);
        }

        // Baseline jets
        vector<const HEPUtils::Jet*> baselineJets;
        for (const HEPUtils::Jet* jet : event->jets()) {
          if (jet->pT() > 20. && fabs(jet->eta()) < 4.5) baselineJets.push_back(jet);
        }

        // Could add ATLAS style overlap removal here
        // See Analysis_ATLAS_0LEP_20invfb for example

        // Could add ATLAS or CMS efficiencies here
        // See Analysis_ATLAS_2LEPEW_20invfb.cpp for an example

        int nElectrons = baselineElectrons.size();
        int nMuons = baselineMuons.size();
        int nJets = baselineJets.size();

        std::cerr << "nElectrons " << nElectrons << " nMuons " << nMuons << " nJets " << nJets << " met " << met << std::endl;

        // Increment number of events passing signal region cuts
        // Dummy signal region: need 2 jets, met > 150 and no leptons

        if((nElectrons+nMuons)==0 && nJets==2 && met>150.) _numSR += event->weight();

      }


      void combine(const Analysis* other)
      {
        const Analysis_Minimum* specificOther = dynamic_cast<const Analysis_Minimum*>(other);
        _numSR += specificOther->_numSR;
      }


      void collect_results() {

        // Now fill a results object with the result for our signal region
        // We have made up a number of observed events
        // We have also made up a number of predicted background events (with a made up uncertainty)

        // add_result(SignalRegionData("SR label", n_obs, {n_sig_MC, n_sig_MC_sys}, {n_bkg, n_bkg_err}));
        add_result(SignalRegionData("SR", 100., {_numSR, 0.}, {95., 9.5}));
      }


    protected:
      void analysis_specific_reset() {
        _numSR = 0;
      }


    };

    DEFINE_ANALYSIS_FACTORY(Minimum)

  }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:26 +0000
