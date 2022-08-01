---
title: 'file Pythia_8_212/abstract_Settings.h'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/abstract__settings_8h/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


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
#ifndef __abstract_Settings_Pythia_8_212_h__
#define __abstract_Settings_Pythia_8_212_h__

#include <cstddef>
#include <iostream>
#include <string>
#include <ostream>
#include <vector>
#include "gambit/Backends/abstractbase.hpp"
#include "forward_decls_abstract_classes.h"
#include "forward_decls_wrapper_classes.h"
#include "wrapper_Info_decl.h"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
    
    
    namespace Pythia8
    {
        class Abstract_Settings : public virtual AbstractBase
        {
            public:
    
                virtual void initPtr__BOSS(Pythia8::Abstract_Info*) =0;
    
                virtual bool init(::std::basic_string<char>, bool, ::std::basic_ostream<char>&) =0;
    
                virtual bool init__BOSS(::std::basic_string<char>, bool) =0;
    
                virtual bool init__BOSS(::std::basic_string<char>) =0;
    
                virtual bool init__BOSS() =0;
    
                virtual bool reInit(::std::basic_string<char>, ::std::basic_ostream<char>&) =0;
    
                virtual bool reInit__BOSS(::std::basic_string<char>) =0;
    
                virtual bool reInit__BOSS() =0;
    
                virtual bool readString(::std::basic_string<char>, bool, ::std::basic_ostream<char>&) =0;
    
                virtual bool readString__BOSS(::std::basic_string<char>, bool) =0;
    
                virtual bool readString__BOSS(::std::basic_string<char>) =0;
    
                virtual bool readingFailed() =0;
    
                virtual bool writeFile(::std::basic_string<char>, bool) =0;
    
                virtual bool writeFile__BOSS(::std::basic_string<char>) =0;
    
                virtual bool writeFile(::std::basic_ostream<char>&, bool) =0;
    
                virtual bool writeFile__BOSS(::std::basic_ostream<char>&) =0;
    
                virtual bool writeFile__BOSS() =0;
    
                virtual void listAll(::std::basic_ostream<char>&) =0;
    
                virtual void listAll__BOSS() =0;
    
                virtual void listChanged(::std::basic_ostream<char>&) =0;
    
                virtual void listChanged__BOSS() =0;
    
                virtual void list(::std::basic_string<char>, ::std::basic_ostream<char>&) =0;
    
                virtual void list__BOSS(::std::basic_string<char>) =0;
    
                virtual ::std::basic_string<char> output(::std::basic_string<char>, bool) =0;
    
                virtual ::std::basic_string<char> output__BOSS(::std::basic_string<char>) =0;
    
                virtual void resetAll() =0;
    
                virtual bool isFlag(::std::basic_string<char>) =0;
    
                virtual bool isMode(::std::basic_string<char>) =0;
    
                virtual bool isParm(::std::basic_string<char>) =0;
    
                virtual bool isWord(::std::basic_string<char>) =0;
    
                virtual bool isFVec(::std::basic_string<char>) =0;
    
                virtual bool isMVec(::std::basic_string<char>) =0;
    
                virtual bool isPVec(::std::basic_string<char>) =0;
    
                virtual void addFlag(::std::basic_string<char>, bool) =0;
    
                virtual void addMode(::std::basic_string<char>, int, bool, bool, int, int, bool) =0;
    
                virtual void addMode__BOSS(::std::basic_string<char>, int, bool, bool, int, int) =0;
    
                virtual void addParm(::std::basic_string<char>, double, bool, bool, double, double) =0;
    
                virtual void addWord(::std::basic_string<char>, ::std::basic_string<char>) =0;
    
                virtual void addFVec(::std::basic_string<char>, ::std::vector<bool>) =0;
    
                virtual void addMVec(::std::basic_string<char>, ::std::vector<int>, bool, bool, int, int) =0;
    
                virtual void addPVec(::std::basic_string<char>, ::std::vector<double>, bool, bool, double, double) =0;
    
                virtual bool flag(::std::basic_string<char>) =0;
    
                virtual int mode(::std::basic_string<char>) =0;
    
                virtual double parm(::std::basic_string<char>) =0;
    
                virtual ::std::basic_string<char> word(::std::basic_string<char>) =0;
    
                virtual ::std::vector<bool> fvec(::std::basic_string<char>) =0;
    
                virtual ::std::vector<int> mvec(::std::basic_string<char>) =0;
    
                virtual ::std::vector<double> pvec(::std::basic_string<char>) =0;
    
                virtual bool flagDefault(::std::basic_string<char>) =0;
    
                virtual int modeDefault(::std::basic_string<char>) =0;
    
                virtual double parmDefault(::std::basic_string<char>) =0;
    
                virtual ::std::basic_string<char> wordDefault(::std::basic_string<char>) =0;
    
                virtual ::std::vector<bool> fvecDefault(::std::basic_string<char>) =0;
    
                virtual ::std::vector<int> mvecDefault(::std::basic_string<char>) =0;
    
                virtual ::std::vector<double> pvecDefault(::std::basic_string<char>) =0;
    
                virtual void flag(::std::basic_string<char>, bool) =0;
    
                virtual bool mode(::std::basic_string<char>, int) =0;
    
                virtual void parm(::std::basic_string<char>, double) =0;
    
                virtual void word(::std::basic_string<char>, ::std::basic_string<char>) =0;
    
                virtual void fvec(::std::basic_string<char>, ::std::vector<bool>) =0;
    
                virtual void mvec(::std::basic_string<char>, ::std::vector<int>) =0;
    
                virtual void pvec(::std::basic_string<char>, ::std::vector<double>) =0;
    
                virtual void forceMode(::std::basic_string<char>, int) =0;
    
                virtual void forceParm(::std::basic_string<char>, double) =0;
    
                virtual void forceMVec(::std::basic_string<char>, ::std::vector<int>) =0;
    
                virtual void forcePVec(::std::basic_string<char>, ::std::vector<double>) =0;
    
                virtual void resetFlag(::std::basic_string<char>) =0;
    
                virtual void resetMode(::std::basic_string<char>) =0;
    
                virtual void resetParm(::std::basic_string<char>) =0;
    
                virtual void resetWord(::std::basic_string<char>) =0;
    
                virtual void resetFVec(::std::basic_string<char>) =0;
    
                virtual void resetMVec(::std::basic_string<char>) =0;
    
                virtual void resetPVec(::std::basic_string<char>) =0;
    
                virtual bool getIsInit() =0;
    
            public:
                virtual void pointer_assign__BOSS(Abstract_Settings*) =0;
                virtual Abstract_Settings* pointer_copy__BOSS() =0;
    
            private:
                Settings* wptr;
                bool delete_wrapper;
            public:
                Settings* get_wptr() { return wptr; }
                void set_wptr(Settings* wptr_in) { wptr = wptr_in; }
                bool get_delete_wrapper() { return delete_wrapper; }
                void set_delete_wrapper(bool del_wrp_in) { delete_wrapper = del_wrp_in; }
    
            public:
                Abstract_Settings()
                {
                    wptr = 0;
                    delete_wrapper = false;
                }
    
                Abstract_Settings(const Abstract_Settings&)
                {
                    wptr = 0;
                    delete_wrapper = false;
                }
    
                Abstract_Settings& operator=(const Abstract_Settings&) { return *this; }
    
                virtual void init_wrapper() =0;
    
                Settings* get_init_wptr()
                {
                    init_wrapper();
                    return wptr;
                }
    
                Settings& get_init_wref()
                {
                    init_wrapper();
                    return *wptr;
                }
    
                virtual ~Abstract_Settings() =0;
        };
    }
    
}


#include "gambit/Backends/backend_undefs.hpp"


#endif /* __abstract_Settings_Pythia_8_212_h__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:26 +0000
