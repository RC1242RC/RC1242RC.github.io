---
title: 'file ScannerBit/priors.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/main/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::Priors](/documentation/code/main/namespaces/namespacegambit_1_1priors/)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[LOAD_PRIOR](/documentation/code/main/files/priors_8hpp/#define-load-prior)**(tag, ...)  |

## Detailed Description


**Author**: 

  * Ben Farmer ([benjamin.farmer@monash.edu.au](mailto:benjamin.farmer@monash.edu.au)) 
  * Gregory Martinez ([gregory.david.martinez@gmail.com](mailto:gregory.david.martinez@gmail.com)) 


**Date**: 

  * 2013 Dec
  * 2014 Feb


Prior object construction routines



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define LOAD_PRIOR

```
#define LOAD_PRIOR(
    tag,
    ...
)
REGISTER(prior_creators, tag, __VA_ARGS__)
```


## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************
///  \file
///
///  Prior object construction routines
///  
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///   
///  \author Ben Farmer
///          (benjamin.farmer@monash.edu.au)
///  \date 2013 Dec
///
///  \author Gregory Martinez
///          (gregory.david.martinez@gmail.com)
///  \date 2014 Feb
///
///  *********************************************

#ifndef PRIORS_HPP
#define PRIORS_HPP

#include <string>
#include <vector>

#include "gambit/Utils/yaml_options.hpp"
#include "gambit/ScannerBit/scanner_utils.hpp"
#include "gambit/ScannerBit/base_prior.hpp"

// This macro registers each prior.
#define LOAD_PRIOR(tag, ...) REGISTER(prior_creators, tag, __VA_ARGS__)

/// Map in which to keep factory functions for the priors (prior_creators)
namespace Gambit
{
    namespace Priors
    {
        gambit_registry
        { 
            typedef BasePrior* create_prior_function(const std::vector<std::string> &, const Options &);
            reg_elem <create_prior_function> prior_creators;
        }
    }
}

#endif /* defined(__priors_hpp__) */
```


-------------------------------

Updated on 2022-08-03 at 01:58:23 +0000
