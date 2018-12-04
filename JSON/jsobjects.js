var team = {
  squad1: "team 1",
  squad2: "team 2",
  squad3: "team 3"
}
team = JSON.stringify(team);
team = JSON.parse(team)

for (t in team){
  document.write('<li>' + team[t] +  '</li>')
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
  document.write('<div><p id="op">' + '- ' + employee[e].name + '</p></div>')
  // console.log(output += '<li>'+ employee[e].name +'</li>');
}
