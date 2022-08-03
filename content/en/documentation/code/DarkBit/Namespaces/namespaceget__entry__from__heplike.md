---
title: 'namespace get_entry_from_heplike'

description: "[No description available]"

---






[No description available]

## Attributes

|                | Name           |
| -------------- | -------------- |
| | **[topdown](/documentation/code/darkbit/namespaces/namespaceget__entry__from__heplike/#variable-topdown)**  |
| | **[filename](/documentation/code/darkbit/namespaces/namespaceget__entry__from__heplike/#variable-filename)**  |
| string | **[request](/documentation/code/darkbit/namespaces/namespaceget__entry__from__heplike/#variable-request)**  |



## Attributes Documentation

### variable topdown

```
topdown;
```


### variable filename

```
filename =  os.path.join(root, name);
```


### variable request

```
string request =  r'{}'.format(load(f, Loader=Loader)[str(sys.argv[2])]);
```





-------------------------------

Updated on 2022-08-03 at 05:45:13 +0000