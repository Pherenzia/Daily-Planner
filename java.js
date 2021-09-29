//create a local storage function to put in daily planner
//use moment if statement to determine if time has already been passed
var timeblockEl = document.querySelector('timeblock')
var savebtnEl = document.querySelectorAll('saveBtn')
var todaydate = moment().format('LLLL');

$('#currentDay').text(todaydate);



var todos = [];

function init() {
    var storedtodos = JSON.parse(localStorage.getItem('todos'))
};

savebtnEl.on('click', savetodos());


function savetodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
};



//save user input in todos array
//save todos array in localstorage
//display local storage in text area
//