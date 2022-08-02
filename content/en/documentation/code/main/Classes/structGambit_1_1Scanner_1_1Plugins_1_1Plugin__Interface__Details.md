---
title: 'struct Gambit::Scanner::Plugins::Plugin_Interface_Details'
description: 'Plugin info to be given to the interface class. '

---








Plugin info to be given to the interface class. 


`#include <plugin_loader.hpp>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Plugin_Interface_Details](/documentation/code/main/classes/structgambit_1_1scanner_1_1plugins_1_1plugin__interface__details/#function-plugin-interface-details)**([Plugin_Details](/documentation/code/main/classes/structgambit_1_1scanner_1_1plugins_1_1plugin__details/) & details, [printer_interface](/documentation/code/main/namespaces/namespacegambit_1_1scanner/#typedef-printer-interface) * printer, [Priors::BasePrior](/documentation/code/main/classes/classgambit_1_1priors_1_1baseprior/) * prior, const YAML::Node & node) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [Plugin_Details](/documentation/code/main/classes/structgambit_1_1scanner_1_1plugins_1_1plugin__details/) & | **[details](/documentation/code/main/classes/structgambit_1_1scanner_1_1plugins_1_1plugin__interface__details/#variable-details)**  |
| [printer_interface](/documentation/code/main/namespaces/namespacegambit_1_1scanner/#typedef-printer-interface) * | **[printer](/documentation/code/main/classes/structgambit_1_1scanner_1_1plugins_1_1plugin__interface__details/#variable-printer)**  |
| [Priors::BasePrior](/documentation/code/main/classes/classgambit_1_1priors_1_1baseprior/) * | **[prior](/documentation/code/main/classes/structgambit_1_1scanner_1_1plugins_1_1plugin__interface__details/#variable-prior)**  |
| YAML::Node | **[flags](/documentation/code/main/classes/structgambit_1_1scanner_1_1plugins_1_1plugin__interface__details/#variable-flags)**  |
| YAML::Node | **[node](/documentation/code/main/classes/structgambit_1_1scanner_1_1plugins_1_1plugin__interface__details/#variable-node)**  |

## Public Functions Documentation

### function Plugin_Interface_Details

```
inline Plugin_Interface_Details(
    Plugin_Details & details,
    printer_interface * printer,
    Priors::BasePrior * prior,
    const YAML::Node & node
)
```


## Public Attributes Documentation

### variable details

```
Plugin_Details & details;
```


### variable printer

```
printer_interface * printer;
```


### variable prior

```
Priors::BasePrior * prior;
```


### variable flags

```
YAML::Node flags;
```


### variable node

```
YAML::Node node;
```


-------------------------------

Updated on 2022-08-02 at 23:34:53 +0000