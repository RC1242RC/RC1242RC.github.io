---
title: 'file HepLike_1_2/wrapper_HL_Gaussian_def.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__hl__gaussian__def_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_HL_Gaussian_def_HepLike_1_2_h__
#define __wrapper_HL_Gaussian_def_HepLike_1_2_h__

#include <string>

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
   
   
   // Member functions: 
   inline void HL_Gaussian::Read()
   {
      get_BEptr()->Read();
   }
   
   inline double HL_Gaussian::GetChi2(double theory, double theory_err)
   {
      return get_BEptr()->GetChi2(theory, theory_err);
   }
   
   inline double HL_Gaussian::GetChi2(double theory)
   {
      return get_BEptr()->GetChi2__BOSS(theory);
   }
   
   inline double HL_Gaussian::GetLikelihood(double theory, double theory_err)
   {
      return get_BEptr()->GetLikelihood(theory, theory_err);
   }
   
   inline double HL_Gaussian::GetLikelihood(double theory)
   {
      return get_BEptr()->GetLikelihood__BOSS(theory);
   }
   
   inline double HL_Gaussian::GetLogLikelihood(double theory, double theory_err)
   {
      return get_BEptr()->GetLogLikelihood(theory, theory_err);
   }
   
   inline double HL_Gaussian::GetLogLikelihood(double theory)
   {
      return get_BEptr()->GetLogLikelihood__BOSS(theory);
   }
   
   
   // Wrappers for original constructors: 
   inline HL_Gaussian::HL_Gaussian() :
      HL_Data(__factory0())
   {
      get_BEptr()->set_wptr(this);
      get_BEptr()->set_delete_wrapper(false);
   }
   
   inline HL_Gaussian::HL_Gaussian(::std::basic_string<char> s) :
      HL_Data(__factory1(s))
   {
      get_BEptr()->set_wptr(this);
      get_BEptr()->set_delete_wrapper(false);
   }
   
   // Special pointer-based constructor: 
   inline HL_Gaussian::HL_Gaussian(Abstract_HL_Gaussian* in) :
      HL_Data(in)
   {
      get_BEptr()->set_wptr(this);
      get_BEptr()->set_delete_wrapper(false);
   }
   
   // Copy constructor: 
   inline HL_Gaussian::HL_Gaussian(const HL_Gaussian& in) :
      HL_Data(in.get_BEptr()->pointer_copy__BOSS())
   {
      get_BEptr()->set_wptr(this);
      get_BEptr()->set_delete_wrapper(false);
   }
   
   // Assignment operator: 
   inline HL_Gaussian& HL_Gaussian::operator=(const HL_Gaussian& in)
   {
      if (this != &in)
      {
         get_BEptr()->pointer_assign__BOSS(in.get_BEptr());
      }
      return *this;
   }
   
   
   // Destructor: 
   inline HL_Gaussian::~HL_Gaussian()
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
   inline Abstract_HL_Gaussian* HL_Gaussian::get_BEptr() const
   {
      return dynamic_cast<Abstract_HL_Gaussian*>(BEptr);
   }
   
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_HL_Gaussian_def_HepLike_1_2_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
