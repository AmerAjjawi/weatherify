
//Declare gloabl variables
//create a button variable for the button
const btn = document.querySelector("#get-forecast");
//variable for the weather card
const card = document.getElementById("card");
//variable to call the select element id
const cityList = document.querySelector("#city");


//async function to fetch a response  
async function getData() {
    //try block to test the response
    try {
        let cityValues = cityList.value;
        console.log(cityValues);
        //api key
        const key = "50aaa7216a3648d495712656241511";
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?Key=${key}&q=${cityValues}`);
        //console log response
        console.log(response)

        //if response is not okay or 200
        if (!response.ok) {
            //throw a new error
            throw new Error(`response came back with ${response.status} status`)
        }
        //if it works then return the data in .json
        return response.json();
    }
    //catch the error
    catch {
        console.log(error);
    }
}


// function getValues() {

//     //variable to return the select option values
//     // let cityValues = cityList.value;
//     if (cityValues) {
//         //display the weather icon
//         let img = document.createElement("image");
//         //display the city
//         let location = document.createElement("h1");
//         //display the temperature
//         let temp = document.createElement("p");
//         //display feels-like
//         let feelsLike = document.createElement("p");
//         //display humidity
//         let humidity = document.createElement("p");
//         //dispaly wind
//         let wind = document.createElement("p");

//         //set variable IDs
//         img.id = "weather-icon";
//         location.id = "location";
//         temp.id = "main-temperature";
//         feelsLike.id = "feels-like"
//         humidity.id = "humidity";
//         wind.id = "wind";




//         //assign value to the variable
//         location.textContent = cityValues

//         //append variables
//         // card.append(img);
//         card.append(location);



//     }


// }



//create an event listener for the button using click
btn.addEventListener("click", getData);

