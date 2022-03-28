<!DOCTYPE html>
<html>
    <p> id="Concatenate"></p>
    <p> id = "Concatenate" onclick = "myFunction() ">Click Here!</p>
Function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
</html>