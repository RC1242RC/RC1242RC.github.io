---
title: 'file SpecBit/MSSMSpec_head.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::SpecBit](/documentation/code/namespaces/namespacegambit_1_1specbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Gambit::SpecTraits< SpecBit::MSSMSpec< MI > >](/documentation/code/classes/structgambit_1_1spectraits_3_01specbit_1_1mssmspec_3_01mi_01_4_01_4/)**  |
| class | **[Gambit::SpecBit::MSSMSpec](/documentation/code/classes/classgambit_1_1specbit_1_1mssmspec/)**  |
| struct | **[Gambit::SpecBit::MSSM_strs](/documentation/code/classes/structgambit_1_1specbit_1_1mssm__strs/)**  |

## Detailed Description


**Author**: 

  * Peter Athron ([peter.athron@coepp.org.au](mailto:peter.athron@coepp.org.au)) 
  * Ben Farmer ([benjamin.farmer@fysik.su.se](mailto:benjamin.farmer@fysik.su.se)) 


**Date**: 

  * 2014, 2015 Jan, Feb, Mar
  * 2014, 2015 Jan, Feb, Mar


"Header" declarations for MSSMSpec class (definitions in another header file due to this being a template class)



------------------

Authors:



------------------




## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#ifndef MSSMSPEC_HEAD_H
#define MSSMSPEC_HEAD_H

#include "gambit/Elements/spec.hpp"
#include "gambit/Utils/util_functions.hpp"
#include "gambit/Models/SpectrumContents/RegisteredSpectra.hpp"

// Flexible SUSY stuff (should not be needed by the rest of gambit)
#include "flexiblesusy/config/config.h"

namespace Gambit
{
   namespace SpecBit
   {
      template <class MI>  // "MI" for "Model_interface"
      class MSSMSpec;
   }

   // For example of what kind of class MI needs to be, see
   // SpecBit/include/model_files_and_boxes.hpp,
   // MODELNAME_interface class

   template <class MI>
   struct SpecTraits<SpecBit::MSSMSpec<MI>>
   {
      static std::string name() { return "MSSMSpec"; }
      typedef SpectrumContents::MSSM Contents;
      typedef typename MI::Model Model;
      typedef DummyInput Input;
   };

   namespace SpecBit
   {
      template <class MI>
      class MSSMSpec : public Spec<MSSMSpec<MI>>
      {
         private:
            str backend_name;
            str backend_version;
            static const int _index_offset;

         public:
            typedef MSSMSpec<MI> Self;
            typedef typename Self::MTget MTget;
            typedef typename Self::MTset MTset;
            typedef typename Self::GetterMaps GetterMaps;
            typedef typename Self::SetterMaps SetterMaps;
            typedef typename SpecTraits<Self>::Model Model;
            typedef typename SpecTraits<Self>::Input Input;

            static int index_offset() {return _index_offset;}
            virtual double GetScale() const;
            virtual void SetScale(double scale);
            virtual void RunToScaleOverride(double scale);

            //constructors
            MSSMSpec();
            MSSMSpec(MI, str backend_name, str backend_version);

            //Could more constructors to interface with other generators

            // These are public for now so that SpecBit_tests.cpp can access them
            MI model_interface;

            // Dummy placeholder for potential Inputs object
            DummyInput dummyinput;

            //Destructor
            virtual ~MSSMSpec();

            // Functions to interface Model and Input objects with the base 'Spec' class
            Model& get_Model() { return model_interface.model; }
            Input& get_Input() { return dummyinput; /*unused here, but needs to be defined for the interface*/ }
            const Model& get_Model() const { return model_interface.model; }
            const Input& get_Input() const { return dummyinput; /*unused here, but needs to be defined for the interface*/ }

            //some model independent stuff
            virtual double get_lsp_mass(int & particle_type,
                                        int & row, int & col) const;
            virtual int get_numbers_stable_particles() const;
            //may use something like this to pass error to Gambit
            virtual std::string AccessError(std::string state) const;

