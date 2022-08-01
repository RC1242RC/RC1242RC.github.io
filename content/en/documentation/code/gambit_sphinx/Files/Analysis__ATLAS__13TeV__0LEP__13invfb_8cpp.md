---
title: 'file analyses/Analysis_ATLAS_13TeV_0LEP_13invfb.cpp'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/namespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_13invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/)** <br>[ATLAS]() Run 2 0-lepton jet+MET SUSY analysis, with 13/fb of data.  |




## Source code

```
// -*- C++ -*-
#include "gambit/ColliderBit/analyses/Analysis.hpp"
#include "gambit/ColliderBit/analyses/Cutflow.hpp"
#include "gambit/ColliderBit/ATLASEfficiencies.hpp"

#include "gambit/Utils/begin_ignore_warnings_eigen.hpp"
#include "Eigen/Eigen"
#include "gambit/Utils/end_ignore_warnings.hpp"

namespace Gambit {
  namespace ColliderBit {

    using namespace std;
    using namespace HEPUtils;


    class Analysis_ATLAS_13TeV_0LEP_13invfb : public Analysis {
    public:

      // Required detector sim
      static constexpr const char* detector = "ATLAS";

      // Counters for the number of accepted events for each signal region
      std::map<string, EventCounter> _counters = {
        {"2j-0800", EventCounter("2j-0800")},
        {"2j-1200", EventCounter("2j-1200")},
        {"2j-1600", EventCounter("2j-1600")},
        {"2j-2000", EventCounter("2j-2000")},
        {"3j-1200", EventCounter("3j-1200")},
        {"4j-1000", EventCounter("4j-1000")},
        {"4j-1400", EventCounter("4j-1400")},
        {"4j-1800", EventCounter("4j-1800")},
        {"4j-2200", EventCounter("4j-2200")},
        {"4j-2600", EventCounter("4j-2600")},
        {"5j-1400", EventCounter("5j-1400")},
        {"6j-1800", EventCounter("6j-1800")},
        {"6j-2200", EventCounter("6j-2200")},
      };

      Cutflows _flows;

      Analysis_ATLAS_13TeV_0LEP_13invfb() {

        set_analysis_name("ATLAS_13TeV_0LEP_13invfb");
        set_luminosity(13.3);

        // Book cut-flows
        const vector<string> cuts23j = {"Pre-sel+MET+pT1+meff", "Njet", "Dphi_min(j123,MET)", "Dphi_min(j4+,MET)", "pT2", "eta_j12", "MET/sqrtHT", "m_eff(incl)"};
        _flows.addCutflow("2j-0800", cuts23j);
        _flows.addCutflow("2j-1200", cuts23j);
        _flows.addCutflow("2j-1600", cuts23j);
        _flows.addCutflow("2j-2000", cuts23j);
        _flows.addCutflow("3j-1200", cuts23j);
        const vector<string> cuts456j = {"Pre-sel+MET+pT1+meff", "Njet", "Dphi_min(j123,MET)", "Dphi_min(j4+,MET)", "pT4", "eta_j1234", "Aplanarity", "MET/m_eff(Nj)", "m_eff(incl)"};
        _flows.addCutflow("4j-1000", cuts456j);
        _flows.addCutflow("4j-1400", cuts456j);
        _flows.addCutflow("4j-1800", cuts456j);
        _flows.addCutflow("4j-2200", cuts456j);
        _flows.addCutflow("4j-2600", cuts456j);
        _flows.addCutflow("5j-1400", cuts456j);
        _flows.addCutflow("6j-1800", cuts456j);
        _flows.addCutflow("6j-2200", cuts456j);
      }


      void run(const Event* event) {

        _flows.fillinit();

        // Missing energy
        const P4 pmiss = event->missingmom();
        const double met = event->met();


        // Get baseline jets
        vector<const Jet*> baselineJets;
        for (const Jet* jet : event->jets())
          if (jet->pT() > 20. && jet->abseta() < 2.8) {
            baselineJets.push_back(jet);
          }

        // Get baseline electrons
        vector<const Particle*> baselineElectrons;
        for (const Particle* electron : event->electrons())
          if (electron->pT() > 10. && electron->abseta() < 2.47)
            baselineElectrons.push_back(electron);

        // Apply electron efficiency
        ATLAS::applyElectronEff(baselineElectrons);

        // Get baseline muons
        vector<const Particle*> baselineMuons;
        for (const Particle* muon : event->muons())
          if (muon->pT() > 10. && muon->abseta() < 2.7)
            baselineMuons.push_back(muon);

        // Apply muon efficiency
        ATLAS::applyMuonEff(baselineMuons);

        // Full isolation details:
        //  - Remove electrons within dR = 0.2 of a b-tagged jet
        //  - Remove any |eta| < 2.8 jet within dR = 0.2 of a remaining electron
        //  - Remove any electron with dR in [0.2, 0.4] of a remaining jet
        //  - Remove any muon with dR close to a remaining jet, via a functional form
        //    ifilterBy(muons, [&](const Particle& m){ return deltaR(m,j) < min(0.4, 0.04 + 10*GeV/m.pT()); });
        //  - Remove any |eta| < 2.8 jet within dR = 0.2 of a remaining muon if (inaccessible) track conditions are met... hmm
        //  - Loose electron selection

        // Remove any |eta| < 2.8 jet within dR = 0.2 of an electron
        vector<const Jet*> signalJets;
        for (const Jet* j : baselineJets)
          if (all_of(baselineElectrons, [&](const Particle* e){ return deltaR_rap(*e, *j) > 0.2; }))
            signalJets.push_back(j);

        // Remove electrons with dR = 0.4 of surviving |eta| < 2.8 jets
        vector<const Particle*> signalElectrons;
        for (const Particle* e : baselineElectrons)
          if (all_of(signalJets, [&](const Jet* j){ return deltaR_rap(*e, *j) > 0.4; }))
            signalElectrons.push_back(e);
        // Apply electron ID selection
        ATLAS::applyLooseIDElectronSelectionR2(signalElectrons);

        // Remove muons with dR = 0.4 of surviving |eta| < 2.8 jets
        vector<const Particle*> signalMuons;
        for (const Particle* m : baselineMuons)
          if (all_of(signalJets, [&](const Jet* j){ return deltaR_rap(*m, *j) > 0.4; }))
            signalMuons.push_back(m);

        // The subset of jets with pT > 50 GeV is used for several calculations
        vector<const Jet*> signalJets50;
        for (const Jet* j : signalJets)
          if (j->pT() > 50) signalJets50.push_back(j);


        // Calculate common variables and cuts

        // Multiplicities
        const size_t nElectrons = signalElectrons.size();
        const size_t nMuons = signalMuons.size();
        const size_t nJets50 = signalJets50.size();
        //const size_t nJets = signalJets.size();

        // HT-related quantities (calculated over all >20 GeV jets)
        double sumptj = 0;
        for (const Jet* j : signalJets) sumptj += j->pT();
        const double HT = sumptj;
        const double sqrtHT = sqrt(HT);
        const double met_sqrtHT = met/sqrtHT;

        // Meff-related quantities (calculated over >50 GeV jets only)
        double sumptj50_4 = 0, sumptj50_5 = 0, sumptj50_6 = 0, sumptj50_incl = 0;
        for (size_t i = 0; i < signalJets50.size(); ++i) {
          const Jet* j = signalJets50[i];
          if (i < 4) sumptj50_4 += j->pT();
          if (i < 5) sumptj50_5 += j->pT();
          if (i < 6) sumptj50_6 += j->pT();
          sumptj50_incl += j->pT();
        }
        const double meff_4 = met + sumptj50_4;
        const double meff_5 = met + sumptj50_5;
        const double meff_6 = met + sumptj50_6;
        const double meff_incl = met + sumptj50_incl;
        const double met_meff_4 = met / meff_4;
        const double met_meff_5 = met / meff_5;
        const double met_meff_6 = met / meff_6;

        // Jet |eta|s
        double etamax_2 = 0;
        for (size_t i = 0; i < min(2lu,signalJets.size()); ++i)
          etamax_2 = max(etamax_2, signalJets[i]->abseta());
        double etamax_4 = etamax_2;
        for (size_t i = 2; i < min(4lu,signalJets.size()); ++i)
          etamax_4 = max(etamax_4, signalJets[i]->abseta());
        double etamax_6 = etamax_4;
        for (size_t i = 4; i < min(6lu,signalJets.size()); ++i)
          etamax_6 = max(etamax_6, signalJets[i]->abseta());

        // Jet--MET dphis
        double dphimin_123 = DBL_MAX, dphimin_more = DBL_MAX;
        for (size_t i = 0; i < min(3lu,signalJets50.size()); ++i)
          dphimin_123 = min(dphimin_123, acos(cos(signalJets50[i]->phi() - pmiss.phi())));
        for (size_t i = 3; i < signalJets50.size(); ++i)
          dphimin_more = min(dphimin_more, acos(cos(signalJets50[i]->phi() - pmiss.phi())));

        // Jet aplanarity (on 50 GeV jets only, cf. INT note)
        Eigen::Matrix3d momtensor = Eigen::Matrix3d::Zero();
        double norm = 0;
        for (const Jet* jet : signalJets50) {
          const P4& p4 = jet->mom();
          norm += p4.p2();
          for (size_t i = 0; i < 3; ++i) {
            const double pi = (i == 0) ? p4.px() : (i == 1) ? p4.py() : p4.pz();
            for (size_t j = 0; j < 3; ++j) {
              const double pj = (j == 0) ? p4.px() : (j == 1) ? p4.py() : p4.pz();
              momtensor(i,j) += pi*pj;
            }
          }
        }
        momtensor /= norm;
        const double mineigenvalue = momtensor.eigenvalues().real().minCoeff();
        const double aplanarity = 1.5 * mineigenvalue;


        // Fill signal regions

        const bool leptonCut = (nElectrons == 0 && nMuons == 0);
        const bool metCut = (met > 250.);
        if (nJets50 >= 2 && leptonCut && metCut) {
          _flows.fill(0);

          // 2 jet regions
          if (dphimin_123 > 0.8 && dphimin_more > 0.4) {
            if (signalJets[1]->pT() > 200 && etamax_2 < 0.8) { //< implicit pT[0] cut
              if (met_sqrtHT > 14 && meff_incl >  800) _counters.at("2j-0800").add_event(event);
            }
            if (signalJets[1]->pT() > 250 && etamax_2 < 1.2) { //< implicit pT[0] cut
              if (met_sqrtHT > 16 && meff_incl > 1200) _counters.at("2j-1200").add_event(event);
              if (met_sqrtHT > 18 && meff_incl > 1600) _counters.at("2j-1600").add_event(event);
              if (met_sqrtHT > 20 && meff_incl > 2000) _counters.at("2j-2000").add_event(event);
            }
          }

          // 3 jet region
          if (nJets50 >= 3 && dphimin_123 > 0.4 && dphimin_more > 0.2) {
            if (signalJets[0]->pT() > 600 && signalJets[2]->pT() > 50) { //< implicit pT[1] cut
              if (met_sqrtHT > 16 && meff_incl > 1200) _counters.at("3j-1200").add_event(event);
            }
          }

          // 4 jet regions (note implicit pT[1,2] cuts)
          if (nJets50 >= 4 && dphimin_123 > 0.4 && dphimin_more > 0.4 && signalJets[0]->pT() > 200 && aplanarity > 0.04) {
            if (signalJets[3]->pT() > 100 && etamax_4 < 1.2 && met_meff_4 > 0.25 && meff_incl > 1000) _counters.at("4j-1000").add_event(event);
            if (signalJets[3]->pT() > 100 && etamax_4 < 2.0 && met_meff_4 > 0.25 && meff_incl > 1400) _counters.at("4j-1400").add_event(event);
            if (signalJets[3]->pT() > 100 && etamax_4 < 2.0 && met_meff_4 > 0.20 && meff_incl > 1800) _counters.at("4j-1800").add_event(event);
            if (signalJets[3]->pT() > 150 && etamax_4 < 2.0 && met_meff_4 > 0.20 && meff_incl > 2200) _counters.at("4j-2200").add_event(event);
            if (signalJets[3]->pT() > 150 &&                   met_meff_4 > 0.20 && meff_incl > 2600) _counters.at("4j-2600").add_event(event);
          }

          // 5 jet region (note implicit pT[1,2,3] cuts)
          if (nJets50 >= 5 && dphimin_123 > 0.4 && dphimin_more > 0.2 && signalJets[0]->pT() > 500) {
            if (signalJets[4]->pT() > 50 && met_meff_5 > 0.3 && meff_incl > 1400) _counters.at("5j-1400").add_event(event);
          }

          // 6 jet regions (note implicit pT[1,2,3,4] cuts)
          if (nJets50 >= 6 && dphimin_123 > 0.4 && dphimin_more > 0.2 && signalJets[0]->pT() > 200 && aplanarity > 0.08) {
            if (signalJets[5]->pT() >  50 && etamax_6 < 2.0 && met_meff_6 > 0.20 && meff_incl > 1800) _counters.at("6j-1800").add_event(event);
            if (signalJets[5]->pT() > 100 &&                   met_meff_6 > 0.15 && meff_incl > 2200) _counters.at("6j-2200").add_event(event);
          }

          // Cutflows
          if (nJets50 >= 2) _flows["2j-0800"].filltail({true, dphimin_123 > 0.8, dphimin_more > 0.4, signalJets[1]->pT() > 200, etamax_2 < 0.8, met_sqrtHT > 14*sqrt(GeV), meff_incl >  800});
          if (nJets50 >= 2) _flows["2j-1200"].filltail({true, dphimin_123 > 0.8, dphimin_more > 0.4, signalJets[1]->pT() > 250, etamax_2 < 1.2, met_sqrtHT > 16*sqrt(GeV), meff_incl > 1200});
          if (nJets50 >= 2) _flows["2j-1600"].filltail({true, dphimin_123 > 0.8, dphimin_more > 0.4, signalJets[1]->pT() > 250, etamax_2 < 1.2, met_sqrtHT > 18*sqrt(GeV), meff_incl > 1600});
          if (nJets50 >= 2) _flows["2j-2000"].filltail({true, dphimin_123 > 0.8, dphimin_more > 0.4, signalJets[1]->pT() > 250, etamax_2 < 1.2, met_sqrtHT > 20*sqrt(GeV), meff_incl > 2000});
          if (nJets50 >= 3) _flows["3j-1200"].filltail({nJets50 >= 3, dphimin_123 > 0.4, dphimin_more > 0.2, signalJets[0]->pT() > 600 && signalJets[2]->pT() > 50, true, met_sqrtHT > 16*sqrt(GeV), meff_incl > 1200});
          if (nJets50 >= 4) _flows["4j-1000"].filltail({nJets50 >= 4, dphimin_123 > 0.4, dphimin_more > 0.4, signalJets[0]->pT() > 200 && signalJets[3]->pT() > 100, etamax_4 < 1.2, aplanarity > 0.04, met_meff_4 > 0.25*sqrt(GeV), meff_incl > 1000});
          if (nJets50 >= 4) _flows["4j-1400"].filltail({nJets50 >= 4, dphimin_123 > 0.4, dphimin_more > 0.4, signalJets[0]->pT() > 200 && signalJets[3]->pT() > 100, etamax_4 < 2.0, aplanarity > 0.04, met_meff_4 > 0.25*sqrt(GeV), meff_incl > 1400});
          if (nJets50 >= 4) _flows["4j-1800"].filltail({nJets50 >= 4, dphimin_123 > 0.4, dphimin_more > 0.4, signalJets[0]->pT() > 200 && signalJets[3]->pT() > 100, etamax_4 < 2.0, aplanarity > 0.04, met_meff_4 > 0.20*sqrt(GeV), meff_incl > 1800});
          if (nJets50 >= 4) _flows["4j-2200"].filltail({nJets50 >= 4, dphimin_123 > 0.4, dphimin_more > 0.4, signalJets[0]->pT() > 200 && signalJets[3]->pT() > 150, etamax_4 < 2.0, aplanarity > 0.04, met_meff_4 > 0.20*sqrt(GeV), meff_incl > 2200});
          if (nJets50 >= 4) _flows["4j-2600"].filltail({nJets50 >= 4, dphimin_123 > 0.4, dphimin_more > 0.4, signalJets[0]->pT() > 200 && signalJets[3]->pT() > 150, true,           aplanarity > 0.04, met_meff_4 > 0.20*sqrt(GeV), meff_incl > 2600});
          if (nJets50 >= 5) _flows["5j-1400"].filltail({nJets50 >= 5, dphimin_123 > 0.4, dphimin_more > 0.2, signalJets[0]->pT() > 500 && signalJets[4]->pT() > 50, true, true, met_meff_5 > 0.3*sqrt(GeV), meff_incl > 1400});
          if (nJets50 >= 6) _flows["6j-1800"].filltail({nJets50 >= 6, dphimin_123 > 0.4, dphimin_more > 0.2, signalJets[0]->pT() > 200 && signalJets[5]->pT() > 50, etamax_6 < 2.0, aplanarity > 0.08, met_meff_6 > 0.20*sqrt(GeV), meff_incl > 1800});
          if (nJets50 >= 6) _flows["6j-2200"].filltail({nJets50 >= 6, dphimin_123 > 0.4, dphimin_more > 0.2, signalJets[0]->pT() > 200 && signalJets[5]->pT() > 100, true,           aplanarity > 0.08, met_meff_6 > 0.15*sqrt(GeV), meff_incl > 2200});

        }
      }

      void combine(const Analysis* other)
      {
        const Analysis_ATLAS_13TeV_0LEP_13invfb* specificOther = dynamic_cast<const Analysis_ATLAS_13TeV_0LEP_13invfb*>(other);
        for (auto& pair : _counters) { pair.second += specificOther->_counters.at(pair.first); }
      }


      void collect_results() {
        add_result(SignalRegionData(_counters.at("2j-0800"), 650, {610., 50.}));
        add_result(SignalRegionData(_counters.at("2j-1200"), 270, {297., 29.}));
        add_result(SignalRegionData(_counters.at("2j-1600"),  96, {121., 13.}));
        add_result(SignalRegionData(_counters.at("2j-2000"),  29, { 42.,  6.}));
        add_result(SignalRegionData(_counters.at("3j-1200"), 363, {355., 33.}));
        add_result(SignalRegionData(_counters.at("4j-1000"),  97, { 84.,  7.}));
        add_result(SignalRegionData(_counters.at("4j-1400"),  71, { 66.,  8.}));
        add_result(SignalRegionData(_counters.at("4j-1800"),  37, { 27.,  3.2}));
        add_result(SignalRegionData(_counters.at("4j-2200"),  10, {  4.8, 1.1}));
        add_result(SignalRegionData(_counters.at("4j-2600"),   3, {  2.7, 0.6}));
        add_result(SignalRegionData(_counters.at("5j-1400"),  64, { 68.,  9.}));
        add_result(SignalRegionData(_counters.at("6j-1800"),  10, {  5.5, 1.0}));
        add_result(SignalRegionData(_counters.at("6j-2200"),   1, {  0.82,0.35}));

        // const double sf = 13.3*crossSection()/femtobarn/sumOfWeights();
        // _flows.scale(sf);
        // cout << "CUTFLOWS:\n\n" << _flows << endl;
      }


    protected:
      void analysis_specific_reset() {
        for (auto& pair : _counters) { pair.second.reset(); }
      }

    };


    // Factory fn
    DEFINE_ANALYSIS_FACTORY(ATLAS_13TeV_0LEP_13invfb)


  }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:33 +0000
