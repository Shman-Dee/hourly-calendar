setInterval(function () {
  time = moment().local().format("dddd, MMM D, YYYY, h:mm:ssA");
  $("#currentTime").text(time);
}, 1000);
