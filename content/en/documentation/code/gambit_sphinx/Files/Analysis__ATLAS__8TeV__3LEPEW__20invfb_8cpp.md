---
title: 'file analyses/Analysis_ATLAS_8TeV_3LEPEW_20invfb.cpp'

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
| class | **[Gambit::ColliderBit::Analysis_ATLAS_8TeV_3LEPEW_20invfb](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__atlas__8tev__3lepew__20invfb/)**  |




## Source code

```
#include <vector>
#include <cmath>
#include <memory>
#include <iomanip>

#include "gambit/ColliderBit/analyses/Analysis.hpp"
#include "gambit/ColliderBit/ATLASEfficiencies.hpp"
#include "gambit/ColliderBit/mt2_bisect.h"

/* The ATLAS 3 lepton EW analysis (20fb^-1)

   based on: arXiv: 1402.7029

   Code by Martin White

   Known features: Signal leptons in the paper have certain isolation plus ID cuts (these are ignored here by default)

   a) Should probably try and reproduce the ATLAS lepton ID. For now I could multiply all yields by 0.85^3, assuming that lepton ID efficiency is roughly 85%. In fact numbers look ok without this.

   b) tau effiiency was taken to be DELPHES default (40%)

   c) I don't sign the tau for SR1tau (it should have opposite sign to the two leptons). This is because the sign is assigned randomly in DELPHES I think). The cutflow agrees pretty well without this.

*/

namespace Gambit {
  namespace ColliderBit {

    using namespace std;

    class Analysis_ATLAS_8TeV_3LEPEW_20invfb : public Analysis {
    private:

      // Numbers passing cuts
      double _num_SR0tau_a_bin_1, _num_SR0tau_a_bin_2, _num_SR0tau_a_bin_3, _num_SR0tau_a_bin_4;
      double _num_SR0tau_a_bin_5, _num_SR0tau_a_bin_6, _num_SR0tau_a_bin_7, _num_SR0tau_a_bin_8;
      double _num_SR0tau_a_bin_9, _num_SR0tau_a_bin_10, _num_SR0tau_a_bin_11, _num_SR0tau_a_bin_12;
      double _num_SR0tau_a_bin_13, _num_SR0tau_a_bin_14, _num_SR0tau_a_bin_15, _num_SR0tau_a_bin_16;
      double _num_SR0tau_a_bin_17, _num_SR0tau_a_bin_18, _num_SR0tau_a_bin_19, _num_SR0tau_a_bin_20;
      double _num_SR0tau_b;
      double _num_SR1tau;
      double _num_SR2tau_a;
      double _num_SR2tau_b;
      vector<int> cutFlowVector;
      vector<string> cutFlowVector_str;
      const static int NCUTS=55;

    public:

      // Required detector sim
      static constexpr const char* detector = "ATLAS";

      Analysis_ATLAS_8TeV_3LEPEW_20invfb() {

        set_analysis_name("ATLAS_8TeV_3LEPEW_20invfb");
        set_luminosity(20.3);

        _num_SR0tau_a_bin_1=0;
        _num_SR0tau_a_bin_2=0;
        _num_SR0tau_a_bin_3=0;
        _num_SR0tau_a_bin_4=0;
        _num_SR0tau_a_bin_5=0;
        _num_SR0tau_a_bin_6=0;
        _num_SR0tau_a_bin_7=0;
        _num_SR0tau_a_bin_8=0;
        _num_SR0tau_a_bin_9=0;
        _num_SR0tau_a_bin_10=0;
        _num_SR0tau_a_bin_11=0;
        _num_SR0tau_a_bin_12=0;
        _num_SR0tau_a_bin_13=0;
        _num_SR0tau_a_bin_14=0;
        _num_SR0tau_a_bin_15=0;
        _num_SR0tau_a_bin_16=0;
        _num_SR0tau_a_bin_17=0;
        _num_SR0tau_a_bin_18=0;
        _num_SR0tau_a_bin_19=0;
        _num_SR0tau_a_bin_20=0;
        _num_SR0tau_b=0;
        _num_SR1tau=0;
        _num_SR2tau_a=0;
        _num_SR2tau_b=0;

        for(int i=0;i<NCUTS;i++){
          cutFlowVector.push_back(0);
          cutFlowVector_str.push_back("");
        }

      }

      void EleEleOverlapRemoval(vector<const HEPUtils::Particle*> &vec1, vector<const HEPUtils::Particle*> &vec2, double DeltaRMax) {
        //Routine to do electron-electron overlap check
        //Discard lowest energy electron if two are found overlapping
        vector<const HEPUtils::Particle*> Survivors;

        for(unsigned int it1 = 0; it1 < vec1.size(); it1++) {
          bool overlap = false;
          HEPUtils::P4 lep1mom=vec1.at(it1)->mom();
          for(unsigned int it2 = 0; it2 < vec2.size(); it2++) {
            if(it1==it2)continue;
            HEPUtils::P4 lep2mom=vec2.at(it2)->mom();
            double dR;

            dR=lep1mom.deltaR_eta(lep2mom);

            if(fabs(dR) <= DeltaRMax && lep1mom.E()<lep2mom.E()) overlap=true;
          }
          if(overlap) continue;
          Survivors.push_back(vec1.at(it1));
        }
        vec1=Survivors;

        return;
      }


      void LepLepOverlapRemoval(vector<const HEPUtils::Particle*> &vec1, vector<const HEPUtils::Particle*> &vec2, double DeltaRMax) {

        vector<const HEPUtils::Particle*> Survivors;

        for(unsigned int it1 = 0; it1 < vec1.size(); it1++) {
          bool overlap = false;
          HEPUtils::P4 lep1mom=vec1.at(it1)->mom();
          for(unsigned int it2 = 0; it2 < vec2.size(); it2++) {
            if(it1==it2)continue;
            HEPUtils::P4 lep2mom=vec2.at(it2)->mom();
            double dR;

            dR=lep1mom.deltaR_eta(lep2mom);

            if(fabs(dR) <= DeltaRMax) overlap=true;
          }
          if(overlap) continue;
          Survivors.push_back(vec1.at(it1));
        }
        vec1=Survivors;

        return;
      }

      void JetLeptonOverlapRemoval(vector<const HEPUtils::Jet*> &jetvec, vector<const HEPUtils::Particle*> &lepvec, double DeltaRMax) {
        //Routine to do jet-lepton check
        //Discards jets if they are within DeltaRMax of a lepton

        vector<const HEPUtils::Jet*> Survivors;

        for(unsigned int itjet = 0; itjet < jetvec.size(); itjet++) {
          bool overlap = false;
          HEPUtils::P4 jetmom=jetvec.at(itjet)->mom();
          for(unsigned int itlep = 0; itlep < lepvec.size(); itlep++) {
            HEPUtils::P4 lepmom=lepvec.at(itlep)->mom();
            double dR;

            dR=jetmom.deltaR_eta(lepmom);

            if(fabs(dR) <= DeltaRMax) overlap=true;
          }
          if(overlap) continue;
          Survivors.push_back(jetvec.at(itjet));
        }
        jetvec=Survivors;

        return;
      }

      void LeptonJetOverlapRemoval(vector<const HEPUtils::Particle*> &lepvec, vector<const HEPUtils::Jet*> &jetvec, double DeltaRMax) {
        //Routine to do lepton-jet check
        //Discards leptons if they are within DeltaRMax of a jet

        vector<const HEPUtils::Particle*> Survivors;

        for(unsigned int itlep = 0; itlep < lepvec.size(); itlep++) {
          bool overlap = false;
          HEPUtils::P4 lepmom=lepvec.at(itlep)->mom();
          for(unsigned int itjet= 0; itjet < jetvec.size(); itjet++) {
            HEPUtils::P4 jetmom=jetvec.at(itjet)->mom();
            double dR;

            dR=jetmom.deltaR_eta(lepmom);

            if(fabs(dR) <= DeltaRMax) overlap=true;
          }
          if(overlap) continue;
          Survivors.push_back(lepvec.at(itlep));
        }
        lepvec=Survivors;

        return;
      }


      void run(const HEPUtils::Event* event) {

        // Missing energy
        HEPUtils::P4 ptot = event->missingmom();
        double met = event->met();

        // Now define vector of baseline electrons
        vector<const HEPUtils::Particle*> signalElectrons;
        for (const HEPUtils::Particle* electron : event->electrons()) {
          if (electron->pT() > 10. && fabs(electron->eta()) < 2.47) signalElectrons.push_back(electron);
        }

        // Apply electron efficiency
        ATLAS::applyElectronEff(signalElectrons);

        // Now define vector of baseline muons
        vector<const HEPUtils::Particle*> signalMuons;
        for (const HEPUtils::Particle* muon : event->muons()) {
          if (muon->pT() > 10. && fabs(muon->eta()) < 2.4) signalMuons.push_back(muon);
        }

        // Apply muon efficiency
        ATLAS::applyMuonEff(signalMuons);

        vector<const HEPUtils::Jet*> signalJets;
        vector<const HEPUtils::Jet*> bJets;

        for (const HEPUtils::Jet* jet : event->jets()) {
          if (jet->pT() > 20. && fabs(jet->eta()) < 2.5) signalJets.push_back(jet);
          //if(jet->btag() && fabs(jet->eta()) < 2.5 && jet->pT() > 20.) bJets.push_back(jet);
        }

        vector<const HEPUtils::Particle*> signalTaus;
        for (const HEPUtils::Particle* tau : event->taus()) {
          if (tau->pT() > 20. && fabs(tau->eta()) < 2.47) signalTaus.push_back(tau);
        }
        ATLAS::applyTauEfficiencyR1(signalTaus);

        // Overlap removal

        //Note that ATLAS use |eta|<10 for removing jets close to electrons
        //Then 2.8 is used for the rest of the overlap process
        //Then the signal cut is applied for signal jets
        //cout << "BEFORE REMOVAL nele nmuo njet " << baselineElectrons.size() << " " << baselineMuons.size() << " " << signalJets.size() << endl;

        EleEleOverlapRemoval(signalElectrons,signalElectrons,0.1);
        JetLeptonOverlapRemoval(signalJets,signalElectrons,0.2);
        LepLepOverlapRemoval(signalTaus,signalElectrons,0.2);
        LepLepOverlapRemoval(signalTaus,signalMuons,0.2);
        LeptonJetOverlapRemoval(signalElectrons,signalJets,0.4);
        LeptonJetOverlapRemoval(signalMuons,signalJets,0.4);
        //Note have not bothered with close-by electron and muon pairs (bremsstrahlung probably not significant in signal MC)
        JetLeptonOverlapRemoval(signalJets,signalTaus,0.2);

        //cout << "AFTER REMOVAL nele nmuo njet " << signalElectrons.size() << " " << signalMuons.size() << " " << signalJets.size() << endl;

        //Now apply the tight electron selection
        ATLAS::applyTightIDElectronSelection(signalElectrons);

        int numElectrons=signalElectrons.size();
        int numMuons=signalMuons.size();
        int numTaus=signalTaus.size();

        //Search for at least one SFOS pair
        //m_SFOS must be > 12 GeV

        bool mSFOS12Cut=true;

        vector<double> massesOfSFOSPairs;
        for(int iEl1=0;iEl1<numElectrons;iEl1++){
          for(int iEl2=iEl1;iEl2<numElectrons;iEl2++){
            if(signalElectrons.at(iEl1)->pid()==-1*signalElectrons.at(iEl2)->pid()){
              HEPUtils::P4 elVec1=signalElectrons.at(iEl1)->mom();
              HEPUtils::P4 elVec2=signalElectrons.at(iEl2)->mom();
              double invMass=(elVec1+elVec2).m();

              if(invMass>12.){
                massesOfSFOSPairs.push_back(invMass);
              }
              else {
                mSFOS12Cut=false;
              }
            }
          }
        }


        for(int iMu1=0;iMu1<numMuons;iMu1++){
          for(int iMu2=iMu1;iMu2<numMuons;iMu2++){
            if(signalMuons.at(iMu1)->pid()==-1*signalMuons.at(iMu2)->pid()){
              HEPUtils::P4 muVec1=signalMuons.at(iMu1)->mom();
              HEPUtils::P4 muVec2=signalMuons.at(iMu2)->mom();
              double invMass=(muVec1+muVec2).m();

              if(invMass>12.){
                massesOfSFOSPairs.push_back(invMass);
              }
              else {
                mSFOS12Cut=false;
              }
            }
          }
        }

        //Make b jet container
        const std::vector<double> a = {0,10.};
        const std::vector<double> b = {0,10000.};
        const std::vector<double> c = {0.8};
        HEPUtils::BinnedFn2D<double> _eff2d(a,b,c);

        for (const HEPUtils::Jet* jet : signalJets) {
          bool hasTag=has_tag(_eff2d, jet->abseta(), jet->pT());
          if(jet->btag() && hasTag)bJets.push_back(jet);
        }

        bool leptonCut=((numElectrons+numMuons)==3 && massesOfSFOSPairs.size()>0);

        //Leptons must be separated from each other by at least deltaR=0.3
        bool separationCut=true;
        if(leptonCut){
          //Check electrons against electrons
          for(int iEl1=0;iEl1<numElectrons;iEl1++){
            for(int iEl2=iEl1;iEl2<numElectrons;iEl2++){
              if(iEl1!=iEl2){
                HEPUtils::P4 elVec1=signalElectrons.at(iEl1)->mom();
                HEPUtils::P4 elVec2=signalElectrons.at(iEl2)->mom();
                double dR=elVec1.deltaR_eta(elVec2);
                if(fabs(dR)<=0.3){
                  separationCut=false;
                }
              }
            }
          }

          //Check electrons against muons
          for(int iEl1=0;iEl1<numElectrons;iEl1++){
            for(int iMu1=0;iMu1<numMuons;iMu1++){
              HEPUtils::P4 elVec1=signalElectrons.at(iEl1)->mom();
              HEPUtils::P4 muVec1=signalMuons.at(iMu1)->mom();
              double dR=elVec1.deltaR_eta(muVec1);
              if(fabs(dR)<=0.3){
                separationCut=false;
              }
            }
          }

          //Check muons against muons
          for(int iMu1=0;iMu1<numMuons;iMu1++){
            for(int iMu2=iMu1;iMu2<numMuons;iMu2++){
              if(iMu1!=iMu2){
                HEPUtils::P4 muVec1=signalMuons.at(iMu1)->mom();
                HEPUtils::P4 muVec2=signalMuons.at(iMu2)->mom();
                double dR=muVec1.deltaR_eta(muVec2);
                if(fabs(dR)<=0.3){
                  separationCut=false;
                }
              }
            }
          }
        }


        //Lepton pT trigger cuts
        bool triggerE=false;
        bool triggerMU=false;
        bool triggerMUMU_Sym=false;
        bool triggerMUMU_ASym=false;
        bool triggerEE_Sym=false;
        bool triggerEE_ASym=false;
        bool triggerEMU=false;
        bool triggerMUE=false;

        for(const HEPUtils::Particle* ele : signalElectrons){
          if(ele->pT()>25.)triggerE=true;
        }

        for(const HEPUtils::Particle* muo : signalMuons){
          if(muo->pT()>25.)triggerMU=true;
        }

        int numMuonsGt14=0;
        int numMuonsGt18=0;

        for(const HEPUtils::Particle* muo : signalMuons){
          if(muo->pT()>14.)numMuonsGt14++;
          if(muo->pT()>18.)numMuonsGt18++;
        }

        if(numMuonsGt14>=2)triggerMUMU_Sym=true;
        if(numMuons>=2 && numMuonsGt18>=1)triggerMUMU_ASym=true;

        int numEleGt14=0;
        int numEleGt25=0;

        for(const HEPUtils::Particle* ele : signalElectrons){
          if(ele->pT()>14.)numEleGt14++;
          if(ele->pT()>25.)numEleGt25++;

        }

        if(numEleGt14>=2)triggerEE_Sym=true;
        if(numElectrons>=2 && numEleGt25>=1)triggerEE_ASym=true;

        if(numElectrons>0 && numMuons>0 && numEleGt14>0)triggerEMU=true;
        if(numElectrons>0 && numMuons>0 && numMuonsGt18>0)triggerMUE=true;

        bool trigger=false;
        if(triggerE || triggerMU || triggerMUMU_Sym || triggerMUMU_ASym || triggerEE_Sym || triggerEE_ASym || triggerEMU || triggerMUE )trigger=true;

        bool atLeastOneEorMu=false;
        if(numElectrons>0 || numMuons>0)atLeastOneEorMu=true;

        //Start the signal regions here

        //SR0tau_a: 20 bins!

        //Find m_SFOS that is closest to the Z mass
        double smallestDiff=9999;
        double mSFOS=0;
        for(double mass : massesOfSFOSPairs){
          if(fabs(mass-91.2)<smallestDiff){
            smallestDiff=fabs(mass-91.2);
            mSFOS=mass;
          }
        }

        //Now find the lepton that isn't in that invariant mass
        vector<const HEPUtils::Particle*> signalLeptons;

        for (const HEPUtils::Particle* ele : signalElectrons) {
          signalLeptons.push_back(ele);
        }

        for (const HEPUtils::Particle* muo : signalMuons) {
          signalLeptons.push_back(muo);
        }

        int extralepID=-1;
        int lep1ID=-1;
        int lep2ID=-1;
        for(unsigned int iLep=0;iLep<signalLeptons.size();iLep++){
          for(unsigned int jLep=iLep;jLep<signalLeptons.size();jLep++){
            HEPUtils::P4 lepVec1=signalLeptons.at(iLep)->mom();
            HEPUtils::P4 lepVec2=signalLeptons.at(jLep)->mom();
            double invMass=(lepVec1+lepVec2).m();
            //cout << "INV MASS " << iLep << " " << jLep << " " << invMass << endl;
            if(invMass==mSFOS){
              lep1ID=iLep;
              lep2ID=jLep;
            }
          }
        }

        if(lep1ID!=-1 && lep1ID!=0 && lep2ID!=-1 && lep2ID!=0)extralepID=0;
        if(lep1ID!=-1 && lep1ID!=1 && lep2ID!=-1 && lep2ID!=1)extralepID=1;
        if(lep1ID!=-1 && lep1ID!=2 && lep2ID!=-1 && lep2ID!=2)extralepID=2;


        //if(leptonCut)cout << "extralepID " << extralepID << endl;
        double mT=0;
        if(signalLeptons.size()==3 && extralepID!=-1){
          HEPUtils::P4 extralepVec=signalLeptons.at(extralepID)->mom();
          mT=sqrt(2.*extralepVec.pT()*met*(1. - cos(extralepVec.deltaPhi(ptot))));

        }


        //Now calculate trilepton invariant mass
        double m3l=0;
        if(signalLeptons.size()==3)m3l=(signalLeptons.at(0)->mom()+signalLeptons.at(1)->mom()+signalLeptons.at(2)->mom()).m();
        bool threelZVeto=false;
        if(fabs(m3l-91.2)<10.)threelZVeto=true;

        //Now apply the actual cuts for SR0tau_a


        if(trigger && signalLeptons.size()==3 && mSFOS12Cut && atLeastOneEorMu && separationCut && bJets.size()==0 && signalTaus.size()==0){

          if(mSFOS>12. && mSFOS < 40. && mT>0. && mT<80. && met>50. && met<90.) _num_SR0tau_a_bin_1 += event->weight();
          if(mSFOS>12. && mSFOS < 40. && mT>0. && mT<80. && met>90.) _num_SR0tau_a_bin_2 += event->weight();
          if(mSFOS>12. && mSFOS < 40. && mT>80. && met>50. && met<75.) _num_SR0tau_a_bin_3 += event->weight();
          if(mSFOS>12. && mSFOS < 40. && mT>80. && met>75.) _num_SR0tau_a_bin_4 += event->weight();

          if(mSFOS>40. && mSFOS < 60. && mT>0. && mT<80. && met>50. && met<75. && !threelZVeto) _num_SR0tau_a_bin_5 += event->weight();
          if(mSFOS>40. && mSFOS < 60. && mT>0. && mT<80. && met>75.) _num_SR0tau_a_bin_6 += event->weight();
          if(mSFOS>40. && mSFOS < 60. && mT>80. && met>50. && met<135.) _num_SR0tau_a_bin_7 += event->weight();
          if(mSFOS>40. && mSFOS < 60. && mT>80. && met>135.) _num_SR0tau_a_bin_8 += event->weight();

          if(mSFOS>60. && mSFOS < 81.2 && mT>0. && mT<80. && met>50. && met<75. && !threelZVeto) _num_SR0tau_a_bin_9 += event->weight();
          if(mSFOS>60. && mSFOS < 81.2 && mT>80. && met>50. && met<75.) _num_SR0tau_a_bin_10 += event->weight();
          if(mSFOS>60. && mSFOS < 81.2 && mT>0. && mT<110. && met>75.) _num_SR0tau_a_bin_11 += event->weight();
          if(mSFOS>60. && mSFOS < 81.2 && mT>110. && met>75.) _num_SR0tau_a_bin_12 += event->weight();

          if(mSFOS>81.2 && mSFOS < 101.2 && mT>0. && mT<110. && met>50. && met<90. && !threelZVeto) _num_SR0tau_a_bin_13 += event->weight();
          if(mSFOS>81.2 && mSFOS < 101.2 && mT>0. && mT < 110. && met>90.) _num_SR0tau_a_bin_14 += event->weight();
          if(mSFOS>81.2 && mSFOS < 101.2 && mT>110. && met>50. && met < 135.) _num_SR0tau_a_bin_15 += event->weight();
          if(mSFOS>81.2 && mSFOS < 101.2 && mT>110. && met>135.) _num_SR0tau_a_bin_16 += event->weight();

          if(mSFOS > 101.2 && mT>0. && mT<180. && met>50. && met<210.) _num_SR0tau_a_bin_17 += event->weight();
          if(mSFOS > 101.2 && mT > 180. && met>50. && met<210.) _num_SR0tau_a_bin_18 += event->weight();
          if(mSFOS > 101.2 && mT>0. && mT<120. && met>210.) _num_SR0tau_a_bin_19 += event->weight();
          if(mSFOS > 101.2 && mT>120. && met>210.) _num_SR0tau_a_bin_20 += event->weight();
        }
        //Now do SR0tau_b
        //Need either two electrons or two muons, and they must have the same sign
        //The remaining lepton must have different flavour and the opposite sign
        //NEEDS CHECKING
        bool leptonTypeCut_SR0taub=false;
        double dPhiLLMin=9999;
        if(numElectrons==2 && numMuons==1){
          if((signalElectrons[0]->pid()==signalElectrons[1]->pid()) &&
             (signalElectrons[0]->pid()*signalMuons[0]->pid())<0)leptonTypeCut_SR0taub=true;

          double dPhiLL1=signalElectrons[0]->mom().deltaPhi(signalMuons[0]->mom());
          double dPhiLL2=signalElectrons[1]->mom().deltaPhi(signalMuons[0]->mom());

          if(dPhiLL1<dPhiLL2){
            dPhiLLMin=dPhiLL1;
          }
          else {
            dPhiLLMin=dPhiLL2;
          }
        }

        if(numElectrons==1 && numMuons==2){
          if((signalMuons[0]->pid()==signalMuons[1]->pid()) &&
             (signalElectrons[0]->pid()*signalMuons[0]->pid())<0)leptonTypeCut_SR0taub=true;

          double dPhiLL1=signalMuons[0]->mom().deltaPhi(signalElectrons[0]->mom());
          double dPhiLL2=signalMuons[1]->mom().deltaPhi(signalElectrons[0]->mom());

          if(dPhiLL1<dPhiLL2){
            dPhiLLMin=dPhiLL1;
          }
          else {
            dPhiLLMin=dPhiLL2;
          }
        }


        bool leptonPTCut_SR0taub=true;
        for(unsigned int iLep=0;iLep<signalLeptons.size();iLep++){
          if(signalLeptons[iLep]->pT()<20.)leptonPTCut_SR0taub=false;
        }

        if(trigger && signalLeptons.size()==3 && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR0taub && bJets.size()==0 && signalTaus.size()==0){

          if(met > 50. && leptonPTCut_SR0taub && dPhiLLMin < 1.) _num_SR0tau_b += event->weight();

        }

        //Now do SR1tau
        //We need one tau and two light leptons with opposite sign to the tau
        bool leptonTypeCut_SR1tau=false;
        double mltau=9999;

        if(numTaus==1 && (numElectrons+numMuons)==2 && (signalLeptons[0]->pid() * signalLeptons[1]->pid())>0){
          leptonTypeCut_SR1tau=true;

          //Find the lepton and tau combination that has mltau closest to the Higgs mass
          double mltau1=(signalLeptons[0]->mom()+signalTaus[0]->mom()).m();
          double mltau2=(signalLeptons[1]->mom()+signalTaus[0]->mom()).m();
          if(fabs(mltau1-125)<fabs(mltau2-125)){
            mltau=mltau1;
          }
          else {
            mltau=mltau2;
          }
        }
        //Electron pair veto
        bool eePairVeto=false;
        if(leptonTypeCut_SR1tau && numElectrons==2){
          double mEE=(signalElectrons[0]->mom()+signalElectrons[1]->mom()).m();
          if(mEE>81.2 && mEE<101.2)eePairVeto=true;
        }

        //Lepton pT cuts (assumes leptons are pT ordered: NEEDS CHECKING)
        bool leptonPTCut_SR1tau=false;
        if(leptonTypeCut_SR1tau && signalLeptons[1]->pT()>30. && (signalLeptons[0]->pT()+signalLeptons[1]->pT())>70.)leptonPTCut_SR1tau=true;

        if(trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR1tau && bJets.size()==0){
          if(met>50. && leptonPTCut_SR1tau && mltau < 120. && !eePairVeto) _num_SR1tau += event->weight();
        }

        //Now do SR2taua
        double mT2max=0;

        if(numTaus==2 && (numElectrons + numMuons)==1){

          //Calculate MT2 for all pairs of leptonsand take the largest
          vector<const HEPUtils::Particle*> mt2Leptons;

          for (const HEPUtils::Particle* ele : signalElectrons) {
            mt2Leptons.push_back(ele);
          }

          for (const HEPUtils::Particle* muo : signalMuons) {
            mt2Leptons.push_back(muo);
          }

          for (const HEPUtils::Particle* tau : signalTaus) {
            mt2Leptons.push_back(tau);
          }

          for(unsigned int iLep1=0;iLep1 < 3;iLep1++){
            for(unsigned int iLep2=iLep1;iLep2 < 3;iLep2++){

              double pa_b[3] = { 0, mt2Leptons[iLep1]->mom().px(), mt2Leptons[iLep1]->mom().py() };
              double pb_b[3] = { 0, mt2Leptons[iLep2]->mom().px(), mt2Leptons[iLep2]->mom().py() };
              double pmiss_b[3] = { 0, ptot.px(), ptot.py() };
              double mn_b = 0.;

              mt2_bisect::mt2 mt2_calc;

              mt2_calc.set_momenta(pa_b,pb_b,pmiss_b);
              mt2_calc.set_mn(mn_b);
              double mt2 = mt2_calc.get_mt2();
              if(mt2>mT2max)mT2max=mt2;
            }
          }
        }

        if(numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && bJets.size()==0 && met > 50. && mT2max > 100.) _num_SR2tau_a += event->weight();

        //Finally do SR2taub
        double mtautau=0;
        if(numTaus==2)mtautau=(signalTaus[0]->mom()+signalTaus[1]->mom()).m();

        if(numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && (signalTaus[0]->pid() == -1*signalTaus[1]->pid()) && bJets.size()==0 && met > 60 && (signalTaus[0]->mom().pT() + signalTaus[1]->mom().pT())>110. && mtautau>70. && mtautau < 120.) _num_SR2tau_b += event->weight();

        //Now do cutflow (for debugging)

        cutFlowVector_str[0] = "No cuts ";
        cutFlowVector_str[1] = "3 signal leptons ";
        cutFlowVector_str[2] = "Trigger ";
        cutFlowVector_str[3] = "At least one e or mu ";
        cutFlowVector_str[4] = "Separation of leptons ";
        cutFlowVector_str[5] = "mSFOS > 12 cut ";
        cutFlowVector_str[6] = "Lepton requirement (no taus) ";
        cutFlowVector_str[7] = "SFOS ";
        cutFlowVector_str[8] = "b-tagged jet veto ";
        cutFlowVector_str[9] = "ETmiss ";
        cutFlowVector_str[10] = "mT ";
        cutFlowVector_str[11] = "SR0tau_a_bin_1 ";
        cutFlowVector_str[12] = "SR0tau_a_bin_2 ";
        cutFlowVector_str[13] = "SR0tau_a_bin_3 ";
        cutFlowVector_str[14] = "SR0tau_a_bin_4 ";
        cutFlowVector_str[15] = "SR0tau_a_bin_5 ";
        cutFlowVector_str[16] = "SR0tau_a_bin_6 ";
        cutFlowVector_str[17] = "SR0tau_a_bin_7 ";
        cutFlowVector_str[18] = "SR0tau_a_bin_8 ";
        cutFlowVector_str[19] = "SR0tau_a_bin_9 ";
        cutFlowVector_str[20] = "SR0tau_a_bin_10 ";
        cutFlowVector_str[21] = "SR0tau_a_bin_11 ";
        cutFlowVector_str[22] = "SR0tau_a_bin_12 ";
        cutFlowVector_str[23] = "SR0tau_a_bin_13 ";
        cutFlowVector_str[24] = "SR0tau_a_bin_14 ";
        cutFlowVector_str[25] = "SR0tau_a_bin_15 ";
        cutFlowVector_str[26] = "SR0tau_a_bin_16 ";
        cutFlowVector_str[27] = "SR0tau_a_bin_17 ";
        cutFlowVector_str[28] = "SR0tau_a_bin_18 ";
        cutFlowVector_str[29] = "SR0tau_a_bin_19 ";
        cutFlowVector_str[30] = "SR0tau_a_bin_20 ";
        cutFlowVector_str[31] = "SR0taub: Lepton multiplicity ";
        cutFlowVector_str[32] = "SR0taub: b veto ";
        cutFlowVector_str[33] = "SR0taub: met ";
        cutFlowVector_str[34] = "SR0taub: pT 3rd lepton ";
        cutFlowVector_str[35] = "SR0taub: dPhiLL ";
        cutFlowVector_str[36] = "SR1tau: Lepton multiplicity ";
        cutFlowVector_str[37] = "SR1tau: Z veto ";
        cutFlowVector_str[38] = "SR1tau: b-tagged veto ";
        cutFlowVector_str[39] = "SR1tau: MET ";
        cutFlowVector_str[40] = "SR1tau: Lepton pT cuts ";
        cutFlowVector_str[41] = "SR1tau: mltau ";
        cutFlowVector_str[42] = "SR2taua: Lepton multiplicity ";
        cutFlowVector_str[43] = "SR2taua: b veto ";
        cutFlowVector_str[44] = "SR2taua: MET ";
        cutFlowVector_str[45] = "SR2taua: MT2max ";
        cutFlowVector_str[46] = "SR2taub: Lepton multiplicity ";
        cutFlowVector_str[47] = "SR2taub: b jet veto ";
        cutFlowVector_str[48] = "SR2taub: met ";
        cutFlowVector_str[49] = "SR2taub: mtautau ";
        cutFlowVector_str[50] = "SR2taub: Sum of tau pT ";

        //if(signalLeptons.size()==3 && trigger && atLeastOneEorMu)std::cout << "LEPTONID " << signalLeptons[0]->pid() << " " << signalLeptons[1]->pid() << " " << signalLeptons[2]->pid() << " mSFOS12Cut " << mSFOS12Cut << " LEPTONTYPE " << leptonTypeCut_SR0taub << std::endl;

        for(int j=0;j<NCUTS;j++){
          if( (j==0) ||

              (j==1 && signalLeptons.size()==3) ||

              (j==2 && signalLeptons.size()==3 && trigger) ||

              (j==3 && signalLeptons.size()==3 && trigger && atLeastOneEorMu) ||

              (j==4 && signalLeptons.size()==3 && trigger && atLeastOneEorMu && separationCut) ||

              (j==5 && signalLeptons.size()==3 && trigger && atLeastOneEorMu && separationCut && mSFOS12Cut) ||

              (j==6 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0) || //lepton requirement

              (j==7 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0) || //SFOS

              (j==8 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0) || //b jet veto

              (j==9 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && met>50. && met<90.) || //MET

              (j==10 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && met>50. && met<90. && mT>0. && mT<80.) || //mT

              (j==11 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>12. && mSFOS < 40. && mT>0. && mT<80. && met>50. && met<90.) ||

              (j==12 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>12. && mSFOS < 40. && mT>0. && mT<80. && met>90.) ||

              (j==13 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>12. && mSFOS < 40. && mT>80. && met>50. && met<75.) ||

              (j==14 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>12. && mSFOS < 40. && mT>80. && met>75.) ||

              (j==15 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>40. && mSFOS < 60. && mT>0. && mT<80. && met>50. && met<75. && !threelZVeto) ||

              (j==16 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>40. && mSFOS < 60. && mT>0. && mT<80. && met>75.) ||

              (j==17 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>40. && mSFOS < 60. && mT>80. && met>50. && met<135.) ||

              (j==18 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>40. && mSFOS < 60. && mT>80. && met>135.) ||

              (j==19 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>60. && mSFOS < 81.2 && mT>0. && mT<80. && met>50. && met<75. && !threelZVeto) ||

              (j==20 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>60. && mSFOS < 81.2 && mT>80. && met>50. && met<75.) ||

              (j==21 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>60. && mSFOS < 81.2 && mT>0. && mT<110. && met>75.) ||

              (j==22 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>60. && mSFOS < 81.2 && mT>110. && met>75.) ||

              (j==23 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>81.2 && mSFOS < 101.2 && mT>0. && mT<110. && met>50. && met<90. && !threelZVeto) ||

              (j==24 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>81.2 && mSFOS < 101.2 && mT>0. && mT < 110. && met>90.) ||

              (j==25 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>81.2 && mSFOS < 101.2 && mT>110. && met>50. && met < 135.) ||

              (j==26 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS>81.2 && mSFOS < 101.2 && mT>110. && met>135.) ||

              (j==27 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS > 101.2 && mT>0. && mT<180. && met>50. && met<210.) ||

              (j==28 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS > 101.2 && mT > 180. && met>50. && met<210.) ||

              (j==29 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS > 101.2 && mT>0. && mT<120. && met>210.) ||

              (j==30 && trigger && signalLeptons.size()==3 && atLeastOneEorMu && separationCut && mSFOS12Cut && signalTaus.size()==0 && massesOfSFOSPairs.size()>0 && bJets.size()==0 && mSFOS > 101.2 && mT>120. && met>210.) ||

              //Start SR0taub

              (j==31 && trigger && signalLeptons.size()==3 && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR0taub && signalTaus.size()==0) ||

              (j==32 && trigger && signalLeptons.size()==3 && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR0taub && signalTaus.size()==0 && bJets.size()==0) ||

              (j==33 && trigger && signalLeptons.size()==3 && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR0taub && signalTaus.size()==0 && bJets.size()==0 && met > 50.) ||

              (j==34 && trigger && signalLeptons.size()==3 && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR0taub && signalTaus.size()==0 && bJets.size()==0 && met > 50. && leptonPTCut_SR0taub) ||

              (j==35 && trigger && signalLeptons.size()==3 && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR0taub && signalTaus.size()==0 && bJets.size()==0 && met > 50. && leptonPTCut_SR0taub && dPhiLLMin < 1.) ||

              //SR1tau

              (j==36 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR1tau) ||

              (j==37 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR1tau && !eePairVeto) ||

              (j==38 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR1tau && !eePairVeto && bJets.size()==0) ||

              (j==39 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR1tau && !eePairVeto && bJets.size()==0 && met>50.) ||

              (j==40 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR1tau && !eePairVeto && bJets.size()==0 && met>50. && leptonPTCut_SR1tau) ||

              (j==41 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && leptonTypeCut_SR1tau && !eePairVeto && bJets.size()==0 && met>50. && leptonPTCut_SR1tau && mltau < 120.) ||

              //SR2taua

              (j==42 &&numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut) ||

              (j==43 &&numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && bJets.size()==0) ||

              (j==44 &&numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && bJets.size()==0 && met > 50.) ||

              (j==45 && numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && bJets.size()==0 && met > 50. && mT2max > 100.) ||

              //SR2taub
              (j==46 && numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && (signalTaus[0]->pid() == -1*signalTaus[1]->pid())) ||

              (j==47 && numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && (signalTaus[0]->pid() == -1*signalTaus[1]->pid()) && bJets.size()==0) ||

              (j==48 && numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && (signalTaus[0]->pid() == -1*signalTaus[1]->pid()) && bJets.size()==0 && met > 60) ||

              (j==49 && numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && (signalTaus[0]->pid() == -1*signalTaus[1]->pid()) && bJets.size()==0 && met > 60 && mtautau>70. && mtautau < 120.) ||

              (j==50 && numTaus==2 && (numElectrons + numMuons)==1 && trigger && mSFOS12Cut && atLeastOneEorMu && separationCut && (signalTaus[0]->pid() == -1*signalTaus[1]->pid()) && bJets.size()==0 && met > 60 && mtautau>70. && mtautau < 120. && (signalTaus[0]->mom().pT() + signalTaus[1]->mom().pT())>110.)


              )cutFlowVector[j]++;
        }
        return;
      }

      void combine(const Analysis* other)
      {
        const Analysis_ATLAS_8TeV_3LEPEW_20invfb* specificOther
          = dynamic_cast<const Analysis_ATLAS_8TeV_3LEPEW_20invfb*>(other);

        for (int j=0; j<NCUTS; j++)
        {
          cutFlowVector[j] += specificOther->cutFlowVector[j];
          cutFlowVector_str[j] = specificOther->cutFlowVector_str[j];
        }

        _num_SR0tau_a_bin_1 += specificOther->_num_SR0tau_a_bin_1;
        _num_SR0tau_a_bin_2 += specificOther->_num_SR0tau_a_bin_2;
        _num_SR0tau_a_bin_3 += specificOther->_num_SR0tau_a_bin_3;
        _num_SR0tau_a_bin_4 += specificOther->_num_SR0tau_a_bin_4;
        _num_SR0tau_a_bin_5 += specificOther->_num_SR0tau_a_bin_5;
        _num_SR0tau_a_bin_6 += specificOther->_num_SR0tau_a_bin_6;
        _num_SR0tau_a_bin_7 += specificOther->_num_SR0tau_a_bin_7;
        _num_SR0tau_a_bin_8 += specificOther->_num_SR0tau_a_bin_8;
        _num_SR0tau_a_bin_9 += specificOther->_num_SR0tau_a_bin_9;
        _num_SR0tau_a_bin_10 += specificOther->_num_SR0tau_a_bin_10;
        _num_SR0tau_a_bin_11 += specificOther->_num_SR0tau_a_bin_11;
        _num_SR0tau_a_bin_12 += specificOther->_num_SR0tau_a_bin_12;
        _num_SR0tau_a_bin_13 += specificOther->_num_SR0tau_a_bin_13;
        _num_SR0tau_a_bin_14 += specificOther->_num_SR0tau_a_bin_14;
        _num_SR0tau_a_bin_15 += specificOther->_num_SR0tau_a_bin_15;
        _num_SR0tau_a_bin_16 += specificOther->_num_SR0tau_a_bin_16;
        _num_SR0tau_a_bin_17 += specificOther->_num_SR0tau_a_bin_17;
        _num_SR0tau_a_bin_18 += specificOther->_num_SR0tau_a_bin_18;
        _num_SR0tau_a_bin_19 += specificOther->_num_SR0tau_a_bin_19;
        _num_SR0tau_a_bin_20 += specificOther->_num_SR0tau_a_bin_20;
        _num_SR0tau_b += specificOther->_num_SR0tau_b;
        _num_SR1tau += specificOther->_num_SR1tau;
        _num_SR2tau_a += specificOther->_num_SR2tau_a;
        _num_SR2tau_b += specificOther->_num_SR2tau_b;
      }


      void collect_results() {

        // add_result(SignalRegionData("SR label", n_obs, {n_sig_MC, n_sig_MC_sys}, {n_bkg, n_bkg_err}));

        add_result(SignalRegionData("SR0tau_a_bin_1", 36., {_num_SR0tau_a_bin_1, 0.}, { 23., 4. }));
        add_result(SignalRegionData("SR0tau_a_bin_2", 5., {_num_SR0tau_a_bin_2, 0.}, { 4.2,  1.5}));
        add_result(SignalRegionData("SR0tau_a_bin_3", 9., {_num_SR0tau_a_bin_3, 0.}, { 10.6,  1.8}));
        add_result(SignalRegionData("SR0tau_a_bin_4", 9., {_num_SR0tau_a_bin_4, 0.}, { 8.5,  1.7}));
        add_result(SignalRegionData("SR0tau_a_bin_5", 11., {_num_SR0tau_a_bin_5, 0.}, { 12.9,  2.4}));
        add_result(SignalRegionData("SR0tau_a_bin_6", 13., {_num_SR0tau_a_bin_6, 0.}, { 6.6,  1.9}));
        add_result(SignalRegionData("SR0tau_a_bin_7", 15., {_num_SR0tau_a_bin_7, 0.}, { 14.1,  2.2}));
        add_result(SignalRegionData("SR0tau_a_bin_8", 1., {_num_SR0tau_a_bin_8, 0.}, { 1.1,  0.4}));
        add_result(SignalRegionData("SR0tau_a_bin_9", 28., {_num_SR0tau_a_bin_9, 0.}, { 22.4,  3.6}));
        add_result(SignalRegionData("SR0tau_a_bin_10", 24., {_num_SR0tau_a_bin_10, 0.}, { 16.4,  2.8}));
        add_result(SignalRegionData("SR0tau_a_bin_11", 29., {_num_SR0tau_a_bin_11, 0.}, { 27., 5. }));
        add_result(SignalRegionData("SR0tau_a_bin_12", 8., {_num_SR0tau_a_bin_12, 0.}, { 5.5,  1.5}));
        add_result(SignalRegionData("SR0tau_a_bin_13", 714., {_num_SR0tau_a_bin_13, 0.}, { 715., 70. }));
        add_result(SignalRegionData("SR0tau_a_bin_14", 214., {_num_SR0tau_a_bin_14, 0.}, { 219., 33. }));
        add_result(SignalRegionData("SR0tau_a_bin_15", 63., {_num_SR0tau_a_bin_15, 0.}, { 65., 13. }));
        add_result(SignalRegionData("SR0tau_a_bin_16", 3., {_num_SR0tau_a_bin_16, 0.}, { 4.6,  1.7}));
        add_result(SignalRegionData("SR0tau_a_bin_17", 60., {_num_SR0tau_a_bin_17, 0.}, { 69., 9. }));
        add_result(SignalRegionData("SR0tau_a_bin_18", 1., {_num_SR0tau_a_bin_18, 0.}, { 3.4,  1.4}));
        add_result(SignalRegionData("SR0tau_a_bin_19", 0., {_num_SR0tau_a_bin_19, 0.}, { 1.2,  0.4}));
        add_result(SignalRegionData("SR0tau_a_bin_20", 0., {_num_SR0tau_a_bin_20, 0.}, { 0.29,  0.18}));
        add_result(SignalRegionData("SR1tau", 13., {_num_SR1tau, 0.}, { 10.3,  1.2}));
        add_result(SignalRegionData("SR2tau_a", 6., {_num_SR2tau_a, 0.}, { 6.9,  0.8}));
        add_result(SignalRegionData("SR2tau_b", 5., {_num_SR2tau_b, 0.}, { 7.2,  0.8}));

        return;
      }


    protected:
      void analysis_specific_reset() {
        _num_SR0tau_a_bin_1=0;
        _num_SR0tau_a_bin_2=0;
        _num_SR0tau_a_bin_3=0;
        _num_SR0tau_a_bin_4=0;
        _num_SR0tau_a_bin_5=0;
        _num_SR0tau_a_bin_6=0;
        _num_SR0tau_a_bin_7=0;
        _num_SR0tau_a_bin_8=0;
        _num_SR0tau_a_bin_9=0;
        _num_SR0tau_a_bin_10=0;
        _num_SR0tau_a_bin_11=0;
        _num_SR0tau_a_bin_12=0;
        _num_SR0tau_a_bin_13=0;
        _num_SR0tau_a_bin_14=0;
        _num_SR0tau_a_bin_15=0;
        _num_SR0tau_a_bin_16=0;
        _num_SR0tau_a_bin_17=0;
        _num_SR0tau_a_bin_18=0;
        _num_SR0tau_a_bin_19=0;
        _num_SR0tau_a_bin_20=0;
        _num_SR0tau_b=0;
        _num_SR1tau=0;
        _num_SR2tau_a=0;
        _num_SR2tau_b=0;

        std::fill(cutFlowVector.begin(), cutFlowVector.end(), 0);
      }

    };


    DEFINE_ANALYSIS_FACTORY(ATLAS_8TeV_3LEPEW_20invfb)


  }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:33 +0000
