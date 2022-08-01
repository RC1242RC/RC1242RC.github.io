---
title: 'file Pythia_8_212/wrapper_ParticleDecays_decl.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__particledecays__decl_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_ParticleDecays_decl_Pythia_8_212_h__
#define __wrapper_ParticleDecays_decl_Pythia_8_212_h__

#include <cstddef>
#include <vector>
#include "forward_decls_wrapper_classes.h"
#include "gambit/Backends/wrapperbase.hpp"
#include "abstract_ParticleDecays.h"
#include "wrapper_Info_decl.h"
#include "wrapper_Settings_decl.h"
#include "wrapper_ParticleData_decl.h"
#include "wrapper_Rndm_decl.h"
#include "wrapper_Couplings_decl.h"
#include "wrapper_Event_decl.h"
#include "wrapper_ParticleDataEntry_decl.h"
#include "wrapper_Particle_decl.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    namespace Pythia8
    {
        
        class ParticleDecays : public WrapperBase
        {
                // Member variables: 
            public:
                // -- Static factory pointers: 
                static Abstract_ParticleDecays* (*__factory0)();
        
                // -- Other member variables: 
        
                // Member functions: 
            public:
                bool decay(int iDec, Pythia8::Event& event);
        
                bool moreToDo() const;
        
        
                // Wrappers for original constructors: 
            public:
                ParticleDecays();
        
                // Special pointer-based constructor: 
                ParticleDecays(Abstract_ParticleDecays* in);
        
                // Copy constructor: 
                ParticleDecays(const ParticleDecays& in);
        
                // Assignment operator: 
                ParticleDecays& operator=(const ParticleDecays& in);
        
                // Destructor: 
                ~ParticleDecays();
        
                // Returns correctly casted pointer to Abstract class: 
                Abstract_ParticleDecays* get_BEptr() const;
        
        };
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_ParticleDecays_decl_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:20 +0000
