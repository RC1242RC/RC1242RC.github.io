---
title: 'struct Gambit::GreAT::greatScanData'
description: 'Structure for passing likelihood and printer data through GreAT to the objective function. '

---








Structure for passing likelihood and printer data through GreAT to the objective function. 


`#include <great.hpp>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [Scanner::like_ptr](/documentation/code/gambit_sphinx/classes/classgambit_1_1scanner_1_1like__ptr/) | **[likelihood_function](/documentation/code/gambit_sphinx/classes/structgambit_1_1great_1_1greatscandata/#variable-likelihood-function)**  |
| [Scanner::printer_interface](/documentation/code/gambit_sphinx/namespaces/namespacegambit_1_1scanner/#typedef-printer-interface) * | **[printer](/documentation/code/gambit_sphinx/classes/structgambit_1_1great_1_1greatscandata/#variable-printer)**  |
| double | **[min_logLike](/documentation/code/gambit_sphinx/classes/structgambit_1_1great_1_1greatscandata/#variable-min-loglike)**  |

## Public Attributes Documentation

### variable likelihood_function

```
Scanner::like_ptr likelihood_function;
```


### variable printer

```
Scanner::printer_interface * printer;
```


### variable min_logLike

```
double min_logLike;
```


-------------------------------

Updated on 2022-08-03 at 12:58:05 +0000