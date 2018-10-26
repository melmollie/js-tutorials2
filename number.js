function checkAnswer() {
    let answer, result;
    answer = Number(document.getElementById("answer").value);
    if (answer == 11) {
        result = "That's right!"; 
        document.getElementById("result").style.color='green';
    } else if (isNaN(answer)){
        result = "That's not even a number!";
        document.getElementById("result").style.color='red';
    } else {
        result = "Try again!";
        document.getElementById("result").style.color='red';
     }
     document.getElementById("result").innerHTML = result;
}