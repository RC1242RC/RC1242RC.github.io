---
title: 'namespace testmodule'

description: "[No description available]"

---






[No description available]

## Attributes

|                | Name           |
| -------------- | -------------- |
| double precision, dimension(-2:0) | **[a](/documentation/code/main/namespaces/namespacetestmodule/#variable-a)**  |
| double precision, dimension(3) | **[b](/documentation/code/main/namespaces/namespacetestmodule/#variable-b)**  |
| integer | **[c](/documentation/code/main/namespaces/namespacetestmodule/#variable-c)**  |
| integer, dimension(1:3, 0:1,-1:0) | **[d](/documentation/code/main/namespaces/namespacetestmodule/#variable-d)**  |
| character *5 | **[chara](/documentation/code/main/namespaces/namespacetestmodule/#variable-chara)**  |
| character *5, dimension(3) | **[charb](/documentation/code/main/namespaces/namespacetestmodule/#variable-charb)**  |
| character *6, dimension(2,-1:0) | **[charc](/documentation/code/main/namespaces/namespacetestmodule/#variable-charc)**  |
| integer | **[e](/documentation/code/main/namespaces/namespacetestmodule/#variable-e)**  |
| complex | **[cpa](/documentation/code/main/namespaces/namespacetestmodule/#variable-cpa)**  |
| complex *16 | **[cpb](/documentation/code/main/namespaces/namespacetestmodule/#variable-cpb)**  |
| integer | **[f](/documentation/code/main/namespaces/namespacetestmodule/#variable-f)**  |



## Attributes Documentation

### variable a

```
double precision, dimension(-2:0) a = (/-2.2, -1.1, 0.0/);
```


### variable b

```
double precision, dimension(3) b = (/1.1,2.2,3.3/);
```


### variable c

```
integer c = 1;
```


### variable d

```
integer, dimension(1:3, 0:1,-1:0) d = (reshape((/ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   0, 0/), [3,2,2]));
```


### variable chara

```
character *5 chara = 'abc';
```


### variable charb

```
character *5, dimension(3) charb;
```


### variable charc

```
character *6, dimension(2,-1:0) charc;
```


### variable e

```
integer e = 6;
```


### variable cpa

```
complex cpa = (1, 2);
```


### variable cpb

```
complex *16 cpb = (3, 4);
```


### variable f

```
integer f = 91;
```





-------------------------------

Updated on 2022-08-03 at 12:57:54 +0000