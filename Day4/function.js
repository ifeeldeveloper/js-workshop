//regular function
function add(a, b) {
  console.log(a + b)
}
add(3, 3)

//named function
let add1 = function (a = 0, b = 0, c = 0) {
  console.log(a + b + c)
  console.log("JavaScript")
}
add1(3, 4)

//arrow function
let add2 = (a, b, c) => {
  console.log(a + b + c)
}
add2(4, 3, 2)

const dev = () => {
  console.log("I am Developer")
}
dev()

//anonymous function

// (function () {
//   console.log('Immidiately Invoked Function Execution');
// })();

setTimeout(function () {
  console.log("Execute after 1 Second")
}, 1000);

let person = {
  firstName: 'John',
  lastName: 'Doe'
};
(function () {
  console.log(person.firstName + '' + person.lastName);
})(person);
