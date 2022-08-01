---
title: 'file HepLike_1_2/abstract_HL_ProfLikelihood.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/abstract__hl__proflikelihood_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __abstract_HL_ProfLikelihood_HepLike_1_2_h__
#define __abstract_HL_ProfLikelihood_HepLike_1_2_h__

#include <cstddef>
#include <iostream>
#include <string>
#include "gambit/Backends/abstractbase.hpp"
#include "forward_decls_abstract_classes.h"
#include "forward_decls_wrapper_classes.h"
#include "wrapper_HL_Data_decl.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
   
   
   class Abstract_HL_ProfLikelihood : virtual public Abstract_HL_Data
   {
      public:
   
         virtual void Read() =0;
   
         virtual double GetChi2(double) =0;
   
         virtual double GetChi2(double, double) =0;
   
         virtual double GetLogLikelihood(double) =0;
   
         virtual double GetLogLikelihood(double, double) =0;
   
         virtual double GetLikelihood(double) =0;
   
         virtual double GetLikelihood(double, double) =0;
   
      public:
         using Abstract_HL_Data::pointer_assign__BOSS;
         virtual void pointer_assign__BOSS(Abstract_HL_ProfLikelihood*) =0;
         virtual Abstract_HL_ProfLikelihood* pointer_copy__BOSS() =0;
   
      private:
         HL_ProfLikelihood* wptr;
         bool delete_wrapper;
      public:
         HL_ProfLikelihood* get_wptr() { return wptr; }
         void set_wptr(HL_ProfLikelihood* wptr_in) { wptr = wptr_in; }
         bool get_delete_wrapper() { return delete_wrapper; }
         void set_delete_wrapper(bool del_wrp_in) { delete_wrapper = del_wrp_in; }
   
      public:
         Abstract_HL_ProfLikelihood()
         {
            wptr = 0;
            delete_wrapper = false;
         }
   
         Abstract_HL_ProfLikelihood(const Abstract_HL_ProfLikelihood& in) : 
            Abstract_HL_Data(in)
         {
            wptr = 0;
            delete_wrapper = false;
         }
   
         Abstract_HL_ProfLikelihood& operator=(const Abstract_HL_ProfLikelihood&) { return *this; }
   
         virtual void init_wrapper() =0;
   
         HL_ProfLikelihood* get_init_wptr()
         {
            init_wrapper();
            return wptr;
         }
   
         HL_ProfLikelihood& get_init_wref()
         {
            init_wrapper();
            return *wptr;
         }
   
         virtual ~Abstract_HL_ProfLikelihood() =0;
   };
   
}


#include "gambit/Backends/backend_undefs.hpp"


#endif /* __abstract_HL_ProfLikelihood_HepLike_1_2_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:26 +0000
