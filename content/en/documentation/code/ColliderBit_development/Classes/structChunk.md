---
title: 'struct Chunk'
description: 'Struct to describe start and end indices for a chunk of data. '

---








Struct to describe start and end indices for a chunk of data.  [More...](#detailed-description)


`#include <chunks.hpp>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Chunk](/documentation/code/colliderbit_development/classes/structchunk/#function-chunk)**(std::size_t s, std::size_t e) |
| | **[Chunk](/documentation/code/colliderbit_development/classes/structchunk/#function-chunk)**() |
| bool | **[iContain](/documentation/code/colliderbit_development/classes/structchunk/#function-icontain)**(std::size_t index) const |
| std::size_t | **[length](/documentation/code/colliderbit_development/classes/structchunk/#function-length)**() const |
| | **[Chunk](/documentation/code/colliderbit_development/classes/structchunk/#function-chunk)**(std::size_t s, std::size_t e, std::size_t el) |
| | **[Chunk](/documentation/code/colliderbit_development/classes/structchunk/#function-chunk)**(std::size_t s, std::size_t e) |
| | **[Chunk](/documentation/code/colliderbit_development/classes/structchunk/#function-chunk)**() |
| bool | **[iContain](/documentation/code/colliderbit_development/classes/structchunk/#function-icontain)**(std::size_t index) const |
| std::size_t | **[length](/documentation/code/colliderbit_development/classes/structchunk/#function-length)**() const |
| bool | **[operator==](/documentation/code/colliderbit_development/classes/structchunk/#function-operator==)**(const [Chunk](/documentation/code/colliderbit_development/classes/structchunk/) & other) const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::size_t | **[start](/documentation/code/colliderbit_development/classes/structchunk/#variable-start)**  |
| std::size_t | **[end](/documentation/code/colliderbit_development/classes/structchunk/#variable-end)**  |
| std::size_t | **[eff_length](/documentation/code/colliderbit_development/classes/structchunk/#variable-eff-length)**  |

## Detailed Description

```
struct Chunk;
```

Struct to describe start and end indices for a chunk of data. 

**Author**: Ben Farmer ([ben.farmer@gmail.com](mailto:ben.farmer@gmail.com)) 

**Date**: 2016 Mar, 2017 Jan, Feb, Mar



------------------

## Public Functions Documentation

### function Chunk

```
inline Chunk(
    std::size_t s,
    std::size_t e
)
```


### function Chunk

```
inline Chunk()
```


### function iContain

```
inline bool iContain(
    std::size_t index
) const
```


### function length

```
inline std::size_t length() const
```


### function Chunk

```
inline Chunk(
    std::size_t s,
    std::size_t e,
    std::size_t el
)
```


### function Chunk

```
inline Chunk(
    std::size_t s,
    std::size_t e
)
```


### function Chunk

```
inline Chunk()
```


### function iContain

```
inline bool iContain(
    std::size_t index
) const
```


### function length

```
inline std::size_t length() const
```


### function operator==

```
inline bool operator==(
    const Chunk & other
) const
```


## Public Attributes Documentation

### variable start

```
std::size_t start;
```


### variable end

```
std::size_t end;
```


### variable eff_length

```
std::size_t eff_length;
```


-------------------------------

Updated on 2022-08-03 at 00:01:08 +0000