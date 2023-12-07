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

 // Get the ordered list element by its id
 var numbersList = document.getElementById('numbers');

 // Use a for loop to create 100 <li> elements
 for (let i = 1; i <= 100; i++) {
   // create a new <li> element with the createElement() document method
   var listItem = document.createElement('li');
   
   // set the text content of the new <li> element based on even or odd index
   listItem.textContent = i % 2 === 0 ? 'even' : 'odd';

   // append the <li> element to the ordered list
   numbersList.appendChild(listItem);
 }