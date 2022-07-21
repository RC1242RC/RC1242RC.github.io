---
title: "Configuration Examples"
description: "A list of specific cmake tweaks and environment variable hacks that have been useful for configuring and building GAMBIT in restricted environments, such as large clusters."
date: 2022-07-01T22:31:46+01:00
lastmod: 2022-07-01T22:31:46+01:00
draft: false
images: []
menu:
  documentation:
    parent: "help"
weight: 40
---

<p>
{{< alert icon="ⓘ" context="info">}}
Instructions for configuring and compiling GAMBIT can be found in the original paper describing the code <a href="http://arxiv.org/abs/1705.07908">arXiv:1705.07908</a>.
{{< /alert >}}
</p>
<p>
{{< alert icon="⚠" context="danger">}}
For building the entirety of GAMBIT without optimisation, at least 10 GB of RAM is required. The build can be completed with less RAM than this if enough modules are ditched when running cmake, with e.g. cmake -Ditch="ColliderBit;DarkBit" .., etc. See <a href="http://arxiv.org/abs/1705.07908">arXiv:1705.07908</a> for further details of how to ditch components. For a list of commonly used cmake options, see the file CMAKE_FLAGS.md. Building with optimisation enabled (e.g. using -DCMAKE_BUILD_TYPE=Release) may require more than 20 GB of RAM, depending on the compiler in use and precisely which optimisations it employs. Interprocedural optimisation in particular requires very large amounts of RAM. In general, Release mode is only intended for performance-critical applications, such as when running on supercomputer architectures.  It is not advised for laptops.
{{< /alert >}}
</p>
<p>
The remainder of this page contains specific cmake tweaks and environment variable hacks that have been useful for configuring and building GAMBIT in more restricted environments, such as large clusters.
</p>

### Aaron Vincent's OSX laptop

<p>
Instructions available <a href="https://www.physics.queensu.ca/facultysites/vincent/getting-gambit-to-run-on-osx-mojave/">here</a>.
</p>

### lxplus6 (CERN) with LCG compilers

<p>
The native SL6 compiler (GCC 4.4) and Boost library (1.41) are very old and not sufficient to build Gambit. Rather than manually install a full build chain, which is full of extra pitfalls, it's easiest to use the LCG package bundles like the LHC experiments do.
</p>
<p>
Dependencies:<br>
</p>
```
wget http://bitbucket.org/eigen/eigen/get/3.3.3.tar.gz -O- | tar xz
ln -s eigen-eigen-* eigen-3.3.3
wget http://pyyaml.org/download/pyyaml/PyYAML-3.11.tar.gz -O- | tar xz
```
<p>
Environment setup (for compile and runtime):<br>
</p>
```
source /cvmfs/sft.cern.ch/lcg/releases/LCG_88/gcc/6.2.0/x86_64-slc6/setup.sh
export PYTHONPATH="$PWD/PyYAML-3.11/lib:$PYTHONPATH"
```
<p>
Check out gambit and then do CMake config:<br>
</p>
```
cd gambit/
mkdir build &amp;&amp; cd build/
cmake .. -DCMAKE_BUILD_TYPE=Release -Ditch=delphes -DEIGEN3_INCLUDE_DIR=$PWD/../../eigen-3.3.3 -DBOOST_INCLUDEDIR=/cvmfs/sft.cern.ch/lcg/releases/LCG_88/Boost/1.62.0/x86_64-slc6-gcc62-opt/include/boost-1_62/  -DBOOST_LIBRARYDIR=/cvmfs/sft.cern.ch/lcg/releases/LCG_88/Boost/1.62.0/x86_64-slc6-gcc62-opt/lib/  -DCMAKE_CXX_COMPILER=$(which g++) -DCMAKE_C_COMPILER=$(which gcc) -DCMAKE_Fortran_COMPILER=$(which gfortran)
```

### lxplus7 (CERN) with LCG compilers

<p>
The native CentOS 7 compiler is sufficient, but the Boost library version (1.41) is not, hence an LCG environment is again needed.
</p>
<p>
Get dependencies:<br>
</p>
```
wget http://bitbucket.org/eigen/eigen/get/3.3.3.tar.gz -O- | tar xz
ln -s eigen-eigen-* eigen-3.3.3
wget http://pyyaml.org/download/pyyaml/PyYAML-3.11.tar.gz -O- | tar xz
```
<p>
Environment setup (for compile and runtime):<br>
</p>
```
source /cvmfs/sft.cern.ch/lcg/releases/LCG_88/gcc/6.2.0/x86_64-centos7/setup.sh
export PYTHONPATH="$PWD/PyYAML-3.11/lib:$PYTHONPATH"
```
<p>
Check out gambit and then do CMake config:<br>
</p>
```
cd gambit/
mkdir build &amp;&amp; cd build/
cmake .. -DCMAKE_BUILD_TYPE=Release -Ditch=delphes -DEIGEN3_INCLUDE_DIR=$PWD/../../eigen-3.3.3 -DBOOST_INCLUDEDIR=/cvmfs/sft.cern.ch/lcg/releases/LCG_88/Boost/1.62.0/x86_64-centos7-gcc62-opt/include/boost-1_62/  -DBOOST_LIBRARYDIR=/cvmfs/sft.cern.ch/lcg/releases/LCG_88/Boost/1.62.0/x86_64-centos7-gcc62-opt/lib/  -DCMAKE_CXX_COMPILER=$(which g++) -DCMAKE_C_COMPILER=$(which gcc) -DCMAKE_Fortran_COMPILER=$(which gfortran)
```

