---
title: 'class Gambit::IniParser::IniFile'
description: 'Main inifile class. '

---








Main inifile class. 


`#include <yaml_parser.hpp>`

Inherits from Parser

## Public Functions

|                | Name           |
| -------------- | -------------- |
| const ObservablesType & | **[getObservables](/documentation/code/colliderbit_development/classes/classgambit_1_1iniparser_1_1inifile/#function-getobservables)**() const |
| const ObservablesType & | **[getRules](/documentation/code/colliderbit_development/classes/classgambit_1_1iniparser_1_1inifile/#function-getrules)**() const |
| const str | **[filename](/documentation/code/colliderbit_development/classes/classgambit_1_1iniparser_1_1inifile/#function-filename)**() const |
| virtual void | **[readFile](/documentation/code/colliderbit_development/classes/classgambit_1_1iniparser_1_1inifile/#function-readfile)**(str )<br>Read in the YAML file.  |

## Public Functions Documentation

### function getObservables

```
const ObservablesType & getObservables() const
```


Getters for private observable and rules entries 


### function getRules

```
const ObservablesType & getRules() const
```


### function filename

```
const str filename() const
```


### function readFile

```
virtual void readFile(
    str 
)
```

Read in the YAML file. 

-------------------------------

Updated on 2022-08-02 at 18:18:36 +0000