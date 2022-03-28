function full_sentence() {                                                   //Defining a function and naming it
    var part_1 = "I have ";                                                  //Defining a variable and giving it
    var part_2 = "made this ";                                               //Defining a variable and giving it
    var part_3 = "into a complete ";                                         //Defining a variable and giving it
    var part_4 = "sentence.";                                                //Defining a variable and giving it
    var whole_sentence = part_1.concat(part_2, part_3, part_4);              //Defining a variable and giving it
    document.getElementById("Concatenate").innerHTML = whole_sentence;       //Putting the value
}

function slice_Method() {                                                    //Defining a function and naming it
    var Sentence = "All work and no play makes Johnny a dull boy.";          //Defining a variable and giving it
    var Section = Sentence.slice(27,33);                                     //Defining a variable and giving it 
    document.getElementById("Slice").innerHTML = Section;                    //Putting the value
}

function string_Method() {                                                   //Defining a function and naming it
    var x =182;                                                              //Defining a variable and giving it
    document.getElementById("Numbers_to_string").innerHTML = x.toString();   //Putting the value
}

function Precision_Method() {                                                //Defining a function and naming it
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);      //Putting the value
}