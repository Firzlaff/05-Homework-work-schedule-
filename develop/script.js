//Test that the js is linked and working
console.log("app.js loaded");
// document.ready function to ensure HTML loaded first 
$(document).ready(function(){



 //create a moment object of current day and time. 
 let time = moment();
 // convert the moment object to show in string, target the node and update to current day and time.
 $("#currentDay").text(time.format("dddd MMMM Do YYYY"));

//On click save data to local storage to persist. 
$("button").on("click", function(event){
    //value for the value of argument
    var value = $(this).siblings("input").val().trim();
​   // value for key for the argument
    var key = $(this).parent().data("hour");
​   //The setting to local storage of the Key value pair
    localStorage.setItem(key, value);
​
})


$(".item").each(function(){
    ​
        var hour = $(this).data("hour")

        var currentHour = time.hour();
    ​
        var data = localStorage.getItem(hour);
    ​
        console.log(hour, data);
    
        $(this).children("input").val(data)
        ​// -> compare time block againts current time with Moment.js
        ​ //condition for past event update class to have BG of RED
            if(hour < currentHour){
                $(this).addClass("past")
            }
         //condition for present event update class to have BG of Green
   
            if(hour == currentHour){
                $(this).addClass("present")
            }
           //condition for present event update class to have BG of Green
 
            if(hour > currentHour){
                $(this).addClass("future")
            }
        })
        ​
        ​
        ​
        })

//     *text area for time and activity
//         -> collect user information
//         -> form element? which one?
//     *save button
//         -> stores the activity in local storage
//           -> stores *EACH* activity in local storage
//           -> how can I make sure iI does'nt overwrite what's already in there?

//         -> store the time in local storage --- JSONStringify  
//             * save needs to go to the correct hour/slot

// display time blocks back to fields --- JSONParse



// ON REFRESH 
// -> time blocks should populate with local storage data
//     * retrieve data from local storage
//     * differentiate times
//     * display local storage data on screen

//     time | activity | save button
//     ->When we hit save, 
//       storing the time and activity in local storage

//       STARTING WITH GETTING THE CODE TO SAVE FOR ONE FIELD FIRST.

//       treat local storage like its its own JS Object 


//End of the document ready jQuery function
