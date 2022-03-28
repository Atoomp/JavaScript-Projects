function my_Dictionary() {                //Defining a function and naming it
    var Animal = {                        //Defining a variable and giving it
        Species:"Dog",                    
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}