---
title: 'file examples/examples/SpecBit_tests.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |
| **[Gambit::SpecBit](/documentation/code/namespaces/namespacegambit_1_1specbit/)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[IN_SPECBIT](/documentation/code/files/examples_2specbit__tests_8cpp/#define-in-specbit)**  |
|  | **[QUERYMODELS](/documentation/code/files/examples_2specbit__tests_8cpp/#define-querymodels)**(MODEL) <br>Quick macro to simplify the check of Pipe::Models.  |

## Detailed Description


**Author**: Ben Farmer ([benjamin.farmer@fysik.su.se](mailto:benjamin.farmer@fysik.su.se)) 

**Date**: 2014 Sep - Dec, 2015 Jan - Mar

Functions of module SpecBit

These functions link ModelParameters to Spectrum objects in various ways.



------------------

Authors (add name and date if you modify):



------------------




## Macros Documentation

### define IN_SPECBIT

```
#define IN_SPECBIT 
```


### define QUERYMODELS

```
#define QUERYMODELS(
    MODEL
)
std::find(Pipe::Models->begin(), Pipe::Models->end(), MODEL) != Pipe::Models->end()
```

Quick macro to simplify the check of Pipe::Models. 

## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#include "gambit/Utils/gambit_module_headers.hpp"
#include "gambit/SpecBit/SpecBit_rollcall.hpp"
#include "gambit/SpecBit/external_examples.hpp"
#include "gambit/SpecBit/MSSMSpec.hpp"
#define IN_SPECBIT // Output tests to logger() rather than std::cout when run through SpecBit.
#include "gambit/SpecBit/SpecBit_externaltests.hpp"

// Flexible SUSY stuff (should not be needed by the rest of gambit)
#include "gambit/SpecBit/model_files_and_boxes.hpp"
#include "flexiblesusy/src/ew_input.hpp"
#include "flexiblesusy/src/numerics2.hpp"

namespace Gambit
{

  namespace SpecBit
  {
    using namespace LogTags;
    using namespace flexiblesusy;

    #define QUERYMODELS(MODEL) std::find(Pipe::Models->begin(), Pipe::Models->end(), MODEL) != Pipe::Models->end()

    void make_test_spectrum(SubSpectrum* &result)
    {
      typedef CMSSM_interface<ALGORITHM1> MI;
      static MI::Model FS_model; //start with empty flexiblesusy object
      // Or could use flexiblesusy classes directly; these two are equivalent in this case:
      //static CMSSM_slha<Two_scale> FS_model; //start with empty flexiblesusy object

      // Create model interface class (leaving input stuff with default values)
      MI model_interface(FS_model);

      // Create SubSpectrum object to wrap flexiblesusy object
      static MSSMSpec<MI> mssm(FS_model);

      // I think these objects should only get created once since they are static...
      // ...and they should be destructed automatically when the program ends.

      setup(mssm.model_interface.model); //fill with some parameters
      mssm.model_interface.model.calculate_DRbar_parameters(); //calculated DRbar masses
      mssm.model_interface.model.calculate_pole_masses();//now calculate pole masses

      // Check contents
      logger() << "This is specbit_tests. Checking SubSpectrum object contents..." << std::endl;
      if(TestMssmParGets(mssm, mssm.model_interface.model)==false){
          logger() << "TestMssmParGets fail." << std::endl;
          return;
       }
       if(TestMssmPoleGets(mssm, mssm.model_interface.model)==false){
          logger() << "TestMssmPoleGets fail." << std::endl;
          return;
       }
       //So now we have a mssm1 model object filled, as it will be
       //stored in Gambit after the spectrum generator has run
       // mssm.mass2_par_mapping(); //call mapping - this needs to be changed.

       mssm_manipulate(mssm);  //function can manipulate knowing the model

      // Store result for gambit to use
      result = &mssm;
    }

    void specbit_test_func1 (double &result)
    {
      // Access the pipes for this function to get model and parameter information
       using namespace Pipes::specbit_test_func1;
       std::cout << "Running specbit_test_func1" << std::endl;
       std::cout << "Retrieving Spectrum*" << std::endl;
       /*TAG*/ Spectrum spec = *Dep::MSSM_spectrum;

       std::cout << "Running spec_manipulate" << std::endl;
       // Clone the UV Spectum object so we can access a non-const version
       std::unique_ptr<SubSpectrum> spec2 = spec->get_UV()->clone();

       spec_manipulate(*spec2); //function can manipulate without knowing model.
    }

    void specbit_test_func2 (double &result)
    {
      std::cout << "Running specbit_test_func2" << std::endl;

      // TESTING
      // Direct access to flexiblesusy function, for testing
      std::cout << "Creating CMSSM_slha<Two_scale> object" << std::endl;
      CMSSM_slha<Two_scale> FS_model; //start with empty flexiblesusy object

      // Create model interface class (leaving input stuff with default values)
      std::cout << "Creating CMSSM_interface<Two_scale> object" << std::endl;
      CMSSM_interface<Two_scale> model_interface(FS_model);

      // Create SubSpectrum object to wrap flexiblesusy object
      std::cout << "Creating MSSMSpec<CMSSM_interface<Two_scale>> object" << std::endl;
      MSSMSpec<CMSSM_interface<Two_scale>> mssm(model_interface);

      // Test run functions
      std::cout << "SubSpectrum via MSSMSpec" << std::endl;
      std::cout << "mssm.GetScale() ="
          << mssm.GetScale() << std::endl;
      std::cout << "mHd2 = "
          << mssm.get_mass2_parameter("mHd2") << std::endl;
      std::cout << "mHu2 = "
          << mssm.get_mass2_parameter("mHu2") << std::endl;

      // Do it again using a SubSpectrum base pointer
      SubSpectrum* spec = &mssm;
      std::cout << "SubSpectrum via SubSpectrum*" << std::endl;
      std::cout << "spec->GetScale() ="
          << spec->GetScale() << std::endl;
      std::cout << "mHd2 = "
          << spec->get_mass2_parameter("mHd2") << std::endl;
      std::cout << "mHu2 = "
          << spec->get_mass2_parameter("mHu2") << std::endl;

      // Fill the model and do it again
      std::cout << "SubSpectrum via SubSpectrum* (filled)" << std::endl;
      setup(mssm.model_interface.model);
      std::cout << "spec->GetScale() ="
          << spec->GetScale() << std::endl;
      std::cout << "mHd2 = "
          << spec->get_mass2_parameter("mHd2") << std::endl;
      std::cout << "mHu2 = "
          << spec->get_mass2_parameter("mHu2") << std::endl;

    }

    void specbit_test_func3 (double &result)
    {
      // Requests a SubSpectrum object of capability SM_spectrum; test what we can retrieve from this
      using namespace Pipes::specbit_test_func3;
      const SubSpectrum* spec = *Dep::SM_subspectrum; //Test retrieve pointer to Spectrum object

      std::unique_ptr<SubSpectrum> spec2 = spec->clone();

      SM_checks(*spec2); // Run some tests on standard model parameters
      logger() << EOM;
      result = 0;
    }

    void specbit_test_Spectrum (double &result)
    {
      using namespace Pipes::specbit_test_Spectrum;
      /*TAG*/ Spectrum matched_spectra = *Dep::MSSM_spectrum;
      const SubSpectrum* sm = *Dep::SM_subspectrum;
      bool noRGE = runOptions->getValueOrDef<bool>(0,"noRGE"); // don't test running on skeleton Spectrum wrappers
      logger() << "Running specbit_test_Spectrum with noRGE="<<noRGE<<std::endl;
      logger() << EOM;
      Spectrum_test(matched_spectra,sm,noRGE); // Run consistency tests on Spectrum contents vs SMInputs
      logger() << EOM;
      result = 0;
    }

    void specbit_test_show_SMInputs(double &result)
    {
      using namespace Pipes::specbit_test_show_SMInputs;
      const SMInputs sminputs = *Dep::SMINPUTS;
      logger() << "Contents of SMInputs struct:" << std::endl;
      logger() << "alphainv: " << sminputs.alphainv << std::endl;
      logger() << "GF      : " << sminputs.GF       << std::endl;
      logger() << "alphaS  : " << sminputs.alphaS   << std::endl;
      logger() << "mZ      : " << sminputs.mZ       << std::endl;
      logger() << "mE      : " << sminputs.mE       << std::endl;
      logger() << "mMu     : " << sminputs.mMu      << std::endl;
      logger() << "mTau    : " << sminputs.mTau     << std::endl;
      logger() << "mNu1    : " << sminputs.mNu1     << std::endl;
      logger() << "mNu2    : " << sminputs.mNu2     << std::endl;
      logger() << "mNu3    : " << sminputs.mNu3     << std::endl;
      logger() << "mD      : " << sminputs.mD       << std::endl;
      logger() << "mU      : " << sminputs.mU       << std::endl;
      logger() << "mS      : " << sminputs.mS       << std::endl;
      logger() << "mCmC    : " << sminputs.mCmC     << std::endl;
      logger() << "mBmB    : " << sminputs.mBmB     << std::endl;
      logger() << "mT      : " << sminputs.mT       << std::endl;
      logger() << EOM;
      result = 0;
    }

    void test_Singlet_spectrum(bool &result)
    {
      using namespace Pipes::test_Singlet_spectrum;
      /*TAG*/ Spectrum spec = *Dep::SingletDM_spectrum;
      logger() << "Parameters from SingletDM_spectrum:" << std::endl;
      logger() << "Higgs pole mass  : " << spec->get_Pole_Mass("h0_1") << std::endl;
      logger() << "Higgs VEV        : " << spec->get_UV()->get_mass_parameter("v0") << std::endl;
      logger() << "Singlet pole mass: " << spec->get_Pole_Mass("S") << std::endl;
      logger() << EOM;

      logger() << "Parameters directly from ModelParameters functors:" << std::endl;
      logger() << "Higgs pole mass  : " << *Param.at("mH") << std::endl;
      logger() << "Higgs VEV        : " << *Param.at("vev") << std::endl;
      logger() << "Singlet pole mass: " << *Param.at("mass") << std::endl;
      logger() << EOM;

      result = 0;

    }

  } // end namespace SpecBit
} // end namespace Gambit
```


-------------------------------

Updated on 2022-08-01 at 12:13:24 +0000
