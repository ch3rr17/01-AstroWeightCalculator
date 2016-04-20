//Function to calculate your weight in another planet
function weightCalculate(){

var yourWeight = document.getElementById("weight").value; 
var planet = document.getElementById("planet"); 
var pValue = planet.options[planet.selectedIndex].value; 
var pName = planet.options[planet.selectedIndex].text;


//Calculation 
var result = (yourWeight * pValue).toFixed(2);

//Output result here
document.getElementById('result').innerHTML = "If you were on "  + pName + "," + " you would weigh " + result + "!";

}
 
