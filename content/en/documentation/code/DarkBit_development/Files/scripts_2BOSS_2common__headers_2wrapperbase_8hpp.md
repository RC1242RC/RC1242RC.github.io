---
title: 'file common_headers/scripts/BOSS/common_headers/wrapperbase.hpp'

description: "[No description available]"

---






[No description available]

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[WrapperBase](/documentation/code/classes/classwrapperbase/)**  |




## Source code

```
#ifndef __WRAPPERBASE__
#define __WRAPPERBASE__

__START_GAMBIT_NAMESPACE__

class AbstractBase;

class WrapperBase
{
    protected:
        AbstractBase* BEptr;
        bool delete_BEptr;
    public:
        bool can_delete_BEptr() { return delete_BEptr; }
        void set_delete_BEptr(bool del_wrp_in) { delete_BEptr = del_wrp_in; }

    public:
        WrapperBase(AbstractBase* BEptr_in) : BEptr(BEptr_in), delete_BEptr(true) {}

        virtual ~WrapperBase() {}
};

__END_GAMBIT_NAMESPACE__

#endif /* __WRAPPERBASE__ */
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
