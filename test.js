var tap = require('tape')
var newSlang = require('./')


tap.test('slangifies',function(t){
  t.plan(1)
  t.equal(newSlang('you will be magic', 1), 'yoo weeyeell bee mageeyeec')
})