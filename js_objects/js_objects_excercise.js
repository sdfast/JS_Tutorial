console.log("start excercise");

var employee = {
  name: "John Smith Brown",
  job: "Programmer",
  age: 31,
// function displays employee value lenght
  nameLength: function(){
    console.log(this.name + " object string length is: ");
    console.log(this.name.length);
    },
  alertAll: function(){
    alert("Name is " + this.name + ", Job is " + this.job +", Age is " + this.age)
  },
  lastName: function(){
    console.log(this.name.split(" ")[0]);
  }
}

employee.nameLength()
employee.alertAll()
employee.lastName()
// employee.emplAllMethod()
//

// for (empl in employee == "name"){
// console.log(employee[empl].length)
// }

console.log("End excercise");
