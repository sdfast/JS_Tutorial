
var names_array = []
var num_of_names = prompt("Give number of names you want to add: ")
num_of_names = parseInt(num_of_names)
console.log(typeof(num_of_names));

for (i = 0; i < num_of_names; i= i+1){
  names_array.push(prompt("Give name for the table: "))
}


function add(another_name = prompt("Give name you want to add to the array: ")){
  names_array.push(another_name)
}

function remove(){
  var remove_name = prompt("Give name you want to remove from the array: ")
  var index = names_array.indexOf(remove_name);
  names_array.splice(index,1);
}



remove()
console.log(names_array);
