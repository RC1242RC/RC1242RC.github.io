---
title: 'file src/Utils.cpp'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::ColliderBit](/documentation/code/namespaces/namespacegambit_1_1colliderbit/)**  |




## Source code

```
#include "gambit/ColliderBit/Utils.hpp"
#include "gambit/Utils/threadsafe_rng.hpp"
#include <iostream>
using namespace std;

namespace Gambit {
  namespace ColliderBit {


    bool random_bool(double eff) {
      return Random::draw() < eff;
    }


    void filtereff(std::vector<const HEPUtils::Particle*>& particles, double eff, bool do_delete) {
      if (particles.empty()) return;
      auto keptParticlesEnd = std::remove_if(particles.begin(), particles.end(),
                                             [&](const HEPUtils::Particle* p) {
                                               const bool rm = !random_bool(eff);
                                               if (do_delete && rm) delete p;
                                               return rm;
                                             } );
      particles.erase(keptParticlesEnd, particles.end());
    }


    void filtereff(std::vector<const HEPUtils::Particle*>& particles, std::function<double(const HEPUtils::Particle*)> eff_fn, bool do_delete) {
      if (particles.empty()) return;
      auto keptParticlesEnd = std::remove_if(particles.begin(), particles.end(),
                                             [&](const HEPUtils::Particle* p) {
                                               const double eff = eff_fn(p);
                                               const bool rm = !random_bool(eff);
                                               if (do_delete && rm) delete p;
                                               return rm;
                                             } );
      particles.erase(keptParticlesEnd, particles.end());
    }


    // Utility function for filtering a supplied particle vector by sampling wrt a binned 1D efficiency map in pT
    void filtereff_pt(std::vector<const HEPUtils::Particle*>& particles, const HEPUtils::BinnedFn1D<double>& eff_pt, bool do_delete) {
      if (particles.empty()) return;
      auto keptParticlesEnd = std::remove_if(particles.begin(), particles.end(),
                                             [&](const HEPUtils::Particle* p) {
                                               const bool rm = !random_bool(eff_pt, p->pT());
                                               if (do_delete && rm) delete p;
                                               return rm;
                                             } );
      particles.erase(keptParticlesEnd, particles.end());
    }


    // Utility function for filtering a supplied particle vector by sampling wrt a binned 2D efficiency map in |eta| and pT
    void filtereff_etapt(std::vector<const HEPUtils::Particle*>& particles, const HEPUtils::BinnedFn2D<double>& eff_etapt, bool do_delete) {
      if (particles.empty()) return;
      auto keptParticlesEnd = std::remove_if(particles.begin(), particles.end(),
                                             [&](const HEPUtils::Particle* p) {
                                               const bool rm = !random_bool(eff_etapt, p->abseta(), p->pT());
                                               if (do_delete && rm) delete p;
                                               return rm;
                                             } );
      particles.erase(keptParticlesEnd, particles.end());
    }


    // Utility function for returning a collection of same-flavour, oppsosite-sign particle pairs
    std::vector<std::vector<const HEPUtils::Particle*>> getSFOSpairs(std::vector<const HEPUtils::Particle*> particles) {
      std::vector<std::vector<const HEPUtils::Particle*>> SFOSpair_container;
      for (size_t ip1=0; ip1<particles.size(); ip1++) {
        for (size_t ip2=ip1+1; ip2<particles.size(); ip2++) {
          if (particles[ip1]->abspid()==particles[ip2]->abspid() && particles[ip1]->pid()!=particles[ip2]->pid()) {
            std::vector<const HEPUtils::Particle*> SFOSpair;
            SFOSpair.push_back(particles[ip1]);
            SFOSpair.push_back(particles[ip2]);
            SFOSpair_container.push_back(SFOSpair);
          }
        }
      }
      return SFOSpair_container;
    }


    // Utility function for returning a collection of oppsosite-sign particle pairs
    std::vector<std::vector<const HEPUtils::Particle*>> getOSpairs(std::vector<const HEPUtils::Particle*> particles) {
      std::vector<std::vector<const HEPUtils::Particle*>> OSpair_container;
      for (size_t ip1=0;ip1<particles.size();ip1++) {
        for (size_t ip2=ip1+1; ip2<particles.size(); ip2++) {
          if (particles[ip1]->pid()*particles[ip2]->pid()<0.) {
            std::vector<const HEPUtils::Particle*> OSpair;
            OSpair.push_back(particles[ip1]);
            OSpair.push_back(particles[ip2]);
            OSpair_container.push_back(OSpair);
          }
        }
      }
      return OSpair_container;
    }


    // Utility function for returning a collection of same-sign particle pairs
    std::vector<std::vector<const HEPUtils::Particle*>> getSSpairs(std::vector<const HEPUtils::Particle*> particles) {
      std::vector<std::vector<const HEPUtils::Particle*>> SSpair_container;
      for (size_t ip1=0;ip1<particles.size();ip1++) {
        for (size_t ip2=ip1+1; ip2<particles.size(); ip2++) {
          if (particles[ip1]->pid()*particles[ip2]->pid()>0.) {
            std::vector<const HEPUtils::Particle*> SSpair;
            SSpair.push_back(particles[ip1]);
            SSpair.push_back(particles[ip2]);
            SSpair_container.push_back(SSpair);
          }
        }
      }
      return SSpair_container;
    }

  }
}
```


-------------------------------

Updated on 2022-08-01 at 12:13:20 +0000
