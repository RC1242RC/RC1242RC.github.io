---
title: 'namespace Gambit::Diver_1_0_4'

description: "[No description available]"

---






[No description available]

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Gambit::Diver_1_0_4::diverScanData](/documentation/code/classes/structgambit_1_1diver__1__0__4_1_1diverscandata/)** <br>Structure for passing likelihood and printer data through Diver to the objective function.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| double | **[objective](/documentation/code/namespaces/namespacegambit_1_1diver__1__0__4/#function-objective)**(double params[], const int param_dim, int & fcall, bool & quit, const bool validvector, void *& context)<br>Function to be minimised by Diver.  |


## Functions Documentation

### function objective

```
double objective(
    double params[],
    const int param_dim,
    int & fcall,
    bool & quit,
    const bool validvector,
    void *& context
)
```

Function to be minimised by Diver. 





-------------------------------

Updated on 2022-08-01 at 12:13:24 +0000