const firstName = 'Henry';
const lastName = 'Macartney';
const myAge = 70;
const str = 'Hello there, my name is Henry';
const tags = 'web programming, web design, php, programming, javascript';
const strSentence = 'When web programming, one starts by designing the web page - this is the process of web design';

let val;
let val1;

// concatenation
val = lastName + ', ' + firstName;

// append
val = firstName;
val += ' ';
val += lastName;

val = 'Hello, my name is ' + firstName + ' and I am ' + myAge + ' years old.';

// escaping
val = 'That\'s awesome, I can\'t wait!'

// string properties
val = firstName.length; // because '.length' is property there are no parentheses

// concat method
val1 = firstName.concat(' ', lastName);
val = val1.length;
val = val1.toUpperCase();
val = val1.toLocaleLowerCase();

// get individual characters in string
// for(let i = 0; i < val.length; i++) {
//     console.log(val[i]);
// }

// indexOf()
val1 = firstName.concat(' ', lastName);
val = val1.indexOf('M');
val = val1.indexOf('e');

// charAt()
val = val1.charAt(6);

// get the last character of a string
val = lastName.charAt(lastName.length - 1);

// slice()
val = firstName.slice(0, 4); // slices off the first 4 letters of a string
val = firstName.slice(-3); // removes the last 3 letters

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Henry', 'Ulli');

// includes()
val = tags.includes('programming');
val = tags.includes('pascal');

if (strSentence.includes('php programming')) {
    val = 'The sentence includes the word \'programming\'';
} else {
    val = 'The sentence does NOT include the word \'programming\'';
}

console.log(val);