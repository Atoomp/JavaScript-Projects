function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function car_pics() {
    var Car_Picture = [];
    Car_Picture[0] = "Toyota";
    Car_Picture[1] = "BMW";
    Car_Picture[2] = "Ford";
    Car_Picture[3] = "Hond";
    document.getElementById("Car").innerHTML = "In this picture, the car is " +
        Car_Picture[2] + ".";
}

function constant_Function() {
    var carName = "Corvette";
    document.getElementById("Example").innerHTML = carName;
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", barnd:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
  let X = 33;
  document.write("<br>" + X);
}
document.write("<br>" +X);

let car = {
    make: "BMW ",
    model: "M4 ",
    year: "2016",
    color:"babyblue",
    description : function() {
      return "The car is a " + this.year + this.color +this.make + this.model;
    }
};
document.getElementById("Car").innerHTML = car.description();