---
title: 'class modules::infomsg::NoLoadedTypesEntry'

description: "[No description available]"

---








[No description available]

Inherits from [modules.infomsg.InfoMessage](/documentation/code/classes/classmodules_1_1infomsg_1_1infomessage/), object

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](/documentation/code/classes/classmodules_1_1infomsg_1_1noloadedtypesentry/#function---init--)**(self self, tag tag, reason reason ='') |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| string | **[msg](/documentation/code/classes/classmodules_1_1infomsg_1_1noloadedtypesentry/#variable-msg)**  |
| | **[tags_done](/documentation/code/classes/classmodules_1_1infomsg_1_1noloadedtypesentry/#variable-tags-done)**  |
| | **[tag](/documentation/code/classes/classmodules_1_1infomsg_1_1noloadedtypesentry/#variable-tag)**  |
| | **[msg](/documentation/code/classes/classmodules_1_1infomsg_1_1noloadedtypesentry/#variable-msg)**  |

## Additional inherited members

**Public Functions inherited from [modules.infomsg.InfoMessage](/documentation/code/classes/classmodules_1_1infomsg_1_1infomessage/)**

|                | Name           |
| -------------- | -------------- |
| def | **[printMessage](/documentation/code/classes/classmodules_1_1infomsg_1_1infomessage/#function-printmessage)**(self self) |


## Public Functions Documentation

### function __init__

```
def __init__(
    self self,
    tag tag,
    reason reason =''
)
```


**Reimplements**: [modules::infomsg::InfoMessage::__init__](/documentation/code/classes/classmodules_1_1infomsg_1_1infomessage/#function---init--)


## Public Attributes Documentation

### variable msg

```
static string msg =  gb.textmods['yellow'] +  "No entry in loaded_types.hpp generated for class '%s'." + gb.textmods['end'];
```


### variable tags_done

```
static tags_done =  set();
```


### variable tag

```
tag;
```


### variable msg

```
msg;
```


-------------------------------

Updated on 2022-08-01 at 12:13:16 +0000