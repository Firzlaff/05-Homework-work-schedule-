//Test that the js is linked and working
console.log("app.js loaded");
// document.ready function to ensure HTML loaded first 
$(document).ready(function(){


// create var for current hour
let currentHour = moment().hour(Number);
console.log(currentHour);
 //create a moment object of current day and time. 
 const m = moment();
 // convert the moment object to show in string, target the node and update to current day and time.
 $("#currentDay").text(m.toString());
// HTML Nodes 

//  ->timeblocks have three pieces
     
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

// color code the activity
// -> get the current time
// -> compare time block againts current time ---- Moment.js
//     *condition for past event update class to have BG of RED
//     *condition for present event update class to have BG of Green
//     *condition for future event update class to have BG of Light Grey

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
})