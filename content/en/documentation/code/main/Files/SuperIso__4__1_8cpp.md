---
title: 'file frontends/SuperIso_4_1.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[Nobs_BKll](/documentation/code/files/superiso__4__1_8cpp/#define-nobs-bkll)** <br>Number of observables the SuperIso returns for B0 -> K(*) mu mu and Bs -> phi mu mu.  |
|  | **[Nobs_BKsll](/documentation/code/files/superiso__4__1_8cpp/#define-nobs-bksll)**  |
|  | **[Nobs_Bsphill](/documentation/code/files/superiso__4__1_8cpp/#define-nobs-bsphill)**  |

## Detailed Description


**Author**: 

  * Nazila Mahmoudi ([nazila@cern.ch](mailto:nazila@cern.ch)) 
  * Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 
  * Marcin Chrzaszcz ([mchrzasz@cern.ch](mailto:mchrzasz@cern.ch)) 


**Date**: 

  * 2016 Jul 
  * 2018 Jan 
  * 2019 Jul
  * 2017 Mar, Apr
  * 2016 
  * 2017


Frontend for SuperIso backend



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define Nobs_BKll

```
#define Nobs_BKll 2
```

Number of observables the SuperIso returns for B0 -> K(*) mu mu and Bs -> phi mu mu. 

### define Nobs_BKsll

```
#define Nobs_BKsll 32
```


### define Nobs_Bsphill

```
#define Nobs_Bsphill 6
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#include <sstream>
#include "gambit/Backends/frontend_macros.hpp"
#include "gambit/Backends/frontends/SuperIso_4_1.hpp"
#include "gambit/Backends/backend_types/SuperIso.hpp"

#define Nobs_BKll 2
#define Nobs_BKsll 32
#define Nobs_Bsphill 6


// Initialisation
BE_INI_FUNCTION{}
END_BE_INI_FUNCTION

// Convenience functions (definitions)
BE_NAMESPACE
{

  void modify_WC(const parameters *param, std::complex<double> C0b[11])
  {
    C0b[7]+=std::complex<double>(param->Re_DeltaC7, param->Im_DeltaC7);
    C0b[9]+=std::complex<double>(param->Re_DeltaC9, param->Im_DeltaC9);
    C0b[10]+=std::complex<double>(param->Re_DeltaC10, param->Im_DeltaC10);
  }
  void modify_WC(const parameters *param, std::complex<double> C0b[11], std::complex<double> CQ0b[3])
  {
    modify_WC(param, C0b);
    CQ0b[1]+=std::complex<double>(param->Re_DeltaCQ1, param->Im_DeltaCQ1);
    CQ0b[2]+=std::complex<double>(param->Re_DeltaCQ2, param->Im_DeltaCQ2);
  }

  void check_model(const parameters *param, const str& where)
  {
    bool known_model = false;
    known_model = known_model or (param->model == -3 and param->SM == 1); // SM or a Flavour EFT model
    known_model = known_model or (param->model >= 0);                     // SUSY/2HDM/other BSM model that SuperIso can handle explicitly
    if (not known_model) backend_error().raise(where, "SuperIso convenience function called with incompatible model.");
  }

  double A_BXsmumu_zero(const parameters *param)
  {
    check_model(param, LOCAL_INFO);

    double mu_W=2.*param->mass_W;
    double mu_b=param->mass_b;
    std::complex<double> C0w[11],C1w[11],C2w[11],C0b[11],C1b[11],C2b[11],Cpb[11];
    std::complex<double> CQpb[3],CQ0b[3],CQ1b[3];

    CW_calculator(2,byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),param);
    C_calculator_base1(byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),byVal(C0b),byVal(C1b),byVal(C2b),byVal(mu_b),param);
    CQ_calculator(2,byVal(CQ0b),byVal(CQ1b),byVal(mu_W),byVal(mu_b),param);
    Cprime_calculator(2,byVal(Cpb),byVal(CQpb),byVal(mu_W),byVal(mu_b),param);
    modify_WC(param, C0b, CQ0b);

    return A_BXsll_zero(2,byVal(C0b),byVal(C1b),byVal(C2b),byVal(CQ0b),byVal(CQ1b),byVal(Cpb),byVal(CQpb),param,byVal(mu_b));
  }

  double BRBXstautau_highq2(const parameters *param)
  {
    check_model(param, LOCAL_INFO);

    double mu_W=2.*param->mass_W;
    double mu_b=param->mass_b;
    std::complex<double> C0w[11],C1w[11],C2w[11],C0b[11],C1b[11],C2b[11],Cpb[11];
    std::complex<double> CQpb[3],CQ0b[3],CQ1b[3];

    CW_calculator(2,byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),param);
    C_calculator_base1(byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),byVal(C0b),byVal(C1b),byVal(C2b),byVal(mu_b),param);
    CQ_calculator(2,byVal(CQ0b),byVal(CQ1b),byVal(mu_W),byVal(mu_b),param);
    Cprime_calculator(2,byVal(Cpb),byVal(CQpb),byVal(mu_W),byVal(mu_b),param);
    modify_WC(param, C0b, CQ0b);

    return BRBXsll_highq2(3,byVal(C0b),byVal(C1b),byVal(C2b),byVal(CQ0b),byVal(CQ1b),byVal(Cpb),byVal(CQpb),param,byVal(mu_b));
  }

  double A_BXstautau_highq2(const parameters *param)
  {
    check_model(param, LOCAL_INFO);

    double mu_W=2.*param->mass_W;
    double mu_b=param->mass_b;
    std::complex<double> C0w[11],C1w[11],C2w[11],C0b[11],C1b[11],C2b[11],Cpb[11];
    std::complex<double> CQpb[3],CQ0b[3],CQ1b[3];

    CW_calculator(3,byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),param);
    C_calculator_base1(byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),byVal(C0b),byVal(C1b),byVal(C2b),byVal(mu_b),param);
    CQ_calculator(3,byVal(CQ0b),byVal(CQ1b),byVal(mu_W),byVal(mu_b),param);
    Cprime_calculator(3,byVal(Cpb),byVal(CQpb),byVal(mu_W),byVal(mu_b),param);
    modify_WC(param, C0b, CQ0b);

    return A_BXsll_highq2(3,byVal(C0b),byVal(C1b),byVal(C2b),byVal(CQ0b),byVal(CQ1b),byVal(Cpb),byVal(CQpb),param,byVal(mu_b));
  }

  double modified_delta0(const parameters *param)
  {
    check_model(param, LOCAL_INFO);

    double mu_W=2.*param->mass_W;
    double mu_b=param->mass_b_1S/2.;
    double lambda_h=0.5;
    double mu_spec=sqrt(lambda_h*param->mass_b);
    std::complex<double> C0w[11],C1w[11],C2w[11],C0b[11],C1b[11],C0spec[11],C1spec[11],Cpb[11];
    std::complex<double> CQpb[3];

    CW_calculator(2,byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),param);
    C_calculator_base2(byVal(C0w),byVal(C1w),byVal(mu_W),byVal(C0b),byVal(C1b),byVal(mu_b),param);
    C_calculator_base2(byVal(C0w),byVal(C1w),byVal(mu_W),byVal(C0spec),byVal(C1spec),byVal(mu_spec),param);
    Cprime_calculator(2,byVal(Cpb),byVal(CQpb),byVal(mu_W),byVal(mu_b),param);
    modify_WC(param, C0b);

    return delta0(byVal(C0b),byVal(C0spec),byVal(C1b),byVal(C1spec),byVal(Cpb),param,byVal(mu_b),byVal(mu_spec),byVal(lambda_h));
  }

  double modified_AI_BKstarmumu(const parameters *param)
  {
    check_model(param, LOCAL_INFO);

    double mu_W=2.*param->mass_W;
    double mu_b=param->mass_b_1S/2.;
    std::complex<double> C0b[11],C1b[11],C2b[11],C0w[11],C1w[11],C2w[11];

    CW_calculator(2,byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),param);
    C_calculator_base1(byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),byVal(C0b),byVal(C1b),byVal(C2b),byVal(mu_b),param);
    modify_WC(param, C0b);

    return AI_BKstarmumu(1.,6.,byVal(C0b),byVal(C1b),byVal(C2b),param,byVal(mu_b));
  }

  double modified_AI_BKstarmumu_zero(const parameters *param)
  {
    check_model(param, LOCAL_INFO);

    double mu_W=2.*param->mass_W;
    double mu_b=param->mass_b_1S/2.;
    std::complex<double> C0b[11],C1b[11],C2b[11],C0w[11],C1w[11],C2w[11];

    CW_calculator(2,byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),param);
    C_calculator_base1(byVal(C0w),byVal(C1w),byVal(C2w),byVal(mu_W),byVal(C0b),byVal(C1b),byVal(C2b),byVal(mu_b), param);
    modify_WC(param, C0b);

    return AI_BKstarmumu_zero(byVal(C0b),byVal(C1b),byVal(C2b),param,byVal(mu_b));
  }

}
END_BE_NAMESPACE
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
