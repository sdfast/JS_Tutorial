
var carInfo = {make: "Toyota", year:1990, model:"Camry"}
var mixedObject = {a: "boyo", b: [1,2,3], c: {inside:carInfo}}


for (key in mixedObject){
  console.log(key);
  console.log(mixedObject[key]);
  console.log("elemnt displayed");
}

for (key in carInfo){
  if (key === "model"){
  console.log(key);
  }
}

for (key in carInfo){
  console.log(key, ":", carInfo[key]);
}
