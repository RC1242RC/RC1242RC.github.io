---
title: 'file scripts/collider_harvester.py'

description: "[No description available]"

---






[No description available]

## Namespaces

| Name           |
| -------------- |
| **[collider_harvester](/documentation/code/colliderbit/namespaces/namespacecollider__harvester/)**  |




## Source code

```
#!/usr/bin/env python
#
# GAMBIT: Global and Modular BSM Inference Tool
#*********************************************
# \file
#
#  Model harvesting script for ColliderBit.
#  Generates ColliderBit_models_rollcall.hpp
#  and Py8Collider_typedefs.hpp
#
#  This script identifies all the models for
#  which a new Pythia has been defined
#  (typically but not neccessarily by GUM),
#  and includes them in the relevant headers.
#
#*********************************************
#
#  Authors (add name and date if you modify):
#
#  \author Pat Scott
#          (patscott@physics.mcgill.ca)
#    \date 2019 Jan
#
#*********************************************
import os

toolsfile="./Utils/scripts/harvesting_tools.py"
exec(compile(open(toolsfile, "rb").read(), toolsfile, 'exec')) # Python 2/3 compatible version of 'execfile'

def main(argv):

    model_headers=set([])
    ignore_model_headers=["SUSY.hpp", "SUSY_extras.hpp"]

    # Handle command line options
    verbose = False
    try:
        opts, args = getopt.getopt(argv,"vx:",["verbose","exclude-models="])
    except getopt.GetoptError:
        print('Usage: collider_harvestor.py [flags]')
        print(' flags:')
        print('        -v : More verbose output')
        sys.exit(2)
    for opt, arg in opts:
      if opt in ('-v','--verbose'):
        verbose = True
        print('collider_harvester.py: verbose=True')

    # Get list of models to include in ColliderBit_model_rollcall.hpp
    model_headers.update(retrieve_generic_headers(verbose,"./ColliderBit/include/gambit/ColliderBit/models","model", set()))

    if verbose:
        print("ColliderBit model headers identified:")
        for h in model_headers:
            print('  gambit/ColliderBit/models/'+h)

    # Generate a C++ header containing all the model headers we have just harvested.
    towrite = "\
//   GAMBIT: Global and Modular BSM Inference Tool\n\
//   *********************************************\n\
///  \\file                                       \n\
///                                               \n\
///  Rollcall header for ColliderBit models.      \n\
///                                               \n\
///  This file is automatically generated by      \n\
///  collider_harvester.py.  Do not modify.       \n\
///                                               \n\
///  *********************************************\n\
///                                               \n\
///  \\author The GAMBIT Collaboration            \n\
///  \date "+datetime.datetime.now().strftime("%I:%M%p on %B %d, %Y")+"\n\
///                                               \n\
///  *********************************************\n\
                                                  \n\
#pragma once                                      \n\
                                                  \n"

    for h in model_headers:
        towrite+='#include \"gambit/ColliderBit/models/{0}\"\n'.format(h)

    with open("./ColliderBit/include/gambit/ColliderBit/ColliderBit_models_rollcall.hpp","w") as f:
        f.write(towrite)

    # Generate a C++ header containing Py8Collider typedefs for all the model headers we have just harvested.
    towrite = "\
//   GAMBIT: Global and Modular BSM Inference Tool\n\
//   *********************************************\n\
///  \\file                                       \n\
///                                               \n\
///  Py8Collider typedefs for models in           \n\
///  ColliderBit.                                 \n\
///                                               \n\
///  This file is automatically generated by      \n\
///  collider_harvester.py.  Do not modify.       \n\
///                                               \n\
///  *********************************************\n\
///                                               \n\
///  \\author The GAMBIT Collaboration            \n\
///  \date "+datetime.datetime.now().strftime("%I:%M%p on %B %d, %Y")+"\n\
///                                               \n\
///  *********************************************\n\
                                                  \n\
#pragma once                                      \n\
                                                  \n\
#include \"gambit/ColliderBit/colliders/Pythia8/Py8Collider.hpp\"\n\
                                                  \n\
namespace Gambit                                  \n\
{                                                 \n\
  namespace ColliderBit                           \n\
  {                                               \n\
                                                  \n\
    /// Typedefs for each Pythia collider         \n\
    /// @{                                        \n\
    #ifdef EXCLUDE_HEPMC                          \n\
      typedef Py8Collider<Pythia_default::Pythia8::Pythia, Pythia_default::Pythia8::Event, void> Py8Collider_defaultversion;\n"

    for h in model_headers:
        if h not in ignore_model_headers:
            m = re.sub(".hpp", "", h)
            towrite+='      typedef Py8Collider<Pythia_{0}_default::Pythia8::Pythia, Pythia_{0}_default::Pythia8::Event, void> Py8Collider_{0}_defaultversion;\n'.format(m)

    towrite+= "\
    #else                                         \n\
      typedef Py8Collider<Pythia_default::Pythia8::Pythia, Pythia_default::Pythia8::Event, Pythia_default::Pythia8::GAMBIT_hepmc_writer> Py8Collider_defaultversion;\n"

    for h in model_headers:
        if h not in ignore_model_headers:
            m = re.sub(".hpp", "", h)
            towrite+='      typedef Py8Collider<Pythia_{0}_default::Pythia8::Pythia, Pythia_{0}_default::Pythia8::Event, Pythia_{0}_default::Pythia8::GAMBIT_hepmc_writer> Py8Collider_{0}_defaultversion;\n'.format(m)

    towrite+="    #endif\n    /// @}\n\n  }\n}\n"

    with open("./ColliderBit/include/gambit/ColliderBit/colliders/Pythia8/Py8Collider_typedefs.hpp","w") as f:
        f.write(towrite)

    if verbose:
        print("\nGenerated ColliderBit_models_rollcall.hpp.")
        print("Generated Py8Collider_typedefs.hpp.\n")

# Handle command line arguments (verbosity)
if __name__ == "__main__":
   main(sys.argv[1:])
```


-------------------------------

Updated on 2022-08-03 at 12:58:19 +0000
