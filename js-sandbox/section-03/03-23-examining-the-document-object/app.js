let val ;

val = document;
val = document.all;
val = document.all[0]; // can be accessed as an array
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.doctype.baseURI;
// is seems the examples following these in the Traversy tutorial are no longer available.
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id; // there is no ID
val = document.links[0].className;
val = document.links[0].classList;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

// HTML collections can be 'put' into an array and read out using 'forEach'
let scripts = document.scripts;

// create the array
let scriptsArr = Array.from(scripts);

// use 'forEach' to output each of the scripts
scriptsArr.forEach(function(script) {
    console.log(script);
});


console.log(val);
