//create a button variable for the button
//user first selects a city
//then user clicks the button 
//to retrieve weather information
const btn = document.getElementById("get-forecast");

const cityList = document.querySelector("#city");

let selectedOption;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    for (citylists of cityList) {
      console.log(citylists)
    }
})


