---
title: 'file frontends/DarkSUSY_MSSM_6_2_5.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) | **[BE_VARIABLE](/documentation/code/files/darksusy__mssm__6__2__5_8hpp/#function-be-variable)**(anbranch , DS_NUCOM , "anbranch_" , "nu_common_block" ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) | **[DS_DDMSSMCOM](/documentation/code/files/darksusy__mssm__6__2__5_8hpp/#variable-ds-ddmssmcom)**  |
| [LOAD_LIBRARY](/documentation/code/files/frontend__macros_8hpp/#define-load-library) | **[ddmssmcom_](/documentation/code/files/darksusy__mssm__6__2__5_8hpp/#variable-ddmssmcom-)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BACKENDNAME](/documentation/code/files/darksusy__mssm__6__2__5_8hpp/#define-backendname)**  |
|  | **[BACKENDLANG](/documentation/code/files/darksusy__mssm__6__2__5_8hpp/#define-backendlang)**  |
|  | **[VERSION](/documentation/code/files/darksusy__mssm__6__2__5_8hpp/#define-version)**  |
|  | **[SAFE_VERSION](/documentation/code/files/darksusy__mssm__6__2__5_8hpp/#define-safe-version)**  |
|  | **[REFERENCE](/documentation/code/files/darksusy__mssm__6__2__5_8hpp/#define-reference)**  |

## Detailed Description


**Author**: 

  * Torsten Bringmann ([torsten.bringmann@fys.uio.no](mailto:torsten.bringmann@fys.uio.no)) 
  * Joakim Edsjo ([edsjo@fysik.su.se](mailto:edsjo@fysik.su.se)) 
  * Pat Scott ([pat.scott@uq.edu.au](mailto:pat.scott@uq.edu.au)) 


**Date**: 

  * 2018 September, 2019, 2021
  * 2018 September
  * 2020 September


Fronted header for the DarkSUSY backend

Compile-time registration of available functions and variables from this backend.



------------------

Authors (add name and date if you modify):



------------------


## Functions Documentation

### function BE_VARIABLE

```
LOAD_LIBRARY BE_VARIABLE(
    anbranch ,
    DS_NUCOM ,
    "anbranch_" ,
    "nu_common_block" 
)
```



## Attributes Documentation

### variable DS_DDMSSMCOM

```
LOAD_LIBRARY DS_DDMSSMCOM;
```


### variable ddmssmcom_

```
LOAD_LIBRARY ddmssmcom_;
```



## Macros Documentation

### define BACKENDNAME

```
#define BACKENDNAME DarkSUSY_MSSM
```


### define BACKENDLANG

```
#define BACKENDLANG FORTRAN
```


### define VERSION

```
#define VERSION 6.2.5
```


### define SAFE_VERSION

```
#define SAFE_VERSION 6_2_5
```


### define REFERENCE

```
#define REFERENCE Gondolo:2004sc,Bringmann:2018lay
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#define BACKENDNAME DarkSUSY_MSSM
#define BACKENDLANG FORTRAN
#define VERSION 6.2.5
#define SAFE_VERSION 6_2_5
#define REFERENCE Gondolo:2004sc,Bringmann:2018lay

// Load the library
LOAD_LIBRARY

BE_ALLOW_MODELS(MSSM63atQ)

// Include common DarkSUSY frontend declarations shared across all model-specific versions of the backend
#include "gambit/Backends/frontends/shared_includes/DarkSUSY_6.hpp"

BE_FUNCTION(dsSLHAread, void, (const char*, int), "dsgive_model_SLHA_", "dsgive_model_SLHA")
BE_FUNCTION(dsmodelsetup, void, (int&,int&), "dsmodelsetup_", "dsmodelsetup")
BE_FUNCTION(dsmssmzero, void, (), "dsmssmzero_", "dsmssmzero")
BE_FUNCTION(dsvertx, void, (), "dsvertx_", "dsvertx")
BE_FUNCTION(dsorder_flavour, void, (), "dsorder_flavour_", "dsorder_flavour")
BE_FUNCTION(dshigwid, void, (), "dshigwid_", "dshigwid")
BE_FUNCTION(dsspwid, void, (), "dsspwid_", "dsspwid")
BE_FUNCTION(dsfindmtmt, void, (), "dsfindmtmt_", "dsfindmtmt")
BE_FUNCTION(dssuconst_yukawa_running, void, (), "dssuconst_yukawa_running_", "dssuconst_yukawa_running")
BE_FUNCTION(dssuconst_yukawa, void, (), "dssuconst_yukawa_", "dssuconst_yukawa")
BE_FUNCTION(dssuconst_higgs, void, (), "dssuconst_higgs_", "dssuconst_higgs")
BE_FUNCTION(dsmqpole4loop, double, (int&, double&), "dsmqpole4loop_", "dsmqpole4loop")
BE_FUNCTION(dsgf2s2thw, double, (const double&, const double&, const double&, const double&, const int&), "dsgf2s2thw_", "dsgf2s2thw")

// Functions only needed in debug mode
BE_FUNCTION(dswspectrum, void, (int&), "dswspectrum_", "dswspectrum")
BE_FUNCTION(dswwidth, void, (int&), "dswwidth_", "dswwidth")

// Functions used in MSSM.cpp
BE_FUNCTION(dsgive_model_isasugra, void, (double&,double&,double&,double&,double&), "dsgive_model_isasugra_", "dsgive_model_isasugra")
BE_FUNCTION(dssigmav0, double, (int&,int&), "dssigmav0_", "dssigmav0")
BE_FUNCTION(dssigmav0tot, double, (), "dssigmav0tot_", "dssigmav0tot")
BE_FUNCTION(dsIBffdxdy, double, (int&, double&, double&), "dsibffdxdy_", "dsIBffdxdy")
BE_FUNCTION(dsIBfsrdxdy, double, (int&, double&, double&), "dsibfsrdxdy_", "dsIBfsrdxdy")
BE_FUNCTION(dsIBhhdxdy, double, (int&, double&, double&), "dsibhhdxdy_", "dsIBhhdxdy")
BE_FUNCTION(dsIBwhdxdy, double, (int&, double&, double&), "dsibwhdxdy_", "dsIBwhdxdy")
BE_FUNCTION(dsIBwwdxdy, double, (int&, double&, double&), "dsibwwdxdy_", "dsIBwwdxdy")

// Functions used by convenience functions
BE_FUNCTION(dsseyield_ch, double, (const double&, const double&, const double&, const int&, const int&, const char*, const int&, const int&, const int&), "dsseyield_ch_", "raw_nuyield_casc")
BE_FUNCTION(dsddgpgn, void, (Farray<Fcomplex16,1,27,1,2>&, int&), "dsddgpgn_", "dsddgpgn")

// Common blocks in the MSSM module library
BE_VARIABLE(smquarkmasses, DS_SMQUARKMASSES, "smquarkmasses_", "smquarkmasses")
BE_VARIABLE(smcoupling, DS_SMCOUPLING, "smcoupling_", "smcoupling")
BE_VARIABLE(pmasses, DS_PMASSES, "pmasses_", "pmasses")
BE_VARIABLE(pwidths, DS_PWIDTHS, "pwidths_", "pwidths")
BE_VARIABLE(mixing, DS_SCKM, "sckm_", "mixing")
// The part that is genuinely MSSM-specific (and not SM/generic) only starts here
BE_VARIABLE(pacodes_mssm, DS_PACODES_MSSM, "pacodes_mssm_", "pacodes_mssm")
BE_VARIABLE(mssmmixing, DS_MSSMMIXING, "mssmmixing_", "mssmmixing")
BE_VARIABLE(couplingconstants, DS_COUPLINGCONSTANTS, "couplingconstants_", "couplingconstants")
BE_VARIABLE(mssmiuseful, DS_MSSMIUSEFUL, "mssmiuseful_", "mssmiuseful")
BE_VARIABLE(mssmtype, DS_MSSMTYPE, "mssmtype_", "mssmtype")
BE_VARIABLE(mssmpar, DS_MSSMPAR, "mssmpar_", "mssmpar")
BE_VARIABLE(mssmwidths, DS_MSSMWIDTHS, "mssmwidths_", "mssmwidths")
BE_VARIABLE(IBintvars, DS_IBINTVARS,"ibintvars_", "IBintvars")
BE_VARIABLE(anbranch,DS_NUCOM, "anbranch_", "nu_common_block") // BRs
BE_VARIABLE(ddmssmcom, DS_DDMSSMCOM, "ddmssmcom_", "ddmssmcom") //DD
BE_VARIABLE(dsancoann, DS_DSANCOANN, "dsancoann_", "dsancoann") // RD

// Convenience functions (registration)
BE_CONV_FUNCTION(DD_couplings, std::vector<double>, (), "get_DD_couplings")
BE_CONV_FUNCTION(DSparticle_code, int, (const str&), "DSparticle_code")
BE_CONV_FUNCTION(init_diskless, int, (const SLHAstruct&, const DecayTable&), "initFromSLHAeaAndDecayTable")

// Model-conditional dependencies of BE_INI
BE_INI_CONDITIONAL_DEPENDENCY(MSSM_spectrum, Spectrum, MSSM63atQ, CMSSM)
BE_INI_CONDITIONAL_DEPENDENCY(decay_rates, DecayTable, MSSM63atQ, CMSSM)

// Undefine macros to avoid conflict with other backends
#include "gambit/Backends/backend_undefs.hpp"
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
