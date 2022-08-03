---
title: 'namespace Gambit::DarkBit::DecayChain'

description: "[No description available]"

---






[No description available]

## Functions

|                | Name           |
| -------------- | -------------- |
| vec3 | **[operator*](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator*)**(double x, const vec3 & y) |
| vec3 | **[operator*](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator*)**(const vec3 & y, double x) |
| vec3 | **[operator/](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator/)**(const vec3 & y, double x) |
| std::ostream & | **[operator<<](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator<<)**(std::ostream & os, const vec3 & v) |
| double | **[dot](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-dot)**(const vec3 & a, const vec3 & b) |
| vec4 | **[operator*](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator*)**(double x, const vec4 & y) |
| vec4 | **[operator*](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator*)**(const vec4 & y, double x) |
| vec4 | **[operator+](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator+)**(const vec4 & x, const vec4 & y) |
| vec4 | **[operator-](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator-)**(const vec4 & x, const vec4 & y) |
| std::ostream & | **[operator<<](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator<<)**(std::ostream & os, const vec4 & v) |
| double | **[dot](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-dot)**(const vec4 & a, const vec4 & b) |
| vec4 | **[Ep4vec](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-ep4vec)**(const vec3 p, double m) |
| vec4 | **[operator*](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator*)**(const mat4 & m, const vec4 & v) |
| mat4 | **[operator*](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator*)**(const mat4 & m1, const mat4 & m2) |
| std::ostream & | **[operator<<](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-operator<<)**(std::ostream & os, const mat4 & m) |
| double | **[rand_m1_1](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-rand-m1-1)**() |
| vec3 | **[randOnSphere](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-randonsphere)**() |
| void | **[lorentzMatrix](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-lorentzmatrix)**(const vec3 & beta_xyz, mat4 & mat) |
| void | **[lorentzMatrix](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-lorentzmatrix)**(const vec3 & beta_xyz, mat4 & mat, double gamma) |
| vec4 | **[lorentzBoost](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-lorentzboost)**(const vec4 & inVec, const vec3 & beta_xyz) |
| vec4 | **[p_parentFrame](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-p-parentframe)**(const vec4 & inVec, const vec4 & p_parent) |
| void | **[boostMatrixParentFrame](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-boostmatrixparentframe)**(mat4 & mat, vec4 & p_parent, double m) |
| double | **[invariantMass](/documentation/code/darkbit/namespaces/namespacegambit_1_1darkbit_1_1decaychain/#function-invariantmass)**(const vec4 & a, const vec4 & b) |


## Functions Documentation

### function operator*

```
vec3 operator*(
    double x,
    const vec3 & y
)
```


### function operator*

```
vec3 operator*(
    const vec3 & y,
    double x
)
```


### function operator/

```
vec3 operator/(
    const vec3 & y,
    double x
)
```


### function operator<<

```
std::ostream & operator<<(
    std::ostream & os,
    const vec3 & v
)
```


### function dot

```
double dot(
    const vec3 & a,
    const vec3 & b
)
```


### function operator*

```
vec4 operator*(
    double x,
    const vec4 & y
)
```


### function operator*

```
vec4 operator*(
    const vec4 & y,
    double x
)
```


### function operator+

```
vec4 operator+(
    const vec4 & x,
    const vec4 & y
)
```


### function operator-

```
vec4 operator-(
    const vec4 & x,
    const vec4 & y
)
```


### function operator<<

```
std::ostream & operator<<(
    std::ostream & os,
    const vec4 & v
)
```


### function dot

```
double dot(
    const vec4 & a,
    const vec4 & b
)
```


### function Ep4vec

```
vec4 Ep4vec(
    const vec3 p,
    double m
)
```


### function operator*

```
vec4 operator*(
    const mat4 & m,
    const vec4 & v
)
```


### function operator*

```
mat4 operator*(
    const mat4 & m1,
    const mat4 & m2
)
```


### function operator<<

```
std::ostream & operator<<(
    std::ostream & os,
    const mat4 & m
)
```


### function rand_m1_1

```
double rand_m1_1()
```


### function randOnSphere

```
vec3 randOnSphere()
```


### function lorentzMatrix

```
void lorentzMatrix(
    const vec3 & beta_xyz,
    mat4 & mat
)
```


### function lorentzMatrix

```
void lorentzMatrix(
    const vec3 & beta_xyz,
    mat4 & mat,
    double gamma
)
```


### function lorentzBoost

```
vec4 lorentzBoost(
    const vec4 & inVec,
    const vec3 & beta_xyz
)
```


### function p_parentFrame

```
vec4 p_parentFrame(
    const vec4 & inVec,
    const vec4 & p_parent
)
```


### function boostMatrixParentFrame

```
void boostMatrixParentFrame(
    mat4 & mat,
    vec4 & p_parent,
    double m
)
```


### function invariantMass

```
double invariantMass(
    const vec4 & a,
    const vec4 & b
)
```






-------------------------------

Updated on 2022-08-03 at 12:58:03 +0000