
// console.log("Javascript L1 tutorial project!");
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;


var first_name = prompt("What is you first name?")
console.log("First name is: " + first_name);
var last_name = prompt("What is your last name?")
console.log("Last name is: " + last_name);

if (first_name[0] === last_name[0]){
  nameCond = true}
  if (nameCond === true) {
    console.log("Beginning of the First name and Last name is the same");}
    else {
  console.log("Beginning of the First and Last name is different, precisely First letters of the first name: " + first_name[0] + "first letter of the last name: " + last_name[0]);
}
console.log("nameCond value is: " + nameCond);


var age = prompt("What is your age?")

if (age >= 20 && age <= 30){
  ageCond = true}
  if(ageCond === true){
  console.log("Age is between 20 or 30, precisely: " + age);}
  else { console.log("Age is either below 20 or above 30, precisely: " + age);
}
console.log("ageCond value is: " + ageCond);


var height = prompt("How tall are you in \"cm\" ?")

if (height >= 180){
  heightCond = true}
  if (heightCond === true){
  console.log("Height us at least 180cm, precisely: " + height);}
  else {console.log("Height is less than 170cm");
}
console.log("heightCond is: " + heightCond );



var pet_name = prompt("What is the name of your pet?")
console.log("Pet name is: " + pet_name);

if (pet_name[pet_name.length-1] === "y"){
  petCond = true}
  if (petCond === true){
    console.log("Last letter of the pet's name is: y");}
    else {console.log("Last letter of the pet name is: " + pet_name[pet_name.length-1]);}
console.log("petCond is: " + petCond);

if (nameCond && ageCond && heightCond && petCond === true){
  console.log("All conditions are true");}
    else {console.log(" Not all conditions are true");}
