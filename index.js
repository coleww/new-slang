// string subsequences that generally sound kinda similar in english
var conversions = {
  oo: 'ou',
  i: 'eye',
  e: 'ee'
}

// iterate over conversion map, adding the reverse direction.
Object.keys(conversions).forEach(function(k){
  conversions[conversions[k]] = k
})

// all the available rhyme-y substrings
var substrs = Object.keys(conversions)

module.exports = function(text, lev){
  var newStr = text
  var level = lev !== undefined ? lev : 0.5
  substrs.forEach(function(substr){
    // if the substr exists in newStr, and we pass the dice roll, and the key still exists
    if(newStr.indexOf(substr) !== -1 && Math.random() < level && !!conversions[substr]){

      // delete the reverse swap so we don't immediately swap back
      delete conversions[conversions[substr]]

      // convert the substr // should this be global?
      newStr = newStr.replace(new RegExp(substr, 'g'), conversions[substr])
    }
  })
  return newStr
}