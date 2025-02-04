
//Declare gloabl variables
//create a button variable for the button
const btn = document.querySelector("#get-forecast");
//variable for the weather card
const card = document.getElementById("card");
//variable to call the select element id





// //async function to fetch a response  
async function getData() {
    //try block to test the response
    try {
        
        const cityList = document.querySelector("#city").value;
        console.log(cityList);
        
        const key = "50aaa7216a3648d495712656241511";
        
        const url = `https://api.weatherapi.com/v1/current.json?Key=${key}&q=${cityList}`
        console.log(url);
        
       
        const response = await fetch(url);
        //console log response
        console.log(response)

        //if response is not okay or 200
        if (!response.ok) {
            //throw a new error
            throw new Error(`response came back with ${response.status} status`)
        }
        //if it works then return the data in .json
        const data = await response.json();
        console.log(data);
    }
    //catch the error
    catch (error) {
        console.log(error);
    }
}


function getValues() {

    //variable to return the select option values
  
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




        // //assign value to the variable
        // location.textContent = cityValues

        // //append variables
        // // card.append(img);
        // card.append(location);



    }




//create an event listener for the button using click
btn.addEventListener("click", getData);

