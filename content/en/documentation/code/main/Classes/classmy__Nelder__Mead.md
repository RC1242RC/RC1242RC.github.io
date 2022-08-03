---
title: 'class my_Nelder_Mead'

description: "[No description available]"

---








[No description available]

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[my_Nelder_Mead](/documentation/code/main/classes/classmy__nelder__mead/#function-my-nelder-mead)**(int dd, double alpha, double beta, double gamma, int NNtry, double eeps, [my_func](/documentation/code/main/classes/structmy__func/) * ff) |
| bool | **[one_cycle](/documentation/code/main/classes/classmy__nelder__mead/#function-one-cycle)**([my_simplex](/documentation/code/main/classes/classmy__simplex/) * s) |
| bool | **[find_global_min](/documentation/code/main/classes/classmy__nelder__mead/#function-find-global-min)**(double xin[DMAX *(DMAX+1)]) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [my_func](/documentation/code/main/classes/structmy__func/) * | **[f](/documentation/code/main/classes/classmy__nelder__mead/#variable-f)**  |
| [my_simplex](/documentation/code/main/classes/classmy__simplex/) | **[simplex](/documentation/code/main/classes/classmy__nelder__mead/#variable-simplex)**  |
| bool | **[convergeYes](/documentation/code/main/classes/classmy__nelder__mead/#variable-convergeyes)**  |
| double | **[yfinal](/documentation/code/main/classes/classmy__nelder__mead/#variable-yfinal)**  |
| double | **[xfinal](/documentation/code/main/classes/classmy__nelder__mead/#variable-xfinal)**  |

## Public Functions Documentation

### function my_Nelder_Mead

```
my_Nelder_Mead(
    int dd,
    double alpha,
    double beta,
    double gamma,
    int NNtry,
    double eeps,
    my_func * ff
)
```


### function one_cycle

```
bool one_cycle(
    my_simplex * s
)
```


### function find_global_min

```
bool find_global_min(
    double xin[DMAX *(DMAX+1)]
)
```


## Public Attributes Documentation

### variable f

```
my_func * f;
```


### variable simplex

```
my_simplex simplex;
```


### variable convergeYes

```
bool convergeYes;
```


### variable yfinal

```
double yfinal;
```


### variable xfinal

```
double xfinal;
```


-------------------------------

Updated on 2022-08-03 at 01:58:21 +0000