// template literals / strings
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

const name1 = 'Henry';
const age1 = 70;
const job1 = 'Biochemist';
const city1 = 'Wiesbaden';

// without template strings
let html1 = '<ul><li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + ' </li></ul>';

console.log(html1);
document.body.innerHTML = html1;

function sayHello() {
    return 'Hello there, Henry!!';
}
let html2 = `
    <ul>
        <li>Name: ${name1}</li>
        <li>Age: ${age1}</li>
        <li>Job: ${job1}</li>
        <li>City: ${city1}</li>
        <li>${2 * 48}</li>
        <li>${sayHello()}</li>
        <li>${age > 69 ? 'Over 69' : 'Under 69'}</li>
    </ul>`;

console.log(html2);
document.body.innerHTML = html2;