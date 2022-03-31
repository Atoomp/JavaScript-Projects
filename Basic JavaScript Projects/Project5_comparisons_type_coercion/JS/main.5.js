document.write(typeof "Word");
document.write(typeof 3);
document.write(2E310);
document.write(-2E310);
document.write(10 == 10);
document.write(3 == 11);
X = 10;
Y = 10;
document.write(X === Y);
X = 82;
Y = "82";
document.write(X == Y);
A = "Magnus";
B = "Magnus";
document.write(A == B);
document.write(6 > 2 && 9 > 3);
document.write(2 > 6 || 9> 3);

function not_Function() {
    document.getElementById("Not").innerHTML = ! (5 > 10);
}