//create a button variable for the button
//user first selects a city
//then user clicks the button 
//to retrieve weather information
const btn = document.querySelector("#get-forecast");
//variable for the weather card
const card = document.getElementById("card");



//create an event listener for the button using click
btn.addEventListener("click", (e) => {
    e.preventDefault;
    //create variable to retrieve the select element options
    // let cityList = document.querySelector("#city").options;
    let cityList = document.querySelector("#city");
    //create variable to return the value from the option selection    
    // let cityValues = cityList[cityList.selectedIndex].value;

    let cityValues = cityList.value;


    if (cityValues) {


        //create the variables
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


        //create variable for API key
        // const apiKey = "1a51656ca45fdc1bf3f87f73912458d8";

        const apiKey = "50aaa7216a3648d495712656241511";
        
        const base = 









    }




})


