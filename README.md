Example
-----------
Getting tired of require

> ```var MyModule = require('../../../MyModule.js');```

Why don't you use this?

> ```var MyModule = require('MyModule');``` *<-- This is better*

How to use
---------------
You must have meepo.json on your root folder

```
...
"MyModule": "../../../MyModule.js"
...

```