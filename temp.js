var tempInput = document.getElementById("tempInput");
var radioCelsius = document.getElementById("radioCelsius");
var radioFahrenheit = document.getElementById("radioFahrenheit");
var returnedTemp = document.getElementById("returnedTemp");

function toCelsius(tempInput2){
	var tempInput = parseInt(tempInput2.value);
	var celsius = (tempInput - 32) / 1.8;
	returnedTemp.innerHTML = (celsius.toFixed(2));
	celsius > 32 ? returnedTemp.style.color = "#bd0000"
      	: (celsius < 0 ? returnedTemp.style.color = "#a9c4eb"
         : returnedTemp.style.color = "#67ab9f");
}

function toFahrenheit (tempInput2){
	var tempInput = parseInt(tempInput2.value);
	var fahrenheit = (tempInput * 1.8) + 32;
	returnedTemp.innerHTML = (fahrenheit.toFixed(2));
	fahrenheit > 90 ? returnedTemp.style.color = "#bd0000"
       : (fahrenheit < 32 ? returnedTemp.style.color = "#a9c4eb"
         : returnedTemp.style.color = "#67ab9f");
}

function convertTemp (){
	if (radioCelsius.checked){
		returnedTemp = toCelsius(tempInput);
	}	else if (radioFahrenheit.checked){
		returnedTemp = toFahrenheit(tempInput);
	}	else if (radioCelsius === false && radioFahrenheit === false){
		alert("Select Celsius or Fahrenheit to convert your temperature.");
	}
	console.log("this is the convertTemp function");
}

document.getElementById("convertTemp").addEventListener("click", convertTemp);



