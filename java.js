//create a local storage function to put in daily planner
//use moment if statement to determine if time has already been passed
var timeblockEl = document.querySelector('timeblock')
var savebtnEl = document.querySelector('saveBtn')
var todaydate = moment().format('LLLL');
var container = document.getElementsByClassName('container')

$('#currentDay').text(todaydate);



// savebtnEl.on('click', function (event) {
//     event.preventDefault();
  
//     var todo = document.querySelector('#nine').value;
  
//       localStorage.setItem('email', todo)
//       console.log(todo)
      
//   });
  


//save user input in todos array
//save todos array in localstorage
//display local storage in text area
//



//determine current time using moment
//convert time into value
//parse timeblock into value
//if current time < timeblock value change color    
    //use set attribute class for color changer
//if curent time = timeblock value change color
//else leave as is
//

var text1 = document.getElementById('text1').textContent;
var text2 = document.getElementById('text2').textContent;
var text3 = document.getElementById('text3').textContent;
var text4 = document.getElementById('text4').textContent;
var text5 = document.getElementById('text5').textContent;
var text6 = document.getElementById('text6').textContent;
var text7 = document.getElementById('text7').textContent;
var text8 = document.getElementById('text8').textContent;
var text9 = document.getElementById('text9').textContent;

var nineAM = document.getElementById('hour-9');
var tenAM = document.getElementById('hour-10');
var elevenAM = document.getElementById('hour-11');
var twelveAM = document.getElementById('hour-12');
var onePM = document.getElementById('hour-13');
var twoPM = document.getElementById('hour-14');
var threePM = document.getElementById('hour-15');
var fourPM = document.getElementById('hour-16');
var fivePM = document.getElementById('hour-17');

console.log(text7);

var timehr = moment().format('H');
console.log(timehr);
console.log(text1);
console.log(nineAM);


//using a for loop here with variable above instead as two arrays to optimize

function colorchanger() {
    if (timehr > text1) {
        nineAM.setAttribute('class', 'past row timeblock')
    } 
    if (timehr > text2) {
        tenAM.setAttribute('class', 'past row timeblock')
    }
    if (timehr > text3) {
        elevenAM.setAttribute('class', 'past row timeblock')
    }
    if (timehr > text4) {
        twelveAM.setAttribute('class', 'past row timeblock')
    }
    if (timehr > text5) {
        onePM.setAttribute('class', 'past row timeblock')
    }
    if (timehr > text6) {
        twoPM.setAttribute('class', 'past row timeblock')
    }
    if (timehr > text7) {
        threePM.setAttribute('class', 'past row timeblock')
    }
    if (timehr > text8) {
        fourPM.setAttribute('class', 'past row timeblock')
    }
    if (timehr > text9) {
        fivePM.setAttribute('class', 'past row timeblock')
    }
};

function colorchanger1() {
    if (timehr == text1) {
        nineAM.setAttribute('class', 'present row timeblock')
    }
    if (timehr == text2) {
        tenAM.setAttribute('class', 'present row timeblock')
    }
    if (timehr == text3) {
        elevenAM.setAttribute('class', 'present row timeblock')
    }
    if (timehr == text4) {
        twelveAM.setAttribute('class', 'present row timeblock')
    }
    if (timehr == text5) {
        onePM.setAttribute('class', 'present row timeblock')
    }
    if (timehr == text6) {
        twoPM.setAttribute('class', 'present row timeblock')
    }
    if (timehr == text7) {
        threePM.setAttribute('class', 'present row timeblock')
    }
    if (timehr == text8) {
        fourPM.setAttribute('class', 'present row timeblock')
    }
    if (timehr == text9) {
        fivePM.setAttribute('class', 'present row timeblock')
    }
};


colorchanger1();
colorchanger();
