//create a button variable for the button
//user first selects a city
//then user clicks the button 
//to retrieve weather information
let btn = document.getElementById("get-forecast");





//set up varible to grab the select option
//going to use a selectorqueryAll to return a nodelist
let selectedItem = [...document.querySelectorAll(".city")];

//let cityOption;
//use case: 
//return the nodelist of options

//1) create an event listner
 btn.addEventListener("click", (event) => {
//   
    console.log(selectedItem);
//     //use for...of loop to loop in sequence of iterable nodelist
     for (selectedItems of selectedItem) {
        console.log(selectedItems);
        
       return selectedItems;
     }
    
 })


//January 4th, what I did was use querySelectorAll()
//with a spread operator to show it in key value pairs 
//I then called the button variable with an event listener
//of click and event 
//to display the select element and it's options


//use array form
//use .foreach





 //to do:
//figure out how to loop through them
//figure out how to display them
//figure out the conditionals
//i.e if no city is selected, then value is not shown
//i.e if city is selected, then display it
//i need to show how each option individually selected 




