//create a button variable for the button
//user first selects a city
//then user clicks the button 
//to retrieve weather information
const btn = document.getElementById("get-forecast");

const cityList = document.querySelector("#city");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(cityList.value); 
})














//set up varible to grab the select option
//going to use a selectorqueryAll to return a nodelist
//   let selectedItem = [...document.querySelectorAll(".city")];
//     console.log(selectedItem);


//  let selectedItem = document.querySelector('select[name="city"]').value;
//  console.log(selectedItem);

// let selectedItem;

// function getValue() {
// let
//     if (selectedItem === undefined) {
//         return `Please select a an option from the select menu`
//     } else {
//         return 
//     }

    //return the values of the selected items using javascript and querySelector
//}


//  function getOptionValue() {
//     let array = [];
//      for (let i = 0; i<selectedItem; i++) {
//     return array.push(selectedItem.text);
// //.value only works with input
//     }
    
//  }
// getOptionValue();

// let options = " "

// for(selecteditems in selectedItem) {
//     options = options + selectedItem;
// }

// console.log(options)

// btn.addEventListener("click", getOptionValue);

// let optionValue = selectedItem.options[selectedItem.selectedIndex].text;
// console.log(optionValue);


//  let array = [];

//  function getSelectedOptions() {
//     for(let i = 0; i < selectedItem.length; i++) {
//         console.log(array.push(selectedItem.options[selectedItem.selectedIndex].value));
//     }
//  }

//January 4th, what I did was use querySelectorAll()
//with a spread operator to show it in key value pairs 
//I then called the button variable with an event listener
//of click and event 
//to display the select element and it's options



 //to do:

//i.e if no city is selected, then value is not shown
//i.e if city is selected, then display it
//i need to show how each option individually selected 

//try to do selectItems.foreach {}




