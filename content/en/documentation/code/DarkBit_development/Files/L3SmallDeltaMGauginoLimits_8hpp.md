---
title: 'file limits/L3SmallDeltaMGauginoLimits.hpp'

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
| class | **[Gambit::ColliderBit::L3ChargedGauginoSmallDeltaMWithHeavySneutrinoLimitAt188pt6GeV](/documentation/code/darkbit_development/classes/classgambit_1_1colliderbit_1_1l3chargedgauginosmalldeltamwithheavysneutrinolimitat188pt6gev/)** <br>A class to contain the limit data from L3PLB_482_2000_31, figure 5a.  |
| class | **[Gambit::ColliderBit::L3ChargedGauginoSmallDeltaMAnySneutrinoLimitAt188pt6GeV](/documentation/code/darkbit_development/classes/classgambit_1_1colliderbit_1_1l3chargedgauginosmalldeltamanysneutrinolimitat188pt6gev/)** <br>A class to contain the limit data from L3PLB_482_2000_31, figure 5b.  |
| class | **[Gambit::ColliderBit::L3ChargedHiggsinoSmallDeltaMLimitAt188pt6GeV](/documentation/code/darkbit_development/classes/classgambit_1_1colliderbit_1_1l3chargedhiggsinosmalldeltamlimitat188pt6gev/)** <br>A class to contain the limit data from L3PLB_482_2000_31, figure 5c.  |




## Source code

```
#pragma once
#include "gambit/ColliderBit/limits/BaseLimitContainer.hpp"

namespace Gambit {
  namespace ColliderBit {


    /// @brief A class to contain the limit data from L3PLB_482_2000_31, figure 5a.
    class L3ChargedGauginoSmallDeltaMWithHeavySneutrinoLimitAt188pt6GeV : public BaseLimitContainer {
      /// @name Point interpolation, conversion, and region checks
      //@{
      public:
        /// @brief Convert a point from pixel units to axis units
        P2 convertPt(double x, double y) const;
        /// @brief Check to see if the point is within the exclusion region
        bool isWithinExclusionRegion(double x, double y, double) const;
      //@}

      /// @name Construction, initializing with all necessary data from the plot
      //@{
      public:
        L3ChargedGauginoSmallDeltaMWithHeavySneutrinoLimitAt188pt6GeV();
      //@}
    };


    /// @brief A class to contain the limit data from L3PLB_482_2000_31, figure 5b.
    class L3ChargedGauginoSmallDeltaMAnySneutrinoLimitAt188pt6GeV : public BaseLimitContainer {
      /// @name Point interpolation, conversion, and region checks
      //@{
      public:
        /// @brief Convert a point from pixel units to axis units
        P2 convertPt(double x, double y) const;
        /// @brief Check to see if the point is within the exclusion region
        bool isWithinExclusionRegion(double x, double y, double) const;
      //@}

      /// @name Construction, initializing with all necessary data from the plot
      //@{
      public:
        L3ChargedGauginoSmallDeltaMAnySneutrinoLimitAt188pt6GeV();
      //@}
    };


    /// @brief A class to contain the limit data from L3PLB_482_2000_31, figure 5c.
    class L3ChargedHiggsinoSmallDeltaMLimitAt188pt6GeV : public BaseLimitContainer {
      /// @name Point interpolation, conversion, and region checks
      //@{
      public:
        /// @brief Convert a point from pixel units to axis units
        P2 convertPt(double x, double y) const;
        /// @brief Check to see if the point is within the exclusion region
        bool isWithinExclusionRegion(double x, double y, double) const;
      //@}

      /// @name Construction, initializing with all necessary data from the plot
      //@{
      public:
        L3ChargedHiggsinoSmallDeltaMLimitAt188pt6GeV();
      //@}
    };


  }
}
```


-------------------------------

Updated on 2022-08-03 at 00:00:59 +0000
