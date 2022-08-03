---
title: 'class modules::infomsg::ParentClassIgnored'

description: "[No description available]"

---








[No description available]

Inherits from [modules.infomsg.InfoMessage](/documentation/code/gambit_sphinx/classes/classmodules_1_1infomsg_1_1infomessage/), object

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](/documentation/code/gambit_sphinx/classes/classmodules_1_1infomsg_1_1parentclassignored/#function---init--)**(self self, tag tag, parent_class parent_class, reason reason ='') |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| string | **[msg](/documentation/code/gambit_sphinx/classes/classmodules_1_1infomsg_1_1parentclassignored/#variable-msg)**  |
| | **[tags_done](/documentation/code/gambit_sphinx/classes/classmodules_1_1infomsg_1_1parentclassignored/#variable-tags-done)**  |
| | **[tag](/documentation/code/gambit_sphinx/classes/classmodules_1_1infomsg_1_1parentclassignored/#variable-tag)**  |
| | **[msg](/documentation/code/gambit_sphinx/classes/classmodules_1_1infomsg_1_1parentclassignored/#variable-msg)**  |

## Additional inherited members

**Public Functions inherited from [modules.infomsg.InfoMessage](/documentation/code/gambit_sphinx/classes/classmodules_1_1infomsg_1_1infomessage/)**

|                | Name           |
| -------------- | -------------- |
| def | **[printMessage](/documentation/code/gambit_sphinx/classes/classmodules_1_1infomsg_1_1infomessage/#function-printmessage)**(self self) |


## Public Functions Documentation

### function __init__

```
def __init__(
    self self,
    tag tag,
    parent_class parent_class,
    reason reason =''
)
```


**Reimplements**: [modules::infomsg::InfoMessage::__init__](/documentation/code/gambit_sphinx/classes/classmodules_1_1infomsg_1_1infomessage/#function---init--)


## Public Attributes Documentation

### variable msg

```
static string msg =  gb.textmods['yellow'] +  "In class '%s', the parent class '%s' is ignored." + gb.textmods['end'];
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

Updated on 2022-08-03 at 12:58:04 +0000