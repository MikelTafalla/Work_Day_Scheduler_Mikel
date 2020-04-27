//Before the Planner. Target currentDay "p" using jQuery and add current day using moment.js
var currentDay = moment().format("dddd Do MMMM YYYY");
$("#currentDay").text(currentDay)