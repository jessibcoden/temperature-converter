///  Declare variables attached to inputs   ///
var tempInput = document.getElementById("tempInput");
var radioCelsius = document.getElementById("radioCelsius");
var radioFahrenheit = document.getElementById("radioFahrenheit");
var returnedTemp = document.getElementById("returnedTemp");

///   Determine which function to execute: toFahrenheit or toCelsius   ///
function convertTemp (){
	if (radioCelsius.checked){  // if Celsius is selected...
		returnedTemp = toCelsius(tempInput); // execute toCelsius function
	}	else if (radioFahrenheit.checked){ // if Fahrenheit is selected...
		returnedTemp = toFahrenheit(tempInput); // execute toFahrenheit function
	}	else if (radioCelsius.checked === false && radioFahrenheit.checked === false){ // if no radio is selected...
		alert("Select Celsius or Fahrenheit to convert your temperature."); // display alert
	}
}

document.getElementById("convertTemp").addEventListener("click", convertTemp); // event to trigger convertTemp function when submit button is clicked

///   Event to trigger convertTemp on Enter   ///
document.getElementById("mainContainer").addEventListener("keydown", checkIfEnterPressed);
function checkIfEnterPressed (e) {
	if (e.key === "Enter"){
		convertTemp();
	}
}; 

///  Convert Input to Celsius  ///
function toCelsius(tempInput2){
	var tempInput = parseInt(tempInput2.value); //convert input from a string to numerical value 
	var celsius = (tempInput - 32) / 1.8; // run conversion formula on input
	returnedTemp.innerHTML = Math.round(celsius) + "&#176; C"; // return with 0 decimal places and degree symbol
	celsius > 32 ? returnedTemp.style.color = "#bd0000" // return temp greater than 32 in red
      	: (celsius < 0 ? returnedTemp.style.color = "#a9c4eb" // return temp less than 0 in blue
         : returnedTemp.style.color = "#67ab9f"); // return all other temp in green
}

///   Convert Input to Fahrenheit   ///
function toFahrenheit (tempInput2){
	var tempInput = parseInt(tempInput2.value);
	var fahrenheit = (tempInput * 1.8) + 32;
	returnedTemp.innerHTML = Math.round(fahrenheit) + "&#176; F";
	fahrenheit > 90 ? returnedTemp.style.color = "#bd0000"
       : (fahrenheit < 32 ? returnedTemp.style.color = "#a9c4eb"
         : returnedTemp.style.color = "#67ab9f");
}

///   Event to clear all inputs with Reset button   ///
document.getElementById("resetButton").addEventListener("click", function (){
	window.location.reload()
}); // 




