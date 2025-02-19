
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
        //promise to get a fetch a response
        const response = await fetch(url);
        //display the promise
        console.log(response);

        //if response is not okay or 200
        if (!response.ok) {
            //throw a new error
            throw new Error(`response came back with ${response.status} status`)
        }
        //retrieve the data from the headers
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
        let img = document.createElement("img");
        //display the city
        let city = document.createElement("h1");
        //display the temperature
        let temp = document.createElement("p");
        //display feels-like
        let feelsLike = document.createElement("p");
        //display humidity
        let humidity = document.createElement("p");
        //display wind
        let wind = document.createElement("p");

        //set variable classes
        img.classList.add("weather-icon");
        city.classList.add("location");
        temp.classList.add("main-temperature");
        feelsLike.classList.add("feels-like");
        humidity.classList.add("humidity");
        wind.classList.add("wind");

          console.log(data);
        
        //displaying the image
        img.src = data.current.condition.icon;
        
         
        // //assign the object's location name to the city variable
        city.textContent = data.location.name;

        //assign the object's current temperature
        temp.textContent = `The current Temperature is: ${data.current.temp_c}`;



        //assign the object's feelsLike in Celisus to feelsLike variable
        feelsLike.textContent = `Currently, it feels like: ${data.current.feelslike_c}`

        //assign the object's windchill to 
        wind.textContent = `With the windchill, it is: ${data.current.windchill_c}`


        
        document.body.append(img);
        card.append(city);

        
        card.append(temp);
        card.append(feelsLike);
        card.append(wind);
       


    
        }




//create an event listener for the button using click
btn.addEventListener("click", getData);
