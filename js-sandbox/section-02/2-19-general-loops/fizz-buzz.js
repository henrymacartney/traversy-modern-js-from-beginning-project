/*
* FIZZ-BUZZ
* Output enough digits to demonstrate the following rules:
* 1. if the number is a multiple of 3 output FIZZ
* 2. if the number is a multiple of 5 output BUZZ
* 3. if the number is a multiple of 3 and 5 output FIZZ-BUZZ
* */

for (let i = 1; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) {
        console.log('FIZZ-BUZZ')
    } else if (!(i % 3)) {
        console.log('FIZZ')
        } else if (!(i % 5)) {
            console.log('BUZZ')
            } else  {
                console.log(i);
        }
}
