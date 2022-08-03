---
title: 'file limits/OPALGauginoLimits.hpp'

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
| class | **[Gambit::ColliderBit::OPALCharginoHadronicLimitAt208GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1opalcharginohadroniclimitat208gev/)** <br>A class to contain the limit data from OPAL_EPJC35_2004_1, figure 5b.  |
| class | **[Gambit::ColliderBit::OPALCharginoSemiLeptonicLimitAt208GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1opalcharginosemileptoniclimitat208gev/)** <br>A class to contain the limit data from OPAL_EPJC35_2004_1, figure 6b.  |
| class | **[Gambit::ColliderBit::OPALCharginoLeptonicLimitAt208GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1opalcharginoleptoniclimitat208gev/)** <br>A class to contain the limit data from OPAL_EPJC35_2004_1, figure 7b.  |
| class | **[Gambit::ColliderBit::OPALCharginoAllChannelsLimitAt208GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1opalcharginoallchannelslimitat208gev/)** <br>A class to contain the limit data from OPAL_EPJC35_2004_1, figure 8b.  |
| class | **[Gambit::ColliderBit::OPALNeutralinoHadronicLimitAt208GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1opalneutralinohadroniclimitat208gev/)** <br>A class to contain the limit data from OPAL_EPJC35_2004_1, figure 9b.  |
| class | **[Gambit::ColliderBit::OPALNeutralinoHadronicViaZLimitAt208GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1opalneutralinohadronicviazlimitat208gev/)** <br>A class to contain the limit data from OPAL_EPJC35_2004_1, figure 9b.  |




## Source code

```
#pragma once
#include "gambit/ColliderBit/limits/BaseLimitContainer.hpp"

namespace Gambit {
  namespace ColliderBit {


    /// @brief A class to contain the limit data from OPAL_EPJC35_2004_1, figure 5b.
    class OPALCharginoHadronicLimitAt208GeV : public BaseLimitContainer {
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
        OPALCharginoHadronicLimitAt208GeV();
      //@}
    };


    /// @brief A class to contain the limit data from OPAL_EPJC35_2004_1, figure 6b.
    class OPALCharginoSemiLeptonicLimitAt208GeV : public BaseLimitContainer {
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
        OPALCharginoSemiLeptonicLimitAt208GeV();
      //@}
    };


    /// @brief A class to contain the limit data from OPAL_EPJC35_2004_1, figure 7b.
    class OPALCharginoLeptonicLimitAt208GeV : public BaseLimitContainer {
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
        OPALCharginoLeptonicLimitAt208GeV();
      //@}
    };


    /// @brief A class to contain the limit data from OPAL_EPJC35_2004_1, figure 8b.
    class OPALCharginoAllChannelsLimitAt208GeV : public BaseLimitContainer {
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
        OPALCharginoAllChannelsLimitAt208GeV();
      //@}
    };


    /// @brief A class to contain the limit data from OPAL_EPJC35_2004_1, figure 9b.
    class OPALNeutralinoHadronicLimitAt208GeV : public BaseLimitContainer {
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
        OPALNeutralinoHadronicLimitAt208GeV();
      //@}
    };


    /// @brief A class to contain the limit data from OPAL_EPJC35_2004_1, figure 9b.
    class OPALNeutralinoHadronicViaZLimitAt208GeV : public BaseLimitContainer {
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
        OPALNeutralinoHadronicViaZLimitAt208GeV();
      //@}
    };


  }
}
```


-------------------------------

Updated on 2022-08-03 at 03:17:02 +0000
