---
title: 'file ScannerBit/cholesky.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::Cholesky](/documentation/code/classes/classgambit_1_1cholesky/)**  |

## Detailed Description


declaration for scanner module



------------------

Authors (add name and date if you modify): 




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************
//

#ifndef CHOLESKY_HPP
#define CHOLESKY_HPP

#include <vector>
#include <cmath>
#include <iostream>
namespace Gambit
{
    // Cholesky decomposition class
    class Cholesky
    {
    private:
        std::vector<std::vector<double>> el;
            
    public:
        Cholesky(){}
        
        Cholesky(const int num) : el(num, std::vector<double>(num)) {}
                
        bool EnterMat(std::vector<std::vector<double>> &a)
        {
            el = a;
            int num = el.size();
            double sum = 0;
            int i, j, k;
            
            for (i = 0; i < num; i++)
            {
                for (j = i; j < num; j++)
                {
                    for(sum = el[i][j], k = i - 1; k >= 0; k--)
                        sum -= el[i][k]*el[j][k];
                    if(i == j)
                    {
                        if(sum <= 0.0)
                        {
                                return false;
                        }
                        el[i][i] = std::sqrt(sum);
                    }
                    else
                        el[j][i] = sum/el[i][i];
                }
            }
            
            for (i = 0; i < num; i++)
                for (j = 0; j < i; j++)
                    el[j][i] = 0.0;
                    
            return true;
        }
        
        void ElMult (std::vector<double> &y) const
        {
            int i, j;
            int num = el.size();
            std::vector<double> b(num);
            for(i = 0; i < num; i++)
            {
                b[i] = 0.0;
                for (j = 0; j <= i; j++)
                {
                    b[i] += el[i][j]*y[j];
                }
            }
            
            y = b;
        }

        std::vector<double> invElMult(const std::vector<double> &y) const
        {
            std::vector<double> x(y.size(), 0.);
            for (int i = 0, n = x.size(); i < n; i++)
            {
                double sum_ = 0;
                for (int j = 0; j < i; j++)
                {
                    sum_ += el[i][j] * x[j];
                }
                x[i] = (y[i] - sum_) / el[i][i];
            }
            return x;
        }

        double Square(const std::vector<double> &y, const std::vector<double> &y0)
        {
            int i, j, num = y.size();
            double sum;
            std::vector<double> x(num);
            
            for (i = 0; i < num; i++)
            {
                for (sum = (y[i]-y0[i]), j=0; j < i; j++)
                    sum -= el[i][j]*x[j];
                
                x[i]=sum/el[i][i];
            }
            
            sum = 0.0;
            for (i = 0; i < num; i++)
                sum += x[i]*x[i];
            
            return sum;
        }
        
        double DetSqrt()
        {
            double temp = 1.0;
            int num = el.size();
            for (int i = 0; i < num; i++)
                temp *= el[i][i];
            return temp;
        }
    };
}

#endif
```


-------------------------------

Updated on 2022-08-01 at 12:13:24 +0000
