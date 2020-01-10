$(document).ready(function() {
  
  
  var test = false;

  const now = moment().format('MMMM Do YYYY');

  
  var nowHour24 = moment().format('H');
  var nowHour12 = moment().format('h');

  
  if (test) {
    nowHour24 = 13;
    nowHour12 = 1;
  }

let $dateHeading = $('#navbar-subtitle');
$dateHeading.text(now);


const saveIcon = "./images/diskette.png"; 


let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

if (test) { console.log(storedPlans); }
});