---
title: 'file libthird_1_0/1.0/libthird_1_0/main.py'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[libthird_1_0](/documentation/code/main/namespaces/namespacelibthird__1__0/)**  |
| **[libthird_1_0::main](/documentation/code/main/namespaces/namespacelibthird__1__0_1_1main/)**  |




## Source code

```
#
# A dummy python library for testing GAMBIT backend setup
# Mimics the functionality of libfirst
#
# \author Pat Scott
# \date 2017-12
#
#

import numpy as np

#
# Some global variables:
#
array_length = 10
someInt = 0
someDouble = 0
someVector = []
isInitialized = False
prefix = "libthird 1.0: "

#
# Some functions:
#

# 'initialization'
def initialize(a):
  global someInt
  global someArray
  global isInitialized
  print
  print prefix, "This is function 'initialize'."
  someInt = a
  someArray = np.array([2.0*x for x in range(array_length)])
  someVector.append(1.5)
  someVector.append(1.6)
  isInitialized = True
  print prefix, "Initialization done. Variable 'someInt' set to: ", someInt

# 'calculation'
def someFunction():
  global someDouble
  print
  print prefix, "This is function 'someFunction'."
  if (isInitialized):
    print prefix, "Will now perform a calculation..."
    someDouble = 3.1415*someInt
    print prefix, "Result stored in variable 'someDouble' is: ", someDouble
  else:
    print prefix, "Not initialized. Cannot perform calculation."

# return 'result'
def returnResult():
  print "I'm returnResult() from libthird.py, and I'm feeling well."
  return someDouble
```


-------------------------------

Updated on 2022-08-03 at 12:57:59 +0000
