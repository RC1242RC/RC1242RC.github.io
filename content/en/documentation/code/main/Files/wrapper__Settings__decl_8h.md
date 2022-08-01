---
title: 'file Pythia_8_212/wrapper_Settings_decl.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/wrapper__settings__decl_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __wrapper_Settings_decl_Pythia_8_212_h__
#define __wrapper_Settings_decl_Pythia_8_212_h__

#include <cstddef>
#include <string>
#include <ostream>
#include <vector>
#include "forward_decls_wrapper_classes.h"
#include "gambit/Backends/wrapperbase.hpp"
#include "abstract_Settings.h"
#include "wrapper_Info_decl.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    namespace Pythia8
    {
        
        class Settings : public WrapperBase
        {
                // Member variables: 
            public:
                // -- Static factory pointers: 
                static Abstract_Settings* (*__factory0)();
        
                // -- Other member variables: 
        
                // Member functions: 
            public:
                void initPtr(Pythia8::Info* infoPtrIn);
        
                bool init(::std::basic_string<char> startFile, bool append, ::std::basic_ostream<char>& os);
        
                bool init(::std::basic_string<char> startFile, bool append);
        
                bool init(::std::basic_string<char> startFile);
        
                bool init();
        
                bool reInit(::std::basic_string<char> startFile, ::std::basic_ostream<char>& os);
        
                bool reInit(::std::basic_string<char> startFile);
        
                bool reInit();
        
                bool readString(::std::basic_string<char> line, bool warn, ::std::basic_ostream<char>& os);
        
                bool readString(::std::basic_string<char> line, bool warn);
        
                bool readString(::std::basic_string<char> line);
        
                bool readingFailed();
        
                bool writeFile(::std::basic_string<char> toFile, bool writeAll);
        
                bool writeFile(::std::basic_string<char> toFile);
        
                bool writeFile(::std::basic_ostream<char>& os, bool writeAll);
        
                bool writeFile(::std::basic_ostream<char>& os);
        
                bool writeFile();
        
                void listAll(::std::basic_ostream<char>& os);
        
                void listAll();
        
                void listChanged(::std::basic_ostream<char>& os);
        
                void listChanged();
        
                void list(::std::basic_string<char> match, ::std::basic_ostream<char>& os);
        
                void list(::std::basic_string<char> match);
        
                ::std::basic_string<char> output(::std::basic_string<char> keyIn, bool fullLine);
        
                ::std::basic_string<char> output(::std::basic_string<char> keyIn);
        
                void resetAll();
        
                bool isFlag(::std::basic_string<char> keyIn);
        
                bool isMode(::std::basic_string<char> keyIn);
        
                bool isParm(::std::basic_string<char> keyIn);
        
                bool isWord(::std::basic_string<char> keyIn);
        
                bool isFVec(::std::basic_string<char> keyIn);
        
                bool isMVec(::std::basic_string<char> keyIn);
        
                bool isPVec(::std::basic_string<char> keyIn);
        
                void addFlag(::std::basic_string<char> keyIn, bool defaultIn);
        
                void addMode(::std::basic_string<char> keyIn, int defaultIn, bool hasMinIn, bool hasMaxIn, int minIn, int maxIn, bool optOnlyIn);
        
                void addMode(::std::basic_string<char> keyIn, int defaultIn, bool hasMinIn, bool hasMaxIn, int minIn, int maxIn);
        
                void addParm(::std::basic_string<char> keyIn, double defaultIn, bool hasMinIn, bool hasMaxIn, double minIn, double maxIn);
        
                void addWord(::std::basic_string<char> keyIn, ::std::basic_string<char> defaultIn);
        
                void addFVec(::std::basic_string<char> keyIn, ::std::vector<bool> defaultIn);
        
                void addMVec(::std::basic_string<char> keyIn, ::std::vector<int> defaultIn, bool hasMinIn, bool hasMaxIn, int minIn, int maxIn);
        
                void addPVec(::std::basic_string<char> keyIn, ::std::vector<double> defaultIn, bool hasMinIn, bool hasMaxIn, double minIn, double maxIn);
        
                bool flag(::std::basic_string<char> keyIn);
        
                int mode(::std::basic_string<char> keyIn);
        
                double parm(::std::basic_string<char> keyIn);
        
                ::std::basic_string<char> word(::std::basic_string<char> keyIn);
        
                ::std::vector<bool> fvec(::std::basic_string<char> keyIn);
        
                ::std::vector<int> mvec(::std::basic_string<char> keyIn);
        
                ::std::vector<double> pvec(::std::basic_string<char> keyIn);
        
                bool flagDefault(::std::basic_string<char> keyIn);
        
                int modeDefault(::std::basic_string<char> keyIn);
        
                double parmDefault(::std::basic_string<char> keyIn);
        
                ::std::basic_string<char> wordDefault(::std::basic_string<char> keyIn);
        
                ::std::vector<bool> fvecDefault(::std::basic_string<char> keyIn);
        
                ::std::vector<int> mvecDefault(::std::basic_string<char> keyIn);
        
                ::std::vector<double> pvecDefault(::std::basic_string<char> keyIn);
        
                void flag(::std::basic_string<char> keyIn, bool nowIn);
        
                bool mode(::std::basic_string<char> keyIn, int nowIn);
        
                void parm(::std::basic_string<char> keyIn, double nowIn);
        
                void word(::std::basic_string<char> keyIn, ::std::basic_string<char> nowIn);
        
                void fvec(::std::basic_string<char> keyIn, ::std::vector<bool> nowIn);
        
                void mvec(::std::basic_string<char> keyIn, ::std::vector<int> nowIn);
        
                void pvec(::std::basic_string<char> keyIn, ::std::vector<double> nowIn);
        
                void forceMode(::std::basic_string<char> keyIn, int nowIn);
        
                void forceParm(::std::basic_string<char> keyIn, double nowIn);
        
                void forceMVec(::std::basic_string<char> keyIn, ::std::vector<int> nowIn);
        
                void forcePVec(::std::basic_string<char> keyIn, ::std::vector<double> nowIn);
        
                void resetFlag(::std::basic_string<char> keyIn);
        
                void resetMode(::std::basic_string<char> keyIn);
        
                void resetParm(::std::basic_string<char> keyIn);
        
                void resetWord(::std::basic_string<char> keyIn);
        
                void resetFVec(::std::basic_string<char> keyIn);
        
                void resetMVec(::std::basic_string<char> keyIn);
        
                void resetPVec(::std::basic_string<char> keyIn);
        
                bool getIsInit();
        
        
                // Wrappers for original constructors: 
            public:
                Settings();
        
                // Special pointer-based constructor: 
                Settings(Abstract_Settings* in);
        
                // Copy constructor: 
                Settings(const Settings& in);
        
                // Assignment operator: 
                Settings& operator=(const Settings& in);
        
                // Destructor: 
                ~Settings();
        
                // Returns correctly casted pointer to Abstract class: 
                Abstract_Settings* get_BEptr() const;
        
        };
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"

#endif /* __wrapper_Settings_decl_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:20 +0000
