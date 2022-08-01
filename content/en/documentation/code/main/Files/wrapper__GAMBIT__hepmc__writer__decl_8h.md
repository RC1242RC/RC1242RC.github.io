---
title: 'file Pythia_8_212/wrapper_GAMBIT_hepmc_writer_decl.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__gambit__hepmc__writer__decl_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_GAMBIT_hepmc_writer_decl_Pythia_8_212_h__
#define __wrapper_GAMBIT_hepmc_writer_decl_Pythia_8_212_h__

#include <cstddef>
#include <string>
#include "forward_decls_wrapper_classes.h"
#include "gambit/Backends/wrapperbase.hpp"
#include "abstract_GAMBIT_hepmc_writer.h"
#include "wrapper_Pythia_decl.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    namespace Pythia8
    {
        
        class GAMBIT_hepmc_writer : public WrapperBase
        {
                // Member variables: 
            public:
                // -- Static factory pointers: 
                static Abstract_GAMBIT_hepmc_writer* (*__factory0)();
        
                // -- Other member variables: 
        
                // Member functions: 
            public:
                void init(::std::basic_string<char> filename_in, bool HepMC2, bool HepMC3);
        
                void write_event_HepMC3(Pythia8::Pythia* pythia);
        
                void write_event_HepMC2(Pythia8::Pythia* pythia);
        
        
                // Wrappers for original constructors: 
            public:
                GAMBIT_hepmc_writer();
        
                // Special pointer-based constructor: 
                GAMBIT_hepmc_writer(Abstract_GAMBIT_hepmc_writer* in);
        
                // Copy constructor: 
                GAMBIT_hepmc_writer(const GAMBIT_hepmc_writer& in);
        
                // Assignment operator: 
                GAMBIT_hepmc_writer& operator=(const GAMBIT_hepmc_writer& in);
        
                // Destructor: 
                ~GAMBIT_hepmc_writer();
        
                // Returns correctly casted pointer to Abstract class: 
                Abstract_GAMBIT_hepmc_writer* get_BEptr() const;
        
        };
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_GAMBIT_hepmc_writer_decl_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:20 +0000
