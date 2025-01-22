//create a button variable for the button
const btn = document.querySelector("#get-forecast");
//variable for the weather card
const card = document.getElementById("card");

//variable to call the select element id
const cityList = document.querySelector("#city");

//variable to return the select option values
// let cityValues = cityList.value;







// //variable for Api key
// const key = "50aaa7216a3648d495712656241511";
// //variable for Api base    
// const base = 





function getValues() {
    //variable to return the select option values
    let cityValues = cityList.value;
    if (cityValues) {
        //display the weather icon
        let img = document.createElement("image");
        //display the city
        let location = document.createElement("h1");
        //display the temperature
        let temp = document.createElement("p");
        //display feels-like
        let feelsLike = document.createElement("p");
        //display humidity
        let humidity = document.createElement("p");
        //dispaly wind
        let wind = document.createElement("p");

        //set variable IDs
        img.id = "weather-icon";
        location.id = "location";
        temp.id = "main-temperature";
        feelsLike.id = "feels-like"
        humidity.id = "humidity";
        wind.id = "wind";




        //assign value to the variable
        location.textContent = cityValues

        //append variables
        // card.append(img);
        card.append(location);



    }


}



//create an event listener for the button using click
btn.addEventListener("click", getValues);

