---
title: 'file limits/ALEPHSleptonLimits.hpp'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/darkbit_development/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/darkbit_development/namespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::ALEPHSelectronLimitAt208GeV](/documentation/code/darkbit_development/classes/classgambit_1_1colliderbit_1_1alephselectronlimitat208gev/)** <br>A class to contain the limit data from ALEPH_PLB526_2002_206, figure 3a.  |
| class | **[Gambit::ColliderBit::ALEPHSmuonLimitAt208GeV](/documentation/code/darkbit_development/classes/classgambit_1_1colliderbit_1_1alephsmuonlimitat208gev/)** <br>A class to contain the limit data from ALEPH_PLB526_2002_206, figure 3b.  |
| class | **[Gambit::ColliderBit::ALEPHStauLimitAt208GeV](/documentation/code/darkbit_development/classes/classgambit_1_1colliderbit_1_1alephstaulimitat208gev/)** <br>A class to contain the limit data from ALEPH_PLB526_2002_206, figure 3c.  |




## Source code

```
#pragma once
#include "gambit/ColliderBit/limits/BaseLimitContainer.hpp"

namespace Gambit {
  namespace ColliderBit {


    /// @brief A class to contain the limit data from ALEPH_PLB526_2002_206, figure 3a.
    class ALEPHSelectronLimitAt208GeV : public BaseLimitContainer {
      /// @name Point interpolation, conversion, and region checks
      //@{
      public:
        /// @brief Convert a point from pixel units to axis units
        P2 convertPt(double x, double y) const;
        /// @brief Check to see if the point is within the exclusion region
        bool isWithinExclusionRegion(double x, double y, double mZ) const;
      //@}

      /// @name Construction, initializing with all necessary data from the plot
      //@{
      public:
        ALEPHSelectronLimitAt208GeV();
      //@}
    };


    /// @brief A class to contain the limit data from ALEPH_PLB526_2002_206, figure 3b.
    class ALEPHSmuonLimitAt208GeV : public BaseLimitContainer {
      /// @name Point interpolation, conversion, and region checks
      //@{
      public:
        /// @brief Convert a point from pixel units to axis units
        P2 convertPt(double x, double y) const;
        /// @brief Check to see if the point is within the exclusion region
        bool isWithinExclusionRegion(double x, double y, double mZ) const;
      //@}

      /// @name Construction, initializing with all necessary data from the plot
      //@{
      public:
        ALEPHSmuonLimitAt208GeV();
      //@}
    };


    /// @brief A class to contain the limit data from ALEPH_PLB526_2002_206, figure 3c.
    class ALEPHStauLimitAt208GeV : public BaseLimitContainer {
      /// @name Point interpolation, conversion, and region checks
      //@{
      public:
        /// @brief Convert a point from pixel units to axis units
        P2 convertPt(double x, double y) const;
        /// @brief Check to see if the point is within the exclusion region
        bool isWithinExclusionRegion(double x, double y, double mZ) const;
      //@}

      /// @name Construction, initializing with all necessary data from the plot
      //@{
      public:
        ALEPHStauLimitAt208GeV();
      //@}
    };


  }
}
```


-------------------------------

Updated on 2022-08-02 at 23:34:56 +0000
