//updating clock on top of page

setInterval(function () {
  time = moment().local().format("dddd, MMM D, YYYY, h:mm:ssA");
  $("#currentTime").text(time);
}, 1000);
console.log("hello");

$(document).ready(function () {
  //save button event
  $(".saveBtn").on("click", function () {
    var inputVal = $(this).siblings(".description").val();
    var timeSave = $(this).parent().attr("id");
    //saves to locaL storage
    localStorage.setItem(timeSave, inputVal);
  });
  function timeBlockColor() {
    var currentHour = moment().hour();

    //loop hour slots
    $(".time-block").each(function () {
      var thisHour = parseInt($(this).attr("id"));

      //if/else statements to check hour and assign background color
      if (thisHour < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (thisHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  $("#9 .description").val(localStorage.getItem("hourNine"));
  $("#10 .description").val(localStorage.getItem("hourTen"));
  $("#11 .description").val(localStorage.getItem("hourEleven"));
  $("#12 .description").val(localStorage.getItem("hourTweleve"));
  $("#1 .description").val(localStorage.getItem("hourThirtee "));
  $("#2 .description").val(localStorage.getItem("hourFourteen"));
  $("#3 .description").val(localStorage.getItem("hourFifteen"));
  $("#4 .description").val(localStorage.getItem("hourSixteen"));
  $("#5 .description").val(localStorage.getItem("hourSeventeen"));

  timeBlockColor();
});
