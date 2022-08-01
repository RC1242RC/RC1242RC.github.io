---
title: 'file frontends/LibThird_1_1.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Detailed Description


**Author**: Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 

**Date**: 2018 Sep

Frontend source for the LibThird 1.1 backend.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#include "gambit/Backends/frontend_macros.hpp"
#include "gambit/Backends/frontends/LibThird_1_1.hpp"

BE_INI_FUNCTION {}
END_BE_INI_FUNCTION

BE_NAMESPACE
{
  /* Convenience function implementation */
  double awesomenessNotByAnders(int a)
  {
    #ifdef HAVE_PYBIND11
      using namespace pybind11;
      logger().send("Message from 'awesomenessNotByAnders' backend convenience function in LibThird v1.1 wrapper",LogTags::info);
      initialize(a);
      someFunction();
      // An example of how to use sub-module variables and functions 'on the fly' (i.e. when they have not been declared in advance
      // to GAMBIT in a frontend header).  If this looks messy/confusing to you, consider just using the frontend declarations.
      // Actually, consider just using the frontend declarations anyway.
      module sub_module = module::import("libthird_1_1.sub_module");
      dict sub_module_dict = sub_module.attr("__dict__");
      sub_module_dict["someOtherInt"] = a;
      cout << "someOtherInt in LibThird 1.1: " << cast<int>(sub_module_dict["someOtherInt"]) << endl;
      object someOtherFunction = sub_module.attr("someOtherFunction");
      double result = cast<double>(someOtherFunction(sub_module_dict["someOtherInt"]));
      cout << "someOtherFunction(someOtherInt) in LibThird 1.1: " << result << endl;
      return result;
    #else
      return 0*a;
    #endif
  }
}
END_BE_NAMESPACE
```


-------------------------------

Updated on 2022-08-01 at 12:13:35 +0000
