
// var => Create variable
// let => Create variable (handle the scope differentely)
// const => Variable cannot be change


// Array
var array = ['a', 'b', 'c'];
console.log(array, array[0]);

// PLay with Object
var object = {
  key: 'wrong-key',
  attr1: 'value1',
  attr2: 'value2',
  attr3: 'value3',
}
var idx = 2;
var key = `attr${idx}`;

console.log(object.key);
console.log(object[key]);

// Transform Object JS into JSON String
var jsonStr = JSON.stringify(object);
console.log(jsonStr);
// Str to Object
console.log(JSON.parse(jsonStr));

// Functions
var sum = function(a, b) {
  return a + b;
}
var minus = function(a, b) {
  return a - b;
}


console.log(" 3 + 2  = ", sum(3, 2));
console.log(" 3 - 2  = ", minus(3, 2));

// Send function as params
var doSometing = function(what, a, b) {
  return what(a, b);
};
console.log(" 3 + 2  = ", doSometing(sum, 3, 2));
console.log(" 3 - 2  = ", doSometing(minus, 3, 2));

// Recursive
var recursive = function(i) {
  console.log(`i is ${i}`);
  if (i > 0) {
    recursive(i - 1);
  }
}
recursive(5);


// 3 are identical
function function_legacy_definition_global(arg) {

}
var function_legacy = function(arg) {

}
var function_es6 = (arg) => {

}

// Skip the return (3 are identical)
function divide(a, b) {
  return a / b;
}
(a, b) => {
  return a / b;
}
(a, b) => a / b;


// Use do something for multiply, without definind multiply
console.log("2 x 4 = ", doSometing((a, b) => a * b, 2, 4));

// what is `(a, b) => a * b`
// what is
// function(a, b) {
//   return a * b;
// }