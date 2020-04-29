//Timeblocks are created on HTML using a FlexBox and a textarea tag that allows us to write our to-dos for the day
//Create global function so JS runs after html is loaded
// localStorage.clear();
$(document).ready(function(){

    //Before the Planner. Target currentDay "p" using jQuery and add current day using moment.js
    var currentDay = moment().format("dddd Do MMMM YYYY");

    //Current day is display at the top of the page at loading browser
    $("#currentDay").text(currentDay)

    //Create global Scope variables
    var hoursMilitary = moment().format("H");
    var tableRows = $(".row");
    var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var textAreaEl = $("textarea");

    //Connect time colums to moment.js so we can color code our tasks columns according to past, present, future
    //Create a for loop so all hoursArray are compared against the variable hoursMilitary

    for (var i = 0; i < hoursArray.length; i++) {
        //Change the hoursMilitary string into a number ans save it in hoursMilitaryNumType for conditional to be valid.
        var hoursMilitaryNumType = parseInt(hoursMilitary);
        var AllHoursHTML = hoursArray[i];
        var RowsLoop = tableRows[i];
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

    //On page load we retrieve most recent savings
    //when I refresh the page the task from local storage are retrieved and displayed
    var lastTasks = JSON.parse(localStorage.getItem("Tasks"));
    
    //Condition so if localstorage is empty the program still runs
    if (lastTasks !== null) {
    $(textAreaEl[0]).text(lastTasks.NineAM);
    $(textAreaEl[1]).text(lastTasks.TenAM);
    $(textAreaEl[2]).text(lastTasks.ElevenAM);
    $(textAreaEl[3]).text(lastTasks.TwelvePM);
    $(textAreaEl[4]).text(lastTasks.OnePM);
    $(textAreaEl[5]).text(lastTasks.TwoPM);
    $(textAreaEl[6]).text(lastTasks.ThreePM);
    $(textAreaEl[7]).text(lastTasks.FourPM);
    $(textAreaEl[8]).text(lastTasks.FivePM);
    }
    //when I click the save button, the task is stored on localStorage
        //Create function for save button
        function saveTask(event) {
            event.preventDefault();
            
            // Create Tasks object when we click save button
            var Tasks = {
                NineAM: textAreaEl[0].value.trim(),
                TenAM: textAreaEl[1].value.trim(),
                ElevenAM: textAreaEl[2].value.trim(),
                TwelvePM: textAreaEl[3].value.trim(),
                OnePM: textAreaEl[4].value.trim(),
                TwoPM: textAreaEl[5].value.trim(),
                ThreePM: textAreaEl[6].value.trim(),
                FourPM: textAreaEl[7].value.trim(),
                FivePM: textAreaEl[8].value.trim(),
            }
            alert("here");
            //Store the Task object in localStorage
            localStorage.setItem("Tasks", JSON.stringify(Tasks));
                  
        }

    //Call|Execute the function
    $(".saveBtn").on("click", saveTask);

}) // Curlybrackets of readyfunction