//create a button variable for the button
//user first selects a city
//then user clicks the button 
//to retrieve weather information
let btn = document.getElementById("get-forecast");


//create a select variable
//the purpose of this select variable
//is to hold the values of the options
//that you can loop through 
//and retrieve values 



//to do: 
//figure out how to set up the select-option values
//either queryselectorall, queryselector, id
//figure out how to store them
//figure out how to loop through them
//figure out how to display them
//figure out the conditionals
//i.e if no city is selected, then value is not shown
//i.e if city is selected, then display it


//set up varible to grab the select option
//going to use a selectorqueryAll to create a nodelist
let selectedItem = document.querySelectorAll(".city");
console.log(selectedItem);