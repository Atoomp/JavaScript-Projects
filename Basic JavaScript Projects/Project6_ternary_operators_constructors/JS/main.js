function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodeg", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    "Manufactured in " + Erik.Vehicle_Year;
}

function Drive_Function() {
    var Age, Can_drive;
    Age = document.getElementById("Age").value;
    Can_drive = (Age >= 18) ? "You can dirve":"You cannot drive";
    document.getElementById("Driver").innerHTML = Can_drive + " to drive.";
}

let age = 18;
let mesasge;

if (age >= 16) {
    maessage = 'You can drive.';
} else {
    message = 'Your cannot drive.';
}


console.log(message);