
//Declare gloabl variables
//create a button variable for the button
const btn = document.querySelector("#get-forecast");
//variable for the weather card
const card = document.getElementById("card");
//variable for response object
let data;




// //async function to fetch a response  
async function getData() {
    //variable to retrieve options from select options
    const cityList = document.querySelector("#city").value;
    //variable to pull the key
    const key = "50aaa7216a3648d495712656241511";
    // variable for the url 
    const url = `https://api.weatherapi.com/v1/current.json?Key=${key}&q=${cityList}`
    

      //calling showvalues
      
    //try block to test the response
    try {
        
        const response = await fetch(url);
        console.log(response);

        //if response is not okay or 200
        if (!response.ok) {
            //throw a new error
            throw new Error(`response came back with ${response.status} status`)
        }
        //if it works then return the data in .json
        //add an await in front of the response to parse the stream data to the body
        data = await response.json();
        //calling the function show values
        showValues();
     
        
    }
    //catch the error
    catch (error) {
        console.log(error);
    }
  
}



function showValues() {

             //display the weather icon
        let img = document.createElement("image");
        //display the city
        let city = document.createElement("h1");
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
        city.id = "location";
        temp.id = "main-temperature";
        feelsLike.id = "feels-like"
        humidity.id = "humidity";
        wind.id = "wind";

          
         
      
        city.textContent = data.location.name;

        card.append(city);
    
        }




//create an event listener for the button using click
btn.addEventListener("click", getData);


