
var myheader = document.querySelectorAll("h1")


//random color generator
function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

getRandomColor()

//function that applies color generator to elements
function changeHeaderColor(){
  for (var i=0; i<2; i++){
  colorInput = getRandomColor()
  myheader[i].style.color = colorInput;
  }
}

changeHeaderColor()
//performe action overt intervals (miliseconds)
setInterval("changeHeaderColor()",300)

var parag = document.querySelectorAll("p")

for (var p in parag){
  parag[0].textContent = "XXX XXX XXX"
  parag[1].textContent = "<strong>ZZZ ZZZ ZZZ</strong>"
  parag[2].innerHTML = "<strong><i>CCC CCC CCC</i></strong>"
}

var body = document.querySelector('body')
var p1 = document.createElement("P");

p1.style.marginTop="20px"
p1.style.marginLeft="20px"
p1.innerHTML = "paragraph TEXT"
p1.style.color = "red"
