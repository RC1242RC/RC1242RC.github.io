---
title: 'file src/runAnalyses.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/namespaces/namespacegambit_1_1colliderbit/)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DEBUG_PREFIX](/documentation/code/files/runanalyses_8cpp/#define-debug-prefix)**  |
|  | **[RUN_ANALYSES](/documentation/code/files/runanalyses_8cpp/#define-run-analyses)**(NAME, EXPERIMENT, SMEARED_EVENT_DEP) <br>Run all analyses for EXPERIMENT.  |

## Detailed Description


**Author**: 

  * Abram Krislock ([a.m.b.krislock@fys.uio.no](mailto:a.m.b.krislock@fys.uio.no))
  * Aldo Saavedra
  * Andy Buckley
  * Chris Rogan ([crogan@cern.ch](mailto:crogan@cern.ch)) 
  * Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 
  * Anders Kvellestad ([anders.kvellestad@fys.uio.no](mailto:anders.kvellestad@fys.uio.no)) 


**Date**: 

  * 2014 Aug 
  * 2015 May
  * 2015 Jul 
  * 2018 Jan 
  * 2019 Jan, Feb
  * 2017 March 
  * 2018 Jan 
  * 2018 May


Accumulator functions for ColliderBit analyses.



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define DEBUG_PREFIX

```
#define DEBUG_PREFIX "DEBUG: OMP thread " << omp_get_thread_num() << ":  "
```


### define RUN_ANALYSES

```
#define RUN_ANALYSES(
    NAME,
    EXPERIMENT,
    SMEARED_EVENT_DEP
)
    void NAME(AnalysisDataPointers& result)                                   \
    {                                                                         \
      using namespace Pipes::NAME;                                            \
      runAnalyses(result, #EXPERIMENT, *Dep::RunMC,                           \
       *Dep::CAT(EXPERIMENT,AnalysisContainer), *Dep::SMEARED_EVENT_DEP,      \
       *Loop::iteration, Loop::wrapup);                                       \
    }
```

Run all analyses for EXPERIMENT. 

## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#include "gambit/ColliderBit/ColliderBit_eventloop.hpp"
#include "gambit/ColliderBit/analyses/Analysis.hpp"

// #define COLLIDERBIT_DEBUG
#define DEBUG_PREFIX "DEBUG: OMP thread " << omp_get_thread_num() << ":  "

namespace Gambit
{

  namespace ColliderBit
  {

    void runAnalyses(AnalysisDataPointers& result,
                     #ifdef COLLIDERBIT_DEBUG
                       const str& detname,
                     #else
                       const str&,
                     #endif
                     const MCLoopInfo& RunMC,
                     const AnalysisContainer& Container,
                     const HEPUtils::Event& SmearedEvent,
                     int iteration,
                     void(*wrapup)())
    {
      if (iteration == BASE_INIT)
      {
        result.clear();
        return;
      }

      static MC_convergence_checker convergence;
      if (iteration == COLLIDER_INIT)
      {
        convergence.init(RunMC.current_convergence_options());
        return;
      }

      if (not Container.has_analyses()) return;

      if (iteration == COLLECT_CONVERGENCE_DATA)
      {
        // Update the convergence tracker with the new results
        convergence.update(Container);
        return;
      }

      if (iteration == CHECK_CONVERGENCE)
      {
        // Call quits on the event loop if every analysis in every analysis container has sufficient statistics
        if (convergence.achieved(Container)) wrapup();
        return;
      }

      // #ifdef COLLIDERBIT_DEBUG
      // if (iteration == END_SUBPROCESS)
      // {
      //   for (auto& analysis_pointer_pair : Container.get_current_analyses_map())
      //   {
      //     for (auto& sr : analysis_pointer_pair.second->get_results().srdata)
      //     {
      //       cout << DEBUG_PREFIX << "run"+detname+"Analyses: signal region " << sr.sr_label << ", n_signal = " << sr.n_signal << endl;
      //     }
      //   }
      // }
      // #endif

      if (iteration == COLLIDER_FINALIZE)
      {
        // The final iteration for this collider: collect results
        for (auto& analysis_pointer_pair : Container.get_current_analyses_map())
        {
          #ifdef COLLIDERBIT_DEBUG
            cout << DEBUG_PREFIX << "run"+detname+"Analyses: Collecting result from " << analysis_pointer_pair.first << endl;
          #endif

          str warning;
          result.push_back(analysis_pointer_pair.second->get_results_ptr(warning));
          if (RunMC.event_generation_began && not RunMC.exceeded_maxFailedEvents && not warning.empty())
          {
            ColliderBit_error().raise(LOCAL_INFO, warning);
          }
        }
        return;
      }

      if (iteration == BASE_FINALIZE)
      {
        // Final iteration. Just return.
        #ifdef COLLIDERBIT_DEBUG
          cout << DEBUG_PREFIX << "run"+detname+"Analyses: 'result' contains " << result.size() << " results." << endl;
        #endif
        return;
      }

      if (iteration <= BASE_INIT) return;

      // Loop over contained analyses and run them.
      Container.analyze(SmearedEvent);

    }

    #define RUN_ANALYSES(NAME, EXPERIMENT, SMEARED_EVENT_DEP)                 \
    void NAME(AnalysisDataPointers& result)                                   \
    {                                                                         \
      using namespace Pipes::NAME;                                            \
      runAnalyses(result, #EXPERIMENT, *Dep::RunMC,                           \
       *Dep::CAT(EXPERIMENT,AnalysisContainer), *Dep::SMEARED_EVENT_DEP,      \
       *Loop::iteration, Loop::wrapup);                                       \
    }

    RUN_ANALYSES(runATLASAnalyses, ATLAS, ATLASSmearedEvent)
    RUN_ANALYSES(runCMSAnalyses, CMS, CMSSmearedEvent)
    RUN_ANALYSES(runIdentityAnalyses, Identity, CopiedEvent)

  }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:34 +0000
