---
title: 'namespace get_entry_from_heplike'

description: "[No description available]"

---






[No description available]

## Attributes

|                | Name           |
| -------------- | -------------- |
| | **[topdown](/documentation/code/namespaces/namespaceget__entry__from__heplike/#variable-topdown)**  |
| | **[filename](/documentation/code/namespaces/namespaceget__entry__from__heplike/#variable-filename)**  |
| string | **[request](/documentation/code/namespaces/namespaceget__entry__from__heplike/#variable-request)**  |



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

Updated on 2022-08-01 at 12:13:30 +0000