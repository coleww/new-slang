var conversions = {
  ou: 'oo',
  i: 'eye',
  e: 'ee',
  ow: 'au',
}

module.exports = function(text, lev){
  var newStr = text
  var level = lev !== undefined ? lev : 0.5
  Object.keys(conversions).forEach(function(substr){
    if(newStr.indexOf(substr) !== -1 && Math.random() < level){
      newStr = newStr.replace(new RegExp(substr, 'g'), conversions[substr])
    }
  })
  return newStr
}