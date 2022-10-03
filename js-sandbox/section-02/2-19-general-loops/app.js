// FOR LOOPS

for (let i = 0; i < 10; i++){
    if (i===4) {
        console.log(`${i + 1} is my favourite number.`);
        continue;
    }
    console.log(`${i + 1} is the number.`);

    if (i===8) {
        console.log('Counting stopped at ' + (i + 1));
        break;
    }
}

// WHILE LOOPS

let j = 0;
while (j < 10) {
    if (j === 4) {
        console.log(`j = ${j + 1} and ${j + 1} is my favourite number!`);
    } else {
        console.log(`j = ${j + 1} `);
    }
        j++;
}

// DO..WHILE LOOPS

let k = 0;
do {
    if (k === 4) {
        console.log(`${k + 1} and its multiples are favourite numbers of mine!`);
    } else {
            console.log(`${k + 1} is the number.`);
    }
    k++;
} while (k < 10)
