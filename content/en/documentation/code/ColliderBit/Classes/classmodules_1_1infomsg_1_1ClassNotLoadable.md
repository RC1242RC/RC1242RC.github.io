---
title: 'class modules::infomsg::ClassNotLoadable'

description: "[No description available]"

---








[No description available]

Inherits from [modules.infomsg.InfoMessage](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1infomessage/), object

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1classnotloadable/#function---init--)**(self self, tag tag, reason reason ='') |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| string | **[msg](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1classnotloadable/#variable-msg)**  |
| | **[tags_done](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1classnotloadable/#variable-tags-done)**  |
| | **[tag](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1classnotloadable/#variable-tag)**  |
| | **[msg](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1classnotloadable/#variable-msg)**  |

## Additional inherited members

**Public Functions inherited from [modules.infomsg.InfoMessage](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1infomessage/)**

|                | Name           |
| -------------- | -------------- |
| def | **[printMessage](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1infomessage/#function-printmessage)**(self self) |


## Public Functions Documentation

### function __init__

```
def __init__(
    self self,
    tag tag,
    reason reason =''
)
```


**Reimplements**: [modules::infomsg::InfoMessage::__init__](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1infomessage/#function---init--)


## Public Attributes Documentation

### variable msg

```
static string msg =  gb.textmods['yellow'] +  "The class '%s' is not loadable." + gb.textmods['end'];
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

Updated on 2022-08-03 at 05:45:14 +0000