---
title: 'file Pythia_8_212/wrapper_ParticleDecays_def.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__particledecays__def_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_ParticleDecays_def_Pythia_8_212_h__
#define __wrapper_ParticleDecays_def_Pythia_8_212_h__

#include <vector>
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
        
        // Member functions: 
        inline bool ParticleDecays::decay(int iDec, Pythia8::Event& event)
        {
            return get_BEptr()->decay__BOSS(iDec, *event.get_BEptr());
        }
        
        inline bool ParticleDecays::moreToDo() const
        {
            return get_BEptr()->moreToDo();
        }
        
        
        // Wrappers for original constructors: 
        inline ParticleDecays::ParticleDecays() :
            WrapperBase(__factory0())
        {
            get_BEptr()->set_wptr(this);
            get_BEptr()->set_delete_wrapper(false);
        }
        
        // Special pointer-based constructor: 
        inline ParticleDecays::ParticleDecays(Abstract_ParticleDecays* in) :
            WrapperBase(in)
        {
            get_BEptr()->set_wptr(this);
            get_BEptr()->set_delete_wrapper(false);
        }
        
        // Copy constructor: 
        inline ParticleDecays::ParticleDecays(const ParticleDecays& in) :
            WrapperBase(in.get_BEptr()->pointer_copy__BOSS())
        {
            get_BEptr()->set_wptr(this);
            get_BEptr()->set_delete_wrapper(false);
        }
        
        // Assignment operator: 
        inline ParticleDecays& ParticleDecays::operator=(const ParticleDecays& in)
        {
            if (this != &in)
            {
                get_BEptr()->pointer_assign__BOSS(in.get_BEptr());
            }
            return *this;
        }
        
        
        // Destructor: 
        inline ParticleDecays::~ParticleDecays()
        {
            if (get_BEptr() != 0)
            {
                get_BEptr()->set_delete_wrapper(false);
                if (can_delete_BEptr())
                {
                    delete BEptr;
                    BEptr = 0;
                }
            }
            set_delete_BEptr(false);
        }
        
        // Returns correctly casted pointer to Abstract class: 
        inline Abstract_ParticleDecays* Pythia8::ParticleDecays::get_BEptr() const
        {
            return dynamic_cast<Abstract_ParticleDecays*>(BEptr);
        }
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_ParticleDecays_def_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
