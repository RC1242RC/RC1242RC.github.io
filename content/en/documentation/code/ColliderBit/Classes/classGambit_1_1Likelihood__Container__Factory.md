---
title: 'class Gambit::Likelihood_Container_Factory'

description: "[No description available]"

---








[No description available]

Inherits from [Gambit::Scanner::Factory_Base](/documentation/code/colliderbit/classes/classgambit_1_1scanner_1_1factory__base/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Likelihood_Container_Factory](/documentation/code/colliderbit/classes/classgambit_1_1likelihood__container__factory/#function-likelihood-container-factory)**(const [gambit_core](/documentation/code/colliderbit/classes/classgambit_1_1gambit__core/) & core, [DRes::DependencyResolver](/documentation/code/colliderbit/classes/classgambit_1_1dres_1_1dependencyresolver/) & dependencyResolver, [IniParser::IniFile](/documentation/code/colliderbit/classes/classgambit_1_1iniparser_1_1inifile/) & iniFile, Printers::BaseBasePrinter & printer) |
| | **[~Likelihood_Container_Factory](/documentation/code/colliderbit/classes/classgambit_1_1likelihood__container__factory/#function-~likelihood-container-factory)**() |
| void * | **[operator()](/documentation/code/colliderbit/classes/classgambit_1_1likelihood__container__factory/#function-operator())**(const str & purpose) const |

## Additional inherited members

**Public Functions inherited from [Gambit::Scanner::Factory_Base](/documentation/code/colliderbit/classes/classgambit_1_1scanner_1_1factory__base/)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~Factory_Base](/documentation/code/colliderbit/classes/classgambit_1_1scanner_1_1factory__base/#function-~factory-base)**() |


## Public Functions Documentation

### function Likelihood_Container_Factory

```
Likelihood_Container_Factory(
    const gambit_core & core,
    DRes::DependencyResolver & dependencyResolver,
    IniParser::IniFile & iniFile,
    Printers::BaseBasePrinter & printer
)
```


### function ~Likelihood_Container_Factory

```
inline ~Likelihood_Container_Factory()
```


### function operator()

```
void * operator()(
    const str & purpose
) const
```


-------------------------------

Updated on 2022-08-03 at 12:58:17 +0000