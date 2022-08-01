---
title: 'file HepLike_1_2/wrapper_HL_nDimGaussian_decl.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__hl__ndimgaussian__decl_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_HL_nDimGaussian_decl_HepLike_1_2_h__
#define __wrapper_HL_nDimGaussian_decl_HepLike_1_2_h__

#include <cstddef>
#include <string>
#include <vector>
#include "forward_decls_wrapper_classes.h"
#include "gambit/Backends/wrapperbase.hpp"
#include "abstract_HL_nDimGaussian.h"
#include "wrapper_HL_Data_decl.h"
#include <boost/numeric/ublas/matrix.hpp>

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
   
   
   class HL_nDimGaussian : public HL_Data
   {
         // Member variables: 
      public:
         // -- Static factory pointers: 
         static Abstract_HL_nDimGaussian* (*__factory0)();
         static Abstract_HL_nDimGaussian* (*__factory1)(::std::basic_string<char>);
   
         // -- Other member variables: 
   
         // Member functions: 
      public:
         void Read();
   
         double GetChi2(::std::vector<double> theory);
   
         double GetLikelihood(::std::vector<double> theory);
   
         double GetLogLikelihood(::std::vector<double> theory);
   
         double GetChi2(::std::vector<double> theory, ::boost::numeric::ublas::matrix<double> theory_cov);
   
         double GetLikelihood(::std::vector<double> theory, ::boost::numeric::ublas::matrix<double> theory_cov);
   
         double GetLogLikelihood(::std::vector<double> theory, ::boost::numeric::ublas::matrix<double> theory_cov);
   
         bool Restrict(::std::vector<std::basic_string<char>> arg_1);
   
         ::std::vector<std::basic_string<char>> GetObservables();
   
   
         // Wrappers for original constructors: 
      public:
         HL_nDimGaussian();
         HL_nDimGaussian(::std::basic_string<char> s);
   
         // Special pointer-based constructor: 
         HL_nDimGaussian(Abstract_HL_nDimGaussian* in);
   
         // Copy constructor: 
         HL_nDimGaussian(const HL_nDimGaussian& in);
   
         // Assignment operator: 
         HL_nDimGaussian& operator=(const HL_nDimGaussian& in);
   
         // Destructor: 
         ~HL_nDimGaussian();
   
         // Returns correctly casted pointer to Abstract class: 
         Abstract_HL_nDimGaussian* get_BEptr() const;
   
   };
   
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_HL_nDimGaussian_decl_HepLike_1_2_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
