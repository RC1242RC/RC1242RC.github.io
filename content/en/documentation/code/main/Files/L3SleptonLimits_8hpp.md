---
title: 'file limits/L3SleptonLimits.hpp'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/main/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/main/namespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::L3SelectronLimitAt205GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1l3selectronlimitat205gev/)** <br>A class to contain the limit data from L3_PLB580_2004_37, figure 2a.  |
| class | **[Gambit::ColliderBit::L3SmuonLimitAt205GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1l3smuonlimitat205gev/)** <br>A class to contain the limit data from L3_PLB580_2004_37, figure 2b.  |
| class | **[Gambit::ColliderBit::L3StauLimitAt205GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1l3staulimitat205gev/)** <br>A class to contain the limit data from L3_PLB580_2004_37, figure 2c.  |




## Source code

```
#pragma once
#include "gambit/ColliderBit/limits/BaseLimitContainer.hpp"

namespace Gambit {
  namespace ColliderBit {


        static constexpr double sqrtsGeV = 205;
    /// @brief A class to contain the limit data from L3_PLB580_2004_37, figure 2a.
    class L3SelectronLimitAt205GeV : public BaseLimitContainer {
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
        L3SelectronLimitAt205GeV();
      //@}
    };


    /// @brief A class to contain the limit data from L3_PLB580_2004_37, figure 2b.
    class L3SmuonLimitAt205GeV : public BaseLimitContainer {
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
        L3SmuonLimitAt205GeV();
      //@}
    };


    /// @brief A class to contain the limit data from L3_PLB580_2004_37, figure 2c.
    class L3StauLimitAt205GeV : public BaseLimitContainer {
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
        L3StauLimitAt205GeV();
      //@}
    };


  }
}
```


-------------------------------

Updated on 2022-08-03 at 02:29:33 +0000
