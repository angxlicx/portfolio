console.log("Hello World")

// copyright date changes
var year = new Date().getFullYear();

var Date= `&copy; Kelly Hoang ${year}. All Rights Reserved.`;

document.getElementById("footer").innerHTML = Date;

// the alertbutton
var button = document.getElementById('alertButton');

button.addEventListener('click', function() {

  alert('boop! you been boop lol!');
});

 // button counter
 var incrementButton = document.getElementById('btn-counter');
 var counterElement = document.getElementById('counter');

 var count = 0;

 incrementButton.addEventListener('click', function() {
   
   count++;
   counterElement.textContent = 'meows: ' + count;
 });

  var numbersList = document.getElementById('numbers');


 // hover button
 var hoverButton = document.getElementById('hoverButton');

 hoverButton.addEventListener('mouseover', function() {
   hoverButton.innerText = 'YOU WON 10K CLICK ME NOW';
 });

 hoverButton.addEventListener('mouseleave', function() {
   hoverButton.innerText = 'hover me! ( *∵* )';
 });

// hover button alert
 var button = document.getElementById('hoverButton');

button.addEventListener('click', function() {

  alert('LOL just kidding! (>▽<)');
});

// loop
 var numbersList = document.getElementById('numbers');

 for (let i = 1; i <= 100; i++) {

   var listItem = document.createElement('li');
   
   listItem.textContent = i % 2 === 0 ? 'even' : 'odd';

   numbersList.appendChild(listItem);
 }