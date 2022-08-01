---
title: 'file gm2calc_1_3_0/gm2calc_1_3_0/abstract_MSSMNoFV_onshell_physical.hpp'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| namespace | **[CAT_3](/documentation/code/files/gm2calc__1__3__0_2abstract__mssmnofv__onshell__physical_8hpp/#function-cat-3)**(BACKENDNAME , _ , SAFE_VERSION ) |


## Functions Documentation

### function CAT_3

```
namespace CAT_3(
    BACKENDNAME ,
    _ ,
    SAFE_VERSION 
)
```




## Source code

```
#ifndef __abstract_MSSMNoFV_onshell_physical_gm2calc_1_3_0_hpp__
#define __abstract_MSSMNoFV_onshell_physical_gm2calc_1_3_0_hpp__

#include <cstddef>
#include <iostream>
#include <ostream>
#include <Eigen/Core>
#include "gambit/Backends/abstractbase.hpp"
#include "forward_decls_abstract_classes.hpp"
#include "forward_decls_wrapper_classes.hpp"

#include "identification.hpp"

namespace CAT_3(BACKENDNAME,_,SAFE_VERSION)
{
   
   
   namespace gm2calc
   {
      class Abstract_MSSMNoFV_onshell_physical : public virtual AbstractBase
      {
         public:
   
            virtual void clear() =0;
   
            virtual void convert_to_hk() =0;
   
            virtual void convert_to_slha() =0;
   
            virtual void print(::std::basic_ostream<char, std::char_traits<char> >&) const =0;
   
            virtual double& MVG_ref__BOSS() =0;
   
            virtual double& MGlu_ref__BOSS() =0;
   
            virtual double& MVP_ref__BOSS() =0;
   
            virtual double& MVZ_ref__BOSS() =0;
   
            virtual double& MFd_ref__BOSS() =0;
   
            virtual double& MFs_ref__BOSS() =0;
   
            virtual double& MFb_ref__BOSS() =0;
   
            virtual double& MFu_ref__BOSS() =0;
   
            virtual double& MFc_ref__BOSS() =0;
   
            virtual double& MFt_ref__BOSS() =0;
   
            virtual double& MFve_ref__BOSS() =0;
   
            virtual double& MFvm_ref__BOSS() =0;
   
            virtual double& MFvt_ref__BOSS() =0;
   
            virtual double& MFe_ref__BOSS() =0;
   
            virtual double& MFm_ref__BOSS() =0;
   
            virtual double& MFtau_ref__BOSS() =0;
   
            virtual double& MSveL_ref__BOSS() =0;
   
            virtual double& MSvmL_ref__BOSS() =0;
   
            virtual double& MSvtL_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MSd_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MSu_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MSe_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MSm_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MStau_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MSs_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MSc_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MSb_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MSt_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& Mhh_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MAh_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MHpm_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 4, 1, 0, 4, 1>& MChi_ref__BOSS() =0;
   
            virtual ::Eigen::Array<double, 2, 1, 0, 2, 1>& MCha_ref__BOSS() =0;
   
            virtual double& MVWm_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZD_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZU_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZE_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZM_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZTau_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZS_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZC_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZB_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZT_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZH_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZA_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<double, 2, 2, 0, 2, 2>& ZP_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<std::complex<double>, 4, 4, 0, 4, 4>& ZN_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<std::complex<double>, 2, 2, 0, 2, 2>& UM_ref__BOSS() =0;
   
            virtual ::Eigen::Matrix<std::complex<double>, 2, 2, 0, 2, 2>& UP_ref__BOSS() =0;
   
         public:
            virtual void pointer_assign__BOSS(Abstract_MSSMNoFV_onshell_physical*) =0;
            virtual Abstract_MSSMNoFV_onshell_physical* pointer_copy__BOSS() =0;
   
         private:
            MSSMNoFV_onshell_physical* wptr;
            bool delete_wrapper;
         public:
            MSSMNoFV_onshell_physical* get_wptr() { return wptr; }
            void set_wptr(MSSMNoFV_onshell_physical* wptr_in) { wptr = wptr_in; }
            bool get_delete_wrapper() { return delete_wrapper; }
            void set_delete_wrapper(bool del_wrp_in) { delete_wrapper = del_wrp_in; }
   
         public:
            Abstract_MSSMNoFV_onshell_physical()
            {
               wptr = 0;
               delete_wrapper = false;
            }
   
            Abstract_MSSMNoFV_onshell_physical(const Abstract_MSSMNoFV_onshell_physical&)
            {
               wptr = 0;
               delete_wrapper = false;
            }
   
            Abstract_MSSMNoFV_onshell_physical& operator=(const Abstract_MSSMNoFV_onshell_physical&) { return *this; }
   
            virtual void init_wrapper() =0;
   
            MSSMNoFV_onshell_physical* get_init_wptr()
            {
               init_wrapper();
               return wptr;
            }
   
            MSSMNoFV_onshell_physical& get_init_wref()
            {
               init_wrapper();
               return *wptr;
            }
   
            virtual ~Abstract_MSSMNoFV_onshell_physical() =0;
      };
   }
   
}


#include "gambit/Backends/backend_undefs.hpp"


#endif /* __abstract_MSSMNoFV_onshell_physical_gm2calc_1_3_0_hpp__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:20 +0000
