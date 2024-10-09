"use strict"


/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Navpreet
   Date:2024-10-08 

*/



/* Display the time left until New Years Eve*/

document.getElementById("days").textcontent = "dd";
document.getElementById("hrs").textcontent = "hh";
document.getElementById("mins").textcontent = "mm";
document.getElementById("secs").textcontent = "ss";


/*Store the current date and time */
var currentDay = new Date("May, 23, 2018 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();


/* Display date & time */
document.getElementById("dateNow").innerHTML = 
dateStr + "<br/>" + timeStr;