---
title: 'file HepLike_1_2/wrapper_HL_nDimGaussian_def.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__hl__ndimgaussian__def_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_HL_nDimGaussian_def_HepLike_1_2_h__
#define __wrapper_HL_nDimGaussian_def_HepLike_1_2_h__

#include <string>
#include <vector>
#include <boost/numeric/ublas/matrix.hpp>

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
   
   
   // Member functions: 
   inline void HL_nDimGaussian::Read()
   {
      get_BEptr()->Read();
   }
   
   inline double HL_nDimGaussian::GetChi2(::std::vector<double> theory)
   {
      return get_BEptr()->GetChi2(theory);
   }
   
   inline double HL_nDimGaussian::GetLikelihood(::std::vector<double> theory)
   {
      return get_BEptr()->GetLikelihood(theory);
   }
   
   inline double HL_nDimGaussian::GetLogLikelihood(::std::vector<double> theory)
   {
      return get_BEptr()->GetLogLikelihood(theory);
   }
   
   inline double HL_nDimGaussian::GetChi2(::std::vector<double> theory, ::boost::numeric::ublas::matrix<double> theory_cov)
   {
      return get_BEptr()->GetChi2(theory, theory_cov);
   }
   
   inline double HL_nDimGaussian::GetLikelihood(::std::vector<double> theory, ::boost::numeric::ublas::matrix<double> theory_cov)
   {
      return get_BEptr()->GetLikelihood(theory, theory_cov);
   }
   
   inline double HL_nDimGaussian::GetLogLikelihood(::std::vector<double> theory, ::boost::numeric::ublas::matrix<double> theory_cov)
   {
      return get_BEptr()->GetLogLikelihood(theory, theory_cov);
   }
   
   inline bool HL_nDimGaussian::Restrict(::std::vector<std::basic_string<char>> arg_1)
   {
      return get_BEptr()->Restrict(arg_1);
   }
   
   inline ::std::vector<std::basic_string<char>> HL_nDimGaussian::GetObservables()
   {
      return get_BEptr()->GetObservables();
   }
   
   
   // Wrappers for original constructors: 
   inline HL_nDimGaussian::HL_nDimGaussian() :
      HL_Data(__factory0())
   {
      get_BEptr()->set_wptr(this);
      get_BEptr()->set_delete_wrapper(false);
   }
   
   inline HL_nDimGaussian::HL_nDimGaussian(::std::basic_string<char> s) :
      HL_Data(__factory1(s))
   {
      get_BEptr()->set_wptr(this);
      get_BEptr()->set_delete_wrapper(false);
   }
   
   // Special pointer-based constructor: 
   inline HL_nDimGaussian::HL_nDimGaussian(Abstract_HL_nDimGaussian* in) :
      HL_Data(in)
   {
      get_BEptr()->set_wptr(this);
      get_BEptr()->set_delete_wrapper(false);
   }
   
   // Copy constructor: 
   inline HL_nDimGaussian::HL_nDimGaussian(const HL_nDimGaussian& in) :
      HL_Data(in.get_BEptr()->pointer_copy__BOSS())
   {
      get_BEptr()->set_wptr(this);
      get_BEptr()->set_delete_wrapper(false);
   }
   
   // Assignment operator: 
   inline HL_nDimGaussian& HL_nDimGaussian::operator=(const HL_nDimGaussian& in)
   {
      if (this != &in)
      {
         get_BEptr()->pointer_assign__BOSS(in.get_BEptr());
      }
      return *this;
   }
   
   
   // Destructor: 
   inline HL_nDimGaussian::~HL_nDimGaussian()
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
   inline Abstract_HL_nDimGaussian* HL_nDimGaussian::get_BEptr() const
   {
      return dynamic_cast<Abstract_HL_nDimGaussian*>(BEptr);
   }
   
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_HL_nDimGaussian_def_HepLike_1_2_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
