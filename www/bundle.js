(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

module.exports.conversions = conversionMap
},{}],2:[function(require,module,exports){
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
},{"../":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInd3dy9kZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGNvbnZlcnNpb25NYXAgPSB7XG4gIG91Z2g6ICdld2UnLFxuICBhbnQ6ICdhdW50JyxcbiAgZW5kOiAnaWhuZCcsXG4gIGFuZDogJ3VobicsXG4gIGVudDogJ2luZCcsXG4gIGxhbjogJ2xvd24nLFxuICBhc3Q6ICdpbnN0JyxcbiAgb3U6ICdvbycsXG4gIG93OiAnYXUnLFxuICBpbDogJ2lsaWlsJyxcbiAgYWc6ICdhY2snLFxuICBldzogJ2Vlb28nXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGV4dCwgbGV2LCBjb252KXtcbiAgdmFyIG5ld1N0ciA9IHRleHRcbiAgdmFyIGxldmVsID0gbGV2ICE9PSB1bmRlZmluZWQgPyBsZXYgOiAwLjVcbiAgdmFyIGNvbnZlcnNpb25zID0gY29udiAhPT0gdW5kZWZpbmVkID8gY29udiA6IGNvbnZlcnNpb25NYXBcbiAgT2JqZWN0LmtleXMoY29udmVyc2lvbnMpLmZvckVhY2goZnVuY3Rpb24oc3Vic3RyKXtcbiAgICBpZihuZXdTdHIuaW5kZXhPZihzdWJzdHIpICE9PSAtMSAmJiBNYXRoLnJhbmRvbSgpIDwgbGV2ZWwpe1xuICAgICAgbmV3U3RyID0gbmV3U3RyLnJlcGxhY2UobmV3IFJlZ0V4cChzdWJzdHIsICdnJyksIGNvbnZlcnNpb25zW3N1YnN0cl0pXG4gICAgfVxuICB9KVxuICByZXR1cm4gbmV3U3RyXG59XG5cbm1vZHVsZS5leHBvcnRzLmNvbnZlcnNpb25zID0gY29udmVyc2lvbk1hcCIsInZhciBuZXdTbGFuZyA9IHJlcXVpcmUoXCIuLi9cIilcbnZhciBsZXYgPSAwLjVcbnZhciBjb252ZXJzaW9ucyA9IG5ld1NsYW5nLmNvbnZlcnNpb25zXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlTWFwJykudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShjb252ZXJzaW9ucywgbnVsbCwgMilcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJykuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKXtcbiAgbGV2ID0gZS50YXJnZXQudmFsdWUgIC8vIHNldCBsZXZlbCFcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpLnRleHRDb250ZW50ID0gbmV3U2xhbmcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykudmFsdWUsIGxldiwgY29udmVyc2lvbnMpXG59KVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSl7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKS50ZXh0Q29udGVudCA9IG5ld1NsYW5nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLnZhbHVlLCBsZXYsIGNvbnZlcnNpb25zKVxufSlcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGhpbmcnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gIGNvbnZlcnNpb25zW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcm9tJykudmFsdWVdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvJykudmFsdWVcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zyb20nKS52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bycpLnZhbHVlID0gJydcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZU1hcCcpLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoY29udmVyc2lvbnMsIG51bGwsIFwiICBcIilcbn0pIl19
