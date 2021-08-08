setInterval(function () {
  time = moment().local().format("dddd, MMM D, YYYY, h:mm:ssA");
  $("#currentTime").text(time);
}, 1000);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });
  function timeBlockColor() {
    var hour = moment().hours();
    $(".time-block").each(function () {
      var slotHour = parseInt($(this).attr("id"));
      if (slotHour < hour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (slotHour === hour) {
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

  timeBlockColor();

  $("#hourNine .description").val(localStorage.getItem("hourNine"));
  $("#hourTen .description").val(localStorage.getItem("hourTen"));
  $("#hourEleven .description").val(localStorage.getItem("hourEleven"));
  $("#hourTwelve .description").val(localStorage.getItem("hourTweleve"));
  $("#hourThirteen .description").val(localStorage.getItem("hourThirtee "));
  $("#hourFourteen .description").val(localStorage.getItem("hourFourteen"));
  $("#hourFifteen .description").val(localStorage.getItem("hourFifteen"));
  $("#hourSixteen .description").val(localStorage.getItem("hourSixteen"));
  $("#hourSeventeen .description").val(localStorage.getItem("hourSeventeen"));
});
