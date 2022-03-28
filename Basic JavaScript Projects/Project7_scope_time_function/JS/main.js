var x = 10;
function Add_numbers_1() {           
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
    }
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {                //Defining a function and naming it
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Time_function() {                //Defining a function and naming it
    var Time = new Date().getHours();     //Defining a variable and giving it
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;   //Putting the value
}