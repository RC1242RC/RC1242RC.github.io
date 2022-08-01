---
title: 'file simple/grid.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| std::vector< std::unordered_set< std::string > > | **[parse_sames](/documentation/code/files/grid_8cpp/#function-parse-sames)**(const std::vector< std::string > & params) |
| | **[scanner_plugin](/documentation/code/files/grid_8cpp/#function-scanner-plugin)**(grid , version(1, 0, 0) ) |

## Detailed Description


Grid sampler.



------------------

Authors (add name and date if you modify): 


## Functions Documentation

### function parse_sames

```
inline std::vector< std::unordered_set< std::string > > parse_sames(
    const std::vector< std::string > & params
)
```


**Author**: Gregory Martinez ([gregory.david.martinez@gmail.com](mailto:gregory.david.martinez@gmail.com)) 

**Date**: 2013 August



------------------


### function scanner_plugin

```
scanner_plugin(
    grid ,
    version(1, 0, 0) 
)
```




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
#include <cmath>
#include <iostream>
#include <sstream>

#include "gambit/ScannerBit/scanner_plugin.hpp"

inline std::vector<std::unordered_set<std::string>> parse_sames(const std::vector<std::string> &params)
{
    std::vector<std::unordered_set<std::string>> paramSet(params.size());
    
    for (int i = 0, end = params.size(); i < end; i++)
    {
        std::string::size_type pos_old = 0;
        std::string::size_type pos = params[i].find("+");
        while (pos != std::string::npos)
        {
            paramSet[i].insert(params[i].substr(pos_old, (pos-pos_old)));
            pos_old = pos + 1;
            pos = params[i].find("+", pos_old);
        }

        paramSet[i].insert(params[i].substr(pos_old));
    }
    
    return paramSet;
}

scanner_plugin(grid, version(1, 0, 0))
{
    reqd_inifile_entries("grid_pts");
    
    plugin_constructor
    {
        
    }

    int plugin_main()
    {
        int ma = get_dimension();
        int numtasks;
        int rank;
        
#ifdef WITH_MPI
        MPI_Comm_size(MPI_COMM_WORLD, &numtasks);
        MPI_Comm_rank(MPI_COMM_WORLD, &rank);
#else
        numtasks = 1;
        rank = 0;
#endif

        std::vector<int> N = get_inifile_value<std::vector<int>>("grid_pts");
        int NTot = 1;

        for (auto it = N.begin(), end = N.end(); it != end; it++)
        {
            if (*it < 0)
                *it = -*it;
            else if (*it == 0)
                *it= 1;
            NTot *= *it;
        }

        if (N.size() != (unsigned int)ma)
            scan_err << "Grid Scanner:  The dimension of gambit (" << ma
                << ") does not match the dimension of the inputed grid_pts (" << N.size() << ")" << scan_end;
              
        YAML::Node node = get_inifile_node("parameters");
        if (node)
        {
            auto params = get_prior().getShownParameters();
            auto user_params = get_yaml_vector<std::string>(node);//node.as<std::vector<std::string>>();
            
            if (params.size() != user_params.size())
            {
                scan_err << "Grid Scanner:  The inputed parameter order is not the same size as the actual parameter number." << scan_end;
            }
            
            std::vector<std::unordered_set<std::string>> paramSet = parse_sames(params);
            
            std::vector<int> N_temp(N.size(), -1);
            for (int i = 0, end = user_params.size(); i < end; i++)
            {
                int k = 0;
                for (int j = 0, endj = user_params.size(); j < endj; j++)
                {
                    auto it = paramSet[i].find(user_params[j]);
                    if (it != paramSet[i].end())
                    {
                        N_temp[i] = N[j];
                        
                        if (k > 0)
                        {
                            scan_err << "Grid Scanner:  Parameter order specified repeats same parameter (" << user_params[i] << ")" << scan_end;
                        }
                        k++;
                    }
                }
                
                if (k == 0)
                {
                    scan_err << "Grid Scanner:  Parameter " << params[i] << " is not given a grid sampling rate." << scan_end;
                }
            }
            
            for (auto it = N_temp.begin(), end = N_temp.end(); it != end; ++it)
            {
                if (*it == -1)
                {
                    scan_err << "Grid Scanner:  Not all parameters are specified in the parameter order." << scan_end;
                }
            }
            
            N = N_temp;
        }

        like_ptr LogLike;
        LogLike = get_purpose(get_inifile_value<std::string>("like"));
        std::vector<double> vec(ma, 0.0);

        for (int i = rank, end = NTot; i < end; i+=numtasks)
        {
            int n = i;
            for (int j = 0; j < ma; j++)
            {
                if (N[j] == 1)
                    vec[j] = 0.5;
                else
                    vec[j] = double(n%N[j])/double(N[j]-1);

                n /= N[j];
            }

            LogLike(vec);
        }

        return 0;
    }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:32 +0000