### cx-2/helen (Imperial)

```
module load git gcc/4.9.1 gsl cmake/2.8.12.2 boost anaconda intel-suite/2016 mpi/mpt-2.12 hdf5/1.8.14-serial
cmake -DCMAKE_BUILD_TYPE=Release ..
```

### Cartesius (Amsterdam)

With GNU compilers:<br>
```
module load python root gsl blas lapack gcc cmake/3.2.2 boost
export PATH=$PATH:$SURFSARA_BIN_PATH
CMAKE_PREFIX_PATH=$SURFSARA_GSL_ROOT CMAKE_LIBRARY_PATH=$SURFSARA_LIBRARY_PATH cmake -D CMAKE_CXX_COMPILER=g++ -D CMAKE_C_COMPILER=gcc -D CMAKE_Fortran_COMPILER=gfortran ../
```
<!--
With Intel compilers (GAMBIT doesn't compile, last time I checked (Jonathan)):
<pre>
module load python root gsl blas lapack c/intel fortran/intel cmake/3.2.2 boost
export PATH=$PATH:$SURFSARA_BIN_PATH
CMAKE_PREFIX_PATH=$SURFSARA_GSL_ROOT CMAKE_LIBRARY_PATH=$SURFSARA_LIBRARY_PATH cmake -D CMAKE_CXX_COMPILER=icpc -D CMAKE_C_COMPILER=icc -D CMAKE_Fortran_COMPILER=ifort ../
</pre>
-->

### Phoenix (Adelaide)

```
cmake -Ditch="Delphes" -DCMAKE_Fortran_COMPILER=mpiifort -DCMAKE_C_COMPILER=icc -DCMAKE_CXX_COMPILER=icpc -DCMAKE_BUILD_TYPE=Release ..
```

### Zeus (Poland)

GNU:
```
module load el6/tools/python libs/hdf5
cmake -D CMAKE_CXX_COMPILER=g++ -D CMAKE_C_COMPILER=gcc -D CMAKE_Fortran_COMPILER=gfortran ../
cmake ../
```
Intel:
```
module load intel/16.0.1 impi libs/hdf5 el6/tools/python
# Get rid of the other MPI lib (loaded as a dependency of el6/tools/python)
module unload tools/openmpi/1.6.5-gnu-4.8.2-ib
cmake -D CMAKE_CXX_COMPILER=icpc -D CMAKE_C_COMPILER=icc -D CMAKE_Fortran_COMPILER=ifort ..
```

### Prometheus (Poland) with Intel 2016 compilers

Get Eigen and put it in your home directory:<br>
```
wget http://bitbucket.org/eigen/eigen/get/3.3.3.tar.gz
tar xvzf 3.3.3.tar.gz
```
Build:<br>
```
module load plgrid/tools/python/2.7.9 plgrid/tools/cmake/3.3.2 plgrid/libs/boost/1.58.0 plgrid/libs/gsl/1.16 plgrid/libs/hdf5/1.8.16 plgrid/tools/intel/16.0.1 plgrid/libs/mkl/11.3.3
cmake -D EIGEN3_INCLUDE_DIR=~/eigen-eigen-67e894c6cd8f -D CMAKE_CXX_COMPILER=icpc -D CMAKE_C_COMPILER=icc -D CMAKE_Fortran_COMPILER=ifort -D CMAKE_BUILD_TYPE=Release .. 
make -j scanners
cmake ..
make -j
make -j backends
make -j backends-nonfree
```
<h4>Saga (Oslo) with gcc compilers</h4>
Saga runs 64 bit CentOS 7.
To compile you need to have a python environment with pyaml installed. We suggest using virtualenv.<br>
To start compiling, first load a consistent set of libraries:
```
module purge
module load foss/2019b
module load HDF5/1.10.5-gompi-2019b
module load CMake/3.15.3-GCCcore-8.3.0 
module load Boost/1.71.0-GCC-8.3.0
module load GSL/2.6-GCC-8.3.0
module load Python/3.7.4-GCCcore-8.3.0
module load Eigen/3.3.7
```
Then do the usual compile as per the manual, but Saga needs to be told where to find Eigen:
```
cmake -DWITH_MPI=ON -DEIGEN3_INCLUDE_DIR=/cluster/software/Eigen/3.3.7/include -DBUILD_FS_MODELS="MSSM" -Ditch="Delphes" ..
```
</div>