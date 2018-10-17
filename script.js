

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