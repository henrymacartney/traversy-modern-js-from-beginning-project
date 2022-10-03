// FUNCTION EXPRESSIONS

// without parameters
const cube = function(x = 4, power = 3){
    return Math.pow(x, power);
}

console.log('The cube of 4 is: ' + cube(4, 3));
console.log('The fourth power of 8 is: ' + cube(8, 4));

// with parameters
const square = function(x){
    return `The square of ${x} is ${x * x}`;
}

console.log(square(8));


// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs
// Default
(function(){
    console.log('IIFE ran ....');
})();

// with parameters
(function(name){
    console.log('Hello ' + name + ' ran ....');
})('Henry');


// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo ...');
    },
    edit: function(id){
        console.log(`Edit todo with id ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo ....');
}

todo.add();
todo.edit(22);
todo.delete();