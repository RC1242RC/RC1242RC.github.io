---
title: 'struct Gambit::IniParser::Types::Observable'

description: "[No description available]"

---








[No description available]

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Observable](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#function-observable)**()<br>Default constructor, to ensure the default values are not gibberish.  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[purpose](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-purpose)**  |
| std::string | **[capability](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-capability)**  |
| std::string | **[type](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-type)**  |
| std::string | **[function](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-function)**  |
| std::string | **[module](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-module)**  |
| std::string | **[backend](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-backend)**  |
| std::string | **[version](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-version)**  |
| bool | **[printme](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-printme)**  |
| bool | **[weakrule](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-weakrule)**  |
| Options | **[options](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-options)**  |
| YAML::Node | **[subcaps](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-subcaps)**  |
| std::vector< [Observable](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/) > | **[dependencies](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-dependencies)**  |
| std::vector< [Observable](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/) > | **[backends](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-backends)**  |
| std::vector< std::string > | **[functionChain](/documentation/code/darkbit_development/classes/structgambit_1_1iniparser_1_1types_1_1observable/#variable-functionchain)**  |

## Public Functions Documentation

### function Observable

```
inline Observable()
```

Default constructor, to ensure the default values are not gibberish. 

## Public Attributes Documentation

### variable purpose

```
std::string purpose;
```


### variable capability

```
std::string capability;
```


### variable type

```
std::string type;
```


### variable function

```
std::string function;
```


### variable module

```
std::string module;
```


### variable backend

```
std::string backend;
```


### variable version

```
std::string version;
```


### variable printme

```
bool printme;
```


### variable weakrule

```
bool weakrule;
```


### variable options

```
Options options;
```


### variable subcaps

```
YAML::Node subcaps;
```


### variable dependencies

```
std::vector< Observable > dependencies;
```


### variable backends

```
std::vector< Observable > backends;
```


### variable functionChain

```
std::vector< std::string > functionChain;
```


-------------------------------

Updated on 2022-08-03 at 00:00:58 +0000