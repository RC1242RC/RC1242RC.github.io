---
title: 'file frontends/SuperIso_4_1.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) | **[BE_CONV_FUNCTION](/documentation/code/files/superiso__4__1_8hpp/#function-be-conv-function)**(A_BXsmumu_zero , double , (const parameters *) , "A_BXsmumu_zero" , (MSSM63atQ, MSSM63atMGUT, WC) ) |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) const parameters WC | **[BE_CONV_FUNCTION](/documentation/code/files/superiso__4__1_8hpp/#function-be-conv-function)**(A_BXstautau_highq2 , double , (const parameters *) , "A_BXstautau_highq2" , (MSSM63atQ, MSSM63atMGUT, WC) ) |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) const parameters WC const parameters WC | **[BE_CONV_FUNCTION](/documentation/code/files/superiso__4__1_8hpp/#function-be-conv-function)**(modified_AI_BKstarmumu_zero , double , (const parameters *) , "modified_AI_BKstarmumu_zero" , (MSSM63atQ, MSSM63atMGUT, WC) ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) | **[double](/documentation/code/files/superiso__4__1_8hpp/#variable-double)**  |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) const parameters | **[BRBXstautau_highq2](/documentation/code/files/superiso__4__1_8hpp/#variable-brbxstautau-highq2)**  |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) const parameters | **[MSSM63atQ](/documentation/code/files/superiso__4__1_8hpp/#variable-mssm63atq)**  |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) const parameters | **[MSSM63atMGUT](/documentation/code/files/superiso__4__1_8hpp/#variable-mssm63atmgut)**  |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) const parameters WC const parameters | **[modified_AI_BKstarmumu](/documentation/code/files/superiso__4__1_8hpp/#variable-modified-ai-bkstarmumu)**  |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) const parameters WC const parameters WC const parameters | **[modified_delta0](/documentation/code/files/superiso__4__1_8hpp/#variable-modified-delta0)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BACKENDNAME](/documentation/code/files/superiso__4__1_8hpp/#define-backendname)**  |
|  | **[BACKENDLANG](/documentation/code/files/superiso__4__1_8hpp/#define-backendlang)**  |
|  | **[VERSION](/documentation/code/files/superiso__4__1_8hpp/#define-version)**  |
|  | **[SAFE_VERSION](/documentation/code/files/superiso__4__1_8hpp/#define-safe-version)**  |
|  | **[REFERENCE](/documentation/code/files/superiso__4__1_8hpp/#define-reference)**  |

## Detailed Description


**Author**: 

  * Nazila Mahmoudi 
  * Pat Scott 


**Date**: 

  * 2016 Jul 
  * 2018 Jan 
  * 2019 Aug
  * 2015 May


Frontend for SuperIso backend v4.1



------------------

Authors (add name and date if you modify):



------------------


## Functions Documentation

### function BE_CONV_FUNCTION

```
LOAD_LIBRARY BE_CONV_FUNCTION(
    A_BXsmumu_zero ,
    double ,
    (const parameters *) ,
    "A_BXsmumu_zero" ,
    (MSSM63atQ, MSSM63atMGUT, WC) 
)
```


### function BE_CONV_FUNCTION

```
LOAD_LIBRARY const parameters WC BE_CONV_FUNCTION(
    A_BXstautau_highq2 ,
    double ,
    (const parameters *) ,
    "A_BXstautau_highq2" ,
    (MSSM63atQ, MSSM63atMGUT, WC) 
)
```


### function BE_CONV_FUNCTION

```
LOAD_LIBRARY const parameters WC const parameters WC BE_CONV_FUNCTION(
    modified_AI_BKstarmumu_zero ,
    double ,
    (const parameters *) ,
    "modified_AI_BKstarmumu_zero" ,
    (MSSM63atQ, MSSM63atMGUT, WC) 
)
```



## Attributes Documentation

### variable double

```
LOAD_LIBRARY double;
```


### variable BRBXstautau_highq2

```
LOAD_LIBRARY const parameters BRBXstautau_highq2;
```


### variable MSSM63atQ

```
LOAD_LIBRARY const parameters MSSM63atQ;
```


### variable MSSM63atMGUT

```
LOAD_LIBRARY const parameters MSSM63atMGUT;
```


### variable modified_AI_BKstarmumu

```
LOAD_LIBRARY const parameters WC const parameters modified_AI_BKstarmumu;
```


### variable modified_delta0

```
LOAD_LIBRARY const parameters WC const parameters WC const parameters modified_delta0;
```



## Macros Documentation

### define BACKENDNAME

```
#define BACKENDNAME SuperIso
```


### define BACKENDLANG

```
#define BACKENDLANG CC
```


### define VERSION

```
#define VERSION 4.1
```


### define SAFE_VERSION

```
#define SAFE_VERSION 4_1
```


### define REFERENCE

```
#define REFERENCE Mahmoudi:2007vz,Mahmoudi:2008tp,Mahmoudi:2009zz
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************



#define BACKENDNAME SuperIso
#define BACKENDLANG CC
#define VERSION 4.1
#define SAFE_VERSION 4_1
#define REFERENCE Mahmoudi:2007vz,Mahmoudi:2008tp,Mahmoudi:2009zz

LOAD_LIBRARY

// Can't do anything non-MSSM/2HDM with SuperIso yet, besides Wilson coefficients.
// If you want to expand this to work in the 2HDM, it should all just work out of the box if you set the
// parameters object up correctly in FlavBit and specify the model(s) as allowed here.
BE_ALLOW_MODELS(MSSM63atQ, MSSM63atMGUT, WC, WC_LUV, WC_LR)

BE_FUNCTION(Init_param, void, (parameters*), "Init_param", "Init_param")
BE_FUNCTION(slha_adjust, void, (parameters*), "slha_adjust", "slha_adjust")
BE_FUNCTION(mcmc_from_pole, double, (double, int, parameters*), "mcmc_from_pole", "mcmc_from_pole")

BE_FUNCTION(CW_calculator, void, (int, std::complex<double>*, std::complex<double>*, std::complex<double>*, double, const parameters*), "CW_calculator", "CW_calculator")
BE_FUNCTION(C_calculator_base1, void, (std::complex<double>*, std::complex<double>*, std::complex<double>*, double, std::complex<double>*, std::complex<double>*, std::complex<double>*, double, const parameters*), "C_calculator_base1", "C_calculator_base1")
BE_FUNCTION(C_calculator_base2, void, (std::complex<double>*, std::complex<double>*, double, std::complex<double>*, std::complex<double>*, double, const parameters*), "C_calculator_base2", "C_calculator_base2")
BE_FUNCTION(Cprime_calculator, void, (int, std::complex<double>*, std::complex<double>*, double, double, const parameters*), "Cprime_calculator", "Cprime_calculator")
BE_FUNCTION(CQ_calculator, void, (int, std::complex<double>*, std::complex<double>*, double, double, const parameters*), "CQ_calculator", "CQ_calculator")

BE_FUNCTION(alphas_running, double, (double, double,  double, const parameters*), "alphas_running", "alphas_running")

BE_FUNCTION(bsgamma, double, (std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, double, double, const parameters*), "bsgamma", "bsgamma")
BE_FUNCTION(bsgamma_Ecut, double, (std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, double, double, double, const parameters*), "bsgamma_Ecut", "bsgamma_Ecut")

BE_FUNCTION(Bsmumu, double, (std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "Bsmumu", "Bsmumu")
BE_FUNCTION(Bsmumu_untag, double, (std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "Bsmumu_untag", "Bsmumu_untag")
BE_FUNCTION(Bsll_untag, double, (int, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "Bsll_untag", "Bsll_untag")
BE_FUNCTION(Bmumu, double, (std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "Bdmumu", "Bmumu")
BE_FUNCTION(Btaunu, double, (const parameters*), "Btaunu", "Btaunu")
BE_FUNCTION(BDtaunu, double, (const parameters*), "BDtaunu", "BDtaunu")
BE_FUNCTION(BDtaunu_BDenu, double, (const parameters*), "BDtaunu_BDenu", "BDtaunu_BDenu")
BE_FUNCTION(BDstartaunu_BDstarenu, double, (const parameters*), "BDstartaunu_BDstarenu", "BDstartaunu_BDstarenu")
BE_FUNCTION(Blnu, double, (int, const parameters*), "Blnu", "Blnu")

BE_FUNCTION(Kmunu_pimunu, double, (const parameters*), "Kmunu_pimunu", "Kmunu_pimunu")
BE_FUNCTION(Rmu23, double, (const parameters*), "Rmu23", "Rmu23")
BE_FUNCTION(Dstaunu, double, (const parameters*), "Dstaunu", "Dstaunu")
BE_FUNCTION(Dsmunu, double, (const parameters*), "Dsmunu", "Dsmunu")
BE_FUNCTION(Dmunu, double, (const parameters*), "Dmunu", "Dmunu")
BE_FUNCTION(muon_gm2, double, (const parameters*), "muon_gm2", "muon_gm2")
BE_FUNCTION(delta0, double, (std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double, double, double), "delta0", "delta0")
BE_FUNCTION(BRBXsll_lowq2, double, (int, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "BRBXsll_lowq2", "BRBXsll_lowq2")
BE_FUNCTION(BRBXsll_highq2, double, (int, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "BRBXsll_highq2", "BRBXsll_highq2")
BE_FUNCTION(A_BXsll_lowq2, double, (int, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "A_BXsll_lowq2", "A_BXsll_lowq2")
BE_FUNCTION(A_BXsll_highq2, double, (int, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "A_BXsll_highq2", "A_BXsll_highq2")
BE_FUNCTION(A_BXsll_zero, double, (int, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "A_BXsll_zero", "A_BXsll_zero")
BE_FUNCTION(BRBKstarll, double, (int, int, double, double, double*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "BRBKstarll", "BRBKstarll")
BE_FUNCTION(BRBKll, double, (int, int, double, double, double*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "BRBKll", "BRBKll")
BE_FUNCTION(BRBsphill, double, (int, int, double, double, double*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "BRBsphill", "BRBsphill")
BE_FUNCTION(AI_BKstarmumu, double, (double, double, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "AI_BKstarmumu", "AI_BKstarmumu")
BE_FUNCTION(AI_BKstarmumu_zero, double, (std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "AI_BKstarmumu_zero", "AI_BKstarmumu_zero")
BE_FUNCTION(Bll, double, (int, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, std::complex<double>*, const parameters*, double), "Bdll", "Bll")
BE_FUNCTION(BRBDlnu, double, (int, int, double,  double, double*, const parameters*), "BRBDlnu", "BRBDlnu")
BE_FUNCTION(BRBDstarlnu, double, (int, int, double,  double, double*, const parameters*), "BRBDstarlnu", "BRBDstarlnu")
BE_FUNCTION(mb_1S, double , (const parameters*), "mb_1S", "mb_1S")

// SuperIso functions related to theory correlations:
BE_FUNCTION(set_nuisance, void, (nuisance*), "set_nuisance", "set_nuisance")
BE_FUNCTION(set_nuisance_value_from_param, void, (nuisance*, const parameters*), "set_nuisance_value_from_param", "set_nuisance_value_from_param")
BE_FUNCTION(make_obslist, void, (char**, obsname*, int*), "make_obslist", "make_obslist")
BE_FUNCTION(get_predictions_nuisance, void, (char**, int*, double**, const parameters*, const nuisance*), "get_predictions_nuisance", "get_predictions_nuisance")
BE_FUNCTION(observables, void, (int, obsname*, int, double*, double*, const nuisance*, char**, const parameters*), "observables", "observables")
BE_FUNCTION(convert_correlation, void, (nuiscorr*, int, double**, char**, int), "convert_correlation", "convert_correlation")
BE_FUNCTION(get_th_covariance_nuisance, void, (double***, char**, int*, const parameters*, const nuisance*, double**), "get_th_covariance_nuisance", "get_th_covariance_nuisance")

// Convenience functions:
BE_CONV_FUNCTION(A_BXsmumu_zero, double, (const parameters*), "A_BXsmumu_zero",(MSSM63atQ, MSSM63atMGUT, WC))
BE_CONV_FUNCTION(BRBXstautau_highq2, double, (const parameters*), "BRBXstautau_highq2", (MSSM63atQ, MSSM63atMGUT, WC))
BE_CONV_FUNCTION(A_BXstautau_highq2, double, (const parameters*), "A_BXstautau_highq2", (MSSM63atQ, MSSM63atMGUT, WC))
BE_CONV_FUNCTION(modified_AI_BKstarmumu, double, (const parameters*), "modified_AI_BKstarmumu", (MSSM63atQ, MSSM63atMGUT, WC))
BE_CONV_FUNCTION(modified_AI_BKstarmumu_zero, double, (const parameters*), "modified_AI_BKstarmumu_zero", (MSSM63atQ, MSSM63atMGUT, WC))
BE_CONV_FUNCTION(modified_delta0, double, (const parameters*), "modified_delta0", (MSSM63atQ, MSSM63atMGUT, WC))

// Undefine macros to avoid conflict with other backends
#include "gambit/Backends/backend_undefs.hpp"
```


-------------------------------

Updated on 2022-08-01 at 12:13:35 +0000
