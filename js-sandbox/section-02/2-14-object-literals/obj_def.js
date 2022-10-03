// define an object
const person = {
    firstName: 'Henry',
    lastName: 'Macartney',
    dob: {
        day: 15,
        mon: 9,
        yr: 1951
    },
    email: 'macartneyhenry@gmail.com',
    hobbies: ['nordic walking', 'music', 'wine'],
    address: {
        plz: 65205,
        city: 'Wiesbaden',
        street: 'Ringstrasse 8A'
    },
    getBirthYear: function() {
        let yr = new Date();
        let curYr = yr.getFullYear();
        let curMo = yr.getMonth() +1;
        let curDy = yr.getDate();
        
        let age = curYr - this.dob.yr;
        if (curMo < this.dob.mon) {
            return age - 1;
        } else if (curMo >= this.dob.mon && curDy < this.dob.day) {
            return age - 1;
        } else {
            return age;
        }
    }
}

console.log(person);
console.log(person.lastName + ', ' + person.firstName);
console.log(person.getBirthYear());
console.log(person.email);
console.log(person.hobbies);
console.log(person.address.plz + ' ' + person.address.city + ' '  + person.address.street);