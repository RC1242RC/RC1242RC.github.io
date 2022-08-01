---
title: 'file 1.1/libsecond_1_1.py'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[libsecond_1_1](/documentation/code/namespaces/namespacelibsecond__1__1/)**  |




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
prefix = "libsecond 1.1: "

#
# Some functions:
#

# 'initialization'
def initialize(a):
  global someInt
  global someArray
  global isInitialized
  print
  print(prefix, "This is function 'initialize'.")
  x, y, *rest = range(10) # haha don't load this in python2 malaka.
  someInt = a
  someArray = np.array([2.0*x for x in range(array_length)])
  someVector.append(1.5)
  someVector.append(1.6)
  isInitialized = True
  print(prefix, "Initialization done. Variable 'someInt' set to: ", someInt)

# 'calculation'
def someFunction():
  global someDouble
  print
  print(prefix, "This is function 'someFunction'.")
  if (isInitialized):
    print(prefix, "Will now perform a calculation...")
    someDouble = 3.1415*someInt
    print(prefix, "Result stored in variable 'someDouble' is: ", someDouble)
  else:
    print(prefix, "Not initialized. Cannot perform calculation.")

# the 'hidden function'
def hiddenFunction(x):
  return pow(x,2.0)

# return 'result'
def returnResult():
  print("I'm returnResult() from libsecond.py, and I'm feeling well.")
  return someDouble
```


-------------------------------

Updated on 2022-08-01 at 12:13:34 +0000
