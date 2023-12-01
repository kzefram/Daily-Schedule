// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const agenda = document.getElementById("agenda");
const agendaCont = document.querySelector("agenda-cont");
const events = document.querySelector("time-block");
const saveBtn = document.querySelector("saveBtn");


    
$(function () {
  
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  $(".saveBtn").on("click", function() {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, description);
  })

  for (var i = 8; i<19; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
  }

  var currenthour = dayjs().hour()
  console.log(currenthour)
  $(".time-block").each(function() {
    var time = parseInt($(this).attr("id").split("-")[1])
    if (time<currenthour){
      $(this).addClass("past")
    } else if (time === currenthour){
      $(this).removeClass("past")
      $(this).addClass("present")
    } else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    }

  })

      //var saveBtn = document.getElementById("saveBtn");
      // saveBtn.addEventListener("click", e => {
      //   description.onsubmit = e => {
      //     e.preventDefault(description);
      //   }
      //   var description = document.getElementById("description");
      //   var events = description.value;
      //   localStorage.setItem("events", events);
      // });
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
      // var events = localStorage.getItem("events")
      // document.getElementById("description").value = events;
    //
    // TODO: Add code to display the current date in the header of the page.
   var date = new Date();
    var currentDate = date.toLocaleDateString();
      console.log(currentDate);
      document.getElementById("currentDay").innerHTML = currentDate; 
      
    });

    