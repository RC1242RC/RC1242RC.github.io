---
title: 'file Pythia_8_212/wrapper_Pythia_decl.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__pythia__decl_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_Pythia_decl_Pythia_8_212_h__
#define __wrapper_Pythia_decl_Pythia_8_212_h__

#include <cstddef>
#include <string>
#include <istream>
#include <vector>
#include <ostream>
#include <sstream>
#include "forward_decls_wrapper_classes.h"
#include "gambit/Backends/wrapperbase.hpp"
#include "abstract_Pythia.h"
#include "wrapper_ParticleData_decl.h"
#include "wrapper_Settings_decl.h"
#include "wrapper_UserHooks_decl.h"
#include "wrapper_SigmaProcess_decl.h"
#include "wrapper_ResonanceWidths_decl.h"
#include "wrapper_Event_decl.h"
#include "wrapper_Info_decl.h"
#include "wrapper_Rndm_decl.h"
#include "wrapper_Couplings_decl.h"
#include "wrapper_SLHAinterface_decl.h"
#include "wrapper_Vec4_decl.h"
#include "wrapper_BeamParticle_decl.h"
#include "wrapper_PartonLevel_decl.h"
#include "wrapper_SigmaTotal_decl.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    namespace Pythia8
    {
        
        class Pythia : public WrapperBase
        {
                // Member variables: 
            public:
                // -- Static factory pointers: 
                static Abstract_Pythia* (*__factory0)(::std::basic_string<char>, bool);
                static Abstract_Pythia* (*__factory1)(::std::basic_string<char>);
                static Abstract_Pythia* (*__factory2)();
                static Abstract_Pythia* (*__factory3)(Pythia8::ParticleData&, Pythia8::Settings&, bool);
                static Abstract_Pythia* (*__factory4)(Pythia8::ParticleData&, Pythia8::Settings&);
        
                // -- Other member variables: 
            public:
                Pythia8::Event& process;
                Pythia8::Event& event;
                Pythia8::Info& info;
                Pythia8::Settings& settings;
                Pythia8::ParticleData& particleData;
                Pythia8::Rndm& rndm;
                Pythia8::Couplings& couplings;
                Pythia8::SLHAinterface& slhaInterface;
        
                // Member functions: 
            public:
                bool readString(::std::basic_string<char> arg_1, bool warn);
        
                bool readString(::std::basic_string<char> arg_1);
        
                bool readFile(::std::basic_string<char> fileName, bool warn, int subrun);
        
                bool readFile(::std::basic_string<char> fileName, bool warn);
        
                bool readFile(::std::basic_string<char> fileName);
        
                bool readFile(::std::basic_string<char> fileName, int subrun);
        
                bool readFile(::std::basic_istream<char>& is, bool warn, int subrun);
        
                bool readFile(::std::basic_istream<char>& is, bool warn);
        
                bool readFile(::std::basic_istream<char>& is);
        
                bool readFile();
        
                bool readFile(::std::basic_istream<char>& is, int subrun);
        
                bool setUserHooksPtr(Pythia8::UserHooks* userHooksPtrIn);
        
                bool setResonancePtr(Pythia8::ResonanceWidths* resonancePtrIn);
        
                bool init(::std::basic_ostream<char>& os);
        
                bool init();
        
                bool next();
        
                int forceTimeShower(int iBeg, int iEnd, double pTmax, int nBranchMax);
        
                int forceTimeShower(int iBeg, int iEnd, double pTmax);
        
                bool forceHadronLevel(bool findJunctions);
        
                bool forceHadronLevel();
        
                bool moreDecays();
        
                bool forceRHadronDecays();
        
                void LHAeventList(::std::basic_ostream<char>& os);
        
                void LHAeventList();
        
                bool LHAeventSkip(int nSkip);
        
                void stat();
        
                bool flag(::std::basic_string<char> key);
        
                int mode(::std::basic_string<char> key);
        
                double parm(::std::basic_string<char> key);
        
                ::std::basic_string<char> word(::std::basic_string<char> key);
        
        
                // Wrappers for original constructors: 
            public:
                Pythia(::std::basic_string<char> xmlDir, bool printBanner);
                Pythia(::std::basic_string<char> xmlDir);
                Pythia();
                Pythia(Pythia8::ParticleData& particleDataIn, Pythia8::Settings& settingsIn, bool printBanner);
                Pythia(Pythia8::ParticleData& particleDataIn, Pythia8::Settings& settingsIn);
        
                // Special pointer-based constructor: 
                Pythia(Abstract_Pythia* in);
        
                // Assignment operator: 
                Pythia& operator=(const Pythia& in);
        
                // Destructor: 
                ~Pythia();
        
                // Returns correctly casted pointer to Abstract class: 
                Abstract_Pythia* get_BEptr() const;
        
        };
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_Pythia_decl_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:34 +0000
