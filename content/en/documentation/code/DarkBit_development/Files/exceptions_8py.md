---
title: 'file modules/exceptions.py'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[modules](/documentation/code/darkbit_development/namespaces/namespacemodules/)**  |
| **[modules::exceptions](/documentation/code/darkbit_development/namespaces/namespacemodules_1_1exceptions/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[modules::exceptions::Error](/documentation/code/darkbit_development/classes/classmodules_1_1exceptions_1_1error/)**  |
| class | **[modules::exceptions::ReturnError](/documentation/code/darkbit_development/classes/classmodules_1_1exceptions_1_1returnerror/)**  |




## Source code

```
################################
#                              #
#  Exception classes for BOSS  #
#                              #
################################


class Error(Exception):
    """Base class for exceptions."""
    pass


class ReturnError(Error):
    """Exception raised when a function cannot return the expected result.

    Attributes:
        msg  -- explanation of the error
    """

    def __init__(self, msg):
        self.msg = 'ReturnError: ' + msg
```


-------------------------------

Updated on 2022-08-02 at 23:34:58 +0000
