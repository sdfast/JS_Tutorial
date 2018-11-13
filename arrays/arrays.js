document.write("Arrays!")

var country1 = "USA"
var country2 = "Poland"
var country3 = "China"
var countries = ["USA", "China", "Poland", "UK"]
var arraylengt = countries.length;
countries[4] = "India"

var last_country = countries.pop()
countries.push(last_country)



for (var i = 0; i < arraylengt; i++){
  console.log(countries[i]);
}

countries.forEach(function(entry) {
    console.log(entry);
});

console.log(last_country);

var matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix[0]);

matrix[0].forEach(function(entry){
  console.log(entry);
});

var letters = ["A", "B", "C"]

for (var elem in letters){
  console.log(elem + "");
}

for (letter of letters){
  console.log(letter + " is cool!");
}

for (letter of letters){
  if (letter === "A")console.log(letter + " is the one!");
}


function addAwesome(name){
console.log(name + "is awesome!");
}

// letters.forEach(addAwesome);
// letters.forEach(alert);

for (var x in countries){
  alert(countries[x])
}
