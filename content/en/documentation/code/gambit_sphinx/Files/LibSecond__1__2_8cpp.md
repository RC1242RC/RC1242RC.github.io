---
title: 'file frontends/LibSecond_1_2.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Detailed Description


**Author**: Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 

**Date**: 2018 Nov

Frontend source for the LibSecond 1.2 backend.



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#include "gambit/Backends/frontend_macros.hpp"
#include "gambit/Backends/frontends/LibSecond_1_2.hpp"

BE_INI_FUNCTION {}
END_BE_INI_FUNCTION

BE_NAMESPACE
{
  /* Convenience function implementation */
  double awesomenessNotByAnders(int a)
  {
    logger().send("Message from 'awesomenessNotByAnders' backend convenience function in LibSecond v1.2 wrapper",LogTags::info);
    initialize(a);
    someFunction();
    #ifdef HAVE_PYBIND11
      double i = pybind11::cast<double>(LibSecond.attr("hiddenFunction")(2.0));
      std::cout << "Result of hiddenFunction by direct access to LibSecond v1.2 python module (skipping frontend): " << i << std::endl;
    #endif
    return returnResult();
  }
}
END_BE_NAMESPACE
```


-------------------------------

Updated on 2022-08-01 at 12:13:35 +0000
