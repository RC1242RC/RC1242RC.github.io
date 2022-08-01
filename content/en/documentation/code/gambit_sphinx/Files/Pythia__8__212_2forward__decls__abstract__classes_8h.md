---
title: 'file Pythia_8_212/Pythia_8_212/forward_decls_abstract_classes.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/pythia__8__212_2forward__decls__abstract__classes_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


## Functions Documentation

### function CAT_3

```
namespace CAT_3(
    BACKENDNAME ,
    _ ,
    SAFE_VERSION 
)
```




## Source code

```
#ifndef __forward_decls_abstract_classes_Pythia_8_212_h__
#define __forward_decls_abstract_classes_Pythia_8_212_h__


#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    
    namespace Pythia8
    {
        class Abstract_GAMBIT_hepmc_writer;
        class Abstract_Pythia;
        class Abstract_UserHooks;
        class Abstract_PartonLevel;
        class Abstract_ResonanceDecays;
        class Abstract_ParticleDecays;
        class Abstract_SigmaProcess;
        class Abstract_SLHAinterface;
        class Abstract_ParticleData;
        class Abstract_CoupSUSY;
        class Abstract_LHdecayChannel;
        class Abstract_LHdecayTable;
        class Abstract_SusyLesHouches;
        class Abstract_SigmaTotal;
        class Abstract_DecayChannel;
        class Abstract_ParticleDataEntry;
        class Abstract_Couplings;
        class Abstract_ResonanceWidths;
        class Abstract_ResonanceGmZ;
        class Abstract_BeamParticle;
        class Abstract_SlowJet;
        class Abstract_Event;
        class Abstract_Particle;
        class Abstract_AlphaStrong;
        class Abstract_AlphaEM;
        class Abstract_CoupSM;
        class Abstract_Parm;
        class Abstract_Settings;
        class Abstract_Info;
        class Abstract_Rndm;
        class Abstract_Vec4;
        class Abstract_Hist;
    }
    
    
    
    
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __forward_decls_abstract_classes_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:34 +0000
