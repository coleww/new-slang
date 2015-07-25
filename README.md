new-slang
----------------

[![NPM](https://nodei.co/npm/new-slang.png)](https://nodei.co/npm/new-slang/)

[![Build Status](https://travis-ci.org/coleww/new-slang.svg?branch=master)](https://travis-ci.org/coleww/new-slang)

substitooote saabstrings of a teeeext for othar strings with the eyese and whamzy of a linguist, soo as to creet new thangs

### USE

```
var newSlang = require('new-slang')

newSlang("this is how you use the new-slang node module.")
// => this is hau yoo use the neeoo-slang node module.

newSlang("this is how you use the new-slang node module.", 0.1)
// => this is how you use the neeoo-slang node module.

newSlang("this is how you use the new-slang node module.", 1, {node: 'ruby', module: 'gem'})
// => this is how you use the new-slang ruby gem.
```

### API

`newSlang(text, level, conversions)`

- text: the text to transform
- level: 0-1 frequency at which to convert text, 0==never, 1==always, defaults to 0.5
- conversions: object that looks like `{substringToReplaceWith: "this other string", ...}`, comes with a default conversions map. 
