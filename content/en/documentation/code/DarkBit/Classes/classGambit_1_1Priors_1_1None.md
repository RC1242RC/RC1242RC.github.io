---
title: 'class Gambit::Priors::None'

description: "[No description available]"

---








[No description available]

Inherits from [Gambit::Priors::BasePrior](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[None](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1none/#function-none)**(const std::vector< std::string > & param, const Options & ) |
| virtual void | **[transform](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1none/#function-transform)**(const std::vector< double > & , std::unordered_map< std::string, double > & ) const override<br>Transform from unit hypercube to parameter.  |
| virtual std::vector< double > | **[inverse_transform](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1none/#function-inverse-transform)**(const std::unordered_map< std::string, double > & ) const override<br>Transform from parameter back to unit hypercube.  |

## Additional inherited members

**Public Functions inherited from [Gambit::Priors::BasePrior](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~BasePrior](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-~baseprior)**() =default |
| | **[BasePrior](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-baseprior)**() |
| | **[BasePrior](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-baseprior)**(const int param_size) |
| | **[BasePrior](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-baseprior)**(const std::vector< std::string > & param_names, const int param_size =0) |
| | **[BasePrior](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-baseprior)**(const std::string & param_name, const int param_size =0) |
| virtual double | **[operator()](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-operator())**(const std::vector< double > & ) const<br>Log of PDF density.  |
| virtual std::vector< std::string > | **[getShownParameters](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-getshownparameters)**() const |
| unsigned int | **[size](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-size)**() const |
| void | **[setSize](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-setsize)**(const unsigned int size) |
| unsigned int & | **[sizeRef](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-sizeref)**() |
| std::vector< std::string > | **[getParameters](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-getparameters)**() const |

**Protected Attributes inherited from [Gambit::Priors::BasePrior](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/)**

|                | Name           |
| -------------- | -------------- |
| std::vector< std::string > | **[param_names](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#variable-param-names)**  |


## Public Functions Documentation

### function None

```
inline None(
    const std::vector< std::string > & param,
    const Options & 
)
```


### function transform

```
inline virtual void transform(
    const std::vector< double > & ,
    std::unordered_map< std::string, double > & 
) const override
```

Transform from unit hypercube to parameter. 

**Reimplements**: [Gambit::Priors::BasePrior::transform](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-transform)


### function inverse_transform

```
inline virtual std::vector< double > inverse_transform(
    const std::unordered_map< std::string, double > & 
) const override
```

Transform from parameter back to unit hypercube. 

**Reimplements**: [Gambit::Priors::BasePrior::inverse_transform](/documentation/code/darkbit/classes/classgambit_1_1priors_1_1baseprior/#function-inverse-transform)


-------------------------------

Updated on 2022-08-03 at 12:58:03 +0000