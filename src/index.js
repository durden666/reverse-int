module.exports = function reverse (n) {

  if (n === undefined) {
    return false
  } else {
    return parseInt(n.toString().split('').reverse().join(''));        
    }
  } 

