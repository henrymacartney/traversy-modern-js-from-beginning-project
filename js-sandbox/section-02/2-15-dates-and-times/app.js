const today = new Date();
const sameDay = new Date('Sep 16 2022');
let birthday = new Date('11.16.51 17:01');
birthday = new Date('January 18 1992 17:01');
let val = today;
val = today.toString();
val = birthday;
val = (birthday.getMonth()+1) > (today.getMonth()+1);
val = (today.getMonth()+1) - (birthday.getMonth()+1);
val = sameDay.getMonth() === today.getMonth();

const person = {
    name: 'Henry',
    birthday: new Date('Sep 16 1951')
}

val = person;
val = birthday;
birthday.setMonth(6);
birthday.setDate(13);
birthday.setFullYear(1985);

console.log(val);
console.log(typeof val);