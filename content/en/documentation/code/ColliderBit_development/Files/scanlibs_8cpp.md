---
title: 'file scanlibs/scanlibs.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[main](/documentation/code/files/scanlibs_8cpp/#function-main)**(int argc, char * argv[]) |

## Detailed Description


**Author**: Gregory Martinez ([gregory.david.martinez@gmail.com](mailto:gregory.david.martinez@gmail.com)) 

**Date**: 2015 Feb, Mar

declaration for scanner module



------------------

Authors (add name and date if you modify):



------------------


## Functions Documentation

### function main

```
int main(
    int argc,
    char * argv[]
)
```




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************

#include <cstdlib>
#include <string>
#include <iostream>

#include "gambit/cmake/cmake_variables.hpp"

int main(int argc, char *argv[])
{
        bool hdrs = false;
        bool cflags = false;
        bool gnu = true;
        bool use_boost = false;
        bool compiler_flagged = false;
        
        for (int i = 1; i < argc; i++)
        {
                std::string arg(argv[i]);
                if(arg == "--hdrs" || arg == "--headers")
                {
                        hdrs = true;
                }
                else if (arg == "--cflags")
                {
                        cflags = true;
                }
                else if (arg == "--boost")
                {
                        use_boost = true;
                }
                else if (arg == "--g++" || arg == "--gnu")
                {
                        gnu = true;
                        if (compiler_flagged)
                        {
                                std::cout << "Cannot use both --g++ and --icc flags" << std::endl;
                                return 1;
                        }
                        compiler_flagged = true;
                }
                else if (arg == "--icc" || arg == "--intel")
                {
                        gnu = false;
                        if (compiler_flagged)
                        {
                                std::cout << "Cannot use both --g++ and --icc flags" << std::endl;
                                return 1;
                        }
                        compiler_flagged = true;
                }
                else if (arg == "--help" || arg == "-h")
                {
                        std::cout << "\nUsage:  scanlibs [options]\n\n"
                        << "options:\n"
                        << "    --hdrs, --headers    prints header flags\n"
                        << "    --cflags             prints compiler flags\n"
                        << "    --boost              use the boost hdrs\n"
                        << "    --g++, --gnu         specifies the g++ compiler (default)\n"
                        << "    --icc, --intel       specifies the icc compiler\n"
                        << "    --help, -h           help\n" << std::endl;
                        
                        return 0;
                }
                else
                {
                        std::cerr << "\nFlag \"" << arg << "\" is not defined.\n\n"
                        << "options:\n"
                        << "    --hdrs, --headers    prints header flags\n"
                        << "    --cflags             prints compiler flags\n"
                        << "    --boost              use the boost hdrs\n"
                        << "    --g++, --gnu         specifies the g++ compiler (default)\n"
                        << "    --icc, --intel       specifies the icc compiler\n"
                        << "    --help, -h           help\n" << std::endl;
                        
                        return 1;
                }
        }
        
        std::string str = " ";
        
        if (!use_boost)
        {
                str += "-D__NO_PLUGIN_BOOST__ ";
        }
        
        if (hdrs)
        {
                str += "-I" GAMBIT_DIR " "; 
                str += "-I" GAMBIT_DIR "/cmake/include ";
                str += "-I" GAMBIT_DIR "/Utils/include ";
                str += "-I" GAMBIT_DIR "/ScannerBit/include ";
                str += "-I" GAMBIT_DIR "/Logs/include ";
                str += "-I" GAMBIT_DIR "/contrib/yaml-cpp-0.5.1/include ";
        }
        
        if (cflags)
        {
                if (gnu)
                        str += "--std=c++11 -shared -fPIC ";
                else
                        str += "-std=c++11 -shared -fPIC ";
        }
        
        std::cout << str << std::flush;
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:24 +0000
