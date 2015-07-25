var conversionMap = {
  ough: 'ewe',
  ant: 'aunt',
  end: 'ihnd',
  and: 'uhn',
  ent: 'ind',
  lan: 'lown',
  ast: 'inst',
  ou: 'oo',
  ow: 'au',
  il: 'iliil',
  ag: 'ack',
  ew: 'eeoo'
}

module.exports = function(text, lev, conv){
  var newStr = text
  var level = lev !== undefined ? lev : 0.5
  var conversions = conv !== undefined ? conv : conversionMap
  Object.keys(conversions).forEach(function(substr){
    if(newStr.indexOf(substr) !== -1 && Math.random() < level){
      newStr = newStr.replace(new RegExp(substr, 'g'), conversions[substr])
    }
  })
  return newStr
}
