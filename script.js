//create a button variable for the button
//user first selects a city
//then user clicks the button 
//to retrieve weather information
const btn = document.querySelector("#get-forecast");

let cityList = document.querySelector("#city").options;
console.log(cityList);
// let option = cityList.selectedIndex;
// console.log(option);





//create an event listener for the button using "change"
btn.addEventListener("click", (e) => {
    e.preventDefault;


    let cityValues = cityList[cityList.selectedIndex].value;
    console.log(cityValues);

})
   
//    let cityList = selectBox.options[selectBox.selectedIndex];
//    console.log(cityList);
//    let option = cityList.options[cityList.selectedIndex];
//    console.log(option);

//    let value = option.value;

// let option = cityList.value;
// console.log(option);


    


