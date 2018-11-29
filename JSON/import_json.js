var team = {
  T1: "Proxy team",
  T2: "Jinan team",
  T3: "DevOps team"
}
team = JSON.stringify(team);
team = JSON.parse(team)

for (t in team){
  document.write("teams: " + team[t] + " , ")
}


var employee = [
  {
    name: "Pawel",
    age: 33
  },
  {
    name: "Kacper",
    age: 25
  },
  {
    name: "Tomek",
    age: 28
  }
];

var output = "";
for (var e = 0; e<3; e++){
  document.write('<p id="op">' + employee[e].name + '</p>')
  // console.log(output += '<li>'+ employee[e].name +'</li>');
}

// for (t in team){
//   team[t].innerHTML
// }
