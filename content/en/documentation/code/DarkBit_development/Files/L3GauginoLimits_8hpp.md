---
title: 'file limits/L3GauginoLimits.hpp'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/darkbit_developmentnamespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/darkbit_developmentnamespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::L3CharginoAllChannelsLimitAt188pt6GeV](/documentation/code/darkbit_developmentclasses/classgambit_1_1colliderbit_1_1l3charginoallchannelslimitat188pt6gev/)** <br>A class to contain the limit data from L3PLB_472_2000_420, figure 2a.  |
| class | **[Gambit::ColliderBit::L3CharginoLeptonicLimitAt188pt6GeV](/documentation/code/darkbit_developmentclasses/classgambit_1_1colliderbit_1_1l3charginoleptoniclimitat188pt6gev/)** <br>A class to contain the limit data from L3PLB_472_2000_420, figure 2b.  |
| class | **[Gambit::ColliderBit::L3NeutralinoAllChannelsLimitAt188pt6GeV](/documentation/code/darkbit_developmentclasses/classgambit_1_1colliderbit_1_1l3neutralinoallchannelslimitat188pt6gev/)** <br>A class to contain the limit data from L3PLB_472_2000_420, figure 3a.  |
| class | **[Gambit::ColliderBit::L3NeutralinoLeptonicLimitAt188pt6GeV](/documentation/code/darkbit_developmentclasses/classgambit_1_1colliderbit_1_1l3neutralinoleptoniclimitat188pt6gev/)** <br>A class to contain the limit data from L3PLB_472_2000_420, figure 3b.  |




## Source code

```
#include "gambit/ColliderBit/limits/BaseLimitContainer.hpp"

namespace Gambit {
  namespace ColliderBit {


    class L3CharginoAllChannelsLimitAt188pt6GeV : public BaseLimitContainer {

      public:
        P2 convertPt(double x, double y) const;
        bool isWithinExclusionRegion(double x, double y, double mZ) const;


      public:
        L3CharginoAllChannelsLimitAt188pt6GeV();
    };


    class L3CharginoLeptonicLimitAt188pt6GeV : public BaseLimitContainer {

      public:
        P2 convertPt(double x, double y) const;
        bool isWithinExclusionRegion(double x, double y, double mZ) const;


      public:
        L3CharginoLeptonicLimitAt188pt6GeV();
    };


    class L3NeutralinoAllChannelsLimitAt188pt6GeV : public BaseLimitContainer {

      public:
        P2 convertPt(double x, double y) const;
        bool isWithinExclusionRegion(double x, double y, double mZ) const;


      public:
        L3NeutralinoAllChannelsLimitAt188pt6GeV();
    };


    class L3NeutralinoLeptonicLimitAt188pt6GeV : public BaseLimitContainer {

      public:
        P2 convertPt(double x, double y) const;
        bool isWithinExclusionRegion(double x, double y, double mZ) const;


      public:
        L3NeutralinoLeptonicLimitAt188pt6GeV();
    };


  }
}
```


-------------------------------

Updated on 2022-08-01 at 17:31:44 +0000
