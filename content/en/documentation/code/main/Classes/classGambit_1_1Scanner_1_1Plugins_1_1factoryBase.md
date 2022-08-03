---
title: 'class Gambit::Scanner::Plugins::factoryBase'

description: "[No description available]"

---








[No description available] [More...](#detailed-description)


`#include <plugin_defs.hpp>`

Inherited by [Gambit::Scanner::Plugins::classFactory< T >](/documentation/code/main/classes/classgambit_1_1scanner_1_1plugins_1_1classfactory/), [Gambit::Scanner::Plugins::funcFactory< T >](/documentation/code/main/classes/classgambit_1_1scanner_1_1plugins_1_1funcfactory/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void * | **[operator()](/documentation/code/main/classes/classgambit_1_1scanner_1_1plugins_1_1factorybase/#function-operator())**() =0 |
| virtual | **[~factoryBase](/documentation/code/main/classes/classgambit_1_1scanner_1_1plugins_1_1factorybase/#function-~factorybase)**() |

## Detailed Description

```
class Gambit::Scanner::Plugins::factoryBase;
```


These classes are used by the plugins to load and save data 

## Public Functions Documentation

### function operator()

```
virtual void * operator()() =0
```


**Reimplemented by**: [Gambit::Scanner::Plugins::funcFactory::operator()](/documentation/code/main/classes/classgambit_1_1scanner_1_1plugins_1_1funcfactory/#function-operator()), [Gambit::Scanner::Plugins::classFactory::operator()](/documentation/code/main/classes/classgambit_1_1scanner_1_1plugins_1_1classfactory/#function-operator())


### function ~factoryBase

```
inline virtual ~factoryBase()
```


-------------------------------

Updated on 2022-08-03 at 01:58:23 +0000