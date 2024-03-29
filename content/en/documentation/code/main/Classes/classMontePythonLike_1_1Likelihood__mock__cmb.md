---
title: 'class MontePythonLike::Likelihood_mock_cmb'

description: "[No description available]"

---








[No description available]

Inherits from [MontePythonLike.Likelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/), [MontePythonLike.Likelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/), object

## Public Functions

|                | Name           |
| -------------- | -------------- |
| def | **[__init__](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#function---init--)**(self self, path path, data data, command_line command_line) |
| def | **[loglkl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#function-loglkl)**(self self, cosmo cosmo, data data) |
| def | **[compute_lkl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#function-compute-lkl)**(self self, cl cl, cosmo cosmo, data data) |
| def | **[__init__](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#function---init--)**(self self, path path, data data, command_line command_line) |
| def | **[loglkl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#function-loglkl)**(self self, cosmo cosmo, data data) |
| def | **[compute_lkl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#function-compute-lkl)**(self self, cl cl, cosmo cosmo, data data) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| | **[noise_from_file](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-noise-from-file)** <br>Noise spectrum.  |
| | **[noise_T](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-noise-t)**  |
| | **[noise_P](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-noise-p)**  |
| | **[Nldd](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-nldd)**  |
| | **[no_small_l_pol](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-no-small-l-pol)**  |
| | **[l_max_TT](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-l-max-tt)**  |
| | **[Bmodes](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-bmodes)** <br>implementation of default settings for flags describing the likelihood: #  |
| | **[delensing](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-delensing)**  |
| | **[LensingExtraction](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-lensingextraction)**  |
| | **[neglect_TD](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-neglect-td)**  |
| | **[unlensed_clTTTEEE](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-unlensed-clttteee)**  |
| | **[ExcludeTTTEEE](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-excludettteee)**  |
| | **[noise_delensing](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-noise-delensing)** <br>Delensing noise: implemented by S.  |
| | **[index_B](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-index-b)** <br>Read data for TT, EE, TE, [eventually BB or phi-phi, phi-T] #.  |
| | **[index_pp](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-index-pp)**  |
| | **[index_tp](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-index-tp)**  |
| | **[Cl_fid](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-cl-fid)**  |
| | **[fid_values_exist](/documentation/code/main/classes/classmontepythonlike_1_1likelihood__mock__cmb/#variable-fid-values-exist)**  |

## Additional inherited members

**Public Functions inherited from [MontePythonLike.Likelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/)**

|                | Name           |
| -------------- | -------------- |
| def | **[raise_fiducial_model_err](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-raise-fiducial-model-err)**(self self) |
| def | **[read_from_file](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-read-from-file)**(self self, path path, data data, command_line command_line) |
| def | **[get_cl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-get-cl)**(self self, cosmo cosmo, l_max l_max =-1) |
| def | **[get_unlensed_cl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-get-unlensed-cl)**(self self, cosmo cosmo, l_max l_max =-1) |
| def | **[need_cosmo_arguments](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-need-cosmo-arguments)**(self self, data data, dictionary dictionary) |
| def | **[read_contamination_spectra](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-read-contamination-spectra)**(self self, data data) |
| def | **[add_contamination_spectra](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-add-contamination-spectra)**(self self, cl cl, data data) |
| def | **[add_nuisance_prior](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-add-nuisance-prior)**(self self, lkl lkl, data data) |
| def | **[computeLikelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-computelikelihood)**(self self, ctx ctx) |
| def | **[raise_fiducial_model_err](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-raise-fiducial-model-err)**(self self) |
| def | **[read_from_file](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-read-from-file)**(self self, path path, data data, command_line command_line) |
| def | **[get_cl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-get-cl)**(self self, cosmo cosmo, l_max l_max =-1) |
| def | **[get_unlensed_cl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-get-unlensed-cl)**(self self, cosmo cosmo, l_max l_max =-1) |
| def | **[need_cosmo_arguments](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-need-cosmo-arguments)**(self self, data data, dictionary dictionary) |
| def | **[read_contamination_spectra](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-read-contamination-spectra)**(self self, data data) |
| def | **[add_contamination_spectra](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-add-contamination-spectra)**(self self, cl cl, data data) |
| def | **[add_nuisance_prior](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-add-nuisance-prior)**(self self, lkl lkl, data data) |
| def | **[computeLikelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-computelikelihood)**(self self, ctx ctx) |

**Public Attributes inherited from [MontePythonLike.Likelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/)**

|                | Name           |
| -------------- | -------------- |
| | **[name](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-name)**  |
| | **[folder](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-folder)**  |
| | **[data_directory](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-data-directory)**  |
| | **[default_values](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-default-values)**  |
| | **[need_update](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-need-update)**  |
| | **[use_nuisance](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-use-nuisance)**  |
| | **[nuisance](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-nuisance)**  |
| | **[path](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-path)**  |
| | **[dictionary](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-dictionary)**  |

**Public Functions inherited from [MontePythonLike.Likelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/)**

|                | Name           |
| -------------- | -------------- |
| def | **[raise_fiducial_model_err](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-raise-fiducial-model-err)**(self self) |
| def | **[read_from_file](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-read-from-file)**(self self, path path, data data, command_line command_line) |
| def | **[get_cl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-get-cl)**(self self, cosmo cosmo, l_max l_max =-1) |
| def | **[get_unlensed_cl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-get-unlensed-cl)**(self self, cosmo cosmo, l_max l_max =-1) |
| def | **[need_cosmo_arguments](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-need-cosmo-arguments)**(self self, data data, dictionary dictionary) |
| def | **[read_contamination_spectra](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-read-contamination-spectra)**(self self, data data) |
| def | **[add_contamination_spectra](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-add-contamination-spectra)**(self self, cl cl, data data) |
| def | **[add_nuisance_prior](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-add-nuisance-prior)**(self self, lkl lkl, data data) |
| def | **[computeLikelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-computelikelihood)**(self self, ctx ctx) |
| def | **[raise_fiducial_model_err](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-raise-fiducial-model-err)**(self self) |
| def | **[read_from_file](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-read-from-file)**(self self, path path, data data, command_line command_line) |
| def | **[get_cl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-get-cl)**(self self, cosmo cosmo, l_max l_max =-1) |
| def | **[get_unlensed_cl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-get-unlensed-cl)**(self self, cosmo cosmo, l_max l_max =-1) |
| def | **[need_cosmo_arguments](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-need-cosmo-arguments)**(self self, data data, dictionary dictionary) |
| def | **[read_contamination_spectra](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-read-contamination-spectra)**(self self, data data) |
| def | **[add_contamination_spectra](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-add-contamination-spectra)**(self self, cl cl, data data) |
| def | **[add_nuisance_prior](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-add-nuisance-prior)**(self self, lkl lkl, data data) |
| def | **[computeLikelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-computelikelihood)**(self self, ctx ctx) |

**Public Attributes inherited from [MontePythonLike.Likelihood](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/)**

|                | Name           |
| -------------- | -------------- |
| | **[name](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-name)**  |
| | **[folder](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-folder)**  |
| | **[data_directory](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-data-directory)**  |
| | **[default_values](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-default-values)**  |
| | **[need_update](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-need-update)**  |
| | **[use_nuisance](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-use-nuisance)**  |
| | **[nuisance](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-nuisance)**  |
| | **[path](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-path)**  |
| | **[dictionary](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#variable-dictionary)**  |


## Public Functions Documentation

### function __init__

```
def __init__(
    self self,
    path path,
    data data,
    command_line command_line
)
```


**Reimplements**: [MontePythonLike::Likelihood::__init__](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function---init--)




```
It copies the content of self.path from the initialization routine of
the :class:`Data <data.Data>` class, and defines a handful of useful
methods, that every likelihood might need.

If the nuisance parameters required to compute this likelihood are not
defined (either fixed or varying), the code will stop.

Parameters
----------
data : class
    Initialized instance of :class:`Data <data.Data>`
command_line : NameSpace
    NameSpace containing the command line arguments```


### function loglkl

```
def loglkl(
    self self,
    cosmo cosmo,
    data data
)
```


**Reimplements**: [MontePythonLike::Likelihood::loglkl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-loglkl)




```
Placeholder to remind that this function needs to be defined for a
new likelihood.

Raises
------
NotImplementedError```


### function compute_lkl

```
def compute_lkl(
    self self,
    cl cl,
    cosmo cosmo,
    data data
)
```


### function __init__

```
def __init__(
    self self,
    path path,
    data data,
    command_line command_line
)
```


**Reimplements**: [MontePythonLike::Likelihood::__init__](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function---init--)




```
It copies the content of self.path from the initialization routine of
the :class:`Data <data.Data>` class, and defines a handful of useful
methods, that every likelihood might need.

If the nuisance parameters required to compute this likelihood are not
defined (either fixed or varying), the code will stop.

Parameters
----------
data : class
    Initialized instance of :class:`Data <data.Data>`
command_line : NameSpace
    NameSpace containing the command line arguments```


### function loglkl

```
def loglkl(
    self self,
    cosmo cosmo,
    data data
)
```


**Reimplements**: [MontePythonLike::Likelihood::loglkl](/documentation/code/main/classes/classmontepythonlike_1_1likelihood/#function-loglkl)




```
Placeholder to remind that this function needs to be defined for a
new likelihood.

Raises
------
NotImplementedError```


### function compute_lkl

```
def compute_lkl(
    self self,
    cl cl,
    cosmo cosmo,
    data data
)
```


## Public Attributes Documentation

### variable noise_from_file

```
noise_from_file;
```

Noise spectrum. 

### variable noise_T

```
noise_T;
```


### variable noise_P

```
noise_P;
```


### variable Nldd

```
Nldd;
```


### variable no_small_l_pol

```
no_small_l_pol;
```


### variable l_max_TT

```
l_max_TT;
```


### variable Bmodes

```
Bmodes;
```

implementation of default settings for flags describing the likelihood: # 

### variable delensing

```
delensing;
```


### variable LensingExtraction

```
LensingExtraction;
```


### variable neglect_TD

```
neglect_TD;
```


### variable unlensed_clTTTEEE

```
unlensed_clTTTEEE;
```


### variable ExcludeTTTEEE

```
ExcludeTTTEEE;
```


### variable noise_delensing

```
noise_delensing;
```

Delensing noise: implemented by S. 

Clesse # 


### variable index_B

```
index_B;
```

Read data for TT, EE, TE, [eventually BB or phi-phi, phi-T] #. 

### variable index_pp

```
index_pp;
```


### variable index_tp

```
index_tp;
```


### variable Cl_fid

```
Cl_fid;
```


### variable fid_values_exist

```
fid_values_exist;
```


-------------------------------

Updated on 2022-08-03 at 12:57:54 +0000