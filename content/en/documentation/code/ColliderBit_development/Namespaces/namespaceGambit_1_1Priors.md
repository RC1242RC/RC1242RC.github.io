---
title: 'namespace Gambit::Priors'

description: "[No description available]"

---






[No description available]

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Gambit::Priors::arccosprior](/documentation/code/colliderbit_development/classes/structgambit_1_1priors_1_1arccosprior/)**  |
| class | **[Gambit::Priors::BasePrior](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1baseprior/)** <br>Abstract base class for priors.  |
| class | **[Gambit::Priors::Cauchy](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1cauchy/)** <br>Multi-dimensional [Cauchy]() prior.  |
| class | **[Gambit::Priors::CompositePrior](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1compositeprior/)**  |
| struct | **[Gambit::Priors::cosprior](/documentation/code/colliderbit_development/classes/structgambit_1_1priors_1_1cosprior/)**  |
| struct | **[Gambit::Priors::cotprior](/documentation/code/colliderbit_development/classes/structgambit_1_1priors_1_1cotprior/)**  |
| class | **[Gambit::Priors::DoubleLogFlatJoin](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1doublelogflatjoin/)**  |
| class | **[Gambit::Priors::Dummy](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1dummy/)**  |
| class | **[Gambit::Priors::FixedPrior](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1fixedprior/)** <br>A fixed parameter.  |
| struct | **[Gambit::Priors::flatprior](/documentation/code/colliderbit_development/classes/structgambit_1_1priors_1_1flatprior/)**  |
| class | **[Gambit::Priors::Gaussian](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1gaussian/)** <br>Multi-dimensional [Gaussian]() prior.  |
| class | **[Gambit::Priors::LogNormal](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1lognormal/)** <br>Multi-dimensional Log-Normal prior.  |
| struct | **[Gambit::Priors::logprior](/documentation/code/colliderbit_development/classes/structgambit_1_1priors_1_1logprior/)**  |
| class | **[Gambit::Priors::MultiPriors](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1multipriors/)** <br>A parameter that is fixed to a different parameter.  |
| class | **[Gambit::Priors::None](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1none/)**  |
| class | **[Gambit::Priors::Plugin](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1plugin/)**  |
| class | **[Gambit::Priors::RangePrior1D](/documentation/code/colliderbit_development/classes/classgambit_1_1priors_1_1rangeprior1d/)** <br>Template class for 1d priors which need only a "range" option in their constructor.  |
| struct | **[Gambit::Priors::sinprior](/documentation/code/colliderbit_development/classes/structgambit_1_1priors_1_1sinprior/)**  |
| struct | **[Gambit::Priors::tanprior](/documentation/code/colliderbit_development/classes/structgambit_1_1priors_1_1tanprior/)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| std::vector< std::string > | **[expand_dots](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1priors/#function-expand-dots)**(const std::vector< std::string > & param_names_in) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| | **[gambit_registry](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1priors/#variable-gambit-registry)**  |
| reg_elem< create_prior_function > | **[prior_creators](/documentation/code/colliderbit_development/namespaces/namespacegambit_1_1priors/#variable-prior-creators)**  |


## Functions Documentation

### function expand_dots

```
std::vector< std::string > expand_dots(
    const std::vector< std::string > & param_names_in
)
```



## Attributes Documentation

### variable gambit_registry

```
gambit_registry { 
            typedef BasePrior* create_prior_function(const std::vector<std::string> &, const Options &);
```


### variable prior_creators

```
reg_elem< create_prior_function > prior_creators;
```





-------------------------------

Updated on 2022-08-02 at 23:34:47 +0000