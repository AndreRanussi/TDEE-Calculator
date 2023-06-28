function calculate() {
  var gender = document.querySelector("#gender");
  var genderValue = gender.value;
  var heightValue = document.querySelector("#height").value;
  var weightValue = document.querySelector("#weight").value;
  var activeLevel = document.querySelector("#activeLevel");
  var activeLevelValue = activeLevel.value;
  
  var maleResult = (370+(21.6*(((0.407*weightValue)+(0.267*heightValue))-19.2)))*activeLevelValue;
  var femaleResult = (370+(21.6*(((0.252*weightValue)+(0.473*heightValue))-48.3)))*activeLevelValue;
  
  if (genderValue === "Male") {
    return Math.round(maleResult);
  } else {
    return Math.round(femaleResult);
  }
    
  }

var submit = document.querySelector("#result").innerText = calculate();
var button = document.querySelector("#btn");
  
button.onclick = function(){submit};