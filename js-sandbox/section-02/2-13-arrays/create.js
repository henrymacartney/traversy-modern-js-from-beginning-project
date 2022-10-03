// CREATING ARRAYS
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Pear', 'Orange'];
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 5}, new Date];

let arrContent;
let len;
let name = 'Henry';
let single;

// get array length
len = numbers.length;

// output array contents
console.log(`The 'numbers' array holds: ${numbers}`);
console.log('just the array is: ');
console.log(numbers);
// output length of array
console.log(`The array holds ${len} values`);
console.log("The following assigns 'numbers[]' to 'val'");
arrContent = numbers;
console.log(arrContent);
console.log('Check if "numbers" is an array:');
// check if something is an array or not
console.log(Array.isArray(numbers));
console.log('Check if "arrContent" is an array:');
console.log(Array.isArray(arrContent));
console.log('Check if "name" is an array:');
console.log(Array.isArray(name));
// get a single value from the array
single = numbers2[numbers2.length - 1];
console.log(`Last value in array "numbers2" is ${single}`);
// output all array elements
for(let i = 0; i < numbers.length; i++) {
    console.log(`${i + 1}. array value is ${numbers[i]}`);
}
