---
title: 'file Pythia_8_212/wrapper_AlphaStrong_decl.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__alphastrong__decl_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_AlphaStrong_decl_Pythia_8_212_h__
#define __wrapper_AlphaStrong_decl_Pythia_8_212_h__

#include <cstddef>
#include "forward_decls_wrapper_classes.h"
#include "gambit/Backends/wrapperbase.hpp"
#include "abstract_AlphaStrong.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    namespace Pythia8
    {
        
        class AlphaStrong : public WrapperBase
        {
                // Member variables: 
            public:
                // -- Static factory pointers: 
                static Abstract_AlphaStrong* (*__factory0)();
        
                // -- Other member variables: 
        
                // Member functions: 
            public:
                void init(double valueIn, int orderIn, int nfmaxIn, bool useCMWIn);
        
                void init(double valueIn, int orderIn, int nfmaxIn);
        
                void init(double valueIn, int orderIn);
        
                void init(double valueIn);
        
                void init();
        
                void setThresholds(double mcIn, double mbIn, double mtIn);
        
                double alphaS(double scale2);
        
                double alphaS1Ord(double scale2);
        
                double alphaS2OrdCorr(double scale2);
        
                double Lambda3() const;
        
                double Lambda4() const;
        
                double Lambda5() const;
        
                double Lambda6() const;
        
                double muThres(int idQ);
        
                double muThres2(int idQ);
        
                double facCMW(int nFin);
        
        
                // Wrappers for original constructors: 
            public:
                AlphaStrong();
        
                // Special pointer-based constructor: 
                AlphaStrong(Abstract_AlphaStrong* in);
        
                // Copy constructor: 
                AlphaStrong(const AlphaStrong& in);
        
                // Assignment operator: 
                AlphaStrong& operator=(const AlphaStrong& in);
        
                // Destructor: 
                ~AlphaStrong();
        
                // Returns correctly casted pointer to Abstract class: 
                Abstract_AlphaStrong* get_BEptr() const;
        
        };
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_AlphaStrong_decl_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:26 +0000
