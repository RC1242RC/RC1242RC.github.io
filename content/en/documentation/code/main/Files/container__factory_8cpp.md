---
title: 'file src/container_factory.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |

## Detailed Description


**Author**: 

  * Christoph Weniger ([c.weniger@uva.nl](mailto:c.weniger@uva.nl)) 
  * Gregory Martinez ([gregory.david.martinez@gmail.com](mailto:gregory.david.martinez@gmail.com)) 
  * Pat Scott ([patscott@physics.mcgill.ca](mailto:patscott@physics.mcgill.ca)) 


**Date**: 

  * 2013 May, June, July
  * 2013 July 2013 Feb 2014
  * 2013 Aug 
  * 2014 Mar, May


Likelihood container factory implementations.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************

#include "gambit/Core/likelihood_container.hpp"
#include "gambit/Elements/type_equivalency.hpp"

namespace Gambit
{

  Likelihood_Container_Factory::Likelihood_Container_Factory(const gambit_core &core,
   DRes::DependencyResolver &dependencyResolver, IniParser::IniFile &iniFile, Printers::BaseBasePrinter& printer)
    : dependencyResolver(dependencyResolver)
    , iniFile(iniFile)
    , printer(printer)
  {
    functorMap = core.getActiveModelFunctors();
    std::set<std::string> modelSet = iniFile.getModelNames();

    if (functorMap.size() < modelSet.size())
    {
      std::stringstream err;
      err << "There are more model entries specified in the inifile than is required by GAMBIT." << std::endl;
      core_error().raise(LOCAL_INFO, err.str());
    }

    for (std::map<std::string, primary_model_functor *>::iterator act_it = functorMap.begin(), end = functorMap.end(); act_it != end; ++act_it)
    {
      if (modelSet.find(act_it->first) == modelSet.end())
      {
        std::stringstream err;
        err << "Model " << act_it->first << " is required by GAMBIT but is not in the inifile." << std::endl;
        core_error().raise(LOCAL_INFO, err.str());
      }

      std::vector <std::string> paramkeys = act_it->second->getcontentsPtr()->getKeys();
      std::vector <std::string> inikeys = iniFile.getModelParameters(act_it->first);
      if (paramkeys.size() < inikeys.size())
      {
        std::stringstream err;
        err << "There are more parameter entries (of model " << act_it->first << ") specified in the inifile than is required by GAMBIT." << std::endl;
        core_error().raise(LOCAL_INFO, err.str());
      }

      std::unordered_set<std::string> paramSet(inikeys.begin(), inikeys.end());
      for (std::vector<std::string>::iterator it = paramkeys.begin(), end = paramkeys.end(); it != end; ++it)
      {
        if (paramSet.find(*it) == paramSet.end())
        {
          std::stringstream err;
          err << "Parameter " << *it << " of model " << act_it->first << " is required by GAMBIT but is not in the inifile." << std::endl;
          core_error().raise(LOCAL_INFO, err.str());
        }
      }
    }
  }

  void * Likelihood_Container_Factory::operator() (const std::string &purpose) const
  {
    return __scanner_factories__["GAMBIT_Scanner_Target_Function"](functorMap, dependencyResolver, iniFile, purpose, printer);
  }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:19 +0000
