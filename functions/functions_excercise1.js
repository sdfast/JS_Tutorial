//
//
// function sleepIn(weekday, vacation){
//   return (!weekday || vacation)}
//
// function monkeyTrouble(aSmile, bSmile){
//   return (aSmile && bSmile) || (!aSmile && !bSmile)}
//
// function stringTimes(str, n){
//   var returnStr="";
//   var i = 0;
//   while (i<n){
//     returnStr += str
//     i++
//   }
//   return returnStr
// }


function luckySum (a,b,c){
  if (a === 13){
    return "unlucky"
  }
  else if (b === 13){
    return (a + " , " + "b is unlucky")
  }
  else if (c === 13){
    return a + b + " " + "c is unlucky"
  }
  else {
    return "Lucky Sum is: " + (a + b + c).toString()
  }
}

function caught_speeding(speed, is_birthday){
  if (is_birthday){
    speed -= 5
  }
  if (speed <= 60){
    return 0
  }
  if (60 < speed <= 80){
    return 1;
  }
  return 2
}


function makeBricks(x, y, goal){
  var small = 1
  var big = 5
  var small = small * x
  var big = big * y
  if (small + big === goal){
    return "T"
  }
    else if (small + big !== goal){
      return "F"
    }
  }
