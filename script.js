//create a button variable for the button
//user first selects a city
//then user clicks the button 
//to retrieve weather information
const btn = document.querySelector("#get-forecast");
const card = document.getElementById("card");


//create variable to grab the card

//create an event listener for the button using click
btn.addEventListener("click", (e) => {
    e.preventDefault;
    //create variable to retrieve the select element options
    // let cityList = document.querySelector("#city").options;
    let cityList = document.querySelector("#city");
    //create variable to return the value from the option selection    
    // let cityValues = cityList[cityList.selectedIndex].value;
    
    let cityValues = cityList.value;


    if (cityValues === " ") {

    } else {
        let img = document.createElement("image");
    let title = document.createElement("h1");

    //set variable id
    img.classList.add("weather-icon");
    title.classList.add("title");

    title.textContent = cityValues

    //append variables
    // card.append(img);
    card.append(title);
    }



    
})


