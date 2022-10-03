// MAP
/*
* map method of objects (in this case an array) takes a function as argument and returns an array of specific
* */

const users = [
    {id: 1, userName: 'Jane'},
    {id: 2, userName: 'Sarah'},
    {id: 3, userName: 'Karen'},
    {id: 4, userName: 'Susie'}
];

const ids = users.map(function(user){
    return user.userName;
});

console.log(ids);