---
title: 'file Pythia_8_212/abstract_LHdecayTable.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/abstract__lhdecaytable_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __abstract_LHdecayTable_Pythia_8_212_h__
#define __abstract_LHdecayTable_Pythia_8_212_h__

#include <cstddef>
#include <iostream>
#include <vector>
#include <string>
#include "gambit/Backends/abstractbase.hpp"
#include "forward_decls_abstract_classes.h"
#include "forward_decls_wrapper_classes.h"
#include "wrapper_LHdecayChannel_decl.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    
    namespace Pythia8
    {
        class Abstract_LHdecayTable : public virtual AbstractBase
        {
            public:
    
                virtual int getId() =0;
    
                virtual double getWidth() =0;
    
                virtual void setId(int) =0;
    
                virtual void setWidth(double) =0;
    
                virtual void reset(double) =0;
    
                virtual void reset__BOSS() =0;
    
                virtual void addChannel__BOSS(Pythia8::Abstract_LHdecayChannel&) =0;
    
                virtual void addChannel(double, int, ::std::vector<int>, ::std::basic_string<char>) =0;
    
                virtual void addChannel__BOSS(double, int, ::std::vector<int>) =0;
    
                virtual int size() =0;
    
                virtual double getBrat(int) =0;
    
                virtual ::std::vector<int> getIdDa(int) =0;
    
                virtual Pythia8::Abstract_LHdecayChannel* getChannel__BOSS(int) =0;
    
            public:
                virtual void pointer_assign__BOSS(Abstract_LHdecayTable*) =0;
                virtual Abstract_LHdecayTable* pointer_copy__BOSS() =0;
    
            private:
                LHdecayTable* wptr;
                bool delete_wrapper;
            public:
                LHdecayTable* get_wptr() { return wptr; }
                void set_wptr(LHdecayTable* wptr_in) { wptr = wptr_in; }
                bool get_delete_wrapper() { return delete_wrapper; }
                void set_delete_wrapper(bool del_wrp_in) { delete_wrapper = del_wrp_in; }
    
            public:
                Abstract_LHdecayTable()
                {
                    wptr = 0;
                    delete_wrapper = false;
                }
    
                Abstract_LHdecayTable(const Abstract_LHdecayTable&)
                {
                    wptr = 0;
                    delete_wrapper = false;
                }
    
                Abstract_LHdecayTable& operator=(const Abstract_LHdecayTable&) { return *this; }
    
                virtual void init_wrapper() =0;
    
                LHdecayTable* get_init_wptr()
                {
                    init_wrapper();
                    return wptr;
                }
    
                LHdecayTable& get_init_wref()
                {
                    init_wrapper();
                    return *wptr;
                }
    
                virtual ~Abstract_LHdecayTable() =0;
        };
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"


#endif /* __abstract_LHdecayTable_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:34 +0000
