const colour = 'pink';

switch (colour) {
    case 'blue':
        console.log('The colour you chose was blue');
        break;
    case 'green':
            console.log('The colour you chose was blue');
            break;
    case 'yellow':
            console.log('The colour you chose was blue');
            break;
    case 'red':
            console.log('The colour you chose was blue');
            break;
    default:
            console.log('The colour you chose is not in this list!');
            break;
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);