---
title: 'file FlavBit/FlavBit_types.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/gambit_2.2/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::FlavBit](/documentation/code/gambit_2.2/namespaces/namespacegambit_1_1flavbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Gambit::FlavBit::Correlation](/documentation/code/gambit_2.2/classes/structgambit_1_1flavbit_1_1correlation/)** <br>Simple structure for holding a correlation value and name of the correlated observable.  |
| struct | **[Gambit::FlavBit::Measurement](/documentation/code/gambit_2.2/classes/structgambit_1_1flavbit_1_1measurement/)** <br>Representation of a single entry in the FlavBit YAML database.  |
| struct | **[Gambit::FlavBit::predictions_measurements_covariances](/documentation/code/gambit_2.2/classes/structgambit_1_1flavbit_1_1predictions__measurements__covariances/)**  |

## Detailed Description


**Author**: 

  * Marcin Chrzaszcz ([mchrzasz@cern.ch](mailto:mchrzasz@cern.ch)) 
  * Tomas Gonzalo ([t.e.gonzalo@fys.uio.no](mailto:t.e.gonzalo@fys.uio.no)) 
  * Markus Prim ([markus.prim@kit.edu](mailto:markus.prim@kit.edu)) 


**Date**: 

  * 2015 July
  * 2017 July
  * 2019 Nov 2020 Feb


Type definition header for module FlavBit.

Compile-time registration of type definitions required for the rest of the code to communicate with FlavBit.

Add to this if you want to define a new type for the functions in FlavBit to return, but you don't expect that type to be needed by any other modules.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Type definition header for module FlavBit.
///
///  Compile-time registration of type definitions
///  required for the rest of the code to
///  communicate with FlavBit.
///
///  Add to this if you want to define a new type
///  for the functions in FlavBit to return, but
///  you don't expect that type to be needed by
///  any other modules.
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Marcin Chrzaszcz
///          (mchrzasz@cern.ch)
///  \date 2015 July
///
///  \author Tomas Gonzalo
///          (t.e.gonzalo@fys.uio.no)
///  \date 2017 July
///
///  \author Markus Prim
///          (markus.prim@kit.edu)
///  \date 2019 Nov
///        2020 Feb
///
///  *********************************************

#ifndef __FlavBit_types_hpp__
#define __FlavBit_types_hpp__

#include <string>
#include <vector>

#include <boost/numeric/ublas/matrix.hpp>


namespace Gambit
{

  namespace FlavBit
  {

    namespace ublas = boost::numeric::ublas;

    /// Simple structure for holding a correlation value and name of the correlated observable
    struct Correlation
    {
      double corr_val;
      std::string corr_name;
    };

    /// Representation of a single entry in the FlavBit YAML database
    struct Measurement
    {
      bool is_limit;
      bool exp_one_sided;
      double exp_value;
      double exp_stat_error;
      double exp_sys_error;
      double exp_error;
      double exp_90_CL;
      double exp_95_CL;
      double th_error;
      std::string name;
      std::string exp_source;
      std::string th_error_source;
      std::string th_error_type;
      std::vector<Correlation> corr;
    };

    /// Structure for holding predicted and observed values of multiple observables,
    /// and experimental and theoretical covariance matrices for their uncertainties.
    struct predictions_measurements_covariances
    {
      std::string LL_name;
      boost::numeric::ublas::matrix<double> value_exp;
      boost::numeric::ublas::matrix<double> cov_exp;
      boost::numeric::ublas::matrix<double> value_th;
      boost::numeric::ublas::matrix<double> cov_th;
      std::vector<double> diff;
      int dim;
    };

  }
}


#endif
```


-------------------------------

Updated on 2022-08-03 at 07:19:44 +0000
