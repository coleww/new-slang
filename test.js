var tap = require('tape')
var newSlang = require('./')


tap.test('slangifies',function(t){
  t.plan(1)
  t.equal(newSlang('through you we will be magic', 1), 'threwe yoo we wiliill be mackic')
})

tap.test('conversion map can be passed',function(t){
  t.plan(1)
  t.equal(newSlang('tofu', 1, {to: 'burr', fu: 'ito'}), 'burrito')
})


tap.test('level is optional',function(t){
  t.plan(1)
  t.equal(typeof newSlang('pasta sauce and gravy'), 'string')
})