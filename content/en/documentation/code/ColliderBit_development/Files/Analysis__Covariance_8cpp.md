---
title: 'file analyses/Analysis_Covariance.cpp'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>Simulation of "Search for photonic signatures of gauge-mediated supersymmetry in 13 TeV pp collisions with the ATLAS detector".  |
| **[Gambit::ColliderBit](/documentation/code/namespaces/namespacegambit_1_1colliderbit/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::ColliderBit::Analysis_Covariance](/documentation/code/classes/classgambit_1_1colliderbit_1_1analysis__covariance/)** <br>Dummy analysis code with a hard-coded return including a SR covariance matrix.  |




## Source code

```
#include "gambit/ColliderBit/analyses/Analysis.hpp"
#include "gambit/ColliderBit/ATLASEfficiencies.hpp"

namespace Gambit {
  namespace ColliderBit {
    using namespace std;

      void AnalysisData::pythonize_me() const
      {
          static std::set<std::string> done; // Only want this printed out once for each analysis
          if(done.find(analysis_name)==done.end())
          {
             done.insert(analysis_name);
             std::ostringstream SR_names;
             std::ostringstream SR_n;
             std::ostringstream SR_b;
             std::ostringstream SR_b_sys;
             std::ostringstream SR_s_sys;
             std::ostringstream SR_s;
             SR_names << "a.SR_names = [";
             SR_n     << "a.SR_n     = [";
             SR_b     << "a.SR_b     = [";
             SR_b_sys << "a.SR_b_sys = [";
             //SR_s_sys << "a.SR_s_sys = [";
             //SR_s     << "a.SR_s     = [";
             int i = 0;
             for (auto srd = begin(); srd != end(); ++srd,++i)
             {
                SR_names << "\"" << srd->sr_label << "__i"<<i << "\", ";
                SR_n     << srd->n_obs     << ", ";
                SR_b     << srd->n_bkg   << ", ";
                SR_b_sys << srd->n_bkg_err << ", ";
                //SR_s_sys << srd->n_sig_MC_sys     << ", ";
                //SR_s     << srd->n_sig_MC       << ", ";
             }
             SR_names << "]";
             SR_n     << "]";
             SR_b     << "]";
             SR_b_sys << "]";
             //SR_s_sys << "]";
             //SR_s     << "]";
             std::ostringstream full;
             full << "a = Analysis(\""<<analysis_name<<"\")"<<std::endl;
             full << SR_names.str() << std::endl;
             full << SR_n.str()     << std::endl;
             full << SR_b.str()     << std::endl;
             full << SR_b_sys.str() << std::endl;
             //full << SR_s_sys.str() << std::endl;
             //full << SR_s.str()     << std::endl;
             if(hasCorrs())
             {
                 full << "a.cov = ";
                 Eigen::IOFormat PythonFmt(Eigen::FullPrecision, 0, ", ", ",\n", "[", "]", "[", "]");
                 full << srcov.format(PythonFmt) << std::endl;
             }
             full << "a.N_SR = len(a.SR_names)" << std::endl;
             if(hasCorrs())
             {
                 full << "if allow_corr: ";
             }
             full << "analyses += [a]" << std::endl << std::endl;
             std::cout << full.str();
          }
      }


    class Analysis_Covariance : public Analysis{
    private:

      // Variables that holds the number of events passing
      // signal region cuts
      double _numSR;

    public:

      // Required detector sim
      static constexpr const char* detector = "ATLAS";

      Analysis_Covariance()
      {
        set_analysis_name("Covariance");
        set_luminosity(30.); // fb
      }


      void run(const HEPUtils::Event*) {}

      void combine(const Analysis*) {}

      void collect_results()
      {
        // Now fill a results object with the result for two signal regions

        // add_result(SignalRegionData("SR label", n_obs, {n_sig_MC, n_sig_MC_sys}, {n_bkg, n_bkg_err}));
        // Note: n_sig_MC is usually incremented in the analysis code -- here we just hardcoded a value

        add_result(SignalRegionData("SR1", 100., {120, 0.}, {95., 9.5}));
        add_result(SignalRegionData("SR2", 10., {15, 0.}, {9., 4.}));

        // Hard-code a covariance matrix  between these (representing the bkg sys values above, rotated by 30 deg)
        Eigen::MatrixXd cov(2,2);
        cov << 71.6875, 32.1512,
               32.1512, 34.5625;
        set_covariance(cov);

      }


    protected:
      void analysis_specific_reset() {
        _numSR = 0;
      }



    };

    DEFINE_ANALYSIS_FACTORY(Covariance)

  }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:26 +0000
