//Before the Planner. Target currentDay "p" using jQuery and add current day using moment.js
var currentDay = moment().format("dddd Do MMMM YYYY");
//Current day is display at the top of the page at loading browser
$("#currentDay").text(currentDay)

//Create global Scope variables
var hoursMilitary = moment().format("H");
var tableRows = $(".row");
console.log(tableRows);
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//Create global function so JS runs after html is loaded
$(document).ready(function(){
    //Timeblocks are created on HTML using a FlexBox and a textarea tag that allows us to write our to-dos for the day


    
    //Connect time colums to moment.js so we can color code our tasks columns according to past, present, future
    //Create a for loop so all hoursArray are compared against the variable hoursMilitary

    for (var i = 0; i < hoursArray.length; i++) {
        //Change the hoursMilitary string into a number ans save it in hoursMilitaryNumType for conditional to be valid.
        var hoursMilitaryNumType = parseInt(hoursMilitary);
        var AllHoursHTML = hoursArray[i];
        console.log(AllHoursHTML);
        var RowsLoop = tableRows[i];
        console.log(RowsLoop);
        if (AllHoursHTML === hoursMilitaryNumType) {
            $(RowsLoop).addClass("present");

        }
        if (AllHoursHTML < hoursMilitary) {
            $(RowsLoop).addClass("past");

        }
        if (AllHoursHTML > hoursMilitary) {
            $(RowsLoop).addClass("future");


        }
    }
    //when I click the save button, the task is stored on localStorage

    //when I refresh the page the task from local storage are retrieve and displayed

    //At the end of the day I can click a button to clear the local storage for the next day




}) // Curlybrackets of readyfunction