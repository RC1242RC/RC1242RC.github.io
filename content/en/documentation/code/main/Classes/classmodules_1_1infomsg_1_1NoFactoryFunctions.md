---
title: 'class modules::infomsg::NoFactoryFunctions'

description: "[No description available]"

---








[No description available]

Inherits from [modules.infomsg.InfoMessage](/documentation/code/main/classes/classmodules_1_1infomsg_1_1infomessage/), object

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1nofactoryfunctions/#function---init--)**(self self, tag tag, reason reason ='') |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| string | **[msg](/documentation/code/main/classes/classmodules_1_1infomsg_1_1nofactoryfunctions/#variable-msg)**  |
| | **[tags_done](/documentation/code/main/classes/classmodules_1_1infomsg_1_1nofactoryfunctions/#variable-tags-done)**  |
| | **[tag](/documentation/code/main/classes/classmodules_1_1infomsg_1_1nofactoryfunctions/#variable-tag)**  |
| | **[msg](/documentation/code/main/classes/classmodules_1_1infomsg_1_1nofactoryfunctions/#variable-msg)**  |

## Additional inherited members

**Public Functions inherited from [modules.infomsg.InfoMessage](/documentation/code/main/classes/classmodules_1_1infomsg_1_1infomessage/)**

|                | Name           |
| -------------- | -------------- |
| def | **[printMessage](/documentation/code/main/classes/classmodules_1_1infomsg_1_1infomessage/#function-printmessage)**(self self) |


## Public Functions Documentation

### function __init__

```
def __init__(
    self self,
    tag tag,
    reason reason =''
)
```


**Reimplements**: [modules::infomsg::InfoMessage::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1infomessage/#function---init--)


## Public Attributes Documentation

### variable msg

```
static string msg =  gb.textmods['yellow'] +  "No factory functions generated for class '%s'." + gb.textmods['end'];
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

Updated on 2022-08-03 at 12:57:55 +0000