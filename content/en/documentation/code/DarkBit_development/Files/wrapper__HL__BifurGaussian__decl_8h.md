---
title: 'file HepLike_1_2/wrapper_HL_BifurGaussian_decl.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__hl__bifurgaussian__decl_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_HL_BifurGaussian_decl_HepLike_1_2_h__
#define __wrapper_HL_BifurGaussian_decl_HepLike_1_2_h__

#include <cstddef>
#include <string>
#include "forward_decls_wrapper_classes.h"
#include "gambit/Backends/wrapperbase.hpp"
#include "abstract_HL_BifurGaussian.h"
#include "wrapper_HL_Gaussian_decl.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
   
   
   class HL_BifurGaussian : public HL_Gaussian
   {
         // Member variables: 
      public:
         // -- Static factory pointers: 
         static Abstract_HL_BifurGaussian* (*__factory0)();
         static Abstract_HL_BifurGaussian* (*__factory1)(::std::basic_string<char>);
   
         // -- Other member variables: 
   
         // Member functions: 
      public:
         void Read();
   
         double GetChi2(double theory, double theory_err);
   
         double GetChi2(double theory);
   
         double GetLikelihood(double theory, double theory_err);
   
         double GetLikelihood(double theory);
   
         double GetLogLikelihood(double theory, double theory_err);
   
         double GetLogLikelihood(double theory);
   
   
         // Wrappers for original constructors: 
      public:
         HL_BifurGaussian();
         HL_BifurGaussian(::std::basic_string<char> s);
   
         // Special pointer-based constructor: 
         HL_BifurGaussian(Abstract_HL_BifurGaussian* in);
   
         // Copy constructor: 
         HL_BifurGaussian(const HL_BifurGaussian& in);
   
         // Assignment operator: 
         HL_BifurGaussian& operator=(const HL_BifurGaussian& in);
   
         // Destructor: 
         ~HL_BifurGaussian();
   
         // Returns correctly casted pointer to Abstract class: 
         Abstract_HL_BifurGaussian* get_BEptr() const;
   
   };
   
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_HL_BifurGaussian_decl_HepLike_1_2_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:20 +0000
