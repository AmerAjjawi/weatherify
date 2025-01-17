//create a button variable for the button
//user first selects a city
//then user clicks the button 
//to retrieve weather information
let btn = document.querySelector("#get-forecast");
// console.log(btn);

//create a variable cityList 
//return the select element and its options
let cityList = document.querySelector("#city");
console.log(cityList);

//create an initialized variable
//this will be called in the event listener
let selectedOption;

//create an event listener for the button using "change"
btn.addEventListener("change", (e) => {
    //prevent the default action of button
   e.preventDefault();
     [].filter
    .call(cityList.options, option => option.selected)
    .map(option =)
})








// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     for (citylists of cityList) {
//       console.log(citylists);
//     }
// })


