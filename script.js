

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph has changed.";
}

function red() {
    document.getElementById("demo2").style.color='red';
}

function green() {
    document.getElementById("demo2").style.color='green';
}

function blue() {
    document.getElementById("demo2").style.color='blue';
}

function black() {
    document.getElementById("demo2").style.color='black';
}

function summa() {
    document.getElementById("demo3").innerHTML = 5 + 6;
}

function tyhjennys() {
    document.getElementById("demo3").innerHTML = " ";
}

function popUp() {
    window.alert("Hello! u like sum popup???");
}

function kirjoita() {
    document.write("This is <em>document.write</em> property. It will override whole document, if called after the page has loaded. (DON'T DO IT!)");
}

let x, y, z;
x = 5; 
y = 6;
z = x + y; 

document.getElementById("demo4").innerHTML = "The value of z is " + z + ".";

function myFunctionTwo() {
    document.getElementById("demo5").innerHTML = "Oh, hello dear!";
    document.getElementById("demo6").innerHTML = "How are you?";
}

document.getElementById("demo7").innerHTML = "What ";

function nice() {
    document.getElementById("demo8").innerHTML = "a nice day!";
}

function awful() {
    document.getElementById("demo8").innerHTML = "an awful day!";
}

let person = {
    firstName: "Elli",
    lastName: "Vähäkangas",
    age: 26,
    eyeColor: "blue",
}

document.getElementById("ihminen").innerHTML = person.firstName + " is " + person.age + " years old."; 

document.getElementById("ihminen2").innerHTML = person.firstName + " has " + person.eyeColor + " eyes."; 

document.getElementById("ihminen3").innerHTML = person.lastName + " is her lastname."; 

function todaysDate() {
    document.getElementById("date").innerHTML = Date();
}

let someText = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";

document.getElementById("demo9").innerHTML = someText.length;

let callOne = true;

function lifeIsGood() {
    let str = document.getElementById("replace").innerHTML;
    let txt = str.replace("awful", "awesome");
    document.getElementById("replace").innerHTML = txt;
}

function lifeIsBad() {
    let str = document.getElementById("replace").innerHTML;
    let txt = str.replace("awesome", "awful");
    document.getElementById("replace").innerHTML = txt;
}

function call() {
    if (callOne) lifeIsGood();
    else lifeIsBad();
    callOne = !callOne; 
}

let fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

function aakkos() {
    fruits.sort();
    let text, fLen, i;
    fLen = fruits.length;

    text = "<ul>"
    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("list").innerHTML = text;
}

document.getElementById("list").innerHTML = text;



document.getElementById("tostring").innerHTML = fruits.join(" &Otimes; ");


let coffee = ["Coffee"];
document.getElementById("coffee").innerHTML = coffee;


function sugar() {
    coffee.push("Sugar");
    document.getElementById("coffee").innerHTML = coffee;
}

function milk() {
    coffee.push("Milk");
    document.getElementById("coffee").innerHTML = coffee;
}

let points = [40, 100, 1, 3, 5, 25, 10, 17, 89, 76];
document.getElementById("randomarray").innerHTML = points; 

function random() {
    points.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("randomarray").innerHTML = points;
}