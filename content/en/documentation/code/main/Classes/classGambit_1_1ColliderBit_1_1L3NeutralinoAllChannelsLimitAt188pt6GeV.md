---
title: 'class Gambit::ColliderBit::L3NeutralinoAllChannelsLimitAt188pt6GeV'
description: 'A class to contain the limit data from L3PLB_472_2000_420, figure 3a. '

---








A class to contain the limit data from L3PLB_472_2000_420, figure 3a. 


`#include <L3GauginoLimits.hpp>`

Inherits from [Gambit::ColliderBit::BaseLimitContainer](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual [P2](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1p2/) | **[convertPt](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1l3neutralinoallchannelslimitat188pt6gev/#function-convertpt)**(double x, double y) const<br>Convert a point from pixel units to axis units.  |
| virtual bool | **[isWithinExclusionRegion](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1l3neutralinoallchannelslimitat188pt6gev/#function-iswithinexclusionregion)**(double x, double y, double mZ) const<br>Check to see if the point is within the exclusion region.  |
| | **[L3NeutralinoAllChannelsLimitAt188pt6GeV](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1l3neutralinoallchannelslimitat188pt6gev/#function-l3neutralinoallchannelslimitat188pt6gev)**() |

## Additional inherited members

**Protected Types inherited from [Gambit::ColliderBit::BaseLimitContainer](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/)**

|                | Name           |
| -------------- | -------------- |
| typedef std::vector< [P2](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1p2/) > | **[Corners](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#typedef-corners)**  |
| typedef std::vector< [LineSegment](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1linesegment/) > | **[Contours](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#typedef-contours)**  |
| typedef Contours * | **[ContoursPointer](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#typedef-contourspointer)**  |
| typedef std::map< unsigned, Contours * > | **[LimitContours](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#typedef-limitcontours)**  |
| typedef std::pair< unsigned, Contours * > | **[LimitContourEntry](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#typedef-limitcontourentry)**  |

**Public Functions inherited from [Gambit::ColliderBit::BaseLimitContainer](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/)**

|                | Name           |
| -------------- | -------------- |
| | **[BaseLimitContainer](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#function-baselimitcontainer)**() |
| virtual | **[~BaseLimitContainer](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#function-~baselimitcontainer)**() |
| virtual double | **[specialLimit](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#function-speciallimit)**(double , double ) const<br>Return the limit value outside of the exclusion region.  |
| double | **[limitAverage](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#function-limitaverage)**(double x, double y, double mZ) const<br>Two-pi averaging interpolator to find limits between limit curves.  |
| void | **[dumpPlotData](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#function-dumpplotdata)**(double xlow, double xhigh, double ylow, double yhigh, double mZ, std::string filename, int ngrid =100) const<br>Dump limit average data into a file for average debugging.  |
| void | **[dumpLightPlotData](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#function-dumplightplotdata)**(std::string filename, int nperLine =20) const<br>Dump input limit contour data into a file for limit debugging.  |

**Protected Attributes inherited from [Gambit::ColliderBit::BaseLimitContainer](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/)**

|                | Name           |
| -------------- | -------------- |
| std::vector< double > | **[_limitValuesSorted](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#variable--limitvaluessorted)**  |
| LimitContours | **[_limitContours](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#variable--limitcontours)**  |
| [P2](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1p2/) | **[_externalPoint](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#variable--externalpoint)**  |


## Public Functions Documentation

### function convertPt

```
virtual P2 convertPt(
    double x,
    double y
) const
```

Convert a point from pixel units to axis units. 

**Reimplements**: [Gambit::ColliderBit::BaseLimitContainer::convertPt](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#function-convertpt)


### function isWithinExclusionRegion

```
virtual bool isWithinExclusionRegion(
    double x,
    double y,
    double mZ
) const
```

Check to see if the point is within the exclusion region. 

**Reimplements**: [Gambit::ColliderBit::BaseLimitContainer::isWithinExclusionRegion](/documentation/code/main/classes/classgambit_1_1colliderbit_1_1baselimitcontainer/#function-iswithinexclusionregion)


### function L3NeutralinoAllChannelsLimitAt188pt6GeV

```
L3NeutralinoAllChannelsLimitAt188pt6GeV()
```


-------------------------------

Updated on 2022-08-03 at 12:57:56 +0000