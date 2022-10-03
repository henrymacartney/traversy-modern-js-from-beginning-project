// document.getElementByID()

console.log(document.getElementById("task-title"));

// get things from the DOM
console.log((document.getElementById('task-title').id));

// change styling
document.getElementById('task-title').style.padding = '5px 10px';
document.getElementById('task-title').style.background = '#111';
document.getElementById('task-title').style.color = '#fff';

// change content
document.getElementById('task-title').textContent = "Henry's Task List";
document.getElementById('task-title').style.background = '#f00';
document.getElementById('task-title').style.color = 'yellow';
document.getElementById('task-title').innerText = "Henry's Completed Task List";