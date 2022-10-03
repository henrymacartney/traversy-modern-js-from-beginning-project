// FUNCTION DECLARATIONS

// ES5
function ES5greet(firstName, lastName) {
    if (typeof firstName === 'undefined') {firstName = 'John'}
    if (typeof lastName === 'undefined') {lastName = 'Doe'}
    return '"ES5 returns:" Hello ' + firstName + ' ' + lastName;
}

// without parameters
console.log(ES5greet());

// with parameters
console.log((ES5greet('David', 'Macartney')));

// ES6
function greet(firstName = 'Max', lastName = 'Müller') {
    return 'Hello ' + firstName + ' ' + lastName;
}

// call without parameters
console.log(greet());

// with parameters
console.log(greet('Henry', 'Macartney'));

