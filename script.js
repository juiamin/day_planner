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

if (storedPlans !== null) {
    planTextArr = storedPlans;
  } else {
    
    
    planTextArr = new Array(9);
    planTextArr[4] = "Picnic lunch outside";
  }
  if (test) { console.log("full array of plned text",planTextArr); }
  let $plannerDiv = $('#plannerContainer');
  
  $plannerDiv.empty();

  if (test) { console.log("current time",nowHour12); }


});