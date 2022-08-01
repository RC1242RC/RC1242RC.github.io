---
title: 'file Pythia_8_212/wrapper_LHdecayChannel_def.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__lhdecaychannel__def_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_LHdecayChannel_def_Pythia_8_212_h__
#define __wrapper_LHdecayChannel_def_Pythia_8_212_h__

#include <vector>
#include <string>

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    namespace Pythia8
    {
        
        // Member functions: 
        inline void LHdecayChannel::setChannel(double bratIn, int nDaIn, ::std::vector<int> idDaIn, ::std::basic_string<char> cIn)
        {
            get_BEptr()->setChannel(bratIn, nDaIn, idDaIn, cIn);
        }
        
        inline void LHdecayChannel::setChannel(double bratIn, int nDaIn, ::std::vector<int> idDaIn)
        {
            get_BEptr()->setChannel__BOSS(bratIn, nDaIn, idDaIn);
        }
        
        inline void LHdecayChannel::setBrat(double bratIn)
        {
            get_BEptr()->setBrat(bratIn);
        }
        
        inline void LHdecayChannel::setIdDa(::std::vector<int> idDaIn)
        {
            get_BEptr()->setIdDa(idDaIn);
        }
        
        inline double LHdecayChannel::getBrat()
        {
            return get_BEptr()->getBrat();
        }
        
        inline int LHdecayChannel::getNDa()
        {
            return get_BEptr()->getNDa();
        }
        
        inline ::std::vector<int> LHdecayChannel::getIdDa()
        {
            return get_BEptr()->getIdDa();
        }
        
        inline ::std::basic_string<char> LHdecayChannel::getComment()
        {
            return get_BEptr()->getComment();
        }
        
        
        // Wrappers for original constructors: 
        inline LHdecayChannel::LHdecayChannel() :
            WrapperBase(__factory0())
        {
            get_BEptr()->set_wptr(this);
            get_BEptr()->set_delete_wrapper(false);
        }
        
        inline LHdecayChannel::LHdecayChannel(double bratIn, int nDaIn, ::std::vector<int> idDaIn, ::std::basic_string<char> cIn) :
            WrapperBase(__factory1(bratIn, nDaIn, idDaIn, cIn))
        {
            get_BEptr()->set_wptr(this);
            get_BEptr()->set_delete_wrapper(false);
        }
        
        inline LHdecayChannel::LHdecayChannel(double bratIn, int nDaIn, ::std::vector<int> idDaIn) :
            WrapperBase(__factory2(bratIn, nDaIn, idDaIn))
        {
            get_BEptr()->set_wptr(this);
            get_BEptr()->set_delete_wrapper(false);
        }
        
        // Special pointer-based constructor: 
        inline LHdecayChannel::LHdecayChannel(Abstract_LHdecayChannel* in) :
            WrapperBase(in)
        {
            get_BEptr()->set_wptr(this);
            get_BEptr()->set_delete_wrapper(false);
        }
        
        // Copy constructor: 
        inline LHdecayChannel::LHdecayChannel(const LHdecayChannel& in) :
            WrapperBase(in.get_BEptr()->pointer_copy__BOSS())
        {
            get_BEptr()->set_wptr(this);
            get_BEptr()->set_delete_wrapper(false);
        }
        
        // Assignment operator: 
        inline LHdecayChannel& LHdecayChannel::operator=(const LHdecayChannel& in)
        {
            if (this != &in)
            {
                get_BEptr()->pointer_assign__BOSS(in.get_BEptr());
            }
            return *this;
        }
        
        
        // Destructor: 
        inline LHdecayChannel::~LHdecayChannel()
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
        inline Abstract_LHdecayChannel* Pythia8::LHdecayChannel::get_BEptr() const
        {
            return dynamic_cast<Abstract_LHdecayChannel*>(BEptr);
        }
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_LHdecayChannel_def_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
