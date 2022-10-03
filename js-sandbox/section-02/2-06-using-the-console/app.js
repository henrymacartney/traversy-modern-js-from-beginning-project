console.log('Hello, Henry'); // outputs 'Hello, Henry' to the console
console.clear();
console.log(123);
console.log(true);
var greeting = '... Hello world from Henry!';
console.log(greeting);
console.log([1, 2, 3, 4]); // output the array
console.log({a: 1, b: 2}); // output the object
console.table({a: 1, b: 2});
console.error('Henry, you\'ve fucked up!!');
console.warn('Henry, you\'re about to fuck up!!');

// console.time('identifier') allows timer to be set to get time of execution
console.time('run');
    for (let i=0; i<1000; i++) {
        console.log('Hello Henry');
    }
console.timeEnd('run');

/*
to turn the title of the page blue enter:
document.querySelector('h1').style.color='blue'
into the console and press return,
or do this directly from the *.js file (see below)
*/

document.querySelector('h1').style.color='blue';