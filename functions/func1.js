var name = "Pawel"

// function Hello (a) {
//   alert(a + " " + name) , document.write(a), console.log(a);
// }
//
// a = prompt("Say Hello: ")

//func with default parameter
function helloSbd (first_name = "Bobby", last_name = "Basingha") {
  return full_name = (first_name + " " + last_name),
   console.log(full_name),
    alert(first_name + " " + last_name);
}

// function addtion (x, y) {
//   return added = x + y,
//    alert("X + Y = " + (added));
// }
//
// function timesFive(numInput){
//   var result = numInput * 5
//   return result
// }

var v = "Global V"
var stuff = "Global Stuff"

function fun(stuff) {
  console.log(v);
  stuff = "Change stuff inside function"
  console.log(stuff);
}
fun()
console.log(stuff);
// addtion(1, 2)
// helloSbd()
