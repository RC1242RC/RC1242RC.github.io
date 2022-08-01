---
title: 'file analyses/Analysis_CMS_13TeV_1LEPbb_36invfb.cpp'

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
| class | **[Gambit::ColliderBit::Analysis_CMS_13TeV_1LEPbb_36invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__1lepbb__36invfb/)**  |




## Source code

```


// Based on http://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-16-043/index.html

#include <vector>
#include <cmath>
#include <memory>
#include <iomanip>
#include <fstream>

#include "gambit/ColliderBit/analyses/Analysis.hpp"
#include "gambit/ColliderBit/CMSEfficiencies.hpp"

using namespace std;

namespace Gambit {
  namespace ColliderBit {

    class Analysis_CMS_13TeV_1LEPbb_36invfb : public Analysis {
    private:

      std::map<string, EventCounter> _counters = {
        {"SRA", EventCounter("SRA")},
        {"SRB", EventCounter("SRB")},
      };

      vector<int> cutFlowVector;
      vector<string> cutFlowVector_str;
      // vector<double> cutFlowVectorCMS_225_75;
      // vector<double> cutFlowVectorCMS_250_1;
      // vector<double> cutFlowVectorCMS_350_100;
      // vector<double> cutFlowVectorCMS_500_1;
      // vector<double> cutFlowVectorCMS_500_125;
      // double xsecCMS_225_75;
      // double xsecCMS_250_1;
      // double xsecCMS_350_100;
      // double xsecCMS_500_1;
      // double xsecCMS_500_125;
      size_t NCUTS;

      // ofstream cutflowFile;

    public:

      // Required detector sim
      static constexpr const char* detector = "CMS";

      Analysis_CMS_13TeV_1LEPbb_36invfb() {

        set_analysis_name("CMS_13TeV_1LEPbb_36invfb");
        set_luminosity(35.9);

        NCUTS=10;

        // xsecCMS_225_75=1165;
        // xsecCMS_250_1=782.5;
        // xsecCMS_350_100=209.4;
        // xsecCMS_500_1=46.35;
        // xsecCMS_500_125=46.35;
        for (size_t i=0;i<NCUTS;i++){
          cutFlowVector.push_back(0);
          // cutFlowVectorCMS_225_75.push_back(0);
          // cutFlowVectorCMS_250_1.push_back(0);
          // cutFlowVectorCMS_350_100.push_back(0);
          // cutFlowVectorCMS_500_1.push_back(0);
          // cutFlowVectorCMS_500_125.push_back(0);
          cutFlowVector_str.push_back("");
        }

      }


      void run(const HEPUtils::Event* event) {

        double met = event->met();

        // Baseline objects
        //@note Numbers digitized from https://twiki.cern.ch/twiki/pub/CMSPublic/SUSMoriond2017ObjectsEfficiency/2d_full_pteta_el_043_ttbar.pdf
        const vector<double> aEl={0,0.8,10.};
        const vector<double> bEl={0,40.,50.,10000.};
        const vector<double> cEl={0.654,0.705,0.731,0.665,0.655,0.722};
        HEPUtils::BinnedFn2D<double> _eff2dEl(aEl,bEl,cEl);
        vector<const HEPUtils::Particle*> baselineElectrons;
        for (const HEPUtils::Particle* electron : event->electrons()) {
          bool isEl=has_tag(_eff2dEl, electron->abseta(), electron->pT());
          if (electron->pT()>5. && electron->abseta()<2.5 && isEl)baselineElectrons.push_back(electron);
        }

        //@note Numbers digitized from https://twiki.cern.ch/twiki/pub/CMSPublic/SUSMoriond2017ObjectsEfficiency/2d_full_pteta_mu_043_ttbar.pdf
        const vector<double> aMu={0,0.9,1.2,10.};
        const vector<double> bMu={0,30.,40.,50.,10000.};
        const vector<double> cMu={0.761,0.804,0.814,0.805,0.769,0.813,0.846,0.82,0.819,0.847,0.834,0.852};
        HEPUtils::BinnedFn2D<double> _eff2dMu(aMu,bMu,cMu);
        vector<const HEPUtils::Particle*> baselineMuons;
        for (const HEPUtils::Particle* muon : event->muons()) {
          bool isMu=has_tag(_eff2dMu, muon->abseta(), muon->pT());
          if (muon->pT()>5. && muon->abseta()<2.4 && isMu)baselineMuons.push_back(muon);
        }

        vector<const HEPUtils::Particle*> baselineTaus;
        for (const HEPUtils::Particle* tau : event->taus()) {
          if (tau->pT()>20. && tau->abseta()<2.3)baselineTaus.push_back(tau);
        }

        vector<const HEPUtils::Jet*> baselineJets;
        for (const HEPUtils::Jet* jet : event->jets()) {
          if (jet->pT()>25. &&fabs(jet->eta())<2.4)baselineJets.push_back(jet);
        }

        // Signal objects
        vector<const HEPUtils::Particle*> signalLeptons;
        vector<const HEPUtils::Particle*> signalElectrons;
        vector<const HEPUtils::Particle*> signalMuons;
        vector<const HEPUtils::Jet*> signalJets;
        vector<const HEPUtils::Jet*> signalBJets;

        for (size_t iEl=0;iEl<baselineElectrons.size();iEl++) {
          if (baselineElectrons.at(iEl)->pT()>30. && baselineElectrons.at(iEl)->abseta()<1.44)signalElectrons.push_back(baselineElectrons.at(iEl));
        }

        for (size_t iMu=0;iMu<baselineMuons.size();iMu++) {
          if (baselineMuons.at(iMu)->pT()>25. && baselineMuons.at(iMu)->abseta()<2.1)signalMuons.push_back(baselineMuons.at(iMu));
        }

        for (size_t iJet=0;iJet<baselineJets.size();iJet++) {
          if (baselineJets.at(iJet)->pT()>30.) {
            signalJets.push_back(baselineJets.at(iJet));
            if (baselineJets.at(iJet)->btag())signalBJets.push_back(baselineJets.at(iJet));
          }
        }
        vector<const HEPUtils::Jet*> signalBJets_temp=signalBJets;
        CMS::applyCSVv2MediumBtagEff(signalBJets_temp);
        if (signalBJets_temp.size()>0) {
          CMS::applyCSVv2LooseBtagEff(signalBJets_temp);
          for (size_t iJet=0;iJet<signalBJets_temp.size();iJet++) {
            if (find(signalBJets.begin(),signalBJets.end(),signalBJets_temp.at(iJet))==signalBJets.end())signalBJets.push_back(signalBJets_temp.at(iJet));
          }
        }
        if (signalBJets_temp.size()==0)signalBJets.clear();

        signalLeptons=signalElectrons;
        signalLeptons.insert(signalLeptons.end(),signalMuons.begin(),signalMuons.end());
        int nSignalLeptons=signalLeptons.size();
        int nSignalElectrons=signalElectrons.size();
        int nSignalMuons=signalMuons.size();
        int nSignalJets=signalJets.size();
        int nSignalBJets=signalBJets.size();

        //Variables
        bool preselection=false;
        bool lepton2_veto=true;
        bool tau_veto=true;
        double mCT=0;
        double mbb=0;
        double mT=0;

        const vector<double> aLep={0,10.};
        const vector<double> bLep={0,10000.};
        const vector<double> cEl_Trig={0.825};
        const vector<double> cMu_Trig={0.885};
        HEPUtils::BinnedFn2D<double> _eff2dEl_Trig(aLep,bLep,cEl_Trig);
        HEPUtils::BinnedFn2D<double> _eff2dMu_Trig(aLep,bLep,cMu_Trig);

        if ((baselineMuons.size()+baselineElectrons.size())>1)lepton2_veto=false;
        if (baselineTaus.size()>0)tau_veto=false;
        if (nSignalLeptons>0 && met>50. && lepton2_veto && tau_veto && nSignalJets==2 && nSignalBJets==2) {
          if (nSignalMuons==1) {
            bool hasTrig=has_tag(_eff2dMu_Trig, signalMuons.at(0)->abseta(), signalMuons.at(0)->pT());
            if (hasTrig)preselection=true;
          }
          if (nSignalElectrons==1) {
            bool hasTrig=has_tag(_eff2dEl_Trig, signalElectrons.at(0)->abseta(), signalElectrons.at(0)->pT());
            if (hasTrig)preselection=true;
          }
        }

        if (nSignalBJets>1) {
          mCT=sqrt(2*signalBJets.at(0)->pT()*signalBJets.at(1)->pT()*(1+cos(signalBJets.at(0)->mom().deltaPhi(signalBJets.at(1)->mom()))));
          mbb=(signalBJets.at(0)->mom()+signalBJets.at(1)->mom()).m();
        }
        if (signalLeptons.size()>0)mT=sqrt(2*signalLeptons.at(0)->pT()*met*(1-cos(signalLeptons.at(0)->mom().deltaPhi(event->missingmom()))));

        //Signal Regions
        if (preselection && mbb>90 && mbb<150 && mCT>170. && met>125. && mT>150.) {
          //SRA
          if (met>125. && met<200.) _counters.at("SRA").add_event(event);
          //SRB
          if (met>200.) _counters.at("SRB").add_event(event);
        }

        cutFlowVector_str[0] = "All events";
        cutFlowVector_str[1] = "$\\geq$ 1 signal lepton; $E_{T}^{miss} > 50 GeV$";
        cutFlowVector_str[2] = "2nd lepton veto";
        cutFlowVector_str[3] = "Tau veto";
        cutFlowVector_str[4] = "2 jets";
        cutFlowVector_str[5] = "2 bjets";
        cutFlowVector_str[6] = "$90 < m_{bb} < 150 GeV$";
        cutFlowVector_str[7] = "$m_{CT} > 170 GeV$";
        cutFlowVector_str[8] = "$E_{T}^{miss} > 125 GeV$";
        cutFlowVector_str[9] = "$m_{T} > 150 GeV$";

        // cutFlowVectorCMS_225_75[0]=7297.6;
        // cutFlowVectorCMS_225_75[1]=1320.5;
        // cutFlowVectorCMS_225_75[2]=1265.3;
        // cutFlowVectorCMS_225_75[3]=1259.0;
        // cutFlowVectorCMS_225_75[4]=680.8;
        // cutFlowVectorCMS_225_75[5]=299.0;
        // cutFlowVectorCMS_225_75[6]=258.4;
        // cutFlowVectorCMS_225_75[7]=50.9;
        // cutFlowVectorCMS_225_75[8]=38.4;
        // cutFlowVectorCMS_225_75[9]=4.7;

        // cutFlowVectorCMS_250_1[0]=4901.0;
        // cutFlowVectorCMS_250_1[1]=1035.1;
        // cutFlowVectorCMS_250_1[2]=994.3;
        // cutFlowVectorCMS_250_1[3]=989.6;
        // cutFlowVectorCMS_250_1[4]=542.3;
        // cutFlowVectorCMS_250_1[5]=242.6;
        // cutFlowVectorCMS_250_1[6]=214.4;
        // cutFlowVectorCMS_250_1[7]=67.2;
        // cutFlowVectorCMS_250_1[8]=54.8;
        // cutFlowVectorCMS_250_1[9]=17.6;

        // cutFlowVectorCMS_350_100[0]=1309.1;
        // cutFlowVectorCMS_350_100[1]=328.1;
        // cutFlowVectorCMS_350_100[2]=316.6;
        // cutFlowVectorCMS_350_100[3]=315.3;
        // cutFlowVectorCMS_350_100[4]=162.9;
        // cutFlowVectorCMS_350_100[5]=74.9;
        // cutFlowVectorCMS_350_100[6]=65.6;
        // cutFlowVectorCMS_350_100[7]=26.7;
        // cutFlowVectorCMS_350_100[8]=22.9;
        // cutFlowVectorCMS_350_100[9]=10.7;

        // cutFlowVectorCMS_500_1[0]=290.2;
        // cutFlowVectorCMS_500_1[1]=89;
        // cutFlowVectorCMS_500_1[2]=85.8;
        // cutFlowVectorCMS_500_1[3]=85.5;
        // cutFlowVectorCMS_500_1[4]=42.3;
        // cutFlowVectorCMS_500_1[5]=19.7;
        // cutFlowVectorCMS_500_1[6]=17.5;
        // cutFlowVectorCMS_500_1[7]=11.9;
        // cutFlowVectorCMS_500_1[8]=10.9;
        // cutFlowVectorCMS_500_1[9]=7.1;

        // cutFlowVectorCMS_500_125[0]=290.3;
        // cutFlowVectorCMS_500_125[1]=86.9;
        // cutFlowVectorCMS_500_125[2]=84.1;
        // cutFlowVectorCMS_500_125[3]=83.9;
        // cutFlowVectorCMS_500_125[4]=41.1;
        // cutFlowVectorCMS_500_125[5]=19.5;
        // cutFlowVectorCMS_500_125[6]=17.6;
        // cutFlowVectorCMS_500_125[7]=10.9;
        // cutFlowVectorCMS_500_125[8]=9.9;
        // cutFlowVectorCMS_500_125[9]=6.5;

        for (size_t j=0;j<NCUTS;j++){
          if(
             (j==0) ||

             (j==1 && nSignalLeptons>=1 && met>50) ||

             (j==2 && nSignalLeptons>=1 && met>50 && lepton2_veto) ||

             (j==3 && nSignalLeptons>=1 && met>50 && lepton2_veto && tau_veto) ||

             (j==4 && nSignalLeptons>=1 && met>50 && lepton2_veto && tau_veto && nSignalJets==2) ||

             (j==5 && preselection) ||

             (j==6 && preselection && mbb>90 && mbb<150) ||

             (j==7 && preselection && mbb>90 && mbb<150 && mCT>170.) ||

             (j==8 && preselection && mbb>90 && mbb<150 && mCT>170. && met>125.) ||

             (j==9 && preselection && mbb>90 && mbb<150 && mCT>170. && met>125. && mT>150.) )

            cutFlowVector[j]++;
        }

      }

      void combine(const Analysis* other)
      {
        const Analysis_CMS_13TeV_1LEPbb_36invfb* specificOther
                = dynamic_cast<const Analysis_CMS_13TeV_1LEPbb_36invfb*>(other);

        for (auto& pair : _counters) { pair.second += specificOther->_counters.at(pair.first); }

        if (NCUTS != specificOther->NCUTS) NCUTS = specificOther->NCUTS;
        for (size_t j = 0; j < NCUTS; j++) {
          cutFlowVector[j] += specificOther->cutFlowVector[j];
          cutFlowVector_str[j] = specificOther->cutFlowVector_str[j];
        }
      }


      void collect_results() {

        add_result(SignalRegionData(_counters.at("SRA"), 11., {7.5, 2.5}));
        add_result(SignalRegionData(_counters.at("SRB"), 7., {8.7, 2.2}));

      }


    protected:
      void analysis_specific_reset() {

        for (auto& pair : _counters) { pair.second.reset(); }

        std::fill(cutFlowVector.begin(), cutFlowVector.end(), 0);
      }

    };


    // Factory fn
    DEFINE_ANALYSIS_FACTORY(CMS_13TeV_1LEPbb_36invfb)


  }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:20 +0000
