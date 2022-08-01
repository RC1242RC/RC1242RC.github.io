---
title: 'file simple/random.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| | **[scanner_plugin](/documentation/code/files/random_8cpp/#function-scanner-plugin)**(random , version(1, 0, 0) ) |

## Detailed Description


Random sampler.



------------------

Authors (add name and date if you modify): 


## Functions Documentation

### function scanner_plugin

```
scanner_plugin(
    random ,
    version(1, 0, 0) 
)
```


**Author**: Gregory Martinez ([gregory.david.martinez@gmail.com](mailto:gregory.david.martinez@gmail.com)) 

**Date**: 2013 August



------------------




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************
//

#ifdef WITH_MPI
#include "gambit/Utils/begin_ignore_warnings_mpi.hpp"
#include "mpi.h"
#include "gambit/Utils/end_ignore_warnings.hpp"
#endif

#include <vector>
#include <string>
#include <iostream>

#include "gambit/ScannerBit/scanner_plugin.hpp"
#include "gambit/Utils/threadsafe_rng.hpp"
  
scanner_plugin(random, version(1, 0, 0))
{
    like_ptr LogLike;
    int num, dim, numtasks, rank;
    
    plugin_constructor
    {
        LogLike = get_purpose(get_inifile_value<std::string>("like"));
        num = get_inifile_value<int>("point_number", 10);
        dim = get_dimension();
        
#ifdef WITH_MPI
        MPI_Comm_size(MPI_COMM_WORLD, &numtasks);
        MPI_Comm_rank(MPI_COMM_WORLD, &rank);
#else
        numtasks = 1;
        rank = 0;
#endif
    }
    
    int plugin_main ()
    {
        std::vector<double> a(dim);

        std::cout << "Entering random sampler." << "\n\tnumber of points to calculate:  " << num << std::endl;
        
        for (int k = 0; k < num; k++)
        {
            for (int i = rank; i < dim; i+=numtasks)
            {
                a[i] = Gambit::Random::draw();
            }
            LogLike(a);
            
            if (k%1000 == 0)
                std::cout << "points:  " << k << " / " << num << std::endl;
        }
        
        return 0;
    }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:18 +0000
