console.log(fruit); // output original order in array
let fruit_sorted = fruit.sort();  // sort the array

let val = numbers;
let joined = numbers.concat(numbers2);

// when numbers are sorted they are arranged in the order of the first digit, so that firstly come all numbers beginning with a '1', then come those beginning with '2' etc.
let sorted = joined.sort();

// use a callback function as follows to sort them properly
let forwards = joined.sort(function(x, y) {
    return x - y;
})

// to reverse the sort swap the parameters 'x' and 'y'
let backwards = joined.sort(function(x, y) {
    return y - x;
})

// find in arrays
function over50(num) {
    return num > 50;
}

let found = numbers.find(over50);


console.log(fruit_sorted);
console.log(val);
console.log(joined);
console.log(sorted);
console.log(forwards);
console.log(backwards);
console.log(numbers);
console.log(found);