//create a button variable for the button
//user first selects a city
//then user clicks the button 
//to retrieve weather information
const btn = document.querySelector("#get-forecast");


// let option = cityList.selectedIndex;
// console.log(option);



// console.log(cityValues)


function displayValue() {

}

//create an event listener for the button using click
btn.addEventListener("click", (e) => {
    e.preventDefault;
    let cityList = document.querySelector("#city").options;
    //return the which value is being is selected and display it.     
    let cityValues = cityList[cityList.selectedIndex].value;
    if(cityValues === " ") {
      alert(`Please select a correct option from the drop down`);
    } else {
        alert(`You selected: ${cityValues}`);
    }
})


