---
title: 'class modules::infomsg::ClassAlreadyDone'

description: "[No description available]"

---








[No description available]

Inherits from [modules.infomsg.InfoMessage](/documentation/code/main/classes/classmodules_1_1infomsg_1_1infomessage/), object

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1classalreadydone/#function---init--)**(self self, tag tag, reason reason ='') |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| string | **[msg](/documentation/code/main/classes/classmodules_1_1infomsg_1_1classalreadydone/#variable-msg)**  |
| | **[tags_done](/documentation/code/main/classes/classmodules_1_1infomsg_1_1classalreadydone/#variable-tags-done)**  |
| | **[tag](/documentation/code/main/classes/classmodules_1_1infomsg_1_1classalreadydone/#variable-tag)**  |
| | **[msg](/documentation/code/main/classes/classmodules_1_1infomsg_1_1classalreadydone/#variable-msg)**  |

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
static string msg =  "Class '%s' is already done.";
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

Updated on 2022-08-03 at 01:16:42 +0000