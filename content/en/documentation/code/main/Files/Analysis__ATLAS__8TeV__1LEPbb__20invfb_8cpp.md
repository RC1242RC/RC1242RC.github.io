---
title: 'file analyses/Analysis_ATLAS_8TeV_1LEPbb_20invfb.cpp'

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
| class | **[Gambit::ColliderBit::Analysis_ATLAS_8TeV_1LEPbb_20invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb/)**  |
| struct | **[Gambit::ColliderBit::Analysis_ATLAS_8TeV_1LEPbb_20invfb::particleComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb_1_1particlecomparison/)**  |
| struct | **[Gambit::ColliderBit::Analysis_ATLAS_8TeV_1LEPbb_20invfb::jetComparison](/documentation/code/classes/structgambit_1_1colliderbit_1_1analysis__atlas__8tev__1lepbb__20invfb_1_1jetcomparison/)**  |




## Source code

```


#include <vector>
#include <cmath>
#include <memory>
#include <iomanip>
#include <fstream>
#include <ctime>

#include "gambit/ColliderBit/analyses/Analysis.hpp"
#include "gambit/ColliderBit/ATLASEfficiencies.hpp"
//#include "gambit/ColliderBit/analyses/Perf_Plot.hpp"

using namespace std;

namespace Gambit {
  namespace ColliderBit {

    class Analysis_ATLAS_8TeV_1LEPbb_20invfb : public Analysis {
    private:

      // Numbers passing cuts
      double _numSRA, _numSRB;
      vector<int> cutFlowVector;
      // vector<double> cutFlowVectorATLAS_130_0;
      // vector<double> cutFlowVectorATLAS_250_0;
      // double xsecATLAS_130_0;
      // double xsecATLAS_250_0;
      vector<string> cutFlowVector_str;
      size_t NCUTS;

      // Perf_Plot* plots_2bjets;
      // Perf_Plot* plots_mbb;
      // Perf_Plot* plots_HEPmct;
      // Perf_Plot* plots_HEPmt;
      // Perf_Plot* plots_HEPnbj;
      // Perf_Plot* plots_HEPmbb;
      // ofstream cutflowFile;

    public:

      // Required detector sim
      static constexpr const char* detector = "ATLAS";

      struct particleComparison {
        bool operator() (const HEPUtils::Particle* i,const HEPUtils::Particle* j) {return (i->pT()>j->pT());}
      } compareParticlePt;

      struct jetComparison {
        bool operator() (const HEPUtils::Jet* i,const HEPUtils::Jet* j) {return (i->pT()>j->pT());}
      } compareJetPt;

      Analysis_ATLAS_8TeV_1LEPbb_20invfb() {

        set_luminosity(20.3);
        set_analysis_name("ATLAS_8TeV_1LEPbb_20invfb");

        _numSRA=0;
        _numSRB=0;

        NCUTS=8;
        // xsecATLAS_130_0=4240.;
        // xsecATLAS_250_0=320.;

        for (size_t i=0;i<NCUTS;i++){
          cutFlowVector.push_back(0);
          // cutFlowVectorATLAS_130_0.push_back(0);
          // cutFlowVectorATLAS_250_0.push_back(0);
          cutFlowVector_str.push_back("");
        }

        // vector<const char*> variablesNames = {"met","mct","mbb","mt","j0pt","lpt","nbj","j1pt","j0eta","j1eta","jjdeltaR"};
        // plots_2bjets = new Perf_Plot(analysis_name()+"_2bjets", &variablesNames);
        // plots_mbb = new Perf_Plot(analysis_name()+"_mbb", &variablesNames);
        // plots_HEPmct = new Perf_Plot(analysis_name()+"_HEPmct", &variablesNames);
        // plots_HEPmt = new Perf_Plot(analysis_name()+"_HEPmt", &variablesNames);
        // plots_HEPnbj = new Perf_Plot(analysis_name()+"_HEPnbj", &variablesNames);
        // plots_HEPmbb = new Perf_Plot(analysis_name()+"_HEPmbb", &variablesNames);

      }


      void run(const HEPUtils::Event* event) {

        double met = event->met();

        // Baseline objects
        vector<const HEPUtils::Particle*> baselineElectrons;
        for (const HEPUtils::Particle* electron : event->electrons()) {
          if (electron->pT()>10. && electron->abseta()<2.47)baselineElectrons.push_back(electron);
        }

        // Apply electron efficiency
        ATLAS::applyElectronEff(baselineElectrons);

        // Apply medium electron selection
        ATLAS::applyMediumIDElectronSelection(baselineElectrons);

        vector<const HEPUtils::Particle*> baselineMuons;
        for (const HEPUtils::Particle* muon : event->muons()) {
          if (muon->pT()>10. && muon->abseta()<2.4)baselineMuons.push_back(muon);
        }

        // Apply muon efficiency
        ATLAS::applyMuonEff(baselineMuons);

        vector<const HEPUtils::Jet*> baselineJets;
        for (const HEPUtils::Jet* jet : event->jets()) {
          if (jet->pT()>20. && fabs(jet->eta())<4.5) baselineJets.push_back(jet);
        }

        //Overlap Removal
        vector<const HEPUtils::Particle*> overlapElectrons1;
        vector<const HEPUtils::Particle*> overlapElectrons2;
        vector<const HEPUtils::Particle*> overlapMuons;
        vector<const HEPUtils::Jet*> overlapJets;

        vector<size_t> overlapEl;
        for (size_t iEl1=0;iEl1<baselineElectrons.size();iEl1++) {
          bool overlap=false;
          for (size_t iEl2=0;iEl2<baselineElectrons.size();iEl2++) {
            if (baselineElectrons.at(iEl1)->mom().deltaR_eta(baselineElectrons.at(iEl2)->mom())<0.1 && iEl1!=iEl2) {
              if (baselineElectrons.at(iEl1)->pT()<baselineElectrons.at(iEl2)->pT())overlap=true;
            }
          }
          if (!overlap)overlapElectrons1.push_back(baselineElectrons.at(iEl1));
        }

        for (size_t iJet=0;iJet<baselineJets.size();iJet++) {
          bool overlap=false;
          for (size_t iEl=0;iEl<overlapElectrons1.size();iEl++) {
            if (fabs(overlapElectrons1.at(iEl)->mom().deltaR_eta(baselineJets.at(iJet)->mom()))<0.2)overlap=true;
          }
          if (!overlap)overlapJets.push_back(baselineJets.at(iJet));
        }

        for (size_t iEl=0;iEl<overlapElectrons1.size();iEl++) {
          bool overlap=false;
          for (size_t iJet=0;iJet<overlapJets.size();iJet++) {
            if (fabs(overlapElectrons1.at(iEl)->mom().deltaR_eta(overlapJets.at(iJet)->mom()))<0.4)overlap=true;
          }
          if (!overlap)overlapElectrons2.push_back(overlapElectrons1.at(iEl));
        }

        for (size_t iMu=0;iMu<baselineMuons.size();iMu++) {
          bool overlap=false;
          for (size_t iJet=0;iJet<overlapJets.size();iJet++) {
            if (fabs(baselineMuons.at(iMu)->mom().deltaR_eta(overlapJets.at(iJet)->mom()))<0.4)overlap=true;
          }
          if (!overlap)overlapMuons.push_back(baselineMuons.at(iMu));
        }

        //Signal Objects
        vector<const HEPUtils::Particle*> signalLeptons;
        vector<const HEPUtils::Particle*> signalElectrons;
        vector<const HEPUtils::Particle*> signalMuons;
        vector<const HEPUtils::Jet*> signalJets;
        vector<const HEPUtils::Jet*> signalBJets;

        for (size_t iEl=0;iEl<overlapElectrons2.size();iEl++) {
          if (overlapElectrons2.at(iEl)->pT()>25.)signalElectrons.push_back(overlapElectrons2.at(iEl));
        }
        ATLAS::applyTightIDElectronSelection(signalElectrons);

        for (size_t iMu=0;iMu<overlapMuons.size();iMu++) {
          if (overlapMuons.at(iMu)->pT()>25.)signalMuons.push_back(overlapMuons.at(iMu));
        }

        const vector<double> aBJet = {0,2.1,10.};
        const vector<double> bBJet = {0,30.,40.,50.,70.,10000.};
        const vector<double> cBJet={0.54,0.63,0.67,0.7,0.75,0.35,0.42,0.44,0.46,0.49};
        HEPUtils::BinnedFn2D<double> _eff2dBJet(aBJet,bBJet,cBJet);
        for (size_t iJet=0;iJet<overlapJets.size();iJet++) {
          if (overlapJets.at(iJet)->pT()>25. && overlapJets.at(iJet)->abseta()<2.40) {
            signalJets.push_back(overlapJets.at(iJet));
            bool hasTag=has_tag(_eff2dBJet, overlapJets.at(iJet)->abseta(), overlapJets.at(iJet)->pT());
            if (overlapJets.at(iJet)->btag() && hasTag)signalBJets.push_back(overlapJets.at(iJet));
          }
        }

        signalLeptons=signalElectrons;
        signalLeptons.insert(signalLeptons.end(),signalMuons.begin(),signalMuons.end());
        int nSignalLeptons=signalLeptons.size();
        int nBaselineLeptons=overlapElectrons2.size()+overlapMuons.size();
        int nSignalElectrons=signalElectrons.size();
        int nSignalMuons=signalMuons.size();
        int nSignalJets=signalJets.size();
        int nSignalBJets=signalBJets.size();
        sort(signalJets.begin(), signalJets.end(), compareJetPt);
        sort(signalLeptons.begin(), signalLeptons.end(), compareParticlePt);

        //Variables
        double mT=0;
        double mCT=0;
        double mbb=0;
        bool leadingBJets=isLeadingBJets(signalJets, signalBJets);
        bool lepton_overlap=true;
        bool preselection=false;

        const vector<double>  aLep = {0,10.};
        const vector<double>  bLep = {0,10000.};
        const vector<double> cEl = {0.95};
        const vector<double> cMu1 = {0.7};
        const vector<double> cMu2 = {0.85};
        HEPUtils::BinnedFn2D<double> _eff2dMu1(aLep,bLep,cMu1);
        HEPUtils::BinnedFn2D<double> _eff2dMu2(aLep,bLep,cMu2);
        HEPUtils::BinnedFn2D<double> _eff2dEl(aLep,bLep,cEl);

        for (size_t iEl=0;iEl<overlapElectrons2.size();iEl++) {
          for (size_t iMu=0;iMu<overlapMuons.size();iMu++) {
            if(fabs(overlapElectrons2.at(iEl)->mom().deltaR_eta(overlapMuons.at(iMu)->mom()))<0.1)lepton_overlap=false;
          }
        }
        for (size_t iMu1=0;iMu1<overlapMuons.size();iMu1++) {
          for (size_t iMu2=0;iMu2<overlapMuons.size();iMu2++) {
            if(fabs(overlapMuons.at(iMu1)->mom().deltaR_eta(overlapMuons.at(iMu2)->mom()))<0.05)lepton_overlap=false;
          }
        }
        if (lepton_overlap && nSignalLeptons==1 && nBaselineLeptons==1 && (nSignalJets==2 || nSignalJets==3) && leadingBJets) {
          if (nSignalMuons==1) {
            bool hasTrig1=has_tag(_eff2dMu1,signalMuons.at(0)->abseta(),signalMuons.at(0)->pT());
            bool hasTrig2=has_tag(_eff2dMu2,signalMuons.at(0)->abseta(),signalMuons.at(0)->pT());
            if (signalMuons.at(0)->abseta()<1.05 && hasTrig1)preselection=true;
            if (signalMuons.at(0)->abseta()>1.05 && hasTrig2)preselection=true;
          }
          if (nSignalElectrons==1) {
            bool hasTrig=has_tag(_eff2dEl,signalElectrons.at(0)->abseta(),signalElectrons.at(0)->pT());
            if (hasTrig)preselection=true;
          }
        }

        if (nSignalLeptons)mT=sqrt(2*signalLeptons.at(0)->pT()*met*(1-cos(signalLeptons.at(0)->phi()-event->missingmom().phi())));
        if (nSignalJets>1) {
          mCT=sqrt(2*signalJets.at(0)->pT()*signalJets.at(1)->pT()*(1+cos(signalJets.at(0)->phi()-signalJets.at(1)->phi())));
          mbb=(signalJets.at(0)->mom()+signalJets.at(1)->mom()).m();
        }

        bool SRA=false;
        bool SRB=false;
        if (preselection && nSignalBJets==2 && met>100. && mCT>160. && mbb>105. && mbb<135.) {
          if (mT>100. && mT<130.) {
            _numSRA += event->weight();
            SRA=true;
          }
          if (mT>130.) {
            _numSRB += event->weight();
            SRB=true;
          }
        }

        // if (preselection) {
        //   vector<double> variables={met, mCT, mbb, mT, signalJets.at(0)->pT(), signalLeptons.at(0)->pT(), (double)nSignalBJets, signalJets.at(1)->pT(),signalJets.at(0)->eta(), signalJets.at(1)->eta(), signalJets.at(0)->mom().deltaR_eta(signalJets.at(1)->mom())};
        //   if (met>50. && mT>40. && mbb>40. && nSignalBJets==2)plots_2bjets->fill(&variables);
        //   if (met>50. && mT>40. && mbb>40. && nSignalBJets==2 && met>100. && mCT>160. && mT>100. && mbb>45. && mbb<195.)plots_mbb->fill(&variables);
 //          if (nSignalBJets==2 && met>100. && mT>100. && mbb>45. && mbb<195. && (mbb<105. || mbb>135.))plots_HEPmct->fill(&variables);
 //          if (nSignalBJets==2 && met>100. && mCT>160. && mbb>45. && mbb<195. && (mbb<105. || mbb>135.))plots_HEPmt->fill(&variables);
 //          if (nSignalBJets==2 && met>100 && mCT>160. && mT>100)plots_HEPmbb->fill(&variables);
 //          if (met>100. && mCT>160. && mT>100. && mbb>105. && mbb<135.)plots_HEPnbj->fill(&variables);
        // }

        cutFlowVector_str[1] = "Lepton + 2 b-jets";
        cutFlowVector_str[2] = "$E_{T}^{miss} > 100 GeV$";
        cutFlowVector_str[3] = "$m_{CT} > 160 GeV$";
        cutFlowVector_str[4] = "$m_{T} > 100 GeV$";
        cutFlowVector_str[5] = "$45 GeV < m_{bb} < 195 GeV$";
        cutFlowVector_str[6] = "SRA";
        cutFlowVector_str[7] = "SRB";

        // cutFlowVectorATLAS_130_0[0] = 100000;
        // cutFlowVectorATLAS_130_0[1] = 531.1;
 //        cutFlowVectorATLAS_130_0[2] = 163.7;
 //        cutFlowVectorATLAS_130_0[3] = 70.4;
 //        cutFlowVectorATLAS_130_0[4] = 9.7;
 //        cutFlowVectorATLAS_130_0[5] = 9.6;
 //        cutFlowVectorATLAS_130_0[6] = 7.2;
 //        cutFlowVectorATLAS_130_0[7] = 0.3;

        // cutFlowVectorATLAS_250_0[0] = 99000;
        // cutFlowVectorATLAS_250_0[1] = 71.3;
 //        cutFlowVectorATLAS_250_0[2] = 45.2;
 //        cutFlowVectorATLAS_250_0[3] = 15.0;
 //        cutFlowVectorATLAS_250_0[4] = 8.1;
 //        cutFlowVectorATLAS_250_0[5] = 8.0;
 //        cutFlowVectorATLAS_250_0[6] = 1.3;
 //        cutFlowVectorATLAS_250_0[7] = 4.4;

        for (size_t j=0;j<NCUTS;j++){
          if(
             (j==0) ||

             (j==1 && preselection && nSignalBJets==2) ||

             (j==2 && preselection && nSignalBJets==2 && met>100.) ||

             (j==3 && preselection && nSignalBJets==2 && met>100. && mCT>160.) ||

             (j==4 && preselection && nSignalBJets==2 && met>100. && mCT>160. && mT>100.) ||

             (j==5 && preselection && nSignalBJets==2 && met>100. && mCT>160. && mT>100. && mbb>45. && mbb<195.) ||

             (j==6 && SRA) ||

             (j==7 && SRB) ){

            cutFlowVector[j]++;

          }
        }
      }

      void combine(const Analysis* other)
      {
        const Analysis_ATLAS_8TeV_1LEPbb_20invfb* specificOther
                = dynamic_cast<const Analysis_ATLAS_8TeV_1LEPbb_20invfb*>(other);
        if (NCUTS != specificOther->NCUTS) NCUTS = specificOther->NCUTS;
        for (size_t j = 0; j < NCUTS; j++) {
          cutFlowVector[j] += specificOther->cutFlowVector[j];
          cutFlowVector_str[j] = specificOther->cutFlowVector_str[j];
        }
        _numSRA += specificOther->_numSRA;
        _numSRB += specificOther->_numSRB;
      }


      void collect_results() {

        // add_result(SignalRegionData("SR label", n_obs, {n_sig_MC, n_sig_MC_sys}, {n_bkg, n_bkg_err}));

        add_result(SignalRegionData("SRA", 4., {_numSRA, 0.}, {5.69, 1.10}));
        add_result(SignalRegionData("SRB", 3., {_numSRB, 0.}, {2.67, 0.69}));

      }

      bool isLeadingBJets(vector<const HEPUtils::Jet*> jets, vector<const HEPUtils::Jet*> bjets) {
        sort(jets.begin(), jets.end(), compareJetPt);
        sort(bjets.begin(), bjets.end(), compareJetPt);
        int nbjet = bjets.size();
        jets.resize(nbjet);
        return (jets == bjets);
      }


    protected:
      void analysis_specific_reset() {
        _numSRA=0;
        _numSRB=0;

        std::fill(cutFlowVector.begin(), cutFlowVector.end(), 0);
      }

    };


    // Factory fn
    DEFINE_ANALYSIS_FACTORY(ATLAS_8TeV_1LEPbb_20invfb)


  }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:19 +0000
