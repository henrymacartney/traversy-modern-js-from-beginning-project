let val;
let index;
let joined;

val = numbers;
// numbers[2] = 100;
index = numbers.indexOf(36);

// add to end of array
numbers.push(250);
// add to front of array
numbers.unshift(120);

// remove last array member
numbers.pop();
// remove first array member
numbers.shift();

// splice removes specific values from array
let spliced = numbers.splice(1, 1);
spliced = numbers.splice(1, 3);
console.log(spliced);

// reverse arrays
val = numbers2.reverse();

// concatinate
joined = numbers2.concat(spliced);



console.log(val);
console.log(index);
console.log(joined);