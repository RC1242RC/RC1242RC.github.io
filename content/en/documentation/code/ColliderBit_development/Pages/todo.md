---
title: 'page Todo List'

description: "[No description available]"

---











Member [Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_139invfb::run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__139invfb/#function-run)  (const Event *event)

* Compute from hard objects instead? 
And tight ID for high purity... used where? 
And tight ID for high purity... used where? 
Use weighting instead 
Apply a random 9% loss / 0.91 reweight for jet quality criteria? 
Drop b-tag if pT < 50 GeV or |eta| > 2.5?  

Member [Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_13invfb::run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__13invfb/#function-run)  (const Event *event)

* Drop b-tag if pT < 50 GeV or |eta| > 2.5? 
Unless b-tagged (and pT > 50 && abseta < 2.5) 
Actually only within 0.2&ndash;0.4... 
Actually only within 0.2&ndash;0.4...  

Member [Gambit::ColliderBit::Analysis_ATLAS_13TeV_0LEP_36invfb::run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__0lep__36invfb/#function-run)  (const Event *event)

* Actually only within 0.2&ndash;0.4... 
Unless b-tagged (and pT > 50 && abseta < 2.5) 
Drop b-tag if pT < 50 GeV or |eta| > 2.5? 
Actually only within 0.2&ndash;0.4...  

Member [Gambit::ColliderBit::Analysis_ATLAS_13TeV_MultiLEP_strong_139invfb::run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__atlas__13tev__multilep__strong__139invfb/#function-run)  (const Event *event)

* Drop b-tag if |eta| > 2.5? 
Use applyElectronIsolationEfficiency2019 or something similar? 
Compute from hard objects instead?  

Member [Gambit::ColliderBit::Analysis_CMS_13TeV_0LEP_137invfb::run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__137invfb/#function-run)  (const Event *event)

* Sum should actually be over all non-e/mu calo particles 
Sum should actually be over all non-e/mu calo particles 
Sum should actually be over all calo particles  

Member [Gambit::ColliderBit::Analysis_CMS_13TeV_0LEP_13invfb::run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__13invfb/#function-run)  (const Event *event)

* Sum should actually be over all non-e/mu calo particles 
Need access to charged hadrons to do this isolation 
Sum should actually be over all non-e/mu calo particles  

Member [Gambit::ColliderBit::Analysis_CMS_13TeV_0LEP_36invfb::run](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__0lep__36invfb/#function-run)  (const Event *event)

* Sum should actually be over all non-e/mu calo particles 
Sum should actually be over all non-e/mu calo particles 
Need access to charged hadrons to do this isolation  

Class [Gambit::ColliderBit::Analysis_CMS_13TeV_MONOJET_36invfb](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/)

* Add W/Z region with AKT8 jets and 2/1 n-subjettiness ratio cut  

Member [Gambit::ColliderBit::Analysis_CMS_13TeV_MONOJET_36invfb::analysis_specific_reset](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__13tev__monojet__36invfb/#function-analysis-specific-reset)  ()

* Need to also clear/reset cutflow, but it currently has no method for that  

Member [Gambit::ColliderBit::Analysis_CMS_8TeV_1LEPDMTOP_20invfb::loglikelihood](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__1lepdmtop__20invfb/#function-loglikelihood)  ()

* Implement!  

Member [Gambit::ColliderBit::Analysis_CMS_8TeV_2LEPDMTOP_20invfb::loglikelihood](/documentation/code/colliderbit_development/classes/classgambit_1_1colliderbit_1_1analysis__cms__8tev__2lepdmtop__20invfb/#function-loglikelihood)  ()

* Implement!  

Member [Gambit::ColliderBit::calc_loglikes_for_analysis](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1colliderbit/#function-calc-loglikes-for-analysis)  (const AnalysisData &, bool, bool, bool, bool)

* Or compute all the exp DLLs first, then only the best-expected SR's obs DLL? 
Only compute this once per run 
Only compute this once per run 
Use newer (?) one-step Eigen constructors for (const) single-element arrays 
Only compute this once per run 
Compute the background-only covariance decomposition and likelihood only once 
Unify this for both cov and no-cov, feeding in one-element Eigen blocks as Ref<>s for the latter? 
Support NSL, i.e. skewness correction  

Member [Gambit::ColliderBit::get_LHC_LogLike_SR_indices](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1colliderbit/#function-get-lhc-loglike-sr-indices)  (map_str_dbl &result)

* Switch result type to map_str_int once we have implemented a printer for this type  

Member [Gambit::ColliderBit::getAndReplaceSLHAContent](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1colliderbit/#function-getandreplaceslhacontent)  (pair_str_SLHAstruct &result)

* Add option to save the new SLHA content to file  

Member [Gambit::ColliderBit::marg_loglike_cov](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1colliderbit/#function-marg-loglike-cov)  (const Eigen::ArrayXd &n_preds, const Eigen::ArrayXd &n_obss, const Eigen::ArrayXd &sqrtevals, const Eigen::MatrixXd &evecs)

* Should also implement a check of relative difference  

Member [Gambit::ColliderBit::profile_loglike_cov](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1colliderbit/#function-profile-loglike-cov)  (const Eigen::ArrayXd &n_preds, const Eigen::ArrayXd &n_obss, const Eigen::ArrayXd &sqrtevals, const Eigen::MatrixXd &evecs)

* Pass in the cov, and compute the fixed evals, evecs, and corr matrix as fixed params in here? Via a helper function to reduce duplication  

Member [Gambit::SpecBit::get_MSSM_spectrum_from_SLHAstruct](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1specbit/#function-get-mssm-spectrum-from-slhastruct)  (Spectrum &result)

* FIXME this needs to be fixed &ndash; is it needed any more? Where is this GAMBIT block supposed to be written? 

-------------------------------

Updated on 2022-08-02 at 18:18:40 +0000
