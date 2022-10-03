const cars = ['Mercedes', 'Porsche', 'BMW', 'Audi'];

// for loop
console.log("Using a 'for' loop");
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}
console.log('');

// forEach loops
/*
*  a forEach loop is a property of the object (array) that is being itterated through; in this case 'cars.forEach'; the argument is an anonymous function taking one argument - this is usually the singular case of the array object name; therefore in this case the array is 'cars' and the argument becomes 'car'.
* */
console.log("Using a 'forEach' loop");
cars.forEach(function(car) {
    console.log(car);
});

// forEach takes 3 arguments - in this case 'car', 'index' and the whole array 'array'

cars.forEach(function(car, index, array) {
    cars.forEach(function (car, index) {
        console.log(`${index}: ${car}`);
        console.log(array);
    })
});

