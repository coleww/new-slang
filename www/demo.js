var newSlang = require("../")
var lev = 0.5
var conversions = newSlang.conversions
document.getElementById('theMap').textContent = JSON.stringify(conversions, null, 2)

document.getElementById('level').addEventListener("change", function(e){
  lev = e.target.value  // set level!
  document.getElementById('output').textContent = newSlang(document.getElementById('input').value, lev, conversions)
})

document.getElementById('input').addEventListener("keyup", function(e){
  document.getElementById('output').textContent = newSlang(document.getElementById('input').value, lev, conversions)
})


document.getElementById('addThing').addEventListener("click", function(e){
  conversions[document.getElementById('from').value] = document.getElementById('to').value
  document.getElementById('from').value = document.getElementById('to').value = ''
  document.getElementById('theMap').textContent = JSON.stringify(conversions, null, "  ")
})