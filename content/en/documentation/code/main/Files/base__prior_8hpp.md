---
title: 'file ScannerBit/base_prior.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::Priors](/documentation/code/namespaces/namespacegambit_1_1priors/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::Priors::BasePrior](/documentation/code/classes/classgambit_1_1priors_1_1baseprior/)** <br>Abstract base class for priors.  |

## Detailed Description


**Author**: 

  * Ben Farmer ([benjamin.farmer@monash.edu.au](mailto:benjamin.farmer@monash.edu.au)) 
  * Gregory Martinez ([gregory.david.martinez@gmail.com](mailto:gregory.david.martinez@gmail.com)) 
  * Andrew Fowlie ([andrew.j.fowlie@qq.com](mailto:andrew.j.fowlie@qq.com)) 


**Date**: 

  * 2013 Dec
  * 2014 Feb
  * August 2020


Abstract base class for a prior



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************

#ifndef __BASE_PRIORS_HPP__
#define __BASE_PRIORS_HPP__

#include <string>
#include <unordered_map>
#include <vector>


namespace Gambit
{
  namespace Priors
  {
    class BasePrior
    {
     private:
      unsigned int param_size;

     protected:
      std::vector<std::string> param_names;

     public:
      virtual ~BasePrior() = default;

      BasePrior() : param_size(0), param_names(0) {}

      explicit BasePrior(const int param_size) :
        param_size(param_size), param_names(0) {}

      explicit BasePrior(const std::vector<std::string> &param_names, const int param_size = 0) :
        param_size(param_size), param_names(param_names) {}

      explicit BasePrior(const std::string &param_name, const int param_size = 0) :
        param_size(param_size), param_names(1, param_name) {}

      virtual void transform(const std::vector<double> &, std::unordered_map<std::string, double> &) const = 0;

      virtual std::vector<double> inverse_transform(const std::unordered_map<std::string, double> &) const = 0;

      virtual double operator()(const std::vector<double> &) const
      {
        Scanner::scan_error().raise(LOCAL_INFO, "operator() not implemented");
        return 0.;
      }

      virtual std::vector<std::string> getShownParameters() const { return param_names; }

      inline unsigned int size() const { return param_size; }

      inline void setSize(const unsigned int size) { param_size = size; }

      inline unsigned int & sizeRef() { return param_size; }

      inline std::vector<std::string> getParameters() const { return param_names; }
    };

  }  // namespace Priors
}  // namespace Gambit

#endif  // __BASE_PRIORS_HPP__
```


-------------------------------

Updated on 2022-08-01 at 12:13:18 +0000
