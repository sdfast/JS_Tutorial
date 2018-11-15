console.log("== Start js_objects2.js ==");

var object1 = {
  prop: 37,
  propMethod: function() {
    return this.prop;
  }
};
console.log(object1.propMethod());

var simple = {
  prop: "Hello",
  myMethod: function(){
    console.log("The simple method");
  }
}
console.log(simple.myMethod());

var anotherObject = {
  name: "Jose",
  greet: function(){
    console.log("Yo " + this.name)
  }
}

console.log("== End js_objects2.js ==");
