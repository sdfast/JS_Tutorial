
var myheader = document.querySelector("h1")
var myheader.style.color = "red"

//random color generator
function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}


//function that applies color generator to elements
function changeHeaderColor(){
  colorInput = getRandomColor()
  myheader.style.color = colorInput;
}

//performe action overt intervals (miliseconds)
setInterval("changeHeaderColor()",500)
