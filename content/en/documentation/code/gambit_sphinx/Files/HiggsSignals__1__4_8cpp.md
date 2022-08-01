---
title: 'file frontends/HiggsSignals_1_4.cpp'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| | **[if](/documentation/code/files/higgssignals__1__4_8cpp/#function-if)**(scan_level ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| | **[BE_INI_FUNCTION](/documentation/code/files/higgssignals__1__4_8cpp/#variable-be-ini-function)**  |


## Functions Documentation

### function if

```
if(
    scan_level 
)
```



## Attributes Documentation

### variable BE_INI_FUNCTION

```
BE_INI_FUNCTION {

  static bool scan_level = true;
```



## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#include "gambit/Backends/frontend_macros.hpp"
#include "gambit/Backends/backend_singleton.hpp"
#include "gambit/Backends/frontends/HiggsSignals_1_4.hpp"
#include "gambit/Utils/file_lock.hpp"

BE_INI_FUNCTION
{

  static bool scan_level = true;
  if(scan_level)
  {
    int nHneut = 3; // number of neutral higgses
    int nHplus = 1; // number of charged higgses
    int pdf = 2;    // choose which pdf style to use for Higgs lineshape; 2 = Gaussian
    // Initialize HiggsSignals. Do this one-by-one for each MPI process with
    // locks, as HS calls HB, which writes files then reads them back in later (crazy).
    // Note that this is the Higgs*Bounds* lock, as in the HiggsBounds ini function,
    // because we need to make sure that neither this function nor the HB ini function
    // run at the same time, beccause both of them cause the HiggsBounds files to be
    // written.

    // Find all the versions of HiggsBounds that have been successfully loaded, and get
    // their locks.
    std::vector<str> hbversions = Backends::backendInfo().working_safe_versions("HiggsBounds");
    std::vector<Utils::ProcessLock*> mylocks;
    for (auto it = hbversions.begin(); it != hbversions.end(); ++it)
    {
      mylocks.push_back(new Utils::ProcessLock("HiggsBounds_" + *it + "_init"));
      mylocks.back()->get_lock();
    }

    // initialize HiggsSignals with the latest results and set pdf shape
    initialize_HiggsSignals_latestresults(nHneut,nHplus);
    setup_pdf(pdf);

    for (auto it = mylocks.begin(); it != mylocks.end(); ++it)
    {
      (*it)->release_lock();
      delete *it;
    }
    scan_level = false;
  }

}
END_BE_INI_FUNCTION
```


-------------------------------

Updated on 2022-08-01 at 12:13:35 +0000