            // Fill an SLHAea object with spectrum information
            virtual void add_to_SLHAea(int slha_version, SLHAstruct& slha) const;

            // Should work from any flexiblesusy model object with the same particle content as the MSSM
            template<class MSSMlike>
            void get_lowe_data_from(MSSMlike &othermodel)
            {
              // Maybe we can copy the pole masses etc directly, but since I am not sure how to do that, for now I am just copying the soft parameters and recomputing the pole masses. Will have to chat to Peter about this.
              // Update: Yeah Peter says we definitely should copy the pole and drbar masses directly :).

              // Actually, we may want to instead write out the data from one object into SLHAea, and then read it into the other. That will let us copy data out of (say) softsusy objects into flexiblesusy ones, and vice-versa, more easily. Of course that will be restricted to the SLHA compatible models... Perhaps we can overload this function to deal with various inputs.
              //model = othermodel;
              typename MI::Model& model = model_interface.model;

              model.set_scale( othermodel.get_scale() );
              model.set_Yu( othermodel.get_Yu() );

              //model.calculate_DRbar_parameters();
              //model.calculate_pole_masses();

              return;
            }

            // Overload of this function to just easily copy the othermodel object
            // if it is of type Model
            void get_external_spectrum(typename MI::Model& othermodel)
            {
              model_interface.model = othermodel;
              return;
            }

            static GetterMaps fill_getter_maps();
            static SetterMaps fill_setter_maps();

      };


     struct MSSM_strs
     {
       MSSM_strs();
       static const str BMu ;
       static const str mHd2;
       static const str mHu2;
       static const str mq2;
       static const str ml2;
       static const str md2;
       static const str mu2;
       static const str me2;
       static const str M1;
       static const str M2;
       static const str M3;
       static const str Mu;
       static const str vu;
       static const str vd;
       static const str TYd;
       static const str TYe;
       static const str TYu;
       static const str ad;
       static const str ae;
       static const str au;
       static const str g1;
       static const str g2;
       static const str g3;
       static const str tanbeta;
       static const str sinW2;
       static const str mA2;
       static const str Yd;
       static const str Yu;
       static const str Ye;

       static const str gluino;
       static const str A0;
       static const str Hplus;
       static const str Hminus;
       static const str Goldstone0;
       static const str Goldstoneplus;
       static const str Goldstoneminus;
       static const str Wplus;
       static const str Wminus;
       static const str Z0;


       static const str su     ;
       static const str sd  ;
       static const str se  ;
       static const str snu ;
       static const str chiplus;
       static const str chi0   ;
       static const str h0  ;
       static const str subar  ;
       static const str sdbar  ;
       static const str seplus ;
       static const str snubar ;
       static const str chiminus;

       // TODO: replace with a more integrated system

       static const std::vector<str> pole_mass_strs;
       static const std::vector<str> pole_mass_pred;
       static const std::vector<str> pole_mass_strs_1;
       static const std::vector<str> pole_mass_strs_1_6;
       static const std::vector<str> pole_mass_strs_1_4;
       static const std::vector<str> pole_mass_strs_1_3;
       static const std::vector<str> pole_mass_strs_1_2;

       static const std::vector<str> pole_mixing_strs_2_6x6;
       static const std::vector<str> pole_mixing_strs_2_4x4;
       static const std::vector<str> pole_mixing_strs_2_3x3;
       static const std::vector<str> pole_mixing_strs_2_2x2;

       static const std::vector<str> mass2_strs;
       static const std::vector<str> mass2_strs_2_3x3;

       static const std::vector<str> mass1_strs;
       static const std::vector<str> mass1_strs_2_3x3;

       static const std::vector<str> dimensionless_strs;
       static const std::vector<str> dimensionless_strs_2_3x3;


     };


   } // end SpecBit namespace
} // end Gambit namespace

#undef MAPS
#undef MAPS1
#endif
```


-------------------------------

Updated on 2022-08-01 at 12:13:18 +0000
