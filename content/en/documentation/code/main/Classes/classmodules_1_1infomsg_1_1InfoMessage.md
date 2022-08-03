---
title: 'class modules::infomsg::InfoMessage'

description: "[No description available]"

---








[No description available] [More...](#detailed-description)

Inherits from object

Inherited by [modules.infomsg.ClassAlreadyDone](/documentation/code/main/classes/classmodules_1_1infomsg_1_1classalreadydone/), [modules.infomsg.ClassNotLoadable](/documentation/code/main/classes/classmodules_1_1infomsg_1_1classnotloadable/), [modules.infomsg.FunctionAlreadyDone](/documentation/code/main/classes/classmodules_1_1infomsg_1_1functionalreadydone/), [modules.infomsg.IgnoredFunction](/documentation/code/main/classes/classmodules_1_1infomsg_1_1ignoredfunction/), [modules.infomsg.IgnoredMemberFunction](/documentation/code/main/classes/classmodules_1_1infomsg_1_1ignoredmemberfunction/), [modules.infomsg.IgnoredMemberVariable](/documentation/code/main/classes/classmodules_1_1infomsg_1_1ignoredmembervariable/), [modules.infomsg.NoFactoryFunctions](/documentation/code/main/classes/classmodules_1_1infomsg_1_1nofactoryfunctions/), [modules.infomsg.NoIncludeStatementGenerated](/documentation/code/main/classes/classmodules_1_1infomsg_1_1noincludestatementgenerated/), [modules.infomsg.NoLoadedTypesEntry](/documentation/code/main/classes/classmodules_1_1infomsg_1_1noloadedtypesentry/), [modules.infomsg.NoPointerCopyAndAssignmentFunctions](/documentation/code/main/classes/classmodules_1_1infomsg_1_1nopointercopyandassignmentfunctions/), [modules.infomsg.ParentClassIgnored](/documentation/code/main/classes/classmodules_1_1infomsg_1_1parentclassignored/), [modules.infomsg.TypeNotAccepted](/documentation/code/main/classes/classmodules_1_1infomsg_1_1typenotaccepted/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1infomessage/#function---init--)**(self self) |
| def | **[printMessage](/documentation/code/main/classes/classmodules_1_1infomsg_1_1infomessage/#function-printmessage)**(self self) |

## Detailed Description

```
class modules::infomsg::InfoMessage;
```




```
Base class for BOSS info messages.```

## Public Functions Documentation

### function __init__

```
def __init__(
    self self
)
```


**Reimplemented by**: [modules::infomsg::ParentClassIgnored::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1parentclassignored/#function---init--), [modules::infomsg::ClassNotLoadable::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1classnotloadable/#function---init--), [modules::infomsg::ClassAlreadyDone::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1classalreadydone/#function---init--), [modules::infomsg::FunctionAlreadyDone::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1functionalreadydone/#function---init--), [modules::infomsg::IgnoredFunction::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1ignoredfunction/#function---init--), [modules::infomsg::IgnoredMemberFunction::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1ignoredmemberfunction/#function---init--), [modules::infomsg::IgnoredMemberVariable::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1ignoredmembervariable/#function---init--), [modules::infomsg::NoIncludeStatementGenerated::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1noincludestatementgenerated/#function---init--), [modules::infomsg::TypeNotAccepted::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1typenotaccepted/#function---init--), [modules::infomsg::NoFactoryFunctions::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1nofactoryfunctions/#function---init--), [modules::infomsg::NoPointerCopyAndAssignmentFunctions::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1nopointercopyandassignmentfunctions/#function---init--), [modules::infomsg::NoLoadedTypesEntry::__init__](/documentation/code/main/classes/classmodules_1_1infomsg_1_1noloadedtypesentry/#function---init--)


### function printMessage

```
def printMessage(
    self self
)
```




```
Print the info message of the child class
and add the message tag to the list of
tags done.
```


-------------------------------

Updated on 2022-08-03 at 00:49:06 +0000