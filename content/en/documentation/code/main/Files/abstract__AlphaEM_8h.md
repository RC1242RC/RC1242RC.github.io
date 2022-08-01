---
title: 'file Pythia_8_212/abstract_AlphaEM.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/abstract__alphaem_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __abstract_AlphaEM_Pythia_8_212_h__
#define __abstract_AlphaEM_Pythia_8_212_h__

#include <cstddef>
#include <iostream>
#include "gambit/Backends/abstractbase.hpp"
#include "forward_decls_abstract_classes.h"
#include "forward_decls_wrapper_classes.h"
#include "wrapper_Settings_decl.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    
    namespace Pythia8
    {
        class Abstract_AlphaEM : public virtual AbstractBase
        {
            public:
    
                virtual void init__BOSS(int, Pythia8::Abstract_Settings*) =0;
    
                virtual double alphaEM(double) =0;
    
            public:
                virtual void pointer_assign__BOSS(Abstract_AlphaEM*) =0;
                virtual Abstract_AlphaEM* pointer_copy__BOSS() =0;
    
            private:
                AlphaEM* wptr;
                bool delete_wrapper;
            public:
                AlphaEM* get_wptr() { return wptr; }
                void set_wptr(AlphaEM* wptr_in) { wptr = wptr_in; }
                bool get_delete_wrapper() { return delete_wrapper; }
                void set_delete_wrapper(bool del_wrp_in) { delete_wrapper = del_wrp_in; }
    
            public:
                Abstract_AlphaEM()
                {
                    wptr = 0;
                    delete_wrapper = false;
                }
    
                Abstract_AlphaEM(const Abstract_AlphaEM&)
                {
                    wptr = 0;
                    delete_wrapper = false;
                }
    
                Abstract_AlphaEM& operator=(const Abstract_AlphaEM&) { return *this; }
    
                virtual void init_wrapper() =0;
    
                AlphaEM* get_init_wptr()
                {
                    init_wrapper();
                    return wptr;
                }
    
                AlphaEM& get_init_wref()
                {
                    init_wrapper();
                    return *wptr;
                }
    
                virtual ~Abstract_AlphaEM() =0;
        };
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"


#endif /* __abstract_AlphaEM_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:20 +0000
