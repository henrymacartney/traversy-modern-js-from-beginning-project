const people = [
    {name: 'John', age: 38},
    {name: 'Philip', age: 27},
    {name: 'Steve', age: 32}
]

for (let i = 0; i < people.length ; i++) {
    console.log(`${people[i].name}, who is currently ${people[i].age} years old}`);
}