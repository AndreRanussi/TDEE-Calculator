
  function calculation(){
    var gender = document.querySelector("#gender");
    var genderValue = gender.value;
    var heightValue = document.querySelector("#height").value;
    var weightValue = document.querySelector("#weight").value;
    var activeLevel = document.querySelector("#activeLevel");
    var activeLevelValue = activeLevel.value;
  
    var maleResult = Math.round((370 + (21.6 * (((0.407 * weightValue) + (0.267 * heightValue)) - 19.2))) * activeLevelValue);
    var femaleResult = Math.round((370 + (21.6 * (((0.252 * weightValue) + (0.473 * heightValue)) - 48.3))) * activeLevelValue);
    if (maleResult <= 0 || femaleResult <= 0 ) {
    return "0 "
  } else if (genderValue === "Male") {
    return maleResult + " ";
  } else {
    return femaleResult + " " ;
  }
}

function result(){
  document.querySelector("#result").innerHTML = calculation();
}
