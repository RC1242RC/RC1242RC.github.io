---
title: 'file SpecBit/SpecBit_tests_rollcall.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CAPABILITY](/documentation/code/gambit_2/files/specbit__tests__rollcall_8hpp/#define-capability)** <br>Functions to test Spectrum objects.  |
|  | **[FUNCTION](/documentation/code/gambit_2/files/specbit__tests__rollcall_8hpp/#define-function)**  |
|  | **[FUNCTION](/documentation/code/gambit_2/files/specbit__tests__rollcall_8hpp/#define-function)**  |
|  | **[CAPABILITY](/documentation/code/gambit_2/files/specbit__tests__rollcall_8hpp/#define-capability)** <br>Functions to test Spectrum objects.  |
|  | **[FUNCTION](/documentation/code/gambit_2/files/specbit__tests__rollcall_8hpp/#define-function)**  |
|  | **[FUNCTION](/documentation/code/gambit_2/files/specbit__tests__rollcall_8hpp/#define-function)**  |
|  | **[CAPABILITY](/documentation/code/gambit_2/files/specbit__tests__rollcall_8hpp/#define-capability)** <br>Functions to test Spectrum objects.  |
|  | **[FUNCTION](/documentation/code/gambit_2/files/specbit__tests__rollcall_8hpp/#define-function)**  |

## Detailed Description


**Author**: 

  * Ben Farmer ([benjamin.farmer@fysik.su.se](mailto:benjamin.farmer@fysik.su.se)) 
  * Tomas Gonzalo ([t.e.gonzalo@fys.uio.no](mailto:t.e.gonzalo@fys.uio.no)) 


**Date**: 

  * 2015 Aug
  * 2016 Mar, June, Sept


Module function declarations for SpecBit_tests.cpp (new tests)



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define CAPABILITY

```
#define CAPABILITY MathematicaTest
```

Functions to test Spectrum objects. 

### define FUNCTION

```
#define FUNCTION Math_test
```


### define FUNCTION

```
#define FUNCTION Math_test
```


### define CAPABILITY

```
#define CAPABILITY MathematicaTest
```

Functions to test Spectrum objects. 

### define FUNCTION

```
#define FUNCTION Math_test
```


### define FUNCTION

```
#define FUNCTION Math_test
```


### define CAPABILITY

```
#define CAPABILITY MathematicaTest
```

Functions to test Spectrum objects. 

### define FUNCTION

```
#define FUNCTION Math_test
```


## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************
///  \file
///
///  Module function declarations for SpecBit_tests.cpp (new tests)
///
///  *********************************************
///
///  Authors (add name and date if you modify):
///
///  \author Ben Farmer
///          (benjamin.farmer@fysik.su.se)
///  \date 2015 Aug
///
///  \author Tomas Gonzalo
///          (t.e.gonzalo@fys.uio.no)
///  \date 2016 Mar, June, Sept
///
///  *********************************************

#ifndef __SpecBit_tests_hpp__
#define __SpecBit_tests_hpp__

   /// @{ Functions to test Spectrum objects

   #define CAPABILITY MathematicaTest
   START_CAPABILITY

     #define FUNCTION Math_test
     START_FUNCTION(bool)
     BACKEND_REQ(MathTest, (), double, (const int&,const int&))
     #undef FUNCTION

     #define FUNCTION SUSYHD_test
     START_FUNCTION(bool)
     DEPENDENCY(prec_mh, triplet<double>)
     #undef FUNCTION

   #undef CAPABILITY

   #define CAPABILITY run_MSSMspectrum_test
   START_CAPABILITY

     #define FUNCTION MSSMspectrum_test
     START_FUNCTION(bool)
     DEPENDENCY(unimproved_MSSM_spectrum, Spectrum)
     #undef FUNCTION

     #define FUNCTION SPheno_MSSM_test
     START_FUNCTION(bool)
     DEPENDENCY(unimproved_MSSM_spectrum, Spectrum)
     #undef FUNCTION

   #undef CAPABILITY

   #define CAPABILITY run_light_quark_test
   START_CAPABILITY

     #define FUNCTION light_quark_test
     START_FUNCTION(bool)
     DEPENDENCY(qedqcd_subspectrum, const SubSpectrum*)
     #undef FUNCTION

   #undef CAPABILITY

   /// @}

#endif
```


-------------------------------

Updated on 2022-08-03 at 06:57:09 +0000
