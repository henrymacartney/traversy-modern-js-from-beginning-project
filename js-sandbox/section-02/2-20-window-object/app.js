// WINDOW METHODS / OBJECTS / PROPERTIES

/******************************************
 * The following code examples are outdated, but shown
 * because they still exist. It would be better to use the
 * DOM in an 'app' and output a formatted CSS response.
 * *****************************************/
// no need to use 'window', since we are already at its start
// window.console.log(123);

// alert - outputs a message to the default output (e.g. screen)
// window.alert("Hello World!");

// prompt - used to get input from the user
// const input = prompt();
// alert(input);

// confirm - way to ensure the user really wants to do something
// if (confirm("Are you sure?")) {
//   console.log("Your input will be deleted now!");
// } else {
//   console.log("Input will not be deleted!!!!");
// }

/******************************************
 * The following code gets window properties
 * *****************************************/
// OUTER HEIGHT OF THE WINDOW - measurement is from outer edges of window
val = window.outerHeight; // alternative val = outerHeight;
val = window.outerWidth;

// INNER HEIGHT OF THE WINDOW - measurement from within scrollbars
val = window.innerHeight;
val = window.innerWidth;

// SCROLL POINTS
val = window.scrollY;
val = window.scrollX;

// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // extracts parameters from url
// val = window.location.href = "http://google.com"; // redirects 'href' to google.com
// reload the page
// val = window.reload(); // keeps reloading window - use in function

// HISTORY OBJECT
val = window.history.go(-1); // gets the most recently opened site; -2, -3, ..... for the ones previous to them
val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.language;
val = window.navigator.vendor;
val = window.navigator.keyboard;
console.log(val);
