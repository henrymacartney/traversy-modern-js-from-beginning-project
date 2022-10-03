// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;
console.log(`Initial values in Global Scope: a = ${a}, b = ${b} and c = ${c}`);

// function test - block scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;

  console.log(`Inside function a = ${a}, b = ${b} and c = ${c}`);
}

test();
console.log(`After function call values in Global Scope are unchanged: a = ${a}, b = ${b} and c = ${c}`);
console.log(' ');

// if statement - block scope
if (true) {
  var a = 7; // resets value of 'var' in global scope
  let b = 8;
  const c = 9;

  console.log(`Within an 'if' statement values are: a = ${a}, b = ${b} and c = ${c}`);
}
console.log(`After 'if' statement values in Global Scope are changed: a = ${a}, b = ${b} and c = ${c}`);
console.log(' ');

// loops
console.log(`In a 'for' loop with 'b' iterating from 0 to 4:`);
for (let b = 0; b < 5; b++) {
  if (b == 4) {
    console.log(`Within 'for' loop 'a' = ${a}, 'b' = ${b} and 'c' = ${c}`);
    console.log(
      `Global Scope of 'b' changes with each iteration, whereby its final value is ${b} ...`
    );
  } else {
    console.log(`'a' = ${a}, 'b' = ${b} and 'c' = ${c}`);
  }
}
console.log(`... but outside the 'for' loop the Global Scope becomes: a = ${a}, b = ${b} and c = ${c}`);

