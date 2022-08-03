---
title: 'namespace modules::infomsg'

description: "[No description available]"

---






[No description available]

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[modules::infomsg::ClassAlreadyDone](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1classalreadydone/)**  |
| class | **[modules::infomsg::ClassNotLoadable](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1classnotloadable/)**  |
| class | **[modules::infomsg::FunctionAlreadyDone](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1functionalreadydone/)**  |
| class | **[modules::infomsg::IgnoredFunction](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1ignoredfunction/)**  |
| class | **[modules::infomsg::IgnoredMemberFunction](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1ignoredmemberfunction/)**  |
| class | **[modules::infomsg::IgnoredMemberVariable](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1ignoredmembervariable/)**  |
| class | **[modules::infomsg::InfoMessage](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1infomessage/)**  |
| class | **[modules::infomsg::NoFactoryFunctions](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1nofactoryfunctions/)**  |
| class | **[modules::infomsg::NoIncludeStatementGenerated](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1noincludestatementgenerated/)**  |
| class | **[modules::infomsg::NoLoadedTypesEntry](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1noloadedtypesentry/)**  |
| class | **[modules::infomsg::NoPointerCopyAndAssignmentFunctions](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1nopointercopyandassignmentfunctions/)**  |
| class | **[modules::infomsg::ParentClassIgnored](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1parentclassignored/)**  |
| class | **[modules::infomsg::TypeNotAccepted](/documentation/code/colliderbit/classes/classmodules_1_1infomsg_1_1typenotaccepted/)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| def | **[clearInfoMessages](/documentation/code/colliderbit/namespaces/namespacemodules_1_1infomsg/#function-clearinfomessages)**() |

## Attributes

|                | Name           |
| -------------- | -------------- |
| | **[active_msg_types](/documentation/code/colliderbit/namespaces/namespacemodules_1_1infomsg/#variable-active-msg-types)**  |


## Functions Documentation

### function clearInfoMessages

```
def clearInfoMessages()
```




```
Loop through all active message types and clear the class-wide
set of tags done. This will allow the info message to be printed
again for the given tag.
```



## Attributes Documentation

### variable active_msg_types

```
active_msg_types =  set();
```





-------------------------------

Updated on 2022-08-03 at 12:58:16 +0000