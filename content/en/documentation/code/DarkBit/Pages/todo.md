---
title: 'page Todo List'

description: "[No description available]"

---











Member [BACKEND_REQ](/documentation/code/darkbit/files/susy__extras_8hpp/#function-backend-req)  (prospino_run,(libprospino), map_str_dbl,(const PID_pair &, const Options &)) BACKEND_REQ(prospino_read_slha1_input

* Extend to also allow models ColliderBit_SLHA_file_model, ColliderBit_SLHA_scan_model  

Member [Gambit::ColliderBit::Analysis::add](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis/#function-add)  ([Analysis](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis/) *other)

* Access by name, including merging disjoint region sets?  

Member [Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_139invfb::run](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#function-run)  (const Event *event)

* Use weighting instead 
And tight ID for high purity... used where? 
And tight ID for high purity... used where? 
Apply a random 9% loss / 0.91 reweight for jet quality criteria? 
Drop b-tag if pT < 50 GeV or |eta| > 2.5? 
Compute from hard objects instead?  

Member [Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_13invfb::run](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#function-run)  (const Event *event)

* Drop b-tag if pT < 50 GeV or |eta| > 2.5? 
Unless b-tagged (and pT > 50 && abseta < 2.5) 
Actually only within 0.2&ndash;0.4... 
Actually only within 0.2&ndash;0.4...  

Member [Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_36invfb::run](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#function-run)  (const Event *event)

* Drop b-tag if pT < 50 GeV or |eta| > 2.5? 
Unless b-tagged (and pT > 50 && abseta < 2.5) 
Actually only within 0.2&ndash;0.4... 
Actually only within 0.2&ndash;0.4...  

Member [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_strong_139invfb::run](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__strong__139invfb/#function-run)  (const Event *event)

* Compute from hard objects instead? 
Drop b-tag if |eta| > 2.5? 
Use applyElectronIsolationEfficiency2019 or something similar?  

Member [Gambit::ColliderBit::Analysis_CMS_13TeV_0LEP_137invfb::run](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#function-run)  (const Event *event)

* Sum should actually be over all calo particles 
Sum should actually be over all non-e/mu calo particles 
Sum should actually be over all non-e/mu calo particles  

Member [Gambit::ColliderBit::Analysis_CMS_13TeV_0LEP_13invfb::run](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__13invfb/#function-run)  (const Event *event)

* Need access to charged hadrons to do this isolation 
Sum should actually be over all non-e/mu calo particles 
Sum should actually be over all non-e/mu calo particles  

Member [Gambit::ColliderBit::Analysis_CMS_13TeV_0LEP_36invfb::run](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__36invfb/#function-run)  (const Event *event)

* Sum should actually be over all non-e/mu calo particles 
Sum should actually be over all non-e/mu calo particles 
Need access to charged hadrons to do this isolation  

Class [Gambit::ColliderBit::Analysis_CMS_13TeV_MONOJET_36invfb](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/)

* Add W/Z region with AKT8 jets and 2/1 n-subjettiness ratio cut  

Member [Gambit::ColliderBit::Analysis_CMS_13TeV_MONOJET_36invfb::analysis_specific_reset](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#function-analysis-specific-reset)  ()

* Need to also clear/reset cutflow, but it currently has no method for that  

Member [Gambit::ColliderBit::Analysis_CMS_8TeV_1LEPDMTOP_20invfb::loglikelihood](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__1lepdmtop__20invfb/#function-loglikelihood)  ()

* Implement!  

Member [Gambit::ColliderBit::Analysis_CMS_8TeV_2LEPDMTOP_20invfb::loglikelihood](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#function-loglikelihood)  ()

* Implement!  

Member [Gambit::ColliderBit::AnalysisContainer::clear](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysiscontainer/#function-clear)  ()

* Storing smart ptrs to [Analysis](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1analysis/) would make this way easier  

Class [Gambit::ColliderBit::AnalysisData](/documentation/code/darkbit/classes/structgambit_1_1colliderbit_1_1analysisdata/)

* Access by name? 
Guarantee ordering? 
How to combine covariance matrices &ndash; require?  

Member [Gambit::ColliderBit::AnalysisData::add](/documentation/code/darkbit/classes/structgambit_1_1colliderbit_1_1analysisdata/#function-add)  (const [SignalRegionData](/documentation/code/darkbit/classes/structgambit_1_1colliderbit_1_1signalregiondata/) &srd)

* Allow naming the SRs?  

Member [Gambit::ColliderBit::AnalysisData::clear](/documentation/code/darkbit/classes/structgambit_1_1colliderbit_1_1analysisdata/#function-clear)  ()

* It'd be good to _not_ have to re-enter most of the SRData and the covariance on every point: they don't change  

Member [Gambit::ColliderBit::ATLAS::applyLooseIDElectronSelectionR2](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1atlas/#function-applylooseidelectronselectionr2)  (std::vector< const HEPUtils::Particle * > &electrons)

* What about faking by jets or non-electrons?  

Member [Gambit::ColliderBit::ATLAS::applyMediumIDElectronSelection](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1atlas/#function-applymediumidelectronselection)  (std::vector< const HEPUtils::Particle * > &electrons)

* This is an exact duplication of the below filtering code &ndash; split into a single util fn (in unnamed namespace?) when binned fns are static  

Member [Gambit::ColliderBit::ATLAS::applyTauEfficiencyR1](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1atlas/#function-applytauefficiencyr1)  (std::vector< const HEPUtils::Particle * > &taus)

* Use [https://cds.cern.ch/record/1233743/files/ATL-PHYS-PUB-2010-001.pdf](https://cds.cern.ch/record/1233743/files/ATL-PHYS-PUB-2010-001.pdf)&ndash; it is more accurate and has pT-dependence  

Member [Gambit::ColliderBit::ATLAS::applyTightIDElectronSelection](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1atlas/#function-applytightidelectronselection)  (std::vector< const HEPUtils::Particle * > &electrons)

* This is an exact duplication of the above filtering code &ndash; split into a single util fn (in unnamed namespace?) when binned fns are static  

Member [Gambit::ColliderBit::ATLAS::smearJets](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1atlas/#function-smearjets)  (std::vector< HEPUtils::Jet * > &jets)

* Is this the best way to smear? Should we preserve the mean jet energy, or pT, or direction?  

Member [Gambit::ColliderBit::ATLAS::smearTaus](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1atlas/#function-smeartaus)  (std::vector< HEPUtils::Particle * > &taus)

* Is this the best way to smear? Should we preserve the mean jet energy, or pT, or direction?  

Member [Gambit::ColliderBit::BuckFast::processEvent](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1buckfast/#function-processevent)  (HEPUtils::Event &) const

* Run-dependence? 
Run-dependence?  

Member [Gambit::ColliderBit::calc_loglikes_for_analysis](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-calc-loglikes-for-analysis)  (const [AnalysisData](/documentation/code/darkbit/classes/structgambit_1_1colliderbit_1_1analysisdata/) &, bool, bool, bool, bool)

* Only compute this once per run 
Support NSL, i.e. skewness correction 
Unify this for both cov and no-cov, feeding in one-element Eigen blocks as Ref<>s for the latter? 
Compute the background-only covariance decomposition and likelihood only once 
Only compute this once per run 
Or compute all the exp DLLs first, then only the best-expected SR's obs DLL? 
Use newer (?) one-step Eigen constructors for (const) single-element arrays 
Only compute this once per run  

Member [Gambit::ColliderBit::CMS::smearJets](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1cms/#function-smearjets)  (std::vector< HEPUtils::Jet * > &jets)

* Update cf. Matthias study for [ATLAS](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1atlas/)
This is the [ATLAS](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1atlas/) number... I can't find values for the [CMS](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1cms/) parameterisation, cf. [https://cds.cern.ch/record/1339945/files/JME-10-014-pas.pdf](https://cds.cern.ch/record/1339945/files/JME-10-014-pas.pdf)[https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideJetResolution](https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideJetResolution)[https://github.com/adrager/cmssw/blob/CMSSW_7_2_X/CondFormats/JetMETObjects/test/TestCorrections.C](https://github.com/adrager/cmssw/blob/CMSSW_7_2_X/CondFormats/JetMETObjects/test/TestCorrections.C)

Member [Gambit::ColliderBit::CMS::smearTaus](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1cms/#function-smeartaus)  (std::vector< HEPUtils::Particle * > &taus)

* Update cf. Matthias study for [ATLAS](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit_1_1atlas/)
Is this the best way to smear? Should we preserve the mean jet energy, or pT, or direction?  

Member [Gambit::ColliderBit::convertParticleEvent](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-convertparticleevent)  (const EventT &pevt, HEPUtils::Event &result, double antiktR, double jet_pt_min)

* Hard-coded radius!!! 
Hard-coded radius!!! 
Temporarily using quark-based tagging instead &ndash; fix 
Temporarily using quark-based tagging instead &ndash; fix 
What's wrong with having a W daughter? Doesn't that just mark a final tau? 
Hard-coded radius!!! 
Replace with HEPUtils::any(bhadrons, [&](const auto& pb){ pj.delta_R(pb) < 0.4 }) 
Use ghost tagging? 
Choose jet algorithm via detector _settings? Run several algs? 
Overlap between jets and prompt containers: need some isolation in MET calculation 
Move out-of-acceptance MET contribution to [BuckFast](/documentation/code/darkbit/classes/classgambit_1_1colliderbit_1_1buckfast/)

Member [Gambit::ColliderBit::convertPartonEvent](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-convertpartonevent)  (const EventT &pevt, HEPUtils::Event &result, double antiktR, double jet_pt_min)

* Only include hadronic tau fraction? 
choose jet algorithm via _settings? 
Lepton dressing 
_Some_ photons should be included in jets!!! Ignore for now since no FSR 
We should leave this for the detector sim / analysis to deal with  

Member [Gambit::ColliderBit::Cutflows::normalize](/documentation/code/darkbit/classes/structgambit_1_1colliderbit_1_1cutflows/#function-normalize)  (double norm, size_t icut=0)

* Provide a version that takes a vector of norms?  

Member [Gambit::ColliderBit::filter_reject](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-filter-reject)  (const JetPtrs &jets, std::function< bool(const Jet *)> rejfn, bool do_delete=true)

* Optimise by only copying those which are selected (filter_select is canonical)  

Member [Gambit::ColliderBit::filter_reject](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-filter-reject)  (const ParticlePtrs &particles, std::function< bool(const Particle *)> rejfn, bool do_delete=true)

* Optimise by only copying those which are selected (filter_select is canonical)  

Member [Gambit::ColliderBit::fromBottom](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-frombottom)  (int n, const EventT &evt)

* Rewrite using the Pythia > 8.176 particle-based methods 
What about partonic decays?  

Member [Gambit::ColliderBit::fromHadron](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-fromhadron)  (int n, const EventT &evt)

* Rewrite using the Pythia > 8.176 particle-based methods  

Member [Gambit::ColliderBit::fromTau](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-fromtau)  (int n, const EventT &evt)

* Rewrite using the Pythia > 8.176 particle-based methods  

Member [Gambit::ColliderBit::get_LHC_LogLike_SR_indices](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-get-lhc-loglike-sr-indices)  (map_str_dbl &result)

* Switch result type to map_str_int once we have implemented a printer for this type  

Member [Gambit::ColliderBit::getAndReplaceSLHAContent](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-getandreplaceslhacontent)  (pair_str_SLHAstruct &result)

* Add option to save the new SLHA content to file  

Member [Gambit::ColliderBit::has_tag](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-has-tag)  (const HEPUtils::BinnedFn2D< double > &effmap, double eta, double pt)

* Also need 1D? Sampling in what variable?  

Member [Gambit::ColliderBit::marg_loglike_cov](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-marg-loglike-cov)  (const Eigen::ArrayXd &n_preds, const Eigen::ArrayXd &n_obss, const Eigen::ArrayXd &sqrtevals, const Eigen::MatrixXd &evecs)

* Should also implement a check of relative difference  

Member [Gambit::ColliderBit::mkAnalysis](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-mkanalysis)  (const str &name)

* Move to a separate file  

Member [Gambit::ColliderBit::profile_loglike_cov](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-profile-loglike-cov)  (const Eigen::ArrayXd &n_preds, const Eigen::ArrayXd &n_obss, const Eigen::ArrayXd &sqrtevals, const Eigen::MatrixXd &evecs)

* Pass in the cov, and compute the fixed evals, evecs, and corr matrix as fixed params in here? Via a helper function to reduce duplication  

Member [Gambit::ColliderBit::random_bool](/documentation/code/darkbit/namespaces/namespacegambit_1_1colliderbit/#function-random-bool)  (double eff)

* Handle out-of-range eff values  

Member [Gambit::ColliderBit::SignalRegionData::check](/documentation/code/darkbit/classes/structgambit_1_1colliderbit_1_1signalregiondata/#function-check)  () const

* Add SR consistency checks  

Member [Gambit::SpecBit::get_MSSM_spectrum_from_SLHAstruct](/documentation/code/darkbit/namespaces/namespacegambit_1_1specbit/#function-get-mssm-spectrum-from-slhastruct)  (Spectrum &result)

* FIXME this needs to be fixed &ndash; is it needed any more? Where is this GAMBIT block supposed to be written? 

-------------------------------

Updated on 2022-08-03 at 12:58:06 +0000
