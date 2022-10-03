// FOR IN loops work on single objects
const user = {
    firstName: 'Henry',
    lastName: 'Macartney',
    city: 'Wiesbaden',
    age: 70
}

// output the keys of the key:pair values
console.log('output the keys of the key:pair values');
for (let i in user){
    console.log((i));
}
console.log('');

console.log('output the values of the key:pair values')
for (let i in user){
    console.log(user[i]);
}
console.log('');

console.log('output the key:pair values')
for (let i in user){
    console.log(`${i}: ${user[i]}`);
}
console.log('');
