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

  for (let hour = 9; hour <= 17; hour++) {
    
    let index = hour - 9;
    

    let $rowDiv = $('<div>');
    $rowDiv.addClass('row');
    $rowDiv.addClass('plannerRow');
    $rowDiv.attr('hour-index',hour);
  
    
    let $col2TimeDiv = $('<div>');
    $col2TimeDiv.addClass('col-md-2');
  
    
    const $timeBoxSpn = $('<span>');
    
    $timeBoxSpn.attr('class','timeBox');
    
    
    let displayHour = 0;
    let ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }
    
    
    $timeBoxSpn.text(`${displayHour} ${ampm}`);

    
    $rowDiv.append($col2TimeDiv);
    $col2TimeDiv.append($timeBoxSpn);
    

    
    
    let $dailyPlanSpn = $('<input>');

    $dailyPlanSpn.attr('id',`input-${index}`);
    $dailyPlanSpn.attr('hour-index',index);
    $dailyPlanSpn.attr('type','text');
    $dailyPlanSpn.attr('class','dailyPlan');

     
    $dailyPlanSpn.val( planTextArr[index] );
    
    
    let $col9IptDiv = $('<div>');
    $col9IptDiv.addClass('col-md-9');

    
    $rowDiv.append($col9IptDiv);
    $col9IptDiv.append($dailyPlanSpn);
    

    
    let $col1SaveDiv = $('<div>');
    $col1SaveDiv.addClass('col-md-1');

    let $saveBtn = $('<i>');
    $saveBtn.attr('id',`saveid-${index}`);
    $saveBtn.attr('save-id',index);
    $saveBtn.attr('class',"far fa-save saveIcon");
    
    
    $rowDiv.append($col1SaveDiv);
    $col1SaveDiv.append($saveBtn);
    
    updateRowColor($rowDiv, hour);
    
  
    $plannerDiv.append($rowDiv);
  };
  function updateRowColor ($hourRow,hour) { 

    if (test) { console.log("rowColor ",nowHour24, hour); }

    if ( hour < nowHour24) {
      
      if (test) { console.log("lessThan"); }
      $hourRow.css("background-color","lightgrey")
    } else if ( hour > nowHour24) {
      if (test) { console.log("greaterthan"); }
      $hourRow.css("background-color","lightgreen")
    } else {
      if (test) { console.log("eqaul"); }
      $hourRow.css("background-color","tomato")
    }
  };
  $(document).on('click','i',function(event){
    event.preventDefault();
  })
});